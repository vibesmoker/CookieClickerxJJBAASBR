import json,glob,os
R=os.path.dirname(os.path.abspath(__file__))
OUT=os.path.join(R,'..','mod','jojos-cookie-clicker')
order=['jotaro','joseph','okuyasu','giorno','jolyne','jonathan','avdol','mista','narancia','kingcrimson','iggy','dragonsdream']
defaults='\n'.join(open(f'{OUT}/characters/{i}/stats.js',encoding='utf-8').read() for i in order)
head='''/* =====================================================================
   JoJo's Cookie Clicker — a Cookie Clicker mod
   Twelve JoJo's Bizarre Adventure characters with Stands, levels, abilities and passives.
   Models, Stands, portraits and the Harvest sprite come from your All-Star Battle R install.

   TO CHANGE A CHARACTER'S NUMBERS: edit characters/<name>/stats.js in this folder.
   (The copies below are only a fallback in case those files can't be read.)
   ===================================================================== */
(function(){'use strict';
var MOD_ID='jojo cookie clicker';
var JJ=window.JojoCookieClicker=window.JojoCookieClicker||{};
var CFG={};
JJ.define=function(id,cfg){if(cfg&&cfg.STATS)CFG[id]=cfg;};
var JojoCookieClicker=JJ;
/* ---------- built-in fallback stats (same values as each characters folder stats.js) ---------- */
'''
css=open(R+'/style.css').read()
anims=open(OUT+'/anims.json').read() if os.path.exists(OUT+'/anims.json') else '{}'
body=head+defaults+'\nvar ANIMS='+anims+';\nvar CSS='+json.dumps(css)+';\n'+open(R+'/runtime.js').read()+'\n})();\n'
open(OUT+'/main.js','w',encoding='utf-8').write(body)
open(OUT+'/info.txt','w').write(json.dumps({"Name":"JoJo's Cookie Clicker","ID":"jojo cookie clicker","Author":"JoJo's Cookie Clicker contributors","Description":"Twelve JoJo's Bizarre Adventure Stand users join your bakery: feed them cookies to level up, unleash Stand abilities, and watch out for Doppio's nails.","ModVersion":3,"GameVersion":2.053,"Date":"10/11/2026","Dependencies":[],"Disabled":0},indent=1))
print(len(body))
