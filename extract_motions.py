"""Extract the model / texture / motion XFBINs this mod renders from YOUR copy of
JoJo's Bizarre Adventure: All-Star Battle R.

Usage:
  python extract_motions.py "<ASBR install>/data" <path to Arrow-Forge> [output folder]

Needs Arrow-Forge's CPK reader (parsers/cpk_parser.py, standard-library only):
https://github.com/ (search "Arrow-Forge ASBR") -- any Python 3.8+ works, including Blender's bundled python.
"""
import importlib.util, sys, traceback
from pathlib import Path

if len(sys.argv) < 3:
    print(__doc__); sys.exit(1)
game = Path(sys.argv[1])
arrow = Path(sys.argv[2])
outdir = Path(sys.argv[3]) if len(sys.argv) > 3 else Path('asbr-extract')
log = open(outdir.parent / 'extract_motions.log' if outdir.parent.exists() else 'extract_motions.log', 'w', encoding='utf-8')
def say(*a):
    print(*a); print(*a, file=log); log.flush()

CODES = ['1jnt','3jsp','3abd','3jtr','4oky','5grn','5mst','5nrc','5dvl','3igy','6jln','6ddw',
         '3stp','3mgr','4hnd','5gex','5sxp','5ars','5kcr','3fll','6stf','4hvt']
want = lambda n: any(n.startswith(c + '01') and (('mot' in n) or n.endswith('bod1.xfbin') or n.endswith('col0.xfbin')) for c in CODES)
try:
    spec = importlib.util.spec_from_file_location('cpk_parser', arrow / 'parsers' / 'cpk_parser.py')
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
    cpks = sorted(game.rglob('*.cpk'), key=lambda p: (0 if 'launch' in str(p) else 1, str(p)))
    say('CPKS', [str(p) for p in cpks])
    n = 0
    for cpk in cpks:
        try: r = m.CpkReader(str(cpk))
        except Exception as e: say('SKIP', cpk, e); continue
        for e in r.entries:
            if e.dir_name == 'data/spc' and want(e.file_name):
                dest, ok = r.extract_entry(e, str(outdir)); n += 1
                say('EXTRACT', cpk.name, e.file_name, e.extract_size, ok)
    say('TOTAL', n)
except Exception:
    say(traceback.format_exc())
say('FINISHED')
