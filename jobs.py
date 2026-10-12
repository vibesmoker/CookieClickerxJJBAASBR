import json,subprocess,sys,os
HERE=os.path.dirname(os.path.abspath(__file__))
FRAMES=os.environ.get('JJ_FRAMES',os.path.join(HERE,'frames'))
J=lambda code,clips,extra=None: dict(files=[f'{code}01col0.xfbin',f'{code}01bod1.xfbin',f'{code}01mot1.xfbin'],body=f'{code}01bod1',out=os.path.join(FRAMES,code),clips=clips,**(extra or {}))
idle=lambda code,stand=False,step=2,yaw=-60:{'name':'idle','action':f'{code}01_bas_{"s_" if stand else ""}nut ','step':step,'max':60,'yaw':yaw}
jobs={
 '1jnt':J('1jnt',[idle('1jnt')]),
 '3abd':J('3abd',[idle('3abd')]),
 '4oky':J('4oky',[idle('4oky')]),
 '5grn':J('5grn',[idle('5grn')]),
 '5mst':J('5mst',[idle('5mst')]),
 '5nrc':J('5nrc',[idle('5nrc')]),
 '5dvl':J('5dvl',[idle('5dvl')]),
 '6jln':J('6jln',[idle('6jln')]),
 '3igy':J('3igy',[{'name':'idle','action':'3igy01_dem_start_01_lp','step':2,'max':60,'yaw':-60},{'name':'walk','action':'3igy01_dem_win_01_lp','step':2,'max':60,'yaw':-90},{'name':'nap','action':'3igy01_dem_appeal_01_lp','step':2,'max':60,'yaw':-30}]),
 '3jtr':J('3jtr',[idle('3jtr')]),
 '3jsp':J('3jsp',[idle('3jsp')]),
 '3stp':J('3stp',[idle('3stp',True),{'name':'rush','action':'3stp01_atk_rush_lp','step':1,'max':30,'yaw':-90}]),
 '6stf':J('6stf',[idle('6stf',True),{'name':'rush','action':'6stf01_atk_rush_lp','step':1,'max':30,'yaw':-90}]),
 '4hnd':J('4hnd',[idle('4hnd',True)]),
 '5gex':J('5gex',[idle('5gex',True)]),
 '3mgr':J('3mgr',[idle('3mgr',True)]),
 '5kcr':J('5kcr',[idle('5kcr',True)]),
 '5ars':J('5ars',[idle('5ars',True)]),
 '3fll':J('3fll',[idle('3fll',True)]),
 '6ddw':J('6ddw',[idle('6ddw',True)]),
}
sel=sys.argv[1:] or list(jobs)
for k in sel:
    j=jobs[k];r=subprocess.run([os.environ.get('BLENDER_PY',sys.executable),os.path.join(HERE,'render.py'),'--',json.dumps(j)],capture_output=True,text=True)
    out=[l for l in (r.stdout+r.stderr).splitlines() if l.startswith(('CLIP','NO ACTION','Traceback','DONE','MESHES'))or 'Error:' in l]
    print(k,'\n  '+'\n  '.join(out[-6:]),flush=True)
