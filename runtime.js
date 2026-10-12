/* ===================================================================================
   RUNTIME — you normally don't need to edit anything below.
   Character numbers live in characters/<name>/stats.js.
   =================================================================================== */
var ORDER=['jotaro','joseph','okuyasu','giorno','jolyne','jonathan','avdol','mista','narancia','kingcrimson','iggy','dragonsdream'];
var MOD_FOLDER='jojos-cookie-clicker';
var SCRIPT_SRC=(typeof document!=='undefined'&&document.currentScript&&document.currentScript.src)||'';
var BASE='';
var MOD=null, started=false, pendingSave=null;
var s=fresh();
var els={}, cardEls={}, stageEls={}, clickLoops={}, lastUi=0, lastUnlockCheck=0, infoOpen=null, prevSig='';
var iggy={x:200,y:300,tx:200,ty:300,speed:70,mode:'walk',until:0,facing:1,el:null,napWalk:null,pause:0};

function fresh(){return {v:3,levels:{},recruited:{},announced:{},ready:{},active:{},okuyasuArmedUntil:0,
  kcForm:'kc',diavoloUntil:0,nails:[],nailsRemoved:0,nextNailCheck:0,
  iggyGum:0,iggyNapTarget:null,iggyNapUntil:0,iggyNextDig:0,
  narancia:null,avdolNext:0,avdolFireUntil:0,ddNext:0,arrow:null,feedDiscount:false,minimized:false};}

/* ---------- crash guard: a mod error must never stop Cookie Clicker from loading ---------- */
var errShown=false;
function guard(fn,where){return function(){try{return fn.apply(this,arguments);}catch(e){try{console.error('[JoJo mod] error in '+where+':',e);if(!errShown){errShown=true;setTimeout(function(){try{G().Notify("JoJo's Cookie Clicker hit an error","("+where+") "+String(e&&e.message||e).slice(0,140)+" — the game keeps running.",[16,5],10);}catch(_){}},3000);}}catch(_){}}};}
/* ---------- helpers ---------- */
function now(){return Date.now();}
function G(){return window.Game;}
function cfg(id){return CFG[id];}
function st(id){return CFG[id].STATS||{};}
function lvl(id){var v=Math.floor(Number(s.levels[id])||1);return Math.max(1,Math.min(100,v));}
function has(id){return !!s.recruited[id];}
function kitHas(id,k){return CFG[id].kit.indexOf(k)!==-1;}
function lerp(id,key){var t=st(id),a=t[key+'Lv1'],b=t[key+'Lv100'];if(a===undefined)return t[key]||0;if(b===undefined)return a;return a+(b-a)*(lvl(id)-1)/99;}
function stepped(id,key){var t=st(id),a=t[key+'Lv1'],b=t[key+'Lv100'];if(a===undefined)return t[key]||0;if(b===undefined)return a;return a+(b-a)*Math.floor(lvl(id)/5)/20;}
function beaut(n){try{return Beautify(n);}catch(e){return String(Math.floor(n));}}
function fmtT(sec){sec=Math.max(0,Math.ceil(sec));var m=Math.floor(sec/60),r=sec%60;return m?m+':'+(r<10?'0':'')+r:r+'s';}
function pct(x,d){return (x*100).toFixed(d===undefined?1:d).replace(/\.0+$/,'')+'%';}
function esc(t){return String(t).replace(/[&<>"']/g,function(a){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[a];});}
function img(id,kind){return BASE+'characters/'+id+'/'+kind+'.png';}
function asset(n){return BASE+'assets/'+n;}
function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!==undefined)e.innerHTML=html;return e;}
function notify(t,d){try{G().Notify(t,d||'',[16,5],3);}catch(e){}}
function recalc(){try{G().recalculateGains=1;}catch(e){}}
function rand(a,b){return a+Math.random()*(b-a);}

/* ---------- animated sprites rendered from All-Star Battle R (models, Stands, motions) ---------- */
var animRegs=[],animLoopOn=false;
function animMeta(id,key){return ANIMS[id]&&ANIMS[id][key]||null;}
function animKey(id,kind,clip){var k=kind+'-'+clip;if(animMeta(id,k))return k;if(clip!=='idle'&&animMeta(id,kind+'-idle'))return kind+'-idle';return null;}
function anim(id,kind,clip,h,cls){var key=animKey(id,kind,clip),m=key&&animMeta(id,key);
  if(!m){var im=el('img',cls||'');im.src=img(id,kind==='stand'&&HAS_STAND[id]?'stand':'model');im.style.height=h+'px';im.draggable=false;return im;}
  var o=el('div','jj-anim '+(cls||''));var inner=el('div','jj-anim-i');o.appendChild(inner);o._jj={id:id,inner:inner};setAnim(o,key,h);animRegs.push(o);startAnimLoop();return o;}
function setAnim(o,key,h){var r=o._jj;if(!r)return;var m=animMeta(r.id,key);if(!m)return;if(r.key===key&&r.h===h)return;r.key=key;r.m=m;r.h=h;r.t0=now();var sc=h/m.h,w=Math.round(m.w*sc),rows=Math.ceil(m.frames/m.cols);
  r.sc=sc;o.style.width=w+'px';o.style.height=h+'px';var s=r.inner.style;s.width=w+'px';s.height=h+'px';s.backgroundImage='url("'+BASE+'characters/'+r.id+'/'+m.file+'")';s.backgroundSize=(m.w*m.cols*sc)+'px '+(m.h*rows*sc)+'px';r.f=-1;animFrame(o);}
function animFrame(o){var r=o._jj,m=r.m,f=Math.floor((now()-r.t0)/1000*m.fps)%m.frames;if(f===r.f)return;r.f=f;r.inner.style.backgroundPosition=(-(f%m.cols)*m.w*r.sc)+'px '+(-Math.floor(f/m.cols)*m.h*r.sc)+'px';}
function startAnimLoop(){if(animLoopOn)return;animLoopOn=true;(function loop(){try{animRegs=animRegs.filter(function(o){return o.isConnected||o._keep;});animRegs.forEach(animFrame);}catch(e){}requestAnimationFrame(loop);})();}
function resizeAnim(o,h){if(o&&o._jj&&o._jj.key)setAnim(o,o._jj.key,h);}

/* ---------- Iggy nap ---------- */
function napped(id){return s.iggyNapTarget===id&&s.iggyNapUntil>now();}
function napPassive(id){return napped(id)?1+lerp('iggy','napPassiveBonus'):1;}

/* ---------- derived stats (these always reflect the current level) ---------- */
function cooldownSec(id){
  var base=id==='dragonsdream'?stepped(id,'arrowCheckSeconds'):stepped(id,'cooldownSeconds');
  if(napped(id))base*=1-lerp('iggy','napCooldownReduction');
  if((id==='mista'||id==='narancia')&&diavoloActive())base*=1-lerp('kingcrimson','diavoloCooldownReduction');
  return base;}
function uptimeSec(id){
  var base=id==='okuyasu'?lerp(id,'armedSeconds'):id==='dragonsdream'?lerp(id,'answerSeconds'):lerp(id,'uptimeSeconds');
  if(napped(id))base*=1+lerp('iggy','napUptimeBonus');
  return base;}
function jolyneCps(){return lerp('jolyne','clicksPerSecond');}
function kcChance(){return lerp('kingcrimson','freeBuildingChance');}
function diavoloActive(){return has('kingcrimson')&&s.kcForm==='diavolo'&&s.diavoloUntil>now();}
function isActive(id){return (s.active[id]||0)>now();}
function cdLeft(id){return Math.max(0,((s.ready[id]||0)-now())/1000);}

function avdolFire(){return has('avdol')&&s.avdolFireUntil>now();}
function cpsMult(){var m=1;['giorno','jonathan','avdol'].forEach(function(id){if(has(id))m+=lerp(id,'passiveCps')*napPassive(id);});if(avdolFire())m*=1+lerp('avdol','fireCpsBoost')*napPassive('avdol');return m;}
function avdolTick(){if(!has('avdol'))return;var t=now(),k=st('avdol');if(!s.avdolNext)s.avdolNext=t+stepped('avdol','fireCheckSeconds')*1000;
  if(t>=s.avdolNext){s.avdolNext=t+stepped('avdol','fireCheckSeconds')*1000;if(!avdolFire()&&Math.random()<k.fireChance){var d=lerp('avdol','fireSeconds');s.avdolFireUntil=t+d*1000;recalc();fxCookieFire(d);notify('Crossfire Hurricane!','Magician\'s Red set the cookie on fire: +'+pct(lerp('avdol','fireCpsBoost'),0)+' production for '+fmtT(d)+'.');}}}
function clickMult(){
  var m=1;
  if(has('jotaro'))m+=lerp('jotaro','passiveClickPower')*napPassive('jotaro');
  if(has('mista'))m+=lerp('mista','passiveClickPower')*napPassive('mista');
  if(isActive('joseph'))m*=1+lerp('joseph','abilityClickPower');
  if(isActive('mista'))m*=1+lerp('mista','abilityClickPower');
  if(s.nails.length)m*=Math.pow(1-st('kingcrimson').nailClickPowerPenalty,s.nails.length);
  return m;}
function feedCost(id){var c=cfg(id),v=Math.ceil(c.feedBaseCost*Math.pow(c.feedCostGrowth,lvl(id)-1));if(s.feedDiscount)v=Math.ceil(v*(1-st('dragonsdream').upgradeDiscount));return v;}

/* ---------- unlocks ---------- */
function unlockMet(id){var u=cfg(id).unlock,g=G();
  switch(u.type){
    case 'start':case 'purchase':return true;
    case 'lifetime_cookies':return (g.cookiesEarned+g.cookiesReset)>=u.value;
    case 'cookie_clicks':return g.cookieClicks>=u.value;
    case 'buildings_owned':return g.BuildingsOwned>=u.value;
    case 'building_count':return g.Objects[u.building]&&g.Objects[u.building].amount>=u.value;
    case 'all_buildings_once':return g.ObjectsById.every(function(o){return o.amount>=1;});
  }return false;}
function unlockText(id){var u=cfg(id).unlock;
  switch(u.type){
    case 'lifetime_cookies':return 'Bake '+beaut(u.value)+' cookies';
    case 'cookie_clicks':return 'Click the cookie '+beaut(u.value)+' times';
    case 'buildings_owned':return 'Own '+u.value+' buildings';
    case 'building_count':return 'Own '+u.value+' '+u.building.toLowerCase()+'s';
    case 'all_buildings_once':return 'Own one of every building';
  }return '';}
function checkUnlocks(){ORDER.forEach(function(id){
  if(has(id))return;var c=cfg(id);
  if(unlockMet(id)){
    if(!c.recruitCost){recruitNow(id,true);}
    else if(!s.announced[id]&&c.unlock.type!=='purchase'){s.announced[id]=1;notify(c.name+' can be recruited!','Hire them in the Stand Users panel for '+beaut(c.recruitCost)+' cookies.');}
  }});}
function recruit(id){var c=cfg(id),g=G();if(has(id)||!unlockMet(id))return false;if(g.cookies<c.recruitCost)return false;g.Spend(c.recruitCost);recruitNow(id,false);return true;}
function recruitNow(id,free){s.recruited[id]=true;s.levels[id]=s.levels[id]||1;s.announced[id]=1;recalc();
  notify(cfg(id).name+' joined your crew!',free?'Unlocked through your progress.':'');
  entrance(id);if(id==='avdol')milkFire();if(id==='iggy'){iggy.x=window.innerWidth*0.2;iggy.y=window.innerHeight*0.6;s.iggyNextDig=now()+st('iggy').digEverySeconds*1000;}
  if(id==='dragonsdream')s.ddNext=now()+cooldownSec('dragonsdream')*1000;
  buildStage();refreshUI(true);}
function feed(id){var g=G();if(!has(id)||lvl(id)>=100)return false;var c=feedCost(id);if(g.cookies<c)return false;g.Spend(c);s.levels[id]=lvl(id)+1;if(s.feedDiscount){s.feedDiscount=false;}recalc();refreshUI(true);return true;}

/* ---------- abilities ---------- */
function activate(id){
  if(!has(id)||!kitHas(id,'active')||id==='dragonsdream')return false;
  if(isActive(id)||cdLeft(id)>0)return false;
  var up=uptimeSec(id);s.active[id]=now()+up*1000;s.ready[id]=now()+cooldownSec(id)*1000;
  if(id==='jotaro'){autoClick(id,st('jotaro').clicksPerSecond,up);fxBarrage('jotaro',up);}
  if(id==='jolyne'){autoClick(id,jolyneCps(),up);fxBarrage('jolyne',up);}
  if(id==='okuyasu'){s.okuyasuArmedUntil=s.active[id];fxTheHand(up);}
  if(id==='joseph'){fxHermitPurple(up);}
  if(id==='mista'){fxSexPistols(up);}
  if(id==='narancia'){aerosmith(up);}
  recalc();refreshUI(true);return true;}
function autoClick(id,cps,up){stopLoop(id);var end=now()+up*1000;
  clickLoops[id]=setInterval(function(){if(now()>end||!G()){stopLoop(id);return;}var g=G();var saved=g.lastClick;g.lastClick=0;g.ClickCookie();if(g.lastClick===0)g.lastClick=saved;},1000/cps);}
function stopLoop(id){if(clickLoops[id]){clearInterval(clickLoops[id]);clickLoops[id]=null;}}
function aerosmith(up){var g=G(),owned=g.ObjectsById.filter(function(o){return o.amount>0;});
  if(!owned.length){notify('Aerosmith found no target','Buy a building first.');s.active.narancia=0;return;}
  var o=owned[Math.floor(Math.random()*owned.length)];s.narancia={building:o.name,until:now()+up*1000};recalc();
  notify('Volare Via! Aerosmith strikes your '+o.name+'s','+'+pct(lerp('narancia','buildingBoost'),0)+' '+o.name+' production for '+fmtT(up)+'.');
  fxAerosmith(o.id,up);}
function naranciaMult(name){return s.narancia&&s.narancia.building===name&&s.narancia.until>now()?1+lerp('narancia','buildingBoost'):1;}

/* ---------- King Crimson / Doppio / Diavolo ---------- */
function wrapBuildings(){var g=G();g.ObjectsById.forEach(function(o){
  if(!o._jjBuy){var ob=o.buy;o.buy=function(){var before=g.cookies,r=ob.apply(this,arguments),spent=before-g.cookies;
    if(spent>0&&has('kingcrimson')&&s.kcForm==='kc'&&Math.random()<kcChance()){g.cookies+=spent;becomeDoppio(this.name,spent);}return r;};o._jjBuy=1;}
  if(!o._jjCps){var oc=o.cps;o.cps=function(me){return oc.apply(this,arguments)*naranciaMult((me||this).name);};o._jjCps=1;}
});}
function becomeDoppio(name,spent){fxKingCrimson();s.kcForm='doppio';s.nailsRemoved=0;s.nextNailCheck=now()+st('kingcrimson').nailCheckEverySeconds*1000;
  notify('KING CRIMSON! Time was erased.','Your '+name+' cost nothing ('+beaut(spent)+' cookies kept). ...Doppio has taken over.');buildStage();refreshUI(true);}
function nailTick(){if(!has('kingcrimson'))return;var t=now(),k=st('kingcrimson');
  if(s.kcForm==='doppio'&&t>=s.nextNailCheck){s.nextNailCheck=t+k.nailCheckEverySeconds*1000;if(Math.random()<k.nailChance)addNail();}
  if(s.kcForm==='diavolo'&&t>s.diavoloUntil){s.kcForm='kc';recalc();notify('King Crimson returns.','Diavolo\'s cooldown bonus has ended.');buildStage();refreshUI(true);}}
function addNail(){var a=rand(0,Math.PI*2),r=rand(0.05,0.55);s.nails.push({id:now()+'_'+Math.random(),a:a,r:r,rot:rand(-35,35)});ring();recalc();drawNails();notify('Doppio: "Ring ring ring..."','A nail is stuck in your cookie. Click it to pull it out.');}
function removeNail(nid){var i=s.nails.findIndex(function(n){return n.id===nid;});if(i<0)return;s.nails.splice(i,1);s.nailsRemoved++;recalc();
  var need=st('kingcrimson').nailsToBecomeDiavolo;
  if(s.kcForm==='doppio'&&s.nailsRemoved>=need){s.kcForm='diavolo';s.diavoloUntil=now()+st('kingcrimson').diavoloSeconds*1000;s.nails=[];recalc();fxKingCrimson();
    notify('Diavolo has risen!','Mista and Narancia cooldowns are '+pct(lerp('kingcrimson','diavoloCooldownReduction'),0)+' shorter for '+fmtT(st('kingcrimson').diavoloSeconds)+'.');buildStage();}
  drawNails();refreshUI(true);}
function ring(){try{var a=new Audio(asset('doppio-ringing.mp3'));a.volume=Math.max(0.05,Math.min(1,(G().volume||50)/100));a.play();}catch(e){}}

/* ---------- Dragon's Dream ---------- */
var DIRS=['up','right','down','left'];
function ddTick(){if(!has('dragonsdream'))return;var t=now();
  if(s.arrow&&s.arrow.until<t){s.arrow=null;fxArrowClear();notify('Dragon\'s Dream fades...','You ran out of time.');}
  if(!s.ddNext)s.ddNext=t+cooldownSec('dragonsdream')*1000;
  if(!s.arrow&&t>=s.ddNext){s.ddNext=t+cooldownSec('dragonsdream')*1000;s.ready.dragonsdream=s.ddNext;
    if(Math.random()<lerp('dragonsdream','arrowChance')){s.arrow={dir:DIRS[Math.floor(Math.random()*4)],until:t+uptimeSec('dragonsdream')*1000};fxArrow();}}}
function answerArrow(dir){if(!s.arrow)return;var ok=dir===s.arrow.dir;s.arrow=null;fxArrowClear(ok);
  if(ok){s.feedDiscount=true;notify('Feng Shui! Correct direction.','Your next JoJo upgrade costs '+pct(st('dragonsdream').upgradeDiscount,0)+' less.');}
  else notify('Wrong direction!','Dragon\'s Dream turns away.');refreshUI(true);}

/* ---------- Iggy ---------- */
function iggyTick(dt){var e=els.iggy;if(!e)return;if(!has('iggy')){e.style.display='none';return;}e.style.display='block';
  var t=now(),W=window.innerWidth,H=window.innerHeight;
  if(s.iggyNapTarget&&s.iggyNapUntil<=t){var who=cfg(s.iggyNapTarget).name;s.iggyNapTarget=null;recalc();notify('Iggy woke up','He leaves '+who+' and starts wandering again.');pickWander();refreshUI(true);}
  if(s.iggyNapTarget){var m=stageEls[s.iggyNapTarget];if(m){var r=m.getBoundingClientRect();iggy.x=r.left+r.width/2;iggy.y=r.bottom-18;}e.classList.add('jj-sleep');place();return;}
  e.classList.remove('jj-sleep');
  if(iggy.napWalk){var tm=stageEls[iggy.napWalk];if(!tm||!has(iggy.napWalk)){iggy.napWalk=null;}else{var rr=tm.getBoundingClientRect();iggy.tx=rr.left+rr.width/2;iggy.ty=rr.bottom-18;iggy.speed=160;}}
  iggy.tx=Math.max(30,Math.min(W-30,iggy.tx));iggy.ty=Math.max(40,Math.min(H-20,iggy.ty));
  if(iggy.pause>t){place();return;}
  if(t>=s.iggyNextDig&&!iggy.napWalk){s.iggyNextDig=t+st('iggy').digEverySeconds*1000;iggyDig();iggy.pause=t+1800;place();return;}
  var dx=iggy.tx-iggy.x,dy=iggy.ty-iggy.y,d=Math.sqrt(dx*dx+dy*dy),step=iggy.speed*dt;
  if(d<=step){iggy.x=iggy.tx;iggy.y=iggy.ty;
    if(iggy.napWalk){s.iggyNapTarget=iggy.napWalk;s.iggyNapUntil=t+st('iggy').napSeconds*1000;s.iggyGum=0;iggy.napWalk=null;recalc();
      notify('Iggy fell asleep on '+cfg(s.iggyNapTarget).name,napText(s.iggyNapTarget)+' for '+fmtT(st('iggy').napSeconds)+'.');refreshUI(true);}
    else{iggy.pause=t+rand(500,2500);pickWander();}}
  else{iggy.x+=dx/d*step;iggy.y+=dy/d*step;if(Math.abs(dx)>2)iggy.facing=dx>0?1:-1;}
  iggy.x=Math.max(30,Math.min(W-30,iggy.x));iggy.y=Math.max(40,Math.min(H-20,iggy.y));
  if(has('kingcrimson')&&stageEls.kingcrimson&&!iggy.napWalk&&iggy.mode!=='run'){var k=stageEls.kingcrimson.getBoundingClientRect();
    if(iggy.x>k.left-20&&iggy.x<k.right+20&&iggy.y>k.top-10&&iggy.y<k.bottom+30){runTo(rand(40,W-40),rand(60,H-40));popText('!!',iggy.x,iggy.y-50,'jj-pop-small');}}
  if(iggy.mode==='run'&&d<=step*2){iggy.mode='walk';iggy.speed=70;}
  place();}
var IGGY_H=70;
function place(){var e=els.iggy,w=els.iggyAnim.offsetWidth||64;var moving=!s.iggyNapTarget&&iggy.pause<=now()&&(Math.abs(iggy.tx-iggy.x)+Math.abs(iggy.ty-iggy.y))>2;setAnim(els.iggyAnim,animKey('iggy','model',s.iggyNapTarget?'nap':moving?'walk':'idle')||'',IGGY_H);
  e.style.transform='translate('+(iggy.x-w/2)+'px,'+(iggy.y-IGGY_H)+'px)';els.iggyBody.classList.toggle('jj-iggy-trot',moving);e.style.width=w+'px';els.iggyBody.style.transform='scaleX('+(iggy.facing<0?-1:1)+')';e.classList.toggle('jj-run',iggy.mode==='run');}
function pickWander(){var W=window.innerWidth,H=window.innerHeight;iggy.tx=rand(40,W-40);iggy.ty=rand(H*0.25,H-30);iggy.speed=70;iggy.mode='walk';}
function runTo(x,y){iggy.tx=x;iggy.ty=y;iggy.speed=520;iggy.mode='run';iggy.pause=0;}
function iggyClicked(){if(s.iggyNapTarget)return;var W=window.innerWidth;iggy.napWalk=null;runTo(Math.max(40,Math.min(W-40,W-iggy.x)),iggy.y);}
function iggyDig(){var k=st('iggy');fxFool();
  if(Math.random()<k.gumChance){s.iggyGum++;popText('Coffee gum! '+s.iggyGum+'/'+k.gumPiecesToNap,iggy.x,iggy.y-70,'jj-pop-gum');
    if(s.iggyGum>=k.gumPiecesToNap){var pool=ORDER.filter(function(id){return has(id)&&id!=='kingcrimson'&&id!=='iggy';});
      if(pool.length){iggy.napWalk=pool[Math.floor(Math.random()*pool.length)];notify('Iggy ate his coffee gum','He\'s getting sleepy... heading for '+cfg(iggy.napWalk).name+'.');}}}
  else popText('Chocolate bar!',iggy.x,iggy.y-70,'jj-pop-small');
  refreshUI(true);}
function napText(id){var p=[];if(kitHas(id,'passive'))p.push('+'+pct(lerp('iggy','napPassiveBonus'),0)+' passive bonus');if(kitHas(id,'active'))p.push('-'+pct(lerp('iggy','napCooldownReduction'),0)+' cooldown, +'+pct(lerp('iggy','napUptimeBonus'),0)+' uptime');return p.join(' and ');}

/* =================================================================================
   VISUAL EFFECTS (models and Stands rendered from All-Star Battle R's game files)
   ================================================================================= */
function cookieBox(){var b=document.getElementById('bigCookie');var r=b?b.getBoundingClientRect():{left:200,top:200,width:256,height:256};var sz=(G()&&G().BigCookieSize)||1;var R=r.width/2*Math.max(0.6,sz);return {x:r.left+r.width/2,y:r.top+r.height/2,r:R};}
function fxLayer(){return els.fx;}
function later(fn,ms){return setTimeout(fn,ms);}
function shout(text,x,y,cls){var e=el('div','jj-shout '+(cls||''),'<span>'+esc(text)+'</span>');e.style.left=x+'px';e.style.top=y+'px';fxLayer().appendChild(e);later(function(){e.remove();},1700);}
function popText(text,x,y,cls){var e=el('div','jj-pop '+(cls||''),esc(text));e.style.left=x+'px';e.style.top=y+'px';fxLayer().appendChild(e);later(function(){e.remove();},1400);}
function menacing(c,ms){var e=el('div','jj-menace','ゴ<br>ゴ<br>ゴ');e.style.left=(c.x+c.r*1.05)+'px';e.style.top=(c.y-c.r*1.1)+'px';fxLayer().appendChild(e);var e2=el('div','jj-menace jj-menace2','ゴ<br>ゴ<br>ゴ');e2.style.left=(c.x-c.r*1.35)+'px';e2.style.top=(c.y-c.r*0.2)+'px';fxLayer().appendChild(e2);later(function(){e.remove();e2.remove();},ms);}
function sprite(src,cls,x,y,h,ms){var e;if(typeof src==='object'){e=anim(src.id,src.kind,src.clip||'idle',h,'jj-sprite '+(cls||''));}else{e=el('img','jj-sprite '+(cls||''));e.src=src;}e.style.left=x+'px';e.style.top=y+'px';e.style.height=h+'px';fxLayer().appendChild(e);if(ms)later(function(){e.classList.add('jj-out');later(function(){e.remove();},400);},ms);return e;}
function userAppears(id,c,ms){return sprite({id:id,kind:'model'},'jj-user',c.x-c.r*1.7,c.y+c.r*0.15,c.r*1.3,ms);}
function entrance(id){if(!els.fx)return;var c=cookieBox(),ms=2600,src=stageImg(id,true);var e=sprite(src,'jj-entrance',c.x,c.y-c.r*0.2,c.r*1.6,ms);shout(cfg(id).stand.toUpperCase(),c.x,c.y-c.r-30);menacing(c,ms);}
function stageImg(id,prefStand){return {id:id,kind:(prefStand&&HAS_STAND[id])?'stand':'model'};}
var HAS_STAND={jotaro:1,okuyasu:1,giorno:1,jolyne:1,avdol:1,mista:1,narancia:1,kingcrimson:1,iggy:1};

function fxBarrage(id,up){var c=cookieBox(),ms=up*1000,isJ=id==='jotaro';
  var userEl=userAppears(id,c,ms);
  var stand=sprite({id:id,kind:'stand',clip:'rush'},'jj-stand-looming',c.x-c.r*0.75,c.y-c.r*0.3,c.r*2.1,ms);
  shout(isJ?'STAR PLATINUM!':'STONE FREE!',c.x,c.y-c.r-34);menacing(c,ms);
  var fist=asset(isJ?'star-platinum-fist.png':'stone-free-fist.png'),cps=isJ?st('jotaro').clicksPerSecond:jolyneCps(),end=now()+ms;
  var it=setInterval(function(){if(now()>end){clearInterval(it);return;}var cc=cookieBox();
    for(var k=0;k<2;k++){var f=el('img','jj-fist');f.src=fist;var ang=rand(-50,50),sx=cc.x-cc.r*rand(1.0,1.6),sy=cc.y+rand(-cc.r*0.9,cc.r*0.6),tx=cc.x+rand(-cc.r*0.5,cc.r*0.35),ty=cc.y+rand(-cc.r*0.55,cc.r*0.55);
      f.style.left=sx+'px';f.style.top=sy+'px';f.style.width=(cc.r*rand(0.75,1.05))+'px';f.style.setProperty('--dx',(tx-sx)+'px');f.style.setProperty('--dy',(ty-sy)+'px');f.style.setProperty('--rot',ang*0.2+'deg');fxLayer().appendChild(f);(function(f){later(function(){f.remove();},260);})(f);
      var h=el('div','jj-impact');h.style.left=tx+'px';h.style.top=ty+'px';fxLayer().appendChild(h);(function(h){later(function(){h.remove();},250);})(h);}
    if(Math.random()<0.35)popText(isJ?'ORA!':'ORA!',cc.x+rand(-cc.r,cc.r),cc.y+rand(-cc.r,cc.r*0.3),'jj-pop-ora');
  },Math.max(40,1000/cps));
  if(!isJ){var strings=el('div','jj-strings');strings.style.left=(c.x-c.r*1.4)+'px';strings.style.top=(c.y-c.r)+'px';strings.style.width=(c.r*2.4)+'px';strings.style.height=(c.r*2)+'px';fxLayer().appendChild(strings);later(function(){strings.remove();},ms);}}

function fxTheHand(up){var c=cookieBox(),ms=2200;userAppears('okuyasu',c,ms);sprite({id:'okuyasu',kind:'stand'},'jj-stand-right',c.x+c.r*0.25,c.y-c.r*0.5,c.r*2.1,ms);
  shout('THE HAND!',c.x,c.y-c.r-34);menacing(c,ms);
  var sl=el('div','jj-erase');sl.style.left=(c.x-c.r*1.3)+'px';sl.style.top=(c.y-14)+'px';sl.style.width=(c.r*2.6)+'px';fxLayer().appendChild(sl);later(function(){sl.remove();},900);
  later(function(){popText('NEXT CLICK +'+beaut(st('okuyasu').nextClickPowerPercent)+'%',c.x,c.y+c.r+16,'jj-pop-big');},500);}
function armedRing(){var on=s.okuyasuArmedUntil>now();if(!els.armed){els.armed=el('div','jj-armed');fxLayer().appendChild(els.armed);}els.armed.style.display=on?'block':'none';
  if(on){var c=cookieBox();els.armed.style.left=(c.x-c.r*1.08)+'px';els.armed.style.top=(c.y-c.r*1.08)+'px';els.armed.style.width=els.armed.style.height=(c.r*2.16)+'px';}}

function fxHermitPurple(up){var c=cookieBox(),ms=up*1000;userAppears('joseph',c,ms);shout('HERMIT PURPLE!',c.x,c.y-c.r-34);
  var S=c.r*2.7,R=c.r*0.98,ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg');svg.setAttribute('class','jj-vines');svg.setAttribute('viewBox','0 0 '+S+' '+S);svg.style.left=(c.x-S/2)+'px';svg.style.top=(c.y-S/2)+'px';svg.style.width=svg.style.height=S+'px';
  for(var v=0;v<5;v++){var d='',ph=v*1.3,turns=1.15+v*0.08;for(var i=0;i<=220;i++){var th=i/220*Math.PI*2*turns+v*1.25,rr=R+Math.sin(th*5+ph)*c.r*0.09+(v-2)*3;var x=S/2+Math.cos(th)*rr,y=S/2+Math.sin(th)*rr;d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1);}
    var p=document.createElementNS(ns,'path');p.setAttribute('d',d);p.setAttribute('class','jj-vine');p.style.animationDelay=(v*0.12)+'s';svg.appendChild(p);
    var t=document.createElementNS(ns,'path');t.setAttribute('d',d);t.setAttribute('class','jj-thorns');t.style.animationDelay=(v*0.12)+'s';svg.appendChild(t);}
  fxLayer().appendChild(svg);later(function(){svg.classList.add('jj-out');later(function(){svg.remove();},500);},ms);}

function fxSexPistols(up){var c=cookieBox(),ms=up*1000;userAppears('mista',c,ms);shout('SEX PISTOLS!',c.x,c.y-c.r-34);
  var ring=el('div','jj-pistols');var D=c.r*2.6;ring.style.left=(c.x-D/2)+'px';ring.style.top=(c.y-D/2)+'px';ring.style.width=ring.style.height=D+'px';
  var nums=[1,2,3,5,6,7],pos=[];nums.forEach(function(n,i){var a=i/6*Math.PI*2-Math.PI/2,x=D/2+Math.cos(a)*D*0.44,y=D/2+Math.sin(a)*D*0.44;pos.push([x,y]);
    var p=el('div','jj-pistol','<img src="'+asset('sex-pistol.png')+'"><b>No.'+n+'</b>');p.style.left=x+'px';p.style.top=y+'px';p.style.animationDelay=(i*0.07)+'s';ring.appendChild(p);});
  var bullet=el('div','jj-bullet');ring.appendChild(bullet);fxLayer().appendChild(ring);
  var end=now()+ms,seq=0;
  function volley(){if(now()>end)return;var a=Math.floor(Math.random()*6),hops=[a,(a+1)%6,(a+2)%6,(a+3)%6],i=0;
    function hop(){if(i<hops.length){var p=pos[hops[i]];bullet.style.transform='translate('+(p[0]-6)+'px,'+(p[1]-6)+'px)';if(i>0)popText('PASS!',ring.offsetLeft+p[0],ring.offsetTop+p[1]-28,'jj-pop-small');i++;later(hop,190);}
      else{bullet.style.transform='translate('+(D/2-6)+'px,'+(D/2-6)+'px)';later(function(){var cc=cookieBox();var h=el('div','jj-impact jj-impact-big');h.style.left=cc.x+'px';h.style.top=cc.y+'px';fxLayer().appendChild(h);later(function(){h.remove();},350);popText('BANG!',cc.x,cc.y-20,'jj-pop-ora');},170);later(volley,700);}}
    hop();}
  volley();later(function(){ring.classList.add('jj-out');later(function(){ring.remove();},450);},ms);}

function fxAerosmith(bid,up){var c=cookieBox();userAppears('narancia',c,2000);shout('AEROSMITH!',c.x,c.y-c.r-34);
  var target=document.getElementById('product'+bid),tr=target?target.getBoundingClientRect():{left:window.innerWidth-200,top:200,width:200,height:64};
  var plane=sprite(img('narancia','stand'),'jj-plane',c.x,c.y,c.r*0.8);plane.style.transition='transform 1.1s cubic-bezier(.5,0,.6,1)';
  var dx=tr.left+tr.width/2-c.x,dy=tr.top+tr.height/2-c.y;requestAnimationFrame(function(){requestAnimationFrame(function(){plane.style.transform='translate(-50%,-50%) translate('+dx+'px,'+dy+'px) rotate('+(Math.atan2(dy,dx)*180/Math.PI+90)+'deg) scale(0.6)';});});
  later(function(){plane.remove();var b=el('div','jj-impact jj-impact-big jj-boom');b.style.left=(tr.left+tr.width/2)+'px';b.style.top=(tr.top+tr.height/2)+'px';fxLayer().appendChild(b);later(function(){b.remove();},600);popText('VOLARE VIA!',tr.left+tr.width/2,tr.top,'jj-pop-ora');},1150);}
function markBoosted(){var g=G();g.ObjectsById.forEach(function(o){var p=document.getElementById('product'+o.id);if(p)p.classList.toggle('jj-boosted',naranciaMult(o.name)>1);});}

function fxKingCrimson(){var c=cookieBox(),f=el('div','jj-erased');fxLayer().appendChild(f);later(function(){f.remove();},1700);
  sprite({id:'kingcrimson',kind:'stand'},'jj-entrance',c.x,c.y-c.r*0.2,c.r*2,1500);shout('KING CRIMSON!',c.x,c.y-c.r-34,'jj-shout-red');}
function drawNails(){if(!els.fx)return;var c=cookieBox();var have={};s.nails.forEach(function(n){have[n.id]=1;});
  els.fx.querySelectorAll('.jj-nail').forEach(function(e){if(!have[e.dataset.id])e.remove();});
  s.nails.forEach(function(n){var e=els.fx.querySelector('.jj-nail[data-id="'+n.id+'"]');
    if(!e){e=el('button','jj-nail','<svg viewBox="0 0 40 240"><defs><linearGradient id="jjn" x1="0" x2="1"><stop offset="0" stop-color="#6b6f76"/><stop offset=".45" stop-color="#f4f6f8"/><stop offset="1" stop-color="#5a5e66"/></linearGradient></defs><rect x="2" y="0" width="36" height="14" rx="3" fill="url(#jjn)" stroke="#333"/><path d="M13 14 L27 14 L24 200 L20 238 L16 200 Z" fill="url(#jjn)" stroke="#333" stroke-width="1.5"/></svg>');
      e.dataset.id=n.id;e.title='Pull out the nail';e.addEventListener('click',function(ev){ev.stopPropagation();removeNail(n.id);});els.fx.appendChild(e);}
    var x=c.x+Math.cos(n.a)*c.r*n.r,y=c.y+Math.sin(n.a)*c.r*n.r;e.style.left=x+'px';e.style.top=y+'px';e.style.height=(c.r*1.15)+'px';e.style.width=(c.r*1.15/6)+'px';e.style.transform='translate(-50%,-92%) rotate('+n.rot+'deg)';});}

function fxArrow(){var c=cookieBox();fxArrowClear();userAppears('dragonsdream',c,3000);shout("DRAGON'S DREAM!",c.x,c.y-c.r*1.45-62,'jj-shout-green');
  var w=el('div','jj-arrow-wrap');var rot={up:0,right:90,down:180,left:270}[s.arrow.dir];
  w.innerHTML='<div class="jj-arrow-big" style="transform:translate(-50%,-50%) rotate('+rot+'deg)"><svg viewBox="0 0 100 100"><path d="M50 4 L92 52 L66 52 L66 96 L34 96 L34 52 L8 52 Z"/></svg></div><div class="jj-arrow-timer"></div>';
  DIRS.forEach(function(d){var b=el('button','jj-arrow-choice','<svg viewBox="0 0 100 100"><path d="M50 4 L92 52 L66 52 L66 96 L34 96 L34 52 L8 52 Z"/></svg>');b.dataset.dir=d;b.style.setProperty('--rot',{up:0,right:90,down:180,left:270}[d]+'deg');b.addEventListener('click',function(e){e.stopPropagation();answerArrow(d);});w.appendChild(b);});
  fxLayer().appendChild(w);els.arrow=w;posArrow();}
function posArrow(){var w=els.arrow;if(!w||!s.arrow)return;var c=cookieBox();var big=w.querySelector('.jj-arrow-big');big.style.left=c.x+'px';big.style.top=c.y+'px';big.style.width=big.style.height=(c.r*1.5)+'px';
  var off={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]};w.querySelectorAll('.jj-arrow-choice').forEach(function(b){var o=off[b.dataset.dir];b.style.left=(c.x+o[0]*c.r*1.45)+'px';b.style.top=(c.y+o[1]*c.r*1.45)+'px';});
  var tm=w.querySelector('.jj-arrow-timer'),left=(s.arrow.until-now())/1000;tm.textContent=Math.max(0,left).toFixed(1)+'s';tm.style.left=c.x+'px';tm.style.top=(c.y+c.r*1.95)+'px';}
function fxArrowClear(ok){if(els.arrow){var w=els.arrow;els.arrow=null;w.classList.add(ok?'jj-ok':'jj-out');later(function(){w.remove();},500);}}
function fxFool(){var e=sprite({id:'iggy',kind:'stand'},'jj-fool',iggy.x+iggy.facing*55,iggy.y-40,80,1600);var sand=el('div','jj-sand');sand.style.left=iggy.x+'px';sand.style.top=(iggy.y-10)+'px';fxLayer().appendChild(sand);later(function(){sand.remove();},1500);}

/* ---------- Avdol: cookie on fire ---------- */
function fxCookieFire(d){var c=cookieBox();sprite({id:'avdol',kind:'stand'},'jj-entrance',c.x+c.r*1.1,c.y-c.r*0.3,c.r*1.6,2200);shout('MAGICIAN\'S RED!',c.x,c.y-c.r-34,'jj-shout-red');}
function cookieFire(){var on=avdolFire();if(!els.cfire){els.cfire=el('div','jj-cfire');var h='';for(var i=0;i<22;i++){var a=i/22*360;h+='<i style="--a:'+a+'deg;animation-delay:'+(-Math.random()).toFixed(2)+'s;animation-duration:'+(0.6+Math.random()*0.5).toFixed(2)+'s"></i>';}els.cfire.innerHTML=h;fxLayer().appendChild(els.cfire);}
  els.cfire.style.display=on?'block':'none';if(on){var c=cookieBox(),D=c.r*2.3;els.cfire.style.left=(c.x-D/2)+'px';els.cfire.style.top=(c.y-D/2)+'px';els.cfire.style.width=els.cfire.style.height=D+'px';els.cfire.style.setProperty('--r',(c.r*0.98)+'px');}}
/* ---------- Avdol milk fire ---------- */
function milkFire(){var sec=document.getElementById('sectionLeft');if(!sec)return;if(!els.fire){els.fire=el('div','jj-fire');var h='';for(var i=0;i<26;i++)h+='<i style="left:'+(i/25*100)+'%;animation-delay:'+(-Math.random()*1.2).toFixed(2)+'s;animation-duration:'+(0.8+Math.random()*0.7).toFixed(2)+'s;--w:'+(30+Math.random()*40|0)+'px"></i>';els.fire.innerHTML=h;sec.appendChild(els.fire);}
  els.fire.style.display=has('avdol')?'block':'none';if(has('avdol')){var H=sec.offsetHeight,y=Math.max(0.04,G().milkHd||0)*H;els.fire.style.height=(y+40)+'px';}}

/* ---------- Harvest cursors ---------- */
function harvest(){try{G().Loader.Replace('cursor.png',asset('harvest-cursor.png'));}catch(e){}}

/* =================================================================================
   UI: stage (recruited models under the cookie), Stand Users panel, info, minimize
   ================================================================================= */
function buildUI(){var sec=document.getElementById('sectionLeft');
  var css=el('style');css.id='jj-css';css.textContent=CSS.replace(/__HARVEST__/g,asset('harvest-icon.png'));document.head.appendChild(css);
  els.fx=el('div','jj-fx');document.body.appendChild(els.fx);
  els.stage=el('div','jj-stage');sec.appendChild(els.stage);
  els.panel=el('div','jj-panel');sec.appendChild(els.panel);
  els.panel.innerHTML='<div class="jj-head"><span class="jj-title">STAND USERS</span><span class="jj-sub"></span><button class="jj-min" data-a="min" title="Minimize">▼</button></div><div class="jj-grid"></div>';
  els.info=el('div','jj-info');els.info.hidden=true;sec.appendChild(els.info);els.info.addEventListener('click',guard(onPanelClick,'info'));
  var grid=els.panel.querySelector('.jj-grid');
  ORDER.forEach(function(id){var c=cfg(id);var d=el('div','jj-card');d.dataset.id=id;d.title=c.name+' — '+c.stand;
    d.innerHTML='<div class="jj-face"><img src="'+img(id,'portrait')+'" alt="'+esc(c.name)+'" draggable="false"><span class="jj-lv"></span><span class="jj-zz">Zzz</span><span class="jj-lock"></span></div>'+
      '<div class="jj-btns"><button class="jj-b jj-bi" data-a="info" data-id="'+id+'" title="Info">i</button><button class="jj-b jj-bf" data-a="feed" data-id="'+id+'"></button>'+(kitHas(id,'active')&&id!=='dragonsdream'?'<button class="jj-b jj-ba" data-a="use" data-id="'+id+'"></button>':'<span class="jj-b jj-bp"></span>')+'</div>';
    grid.appendChild(d);cardEls[id]=d;});
  els.panel.addEventListener('click',guard(onPanelClick,'panel'));
  els.arrowBtn=el('button','jj-standarrow','<svg viewBox="0 0 64 120"><defs><linearGradient id="jjg" x1="0" x2="1"><stop offset="0" stop-color="#8a5a00"/><stop offset=".5" stop-color="#ffe27a"/><stop offset="1" stop-color="#8a5a00"/></linearGradient></defs><path d="M32 2 L56 44 L42 40 L38 70 L26 70 L22 40 L8 44 Z" fill="url(#jjg)" stroke="#3a2500" stroke-width="2"/><ellipse cx="32" cy="38" rx="7" ry="9" fill="#2f7f6f" stroke="#ffe27a" stroke-width="1.5"/><rect x="28" y="70" width="8" height="46" rx="3" fill="#6b4a1e"/></svg><span>STANDS</span>');
  els.arrowBtn.title='Show the Stand Users panel';els.arrowBtn.addEventListener('click',function(){s.minimized=false;applyMin();});sec.appendChild(els.arrowBtn);
  els.iggy=el('div','jj-iggy');els.iggyBody=el('div','jj-iggy-body');els.iggyAnim=anim('iggy','model','walk',IGGY_H);els.iggyAnim._keep=1;els.iggyBody.appendChild(els.iggyAnim);els.iggy.appendChild(els.iggyBody);els.iggy.appendChild(el('span','','Zzz'));els.iggy.title='Iggy';els.iggy.addEventListener('click',function(e){e.stopPropagation();iggyClicked();});document.body.appendChild(els.iggy);
  document.addEventListener('keydown',function(e){if(!s.arrow)return;var m={ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right'}[e.key];if(m){e.preventDefault();answerArrow(m);}});
  applyMin();buildStage();milkFire();}
function applyMin(){els.panel.style.display=s.minimized?'none':'';els.arrowBtn.style.display=s.minimized?'':'none';}
function onPanelClick(e){var b=e.target.closest('[data-a]');if(!b)return;var a=b.dataset.a,id=b.dataset.id;
  if(a==='min'){s.minimized=true;infoOpen=null;applyMin();refreshUI(true);return;}
  if(a==='close'){infoOpen=null;refreshUI(true);return;}
  if(a==='info'){infoOpen=infoOpen===id?null:id;refreshUI(true);return;}
  if(a==='feed'){if(has(id))feed(id);else recruit(id);return;}
  if(a==='use'){activate(id);return;}}
function buildStage(){if(!els.stage)return;els.stage.innerHTML='';stageEls={};
  ORDER.forEach(function(id){if(!has(id)||id==='iggy')return;var w=el('div','jj-model');var label=id==='kingcrimson'?(s.kcForm==='doppio'?'DOPPIO':s.kcForm==='diavolo'?'DIAVOLO':'KING CRIMSON'):'';
    var mh=parseFloat(getComputedStyle(els.stage).height)||70;w.appendChild(anim(id,'model','idle',mh));if(label)w.appendChild(el('b','',label));w.title=cfg(id).name;if(id==='kingcrimson'&&s.kcForm==='doppio')w.classList.add('jj-doppio');els.stage.appendChild(w);stageEls[id]=w;});}
function layout(){var sec=document.getElementById('sectionLeft'),b=document.getElementById('bigCookie');if(!sec||!b)return;var sr=sec.getBoundingClientRect(),br=b.getBoundingClientRect();
  var top=br.bottom-sr.top+6;els.stage.style.top=top+'px';var stageH=els.stage.children.length?Math.min(92,Math.max(54,sr.height*0.085)):0;els.stage.style.height=stageH+'px';
  els.stage.style.setProperty('--mh',stageH+'px');if(els.stage._h!==stageH){els.stage._h=stageH;Object.keys(stageEls).forEach(function(k){var o=stageEls[k].querySelector('.jj-anim');if(o)resizeAnim(o,stageH);var im=stageEls[k].querySelector('img');if(im)im.style.height=stageH+'px';});}var avail=sr.height-(top+stageH)-14;els.panel.style.maxHeight=Math.max(150,avail)+'px';}
function cardState(id){var c=cfg(id),card=cardEls[id],own=has(id),met=unlockMet(id),g=G();
  card.classList.toggle('jj-locked',!own);card.classList.toggle('jj-hireable',!own&&met);card.classList.toggle('jj-napped',napped(id));card.classList.toggle('jj-on',isActive(id));
  card.querySelector('.jj-lv').textContent=own?'LV '+lvl(id):'';
  card.querySelector('.jj-lock').textContent=own?'':(met?'HIRE':'LOCKED');
  var f=card.querySelector('.jj-bf');
  if(own){if(lvl(id)>=100){f.textContent='MAX';f.disabled=true;}else{var fc=feedCost(id);f.innerHTML='▲ '+beaut(fc)+(s.feedDiscount?'<i>-50%</i>':'');f.disabled=g.cookies<fc;f.title='Feed '+beaut(fc)+' cookies to level up';}}
  else if(met){f.textContent=beaut(c.recruitCost);f.disabled=g.cookies<c.recruitCost;f.title='Recruit for '+beaut(c.recruitCost)+' cookies';}
  else{f.textContent='🔒';f.disabled=true;f.title=unlockText(id);}
  var a=card.querySelector('.jj-ba');if(a){if(!own){a.textContent='—';a.disabled=true;}else if(isActive(id)){a.textContent=fmtT((s.active[id]-now())/1000);a.disabled=true;a.className='jj-b jj-ba jj-going';}else if(cdLeft(id)>0){a.textContent=fmtT(cdLeft(id));a.disabled=true;a.className='jj-b jj-ba jj-cd';}else{a.textContent='GO!';a.disabled=false;a.className='jj-b jj-ba jj-ready';a.title=c.abilityName;}}
  var p=card.querySelector('.jj-bp');if(p){p.textContent=id==='dragonsdream'?(own?fmtT((s.ddNext-now())/1000):'—'):(own?'PASSIVE':'—');}}
function statRows(id){var c=cfg(id),R=[],L=lvl(id),k=st(id);
  function row(a,b){R.push('<tr><td>'+a+'</td><td>'+b+'</td></tr>');}
  row('Level',L+' / 100');
  switch(id){
    case 'jotaro':row('Passive: click power','+'+pct(lerp(id,'passiveClickPower')*napPassive(id),2));row('Clicks per second',k.clicksPerSecond);row('Uptime',uptimeSec(id).toFixed(1)+'s');row('Cooldown',fmtT(cooldownSec(id)));break;
    case 'joseph':row('Click power while bound','+'+pct(lerp(id,'abilityClickPower'),0));row('Uptime',uptimeSec(id).toFixed(1)+'s');row('Cooldown',fmtT(cooldownSec(id)));break;
    case 'okuyasu':row('Next click','+'+beaut(k.nextClickPowerPercent)+'% ('+beaut(1+k.nextClickPowerPercent/100)+'×)');row('Boost waits for','up to '+uptimeSec(id).toFixed(0)+'s');row('Cooldown',fmtT(cooldownSec(id)));row('Status',s.okuyasuArmedUntil>now()?'ARMED — click the cookie!':'—');break;
    case 'giorno':case 'jonathan':case 'avdol':row('Passive: cookies per second','+'+pct(lerp(id,'passiveCps')*napPassive(id),2));if(id==='avdol'){row('Cookie fire boost','+'+pct(lerp(id,'fireCpsBoost'),0)+' production');row('Fire roll',pct(st(id).fireChance,0)+' every '+fmtT(stepped(id,'fireCheckSeconds')));row('Fire lasts',fmtT(lerp(id,'fireSeconds')));row('Cookie',avdolFire()?'ON FIRE ('+fmtT((s.avdolFireUntil-now())/1000)+' left)':'—');row('Milk','On fire');}break;
    case 'jolyne':row('Clicks per second',jolyneCps().toFixed(1));row('Uptime',uptimeSec(id).toFixed(1)+'s');row('Cooldown',fmtT(cooldownSec(id)));break;
    case 'mista':row('Passive: click power','+'+pct(lerp(id,'passiveClickPower')*napPassive(id),2));row('Ability: click power','+'+pct(lerp(id,'abilityClickPower'),0));row('Uptime',uptimeSec(id).toFixed(1)+'s');row('Cooldown',fmtT(cooldownSec(id))+(diavoloActive()?' (Diavolo bonus)':''));break;
    case 'narancia':row('Building boost','+'+pct(lerp(id,'buildingBoost'),0));row('Uptime',uptimeSec(id).toFixed(1)+'s');row('Cooldown',fmtT(cooldownSec(id))+(diavoloActive()?' (Diavolo bonus)':''));if(s.narancia&&s.narancia.until>now())row('Current target',s.narancia.building+' ('+fmtT((s.narancia.until-now())/1000)+' left)');break;
    case 'kingcrimson':row('Form',s.kcForm==='doppio'?'Doppio':s.kcForm==='diavolo'?'Diavolo ('+fmtT((s.diavoloUntil-now())/1000)+' left)':'King Crimson');
      row('Free building chance',s.kcForm==='kc'?pct(kcChance(),2):'inactive (needs King Crimson form)');row('Diavolo cooldown cut (Mista, Narancia)','-'+pct(lerp(id,'diavoloCooldownReduction'),0)+' for '+fmtT(k.diavoloSeconds));
      row('Doppio nail chance',pct(k.nailChance,0)+' every '+k.nailCheckEverySeconds+'s');row('Nails in cookie',s.nails.length+' (click power -'+pct(1-Math.pow(1-k.nailClickPowerPenalty,s.nails.length),0)+')');row('Nails removed',s.nailsRemoved+' / '+k.nailsToBecomeDiavolo);break;
    case 'iggy':row('Coffee gum',s.iggyGum+' / '+k.gumPiecesToNap);row('Gum chance','every '+k.digEverySeconds+'s: '+pct(k.gumChance,0));row('Nap length',fmtT(k.napSeconds));row('Nap: passive bonus','+'+pct(lerp(id,'napPassiveBonus'),0));row('Nap: cooldown','-'+pct(lerp(id,'napCooldownReduction'),0));row('Nap: uptime','+'+pct(lerp(id,'napUptimeBonus'),0));
      row('Status',s.iggyNapTarget?'Asleep on '+cfg(s.iggyNapTarget).name+' ('+fmtT((s.iggyNapUntil-now())/1000)+')':iggy.napWalk?'Heading for a nap':'Wandering');break;
    case 'dragonsdream':row('Arrow chance',pct(lerp(id,'arrowChance'),0)+' every '+fmtT(cooldownSec(id)));row('Time to answer',uptimeSec(id).toFixed(1)+'s');row('Reward','next upgrade -'+pct(k.upgradeDiscount,0));row('Discount ready',s.feedDiscount?'YES':'no');break;
  }
  if(napped(id))row('Iggy is asleep here',napText(id)+' ('+fmtT((s.iggyNapUntil-now())/1000)+')');
  if(!has(id))row(c.recruitCost?'Recruit cost':'Joins for free',(c.unlock.type!=='purchase'&&c.unlock.type!=='start'?unlockText(id)+(c.recruitCost?', then ':''):'')+(c.recruitCost?beaut(c.recruitCost)+' cookies':''));
  else if(L<100)row('Next level',beaut(feedCost(id))+' cookies');
  return R.join('');}
function renderInfo(){var box=els.info;if(!infoOpen){box.hidden=true;box._id=null;return;}var id=infoOpen,c=cfg(id);box.hidden=false;
  var title=id==='kingcrimson'&&has(id)?(s.kcForm==='doppio'?'Doppio':s.kcForm==='diavolo'?'Diavolo':'King Crimson')+' <small>('+esc(c.name)+')</small>':esc(c.name);
  if(box._id!==id){box._id=id;box._html='';box.innerHTML='<button class="jj-close" data-a="close">×</button><div class="jj-info-l"></div><div class="jj-info-r"></div>';box.querySelector('.jj-info-l').appendChild(anim(id,'model','idle',200));}
  var html='<div class="jj-info-r-in"><div class="jj-info-name">'+title+'</div><div class="jj-info-stand">「'+esc(c.stand)+'」'+(c.abilityName?' · '+esc(c.abilityName):'')+(c.passiveName?' · '+esc(c.passiveName):'')+'</div><p>'+esc(c.description)+'</p><table>'+statRows(id)+'</table></div>';
  if(box._html!==html){box.querySelector('.jj-info-r').innerHTML=html;box._html=html;}}
function refreshUI(force){if(!els.panel)return;var t=now();if(!force&&t-lastUi<250)return;lastUi=t;layout();
  ORDER.forEach(cardState);renderInfo();
  var g=G();els.panel.querySelector('.jj-sub').textContent=(s.feedDiscount?'Dragon\'s Dream: next upgrade -50% · ':'')+(s.kcForm==='doppio'?'Doppio is here · ':'')+(diavoloActive()?'Diavolo '+fmtT((s.diavoloUntil-t)/1000)+' · ':'');
  var sig=ORDER.map(function(id){return has(id)?1:0;}).join('')+s.kcForm;if(sig!==prevSig){prevSig=sig;buildStage();}
  ORDER.forEach(function(id){if(stageEls[id])stageEls[id].classList.toggle('jj-napbed',napped(id));});
  markBoosted();milkFire();cookieFire();drawNails();armedRing();posArrow();}

/* ---------- main loop ---------- */
var lastTick=0,wasSig='';
function tick(){var t=now(),dt=lastTick?Math.min(0.1,(t-lastTick)/1000):0.03;lastTick=t;
  if(t-lastUnlockCheck>1000){lastUnlockCheck=t;checkUnlocks();}
  nailTick();ddTick();avdolTick();iggyTick(dt);
  if(s.okuyasuArmedUntil&&s.okuyasuArmedUntil<t){s.okuyasuArmedUntil=0;}
  var sig=[isActive('joseph'),isActive('mista'),!!(s.narancia&&s.narancia.until>t),diavoloActive(),avdolFire(),s.iggyNapTarget&&s.iggyNapUntil>t].join();if(sig!==wasSig){wasSig=sig;recalc();}
  refreshUI(false);}

/* ---------- start ---------- */
function start(){if(started)return;started=true;guard(start2,'start')();}
function start2(){var g=G();
  if(pendingSave!==null){applySave(pendingSave);pendingSave=null;}
  buildUI();harvest();wrapBuildings();
  g.registerHook('cps',function(v){try{return v*cpsMult();}catch(e){return v;}});
  g.registerHook('cookiesPerClick',function(v){try{return v*clickMult();}catch(e){return v;}});
  g.registerHook('click',guard(function(){if(s.okuyasuArmedUntil>now()){var extra=g.computedMouseCps*st('okuyasu').nextClickPowerPercent/100;g.Earn(extra);g.handmadeCookies+=extra;s.okuyasuArmedUntil=0;s.active.okuyasu=0;var c=cookieBox();popText('+'+beaut(extra)+'!!',c.x,c.y-c.r*0.3,'jj-pop-big');shout('ERASED!',c.x,c.y-c.r-34);refreshUI(true);}},'click'));
  g.registerHook('reset',function(hard){if(hard){s=fresh();s.recruited.jotaro=true;s.levels.jotaro=1;buildStage();recalc();refreshUI(true);}});
  g.registerHook('logic',guard(tick,'logic'));
  if(!has('jotaro')){s.recruited.jotaro=true;s.levels.jotaro=s.levels.jotaro||1;}
  if(has('iggy')&&!s.iggyNextDig)s.iggyNextDig=now()+st('iggy').digEverySeconds*1000;
  pickWander();recalc();refreshUI(true);
  window.addEventListener('resize',function(){refreshUI(true);});}
function applySave(str){try{var d=typeof str==='string'?JSON.parse(str):str;var n=fresh();
  if(d&&typeof d==='object'){for(var k in n)if(d[k]!==undefined)n[k]=d[k];
    if(d.form)n.kcForm=d.form==='kingcrimson'?'kc':d.form;if(typeof d.nails==='number')n.nails=[];}
  if(!Array.isArray(n.nails))n.nails=[];
  ['levels','recruited','announced','ready','active'].forEach(function(k){if(!n[k]||typeof n[k]!=='object'||Array.isArray(n[k]))n[k]={};});
  Object.keys(n.levels).forEach(function(k){var v=Number(n.levels[k]);n.levels[k]=isFinite(v)?Math.max(1,Math.min(100,Math.floor(v))):1;});
  ['ready','active'].forEach(function(k){Object.keys(n[k]).forEach(function(id){var v=Number(n[k][id]);n[k][id]=isFinite(v)?v:0;});});
  if(!n.arrow||typeof n.arrow!=='object'||!n.arrow.dir||!isFinite(n.arrow.until))n.arrow=null;
  if(!n.narancia||typeof n.narancia!=='object'||!n.narancia.building)n.narancia=null;
  if(['kc','doppio','diavolo'].indexOf(n.kcForm)<0)n.kcForm='kc';
  n.nails=n.nails.filter(function(x){return x&&typeof x==='object'&&x.id;});
  if(n.iggyNapTarget&&!CFG[n.iggyNapTarget])n.iggyNapTarget=null;
  ['okuyasuArmedUntil','diavoloUntil','nextNailCheck','nailsRemoved','iggyGum','iggyNapUntil','iggyNextDig','ddNext','avdolNext','avdolFireUntil'].forEach(function(k){var v=Number(n[k]);n[k]=isFinite(v)?v:0;});
  n.minimized=!!n.minimized;n.feedDiscount=!!n.feedDiscount;
  s=n;}catch(e){s=fresh();}
  s.recruited.jotaro=true;}

/* ---------- loading: find the mod folder, read each character's stats.js, then start ---------- */
function dirToUrl(d){if(!d)return '';d=String(d).replace(/\\/g,'/');if(/^[a-zA-Z]:\//.test(d))d='file:///'+d;if(d.slice(-1)!=='/')d+='/';return d;}
function probe(list,done){var i=0;(function next(){if(i>=list.length){done(list[list.length-1]);return;}var b=list[i++];if(!b){next();return;}var im=new Image();var to=setTimeout(function(){im.onload=im.onerror=null;next();},1500);im.onload=function(){clearTimeout(to);done(b);};im.onerror=function(){clearTimeout(to);next();};im.src=b+'characters/jotaro/portrait.png';})();}
function loadStats(done){var left=ORDER.length,fin=false;function one(){if(--left<=0&&!fin){fin=true;done();}}
  setTimeout(function(){if(!fin){fin=true;done();}},4000);
  ORDER.forEach(function(id){var sc=document.createElement('script');sc.src=BASE+'characters/'+id+'/stats.js?t='+Date.now();sc.onload=one;sc.onerror=function(){console.warn('[JoJo] using built-in stats for '+id);one();};document.head.appendChild(sc);});}
function boot(mod){MOD=mod;var cands=[];if(SCRIPT_SRC)cands.push(SCRIPT_SRC.replace(/[^\/]*$/,''));if(mod&&mod.dir){cands.push(dirToUrl(mod.dir));cands.push(String(mod.dir).replace(/\\/g,'/').replace(/\/?$/,'/'));}cands.push('../mods/local/'+MOD_FOLDER+'/');cands.push('../mods/workshop/'+MOD_FOLDER+'/');
  probe(cands,function(b){BASE=b;loadStats(start);});setTimeout(function(){if(!started){BASE=BASE||cands[0]||'';start();}},9000);}

JJ.api={activate:function(id){return activate(id);},feed:feed,recruit:recruit,state:function(){return s;},forceRecruit:function(id){if(!has(id))recruitNow(id,true);},
  setLevel:function(id,l){s.levels[id]=l;recalc();refreshUI(true);},addNail:addNail,doppio:function(){becomeDoppio('test',0);},arrow:function(){s.ddNext=0;var c=lerp;s.arrow={dir:DIRS[Math.floor(Math.random()*4)],until:now()+uptimeSec('dragonsdream')*1000};fxArrow();},
  iggyDig:iggyDig,iggy:function(){return {x:iggy.x,y:iggy.y,tx:iggy.tx,ty:iggy.ty,napWalk:iggy.napWalk,pause:iggy.pause-now()};},gum:function(n){s.iggyGum=n;},cpsMult:cpsMult,clickMult:clickMult,cooldown:cooldownSec,uptime:uptimeSec,base:function(){return BASE;}};
if(window.Game&&window.Game.registerMod){
  window.Game.registerMod(MOD_ID,{
    init:function(){var m=this;guard(function(){boot(m);},'init')();},
    save:function(){try{if(!started&&pendingSave!==null)return typeof pendingSave==='string'?pendingSave:JSON.stringify(pendingSave);return JSON.stringify(s);}catch(e){return '';}},
    load:guard(function(str){if(started){applySave(str);buildStage();recalc();refreshUI(true);milkFire();}else pendingSave=str;},'load')
  });
}
