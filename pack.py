import glob,json,os,sys
from PIL import Image
HERE=os.path.dirname(os.path.abspath(__file__))
MOD=os.path.join(HERE,'..','..','mod','jojos-cookie-clicker')
FRAMES=os.environ.get('JJ_FRAMES',os.path.join(HERE,'frames'))
MAP={  # code: (character, kind)
 '3jtr':('jotaro','model'),'3jsp':('joseph','model'),'1jnt':('jonathan','model'),'3abd':('avdol','model'),'4oky':('okuyasu','model'),
 '5grn':('giorno','model'),'5mst':('mista','model'),'5nrc':('narancia','model'),'5dvl':('kingcrimson','model'),'3igy':('iggy','model'),
 '6jln':('jolyne','model'),'6ddw':('dragonsdream','model'),
 '3stp':('jotaro','stand'),'4hnd':('okuyasu','stand'),'5gex':('giorno','stand'),'6stf':('jolyne','stand'),'3mgr':('avdol','stand'),
 '5sxp':('mista','stand'),'5ars':('narancia','stand'),'5kcr':('kingcrimson','stand'),'3fll':('iggy','stand')}
FPS={'idle':15,'rush':30,'walk':20}
TH={'model':220,'stand':260}
man=json.load(open(f'{MOD}/anims.json')) if os.path.exists(f'{MOD}/anims.json') else {}
for code,(cid,kind) in MAP.items():
    d=os.path.join(FRAMES,code)
    if not os.path.isdir(d): continue
    clips=sorted({os.path.basename(f).rsplit('_',1)[0] for f in glob.glob(d+'/*.png')})
    for clip in clips:
        fs=sorted(glob.glob(f'{d}/{clip}_*.png'));ims=[Image.open(f).convert('RGBA') for f in fs]
        bb=None
        for im in ims:
            b=im.getbbox()
            if b: bb=b if bb is None else (min(bb[0],b[0]),min(bb[1],b[1]),max(bb[2],b[2]),max(bb[3],b[3]))
        ims=[im.crop(bb) for im in ims];w,h=ims[0].size;th=TH[kind];sc=th/h if h>th else 1;fw,fh=max(1,round(w*sc)),max(1,round(h*sc))
        cols=max(1,min(len(ims),4000//fw));rows=(len(ims)+cols-1)//cols
        sheet=Image.new('RGBA',(fw*cols,fh*rows))
        for i,im in enumerate(ims): sheet.paste(im.resize((fw,fh),Image.LANCZOS),((i%cols)*fw,(i//cols)*fh))
        out=f'{MOD}/characters/{cid}/anim';os.makedirs(out,exist_ok=True)
        name=f'{kind}-{clip}.webp';sheet.save(f'{out}/{name}','WEBP',quality=82,method=4)
        man.setdefault(cid,{})[f'{kind}-{clip}']={'file':f'anim/{name}','frames':len(ims),'cols':cols,'w':fw,'h':fh,'fps':FPS.get(clip,15)}
        print(cid,kind,clip,len(ims),fw,fh,os.path.getsize(f'{out}/{name}')//1024,'KB')
json.dump(man,open(f'{MOD}/anims.json','w'),indent=1)
