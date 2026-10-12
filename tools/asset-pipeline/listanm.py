import sys,glob,os
import os
sys.path.insert(0,os.path.join(os.environ.get('JJ_ADDON_PARENT',os.path.dirname(os.path.abspath(__file__))),'cc2_xfbin_blender'))
from xfbin_lib.xfbin.xfbin_reader import read_xfbin
for f in sorted(glob.glob(os.path.join(os.environ.get('JJ_SPC','asbr-extract/data/spc'),'*mot*.xfbin'))):
    x=read_xfbin(f);names=[]
    for p in x.pages:
        for c in p.get_chunks_by_type('NuccChunkAnm'): names.append(c.name)
    key=[n for n in names if any(k in n for k in ('nut','walk','idle','stand','wait','rush','neutral'))]
    print(os.path.basename(f),len(names),key[:25])
