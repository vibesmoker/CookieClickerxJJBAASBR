import sys,bpy,math,os,json,traceback
from mathutils import Vector
sys.path.insert(0,os.environ.get('JJ_ADDON_PARENT',os.path.dirname(os.path.abspath(__file__))))  # folder that contains cc2_xfbin_blender/
import cc2_xfbin_blender as A
A.register()
from cc2_xfbin_blender.blender.importer import XfbinImporter
args=json.loads(sys.argv[sys.argv.index('--')+1])
S=args.get('src',os.environ.get('JJ_SPC','asbr-extract/data/spc/'))
class Op:
    def report(self,*a):print('REPORT',a)
kw=dict(use_full_material_names=False,merge_verts=False,import_textures=True,skip_lod_tex=True,import_modelhit=False)
bpy.ops.wm.read_factory_settings(use_empty=True)
for f in args['files']:
    XfbinImporter(Op(),S+f,kw).read(bpy.context)
arm=[o for o in bpy.data.objects if o.type=='ARMATURE' and o.name.startswith(args['body'])][0]
meshes=[o for o in bpy.data.objects if o.type=='MESH' and o.find_armature()==arm]
if not meshes: meshes=[o for o in bpy.data.objects if o.type=='MESH']
hide=args.get('hide',[])
for o in meshes:
    if any(h in o.name for h in hide): o.hide_render=True
meshes=[o for o in meshes if not o.hide_render]
print('MESHES',[o.name for o in meshes])
acts=[a.name for a in bpy.data.actions]
scene=bpy.context.scene
def setact(pat):
    cand=[a for a in acts if pat in a and '(%s'%args['body'] in a]
    if not cand: raise SystemExit('NO ACTION '+pat+' have '+str([a for a in acts if 'bas' in a][:40]))
    a=bpy.data.actions[cand[0]];arm.animation_data_create();arm.animation_data.action=a;return a
eng=args.get('engine','BLENDER_WORKBENCH')
scene.render.engine=eng
if eng=='BLENDER_WORKBENCH':
    sh=scene.display.shading;sh.light='STUDIO';sh.color_type='TEXTURE';sh.show_object_outline=True;sh.object_outline_color=(0,0,0);sh.show_cavity=False;sh.studio_light='paint.sl' if 'paint.sl' in bpy.context.preferences.studio_lights else sh.studio_light
    scene.display.render_aa='8'
else:
    scene.cycles.samples=16;scene.cycles.device='CPU'
scene.render.film_transparent=True;scene.view_settings.view_transform='Standard'
W,H=args.get('size',[320,400]);scene.render.resolution_x=W;scene.render.resolution_y=H;scene.render.resolution_percentage=100
# light for cycles
w=bpy.data.worlds.new('w');scene.world=w;w.use_nodes=True;w.node_tree.nodes['Background'].inputs[1].default_value=1.0
camd=bpy.data.cameras.new('cam');cam=bpy.data.objects.new('cam',camd);scene.collection.objects.link(cam);scene.camera=cam;camd.type='ORTHO'
out=args['out'];os.makedirs(out,exist_ok=True)
for clip in args['clips']:
    a=setact(clip['action']);fs,fe=int(a.frame_range[0]),int(a.frame_range[1])
    step=clip.get('step',2);frames=list(range(fs,fe,step))[:clip.get('max',60)]
    # bounds over all frames
    lo=Vector((1e9,)*3);hi=Vector((-1e9,)*3)
    for f in frames[::max(1,len(frames)//6)]:
        scene.frame_set(f);dg=bpy.context.evaluated_depsgraph_get()
        for o in meshes:
            e=o.evaluated_get(dg)
            for c in e.bound_box:
                v=e.matrix_world@Vector(c);lo=Vector(map(min,lo,v));hi=Vector(map(max,hi,v))
    c=(lo+hi)/2;yaw=math.radians(clip.get('yaw',30));d=20
    # Blender: Z up. Camera looks toward -Y front by default -> place at front (negative y)
    cam.location=(c.x+math.sin(yaw)*d,c.y-math.cos(yaw)*d,c.z+args.get('camz',0.0))
    cam.rotation_euler=(c-cam.location).to_track_quat('-Z','Y').to_euler()
    size=max(hi.z-lo.z,(hi.x-lo.x)*H/W,(hi.y-lo.y)*H/W)*1.08;camd.ortho_scale=size*max(1,W/H)
    print('CLIP',clip['name'],a.name,fs,fe,len(frames),'bounds',tuple(round(x,2) for x in lo),tuple(round(x,2) for x in hi))
    for i,f in enumerate(frames):
        scene.frame_set(f);scene.render.filepath=f"{out}/{clip['name']}_{i:03d}.png";bpy.ops.render.render(write_still=True)
print('DONE')
