/* =====================================================================
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
/* Jotaro Kujo — Star Platinum
   Change any number below, save this file, then restart Cookie Clicker.
   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.
   Cooldowns drop every 5 levels; uptime and strength grow every level. */
JojoCookieClicker.define('jotaro', {
  STATS: {
    // ---- 1. STAT BONUSES ----
    passiveClickPowerLv1: 0.001,   // +0.1% click power at level 1 (0.001 = 0.1%)
    passiveClickPowerLv100: 0.1,   // +10% click power at level 100
    // ---- 2. COOLDOWN ----
    cooldownSecondsLv1: 480,   // 8 minutes at level 1
    cooldownSecondsLv100: 180,   // 3 minutes at level 100 (drops every 5 levels)
    // ---- 3. ABILITY UPTIME ----
    uptimeSecondsLv1: 3,   // barrage length at level 1
    uptimeSecondsLv100: 10,   // barrage length at level 100
    // ---- 4. RANDOM / CHANCE VALUES ----
    clicksPerSecond: 15,   // Star Platinum clicks the cookie this many times per second
  },
  // ---- RECRUITING & FEEDING ----
  name: "Jotaro Kujo",
  stand: "Star Platinum",
  kit: "active_and_passive",   // active, passive or active_and_passive
  abilityName: "ORA ORA Rush",
  passiveName: "Star Platinum Precision",
  description: "Ability: Jotaro appears and Star Platinum unleashes a barrage of punches on the cookie, clicking it for you. Passive: small permanent click-power bonus.",
  unlock: {"type": "start"},
  recruitCost: 0,   // cookies to hire once unlocked (0 = joins for free)
  feedBaseCost: 100,   // cookies for the first level-up
  feedCostGrowth: 1.6   // each level-up costs this many times more
});

/* Joseph Joestar — Hermit Purple
   Change any number below, save this file, then restart Cookie Clicker.
   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.
   Cooldowns drop every 5 levels; uptime and strength grow every level. */
JojoCookieClicker.define('joseph', {
  STATS: {
    // ---- 1. STAT BONUSES ----
    abilityClickPowerLv1: 0.1,   // +10% click power while Hermit Purple is wrapped around the cookie (level 1)
    abilityClickPowerLv100: 1.0,   // +100% at level 100
    // ---- 2. COOLDOWN ----
    cooldownSecondsLv1: 300,   // 5 minutes
    cooldownSecondsLv100: 120,   // 2 minutes
    // ---- 3. ABILITY UPTIME ----
    uptimeSecondsLv1: 8,
    uptimeSecondsLv100: 25
  },
  // ---- RECRUITING & FEEDING ----
  name: "Joseph Joestar",
  stand: "Hermit Purple",
  kit: "active",   // active, passive or active_and_passive
  abilityName: "Hermit Purple Bind",
  passiveName: null,
  description: "Ability: Hermit Purple wraps around the cookie and boosts click power while it holds.",
  unlock: {"type": "lifetime_cookies", "value": 10000},
  recruitCost: 0,   // cookies to hire once unlocked (0 = joins for free)
  feedBaseCost: 200,   // cookies for the first level-up
  feedCostGrowth: 1.6   // each level-up costs this many times more
});

/* Okuyasu Nijimura — The Hand
   Change any number below, save this file, then restart Cookie Clicker.
   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.
   Cooldowns drop every 5 levels; uptime and strength grow every level. */
JojoCookieClicker.define('okuyasu', {
  STATS: {
    // ---- 1. STAT BONUSES ----
    nextClickPowerPercent: 10000,   // +10,000% on your next click (does NOT grow with level)
    // ---- 2. COOLDOWN ----
    cooldownSecondsLv1: 600,   // 10 minutes
    cooldownSecondsLv100: 480,   // only a slight reduction: 8 minutes at level 100
    // ---- 3. ABILITY UPTIME ----
    armedSecondsLv1: 30,   // how long the erased-space boost waits for your click
    armedSecondsLv100: 60
  },
  // ---- RECRUITING & FEEDING ----
  name: "Okuyasu Nijimura",
  stand: "The Hand",
  kit: "active",   // active, passive or active_and_passive
  abilityName: "Space Erasure",
  passiveName: null,
  description: "Ability: The Hand erases space, making your next click 10,000% stronger. Leveling only shortens the cooldown slightly.",
  unlock: {"type": "purchase"},
  recruitCost: 50000,   // cookies to hire once unlocked (0 = joins for free)
  feedBaseCost: 250,   // cookies for the first level-up
  feedCostGrowth: 1.6   // each level-up costs this many times more
});

/* Giorno Giovanna — Gold Experience
   Change any number below, save this file, then restart Cookie Clicker.
   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.
   Cooldowns drop every 5 levels; uptime and strength grow every level. */
JojoCookieClicker.define('giorno', {
  STATS: {
    // ---- 1. STAT BONUSES ----
    passiveCpsLv1: 0.001,   // +0.1% cookies per second at level 1
    passiveCpsLv100: 0.1,   // +10% at level 100
  },
  // ---- RECRUITING & FEEDING ----
  name: "Giorno Giovanna",
  stand: "Gold Experience",
  kit: "passive",   // active, passive or active_and_passive
  abilityName: null,
  passiveName: "Life Giver",
  description: "Passive: Gold Experience boosts all cookie production.",
  unlock: {"type": "buildings_owned", "value": 10},
  recruitCost: 0,   // cookies to hire once unlocked (0 = joins for free)
  feedBaseCost: 300,   // cookies for the first level-up
  feedCostGrowth: 1.6   // each level-up costs this many times more
});

/* Jolyne Cujoh — Stone Free
   Change any number below, save this file, then restart Cookie Clicker.
   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.
   Cooldowns drop every 5 levels; uptime and strength grow every level. */
JojoCookieClicker.define('jolyne', {
  STATS: {
    // ---- 2. COOLDOWN ----
    cooldownSecondsLv1: 600,   // 10 minutes
    cooldownSecondsLv100: 120,   // 2 minutes
    // ---- 3. ABILITY UPTIME ----
    uptimeSecondsLv1: 5,
    uptimeSecondsLv100: 15,
    // ---- 4. RANDOM / CHANCE VALUES ----
    clicksPerSecondLv1: 5,   // auto-clicks per second at level 1
    clicksPerSecondLv100: 20,   // auto-clicks per second at level 100
  },
  // ---- RECRUITING & FEEDING ----
  name: "Jolyne Cujoh",
  stand: "Stone Free",
  kit: "active",   // active, passive or active_and_passive
  abilityName: "Stone Free Rush",
  passiveName: null,
  description: "Ability: Stone Free rushes the cookie, auto-clicking it for a few seconds.",
  unlock: {"type": "purchase"},
  recruitCost: 250000,   // cookies to hire once unlocked (0 = joins for free)
  feedBaseCost: 400,   // cookies for the first level-up
  feedCostGrowth: 1.6   // each level-up costs this many times more
});

/* Jonathan Joestar — Hamon
   Change any number below, save this file, then restart Cookie Clicker.
   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.
   Cooldowns drop every 5 levels; uptime and strength grow every level. */
JojoCookieClicker.define('jonathan', {
  STATS: {
    // ---- 1. STAT BONUSES ----
    passiveCpsLv1: 0.001,   // +0.1% cookies per second at level 1
    passiveCpsLv100: 0.1,   // +10% at level 100
  },
  // ---- RECRUITING & FEEDING ----
  name: "Jonathan Joestar",
  stand: "Hamon",
  kit: "passive",   // active, passive or active_and_passive
  abilityName: null,
  passiveName: "Hamon Breathing",
  description: "Passive: Hamon breathing boosts all cookie production.",
  unlock: {"type": "buildings_owned", "value": 25},
  recruitCost: 0,   // cookies to hire once unlocked (0 = joins for free)
  feedBaseCost: 500,   // cookies for the first level-up
  feedCostGrowth: 1.6   // each level-up costs this many times more
});

/* Muhammad Avdol — Magician's Red
   Change any number below, save this file, then restart Cookie Clicker.
   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.
   Cooldowns drop every 5 levels; uptime and strength grow every level. */
JojoCookieClicker.define('avdol', {
  STATS: {
    // ---- 1. STAT BONUSES ----
    passiveCpsLv1: 0.002,   // +0.2% cookies per second at level 1
    passiveCpsLv100: 0.15,   // +15% at level 100
    fireCpsBoostLv1: 0.2,   // while the cookie is on fire: +20% production (level 1)
    fireCpsBoostLv100: 0.3,   // +30% at level 100
    // ---- 2. COOLDOWN ----
    fireCheckSecondsLv1: 30,   // rolls for fire every 30 seconds at level 1
    fireCheckSecondsLv100: 3,   // every 3 seconds at level 100 (steps down every 5 levels)
    // ---- 3. ABILITY UPTIME ----
    fireSecondsLv1: 5,   // fire lasts 5 seconds at level 1
    fireSecondsLv100: 60,   // 60 seconds at level 100
    // ---- 4. RANDOM / CHANCE VALUES ----
    fireChance: 0.1,   // 10% chance each roll to set the cookie on fire
  },
  // ---- RECRUITING & FEEDING ----
  name: "Muhammad Avdol",
  stand: "Magician's Red",
  kit: "passive",   // active, passive or active_and_passive
  abilityName: null,
  passiveName: "Crossfire Hurricane",
  description: "Passive: Magician's Red boosts all cookie production and sets the milk on fire. Every so often he may set the cookie itself on fire, boosting production while it burns.",
  unlock: {"type": "purchase"},
  recruitCost: 1000000,   // cookies to hire once unlocked (0 = joins for free)
  feedBaseCost: 750,   // cookies for the first level-up
  feedCostGrowth: 1.6   // each level-up costs this many times more
});

/* Guido Mista — Sex Pistols
   Change any number below, save this file, then restart Cookie Clicker.
   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.
   Cooldowns drop every 5 levels; uptime and strength grow every level. */
JojoCookieClicker.define('mista', {
  STATS: {
    // ---- 1. STAT BONUSES ----
    passiveClickPowerLv1: 0.002,   // +0.2% click power, always on
    passiveClickPowerLv100: 0.1,   // +10% at level 100
    abilityClickPowerLv1: 0.25,   // +25% click power while the Pistols are passing the bullet
    abilityClickPowerLv100: 1.5,   // +150% at level 100
    // ---- 2. COOLDOWN ----
    cooldownSecondsLv1: 420,   // 7 minutes
    cooldownSecondsLv100: 150,   // 2.5 minutes
    // ---- 3. ABILITY UPTIME ----
    uptimeSecondsLv1: 6,
    uptimeSecondsLv100: 20
  },
  // ---- RECRUITING & FEEDING ----
  name: "Guido Mista",
  stand: "Sex Pistols",
  kit: "active_and_passive",   // active, passive or active_and_passive
  abilityName: "Pass Pass Pass!",
  passiveName: "Six Bullets",
  description: "Passive: small click-power bonus. Ability: the Sex Pistols pass a bullet around the cookie and shoot it, boosting click power.",
  unlock: {"type": "cookie_clicks", "value": 1000},
  recruitCost: 0,   // cookies to hire once unlocked (0 = joins for free)
  feedBaseCost: 1000,   // cookies for the first level-up
  feedCostGrowth: 1.6   // each level-up costs this many times more
});

/* Narancia Ghirga — Aerosmith
   Change any number below, save this file, then restart Cookie Clicker.
   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.
   Cooldowns drop every 5 levels; uptime and strength grow every level. */
JojoCookieClicker.define('narancia', {
  STATS: {
    // ---- 1. STAT BONUSES ----
    buildingBoostLv1: 0.5,   // +50% production for the targeted building
    buildingBoostLv100: 3.0,   // +300% at level 100
    // ---- 2. COOLDOWN ----
    cooldownSecondsLv1: 480,   // 8 minutes
    cooldownSecondsLv100: 180,   // 3 minutes
    // ---- 3. ABILITY UPTIME ----
    uptimeSecondsLv1: 15,
    uptimeSecondsLv100: 60
  },
  // ---- RECRUITING & FEEDING ----
  name: "Narancia Ghirga",
  stand: "Aerosmith",
  kit: "active",   // active, passive or active_and_passive
  abilityName: "Volare Via",
  passiveName: null,
  description: "Ability: Aerosmith flies at one of your cookie producers and boosts its production for a while.",
  unlock: {"type": "purchase"},
  recruitCost: 5000000,   // cookies to hire once unlocked (0 = joins for free)
  feedBaseCost: 1500,   // cookies for the first level-up
  feedCostGrowth: 1.6   // each level-up costs this many times more
});

/* King Crimson / Diavolo / Doppio — King Crimson
   Change any number below, save this file, then restart Cookie Clicker.
   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.
   Cooldowns drop every 5 levels; uptime and strength grow every level. */
JojoCookieClicker.define('kingcrimson', {
  STATS: {
    // ---- 1. STAT BONUSES ----
    diavoloCooldownReductionLv1: 0.1,   // as Diavolo: Mista and Narancia cooldowns are 10% shorter
    diavoloCooldownReductionLv100: 0.3,   // 30% at level 100
    nailClickPowerPenalty: 0.05,   // each Doppio nail lowers click power by 5%
    // ---- 2. COOLDOWN ----
    nailCheckEverySeconds: 10,   // as Doppio: how often a nail can be summoned
    // ---- 3. ABILITY UPTIME ----
    diavoloSeconds: 300,   // Diavolo lasts 5 minutes, then King Crimson returns
    // ---- 4. RANDOM / CHANCE VALUES ----
    freeBuildingChanceLv1: 0.005,   // 0.5% chance a building purchase costs nothing (upgrades excluded)
    freeBuildingChanceLv100: 0.5,   // 50% at level 100
    nailChance: 0.1,   // 10% chance each check to summon a nail
    nailsToBecomeDiavolo: 10,   // remove this many nails to turn Doppio into Diavolo
  },
  // ---- RECRUITING & FEEDING ----
  name: "King Crimson / Diavolo / Doppio",
  stand: "King Crimson",
  kit: "passive",   // active, passive or active_and_passive
  abilityName: null,
  passiveName: "Epitaph",
  description: "Passive: building purchases have a chance to cost nothing. When that happens he becomes Doppio, who summons nails into the cookie; remove ten to become Diavolo, who shortens Mista and Narancia's cooldowns for five minutes.",
  unlock: {"type": "all_buildings_once"},
  recruitCost: 1000000000,   // cookies to hire once unlocked (0 = joins for free)
  feedBaseCost: 5000,   // cookies for the first level-up
  feedCostGrowth: 1.6   // each level-up costs this many times more
});

/* Iggy — The Fool
   Change any number below, save this file, then restart Cookie Clicker.
   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.
   Cooldowns drop every 5 levels; uptime and strength grow every level. */
JojoCookieClicker.define('iggy', {
  STATS: {
    // ---- 1. STAT BONUSES ----
    napPassiveBonusLv1: 0.1,   // passive bonus of the character Iggy sleeps on: +10%
    napPassiveBonusLv100: 0.25,
    napCooldownReductionLv1: 0.2,   // cooldown of the character Iggy sleeps on: -20%
    napCooldownReductionLv100: 0.35,
    napUptimeBonusLv1: 0.1,   // uptime of the character Iggy sleeps on: +10%
    napUptimeBonusLv100: 0.25,
    // ---- 2. COOLDOWN ----
    digEverySeconds: 30,   // Iggy digs with The Fool this often
    // ---- 3. ABILITY UPTIME ----
    napSeconds: 600,   // nap length (10 minutes)
    // ---- 4. RANDOM / CHANCE VALUES ----
    gumChance: 0.2,   // 20% chance each dig finds coffee-flavored gum (otherwise a chocolate bar)
    gumPiecesToNap: 5,   // gum pieces Iggy eats before he naps
  },
  // ---- RECRUITING & FEEDING ----
  name: "Iggy",
  stand: "The Fool",
  kit: "passive",   // active, passive or active_and_passive
  abilityName: null,
  passiveName: "Coffee Gum Nap",
  description: "Wanders the screen digging with The Fool. After eating five pieces of coffee gum he naps on a teammate for ten minutes, boosting them.",
  unlock: {"type": "building_count", "building": "Grandma", "value": 60},
  recruitCost: 25000000,   // cookies to hire once unlocked (0 = joins for free)
  feedBaseCost: 2500,   // cookies for the first level-up
  feedCostGrowth: 1.6   // each level-up costs this many times more
});

/* Dragon's Dream — Dragon's Dream
   Change any number below, save this file, then restart Cookie Clicker.
   'Lv1' / 'Lv100' pairs: the mod fills in every level in between.
   Cooldowns drop every 5 levels; uptime and strength grow every level. */
JojoCookieClicker.define('dragonsdream', {
  STATS: {
    // ---- 1. STAT BONUSES ----
    upgradeDiscount: 0.5,   // next JoJo upgrade costs 50% less when you pick the right arrow
    // ---- 2. COOLDOWN ----
    arrowCheckSecondsLv1: 120,   // checks for an arrow every 2 minutes
    arrowCheckSecondsLv100: 60,
    // ---- 3. ABILITY UPTIME ----
    answerSecondsLv1: 10,   // seconds you have to click the matching arrow
    answerSecondsLv100: 15,
    // ---- 4. RANDOM / CHANCE VALUES ----
    arrowChanceLv1: 0.5,   // 50% chance an arrow appears on each check
    arrowChanceLv100: 0.75
  },
  // ---- RECRUITING & FEEDING ----
  name: "Dragon's Dream",
  stand: "Dragon's Dream",
  kit: "active",   // active, passive or active_and_passive
  abilityName: "Feng Shui Direction",
  passiveName: null,
  description: "Every so often a giant arrow appears on the cookie. Click the matching direction in time to halve the cost of your next JoJo upgrade.",
  unlock: {"type": "purchase"},
  recruitCost: 100000000,   // cookies to hire once unlocked (0 = joins for free)
  feedBaseCost: 10000,   // cookies for the first level-up
  feedCostGrowth: 1.6   // each level-up costs this many times more
});

var ANIMS={
 "jotaro": {
  "model-idle": {
   "file": "anim/model-idle.webp",
   "frames": 51,
   "cols": 30,
   "w": 132,
   "h": 220,
   "fps": 15
  },
  "stand-idle": {
   "file": "anim/stand-idle.webp",
   "frames": 31,
   "cols": 20,
   "w": 198,
   "h": 260,
   "fps": 15
  },
  "stand-rush": {
   "file": "anim/stand-rush.webp",
   "frames": 21,
   "cols": 14,
   "w": 281,
   "h": 260,
   "fps": 30
  }
 },
 "joseph": {
  "model-idle": {
   "file": "anim/model-idle.webp",
   "frames": 31,
   "cols": 31,
   "w": 102,
   "h": 220,
   "fps": 15
  }
 },
 "dragonsdream": {
  "model-idle": {
   "file": "anim/model-idle.webp",
   "frames": 51,
   "cols": 35,
   "w": 112,
   "h": 220,
   "fps": 15
  }
 },
 "okuyasu": {
  "stand-idle": {
   "file": "anim/stand-idle.webp",
   "frames": 41,
   "cols": 25,
   "w": 155,
   "h": 260,
   "fps": 15
  },
  "model-idle": {
   "file": "anim/model-idle.webp",
   "frames": 51,
   "cols": 33,
   "w": 121,
   "h": 220,
   "fps": 15
  }
 },
 "giorno": {
  "stand-idle": {
   "file": "anim/stand-idle.webp",
   "frames": 36,
   "cols": 34,
   "w": 115,
   "h": 260,
   "fps": 15
  },
  "model-idle": {
   "file": "anim/model-idle.webp",
   "frames": 48,
   "cols": 48,
   "w": 78,
   "h": 220,
   "fps": 15
  }
 },
 "jolyne": {
  "stand-idle": {
   "file": "anim/stand-idle.webp",
   "frames": 26,
   "cols": 26,
   "w": 99,
   "h": 260,
   "fps": 15
  },
  "stand-rush": {
   "file": "anim/stand-rush.webp",
   "frames": 21,
   "cols": 15,
   "w": 261,
   "h": 260,
   "fps": 30
  },
  "model-idle": {
   "file": "anim/model-idle.webp",
   "frames": 26,
   "cols": 26,
   "w": 124,
   "h": 220,
   "fps": 15
  }
 },
 "avdol": {
  "stand-idle": {
   "file": "anim/stand-idle.webp",
   "frames": 41,
   "cols": 23,
   "w": 168,
   "h": 260,
   "fps": 15
  },
  "model-idle": {
   "file": "anim/model-idle.webp",
   "frames": 41,
   "cols": 35,
   "w": 114,
   "h": 220,
   "fps": 15
  }
 },
 "narancia": {
  "stand-idle": {
   "file": "anim/stand-idle.webp",
   "frames": 30,
   "cols": 20,
   "w": 193,
   "h": 170,
   "fps": 15
  },
  "model-idle": {
   "file": "anim/model-idle.webp",
   "frames": 20,
   "cols": 20,
   "w": 189,
   "h": 220,
   "fps": 15
  }
 },
 "kingcrimson": {
  "stand-idle": {
   "file": "anim/stand-idle.webp",
   "frames": 60,
   "cols": 26,
   "w": 149,
   "h": 260,
   "fps": 15
  },
  "model-idle": {
   "file": "anim/model-idle.webp",
   "frames": 51,
   "cols": 41,
   "w": 96,
   "h": 220,
   "fps": 15
  }
 },
 "iggy": {
  "stand-idle": {
   "file": "anim/stand-idle.webp",
   "frames": 60,
   "cols": 12,
   "w": 320,
   "h": 188,
   "fps": 15
  },
  "model-idle": {
   "file": "anim/model-idle.webp",
   "frames": 23,
   "cols": 22,
   "w": 181,
   "h": 220,
   "fps": 15
  },
  "model-nap": {
   "file": "anim/model-nap.webp",
   "frames": 16,
   "cols": 16,
   "w": 183,
   "h": 220,
   "fps": 15
  },
  "model-walk": {
   "file": "anim/model-walk.webp",
   "frames": 31,
   "cols": 16,
   "w": 241,
   "h": 220,
   "fps": 20
  }
 },
 "jonathan": {
  "model-idle": {
   "file": "anim/model-idle.webp",
   "frames": 31,
   "cols": 30,
   "w": 132,
   "h": 220,
   "fps": 15
  }
 },
 "mista": {
  "model-idle": {
   "file": "anim/model-idle.webp",
   "frames": 21,
   "cols": 21,
   "w": 158,
   "h": 220,
   "fps": 15
  }
 }
};
var CSS="/* ---------- Harvest replaces the Cursor building icon ---------- */\n#productIcon0,#productIconOff0{background-image:url(\"__HARVEST__\")!important;background-position:center!important;background-size:52px 52px!important;background-repeat:no-repeat!important}\n\n/* ---------- Stand Users panel (All-Star Battle R menu style) ---------- */\n.jj-panel{position:absolute;left:8px;right:8px;bottom:10px;z-index:10002;overflow-y:auto;overflow-x:hidden;padding:0 8px 8px;\n  background:linear-gradient(160deg,rgba(18,10,28,.94),rgba(8,6,14,.96) 60%,rgba(40,8,32,.94)),repeating-linear-gradient(-55deg,transparent 0 9px,rgba(255,210,0,.05) 9px 11px);\n  background-blend-mode:normal;border:2px solid #ffd200;box-shadow:0 0 0 2px #000,0 0 0 4px #ff2a8a,0 6px 22px rgba(0,0,0,.8);font-family:'Arial Black','Arial Narrow',Impact,sans-serif;color:#fff;\n  clip-path:polygon(0 0,calc(100% - 18px) 0,100% 18px,100% 100%,18px 100%,0 calc(100% - 18px))}\n.jj-panel::-webkit-scrollbar{width:7px}.jj-panel::-webkit-scrollbar-thumb{background:#ffd200}\n.jj-head{position:sticky;top:0;z-index:3;display:flex;align-items:center;gap:8px;margin:0 -8px 7px;padding:5px 10px 5px 14px;background:linear-gradient(90deg,#ffd200,#ffb400 55%,#ff2a8a);color:#111;transform:skewX(-10deg);transform-origin:left;box-shadow:0 3px 0 #000}\n.jj-title{font-style:italic;font-size:17px;letter-spacing:1px;text-shadow:1px 1px 0 #fff;transform:skewX(10deg)}\n.jj-title::before{content:\"\u30b4\u30b4\u30b4 \";color:#7a0a4a;font-size:13px}\n.jj-sub{flex:1;font:bold 11px Arial,sans-serif;transform:skewX(10deg);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.jj-min{transform:skewX(10deg);background:#111;color:#ffd200;border:2px solid #000;font:bold 13px Arial;width:28px;height:24px;cursor:pointer}\n.jj-min:hover{background:#ff2a8a;color:#fff}\n.jj-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:6px}\n.jj-card{position:relative;background:#0b0b12;border:2px solid #ffd200;box-shadow:2px 2px 0 #000;transition:transform .1s}\n.jj-card:hover{transform:translateY(-2px);border-color:#ff2a8a;box-shadow:0 0 10px #ff2a8a}\n.jj-face{position:relative;aspect-ratio:87/75;overflow:hidden;background:#000}\n.jj-face img{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}\n.jj-lv{position:absolute;left:0;bottom:0;padding:1px 6px 1px 3px;background:#ffd200;color:#000;font-size:10px;font-style:italic;clip-path:polygon(0 0,100% 0,85% 100%,0 100%)}\n.jj-zz{display:none;position:absolute;right:3px;top:1px;color:#9fe3ff;font:bold 12px Arial;text-shadow:0 0 3px #000;animation:jjzz 1.4s infinite}\n.jj-napped .jj-zz{display:block}\n.jj-lock{position:absolute;inset:0;display:none;align-items:center;justify-content:center;font-style:italic;font-size:12px;letter-spacing:1px;color:#ffd200;text-shadow:2px 2px 0 #000;background:rgba(0,0,0,.45)}\n.jj-locked .jj-face img{filter:grayscale(1) brightness(.45)}\n.jj-locked .jj-lock{display:flex}\n.jj-hireable .jj-face img{filter:grayscale(.3) brightness(.8)}\n.jj-hireable .jj-lock{color:#fff;background:rgba(255,42,138,.35)}\n.jj-on{border-color:#fff;box-shadow:0 0 12px #ffd200,0 0 3px #fff}\n.jj-btns{display:grid;grid-template-columns:18px 1fr;grid-template-areas:'i a' 'f f';gap:2px;padding:2px;background:#000}.jj-bi{grid-area:i}.jj-ba,.jj-bp{grid-area:a}.jj-bf{grid-area:f}\n.jj-b{min-width:0;height:18px;padding:0 2px;border:0;font:bold 10px 'Arial Narrow',Arial,sans-serif;color:#000;background:#ffd200;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:flex;align-items:center;justify-content:center;transform:skewX(-8deg)}\n.jj-b i{font-style:normal;color:#c00;margin-left:2px}\n.jj-b:hover:not(:disabled){background:#ff2a8a;color:#fff}\n.jj-b:disabled{background:#3a3440;color:#bbb;cursor:default}\n.jj-bi{background:#fff;font-style:italic}\n.jj-bp{background:#24202c;color:#ffd200;cursor:default;font-size:9px}\n.jj-ready{background:linear-gradient(90deg,#ff2a8a,#ffd200);color:#000;animation:jjready 1s infinite alternate}\n.jj-going{background:#fff!important;color:#c00!important}\n.jj-info{position:absolute;left:8px;right:8px;bottom:10px;max-height:62%;overflow-y:auto;z-index:10004;font-family:Arial,sans-serif;color:#fff;display:flex;gap:10px;padding:10px;background:linear-gradient(135deg,#140c22 0%,#1d0c1a 100%);border:2px solid #ff2a8a;box-shadow:0 0 0 2px #000,0 8px 20px #000}\n.jj-info[hidden]{display:none}\n.jj-info-l{flex:0 0 28%;display:flex;align-items:flex-end;justify-content:center;background:radial-gradient(circle at 50% 60%,rgba(255,210,0,.35),transparent 70%)}\n.jj-info-l img{max-width:100%;max-height:220px;filter:drop-shadow(0 0 6px #ff2a8a)}\n.jj-info-r{flex:1;min-width:0;font:12px Arial,sans-serif}\n.jj-info-name{font:italic 900 17px 'Arial Black',Impact,sans-serif;color:#ffd200;text-shadow:2px 2px 0 #000}\n.jj-info-name small{font-size:11px;color:#ddd}\n.jj-info-stand{color:#ff7ac0;font-weight:bold;margin:2px 0 4px}\n.jj-info p{margin:4px 0 6px;line-height:1.35;color:#eee}\n.jj-info table{width:100%;border-collapse:collapse}\n.jj-info td{padding:2px 4px;border-bottom:1px solid rgba(255,210,0,.18)}\n.jj-info td:last-child{color:#ffd200;font-weight:bold;text-align:right}\n.jj-close{position:absolute;right:6px;top:4px;background:#ff2a8a;color:#fff;border:0;width:22px;height:22px;font:bold 15px Arial;cursor:pointer}\n.jj-standarrow{position:absolute;left:50%;bottom:6px;z-index:10002;transform:translateX(-50%);background:none;border:0;cursor:pointer;display:flex;flex-direction:column;align-items:center;filter:drop-shadow(0 0 6px #ffd200)}\n.jj-standarrow svg{width:34px;height:64px;animation:jjbob 1.6s ease-in-out infinite}\n.jj-standarrow span{font:italic 900 11px 'Arial Black',sans-serif;color:#ffd200;text-shadow:1px 1px 0 #000,0 0 4px #ff2a8a}\n.jj-standarrow:hover svg{filter:brightness(1.3)}\n\n/* ---------- recruited models standing under the cookie ---------- */\n.jj-stage{position:absolute;left:4px;right:4px;z-index:10001;display:flex;justify-content:center;align-items:flex-end;gap:2px;pointer-events:none}\n.jj-model{position:relative;height:100%;flex:1 1 0;min-width:0;max-width:calc(var(--mh) * 1.1);display:flex;flex-direction:column;align-items:center;justify-content:flex-end;animation:jjidle 3s ease-in-out infinite}\n.jj-model:nth-child(2n){animation-delay:-1.4s}\n.jj-model .jj-anim,.jj-model img{flex:none;filter:drop-shadow(0 2px 2px #000)}\n.jj-model b{position:absolute;bottom:-2px;font:italic 900 8px 'Arial Black';color:#ff2a8a;background:#000;padding:0 3px;white-space:nowrap}\n.jj-doppio .jj-anim,.jj-doppio img{filter:drop-shadow(0 2px 2px #000) hue-rotate(-40deg) saturate(.7) brightness(1.1)}\n.jj-napbed{filter:drop-shadow(0 0 6px #9fe3ff)}\n\n/* ---------- effects layer ---------- */\n.jj-fx{position:fixed;inset:0;z-index:100000000;pointer-events:none;overflow:hidden}\n.jj-sprite{position:absolute;transform:translate(-50%,-50%);animation:jjin .28s ease-out both;filter:drop-shadow(0 0 8px rgba(160,60,255,.9))}\n.jj-sprite.jj-out{animation:jjfade .4s forwards}\n.jj-user{transform:translate(-50%,-50%);filter:drop-shadow(0 0 6px #ffd200)}\n.jj-stand-looming{opacity:.92;filter:drop-shadow(0 0 14px #8a3cff) drop-shadow(0 0 3px #fff);animation:jjin .25s ease-out both,jjloom .12s infinite alternate}\n.jj-stand-right{filter:drop-shadow(0 0 14px #4aa3ff)}\n.jj-entrance{filter:drop-shadow(0 0 16px #ffd200) drop-shadow(0 0 4px #fff)}\n.jj-fist{position:absolute;transform:translate(-50%,-50%);animation:jjpunch .24s ease-in forwards;filter:drop-shadow(0 0 4px #c9a6ff)}\n.jj-impact{position:absolute;width:46px;height:46px;margin:-23px 0 0 -23px;border-radius:50%;background:radial-gradient(circle,#fff 0 20%,#ffe14a 35%,rgba(255,90,0,.6) 55%,transparent 70%);animation:jjimpact .25s ease-out forwards}\n.jj-impact-big{width:110px;height:110px;margin:-55px 0 0 -55px}\n.jj-boom{width:150px;height:150px;margin:-75px 0 0 -75px;background:radial-gradient(circle,#fff 0 15%,#ffd200 30%,#ff5a00 50%,rgba(60,0,0,.5) 62%,transparent 72%)}\n.jj-shout{position:absolute;transform:translate(-50%,-50%) skewX(-12deg);padding:4px 16px;background:#ffd200;border:3px solid #000;box-shadow:4px 4px 0 #ff2a8a;animation:jjshout 1.7s ease-out forwards;white-space:nowrap}\n.jj-shout span{display:block;font:italic 900 26px 'Arial Black',Impact,sans-serif;color:#000;letter-spacing:1px}\n.jj-shout-red{background:#d0002a;box-shadow:4px 4px 0 #000}.jj-shout-red span{color:#fff}\n.jj-shout-green{background:#29c48a}\n.jj-menace{position:absolute;font:900 34px 'Arial Black',sans-serif;line-height:.9;color:#b03cff;-webkit-text-stroke:2px #000;animation:jjmenace .5s ease-in-out infinite alternate}\n.jj-menace2{font-size:26px;animation-delay:-.25s}\n.jj-pop{position:absolute;transform:translate(-50%,-50%);font:italic 900 22px 'Arial Black',Impact,sans-serif;color:#fff;-webkit-text-stroke:1.5px #000;animation:jjpop 1.4s ease-out forwards;white-space:nowrap}\n.jj-pop-ora{font-size:30px;color:#ffd200}\n.jj-pop-big{font-size:34px;color:#7fd8ff}\n.jj-pop-small{font-size:15px}\n.jj-pop-gum{font-size:17px;color:#8b5a2b;-webkit-text-stroke:1px #fff}\n.jj-strings{position:absolute;background:repeating-linear-gradient(-20deg,transparent 0 22px,rgba(120,220,255,.7) 22px 24px,transparent 24px 47px);animation:jjstrings .2s linear infinite;mix-blend-mode:screen}\n.jj-erase{position:absolute;height:28px;background:linear-gradient(#fff,#000 25%,#000 75%,#fff);box-shadow:0 0 14px #4aa3ff;transform-origin:left;animation:jjerase .9s ease-out forwards}\n.jj-armed{position:absolute;display:none;border-radius:50%;border:4px dashed #4aa3ff;box-shadow:0 0 18px #4aa3ff,inset 0 0 18px #4aa3ff;animation:jjspin 2s linear infinite}\n.jj-vines{position:absolute;overflow:visible;filter:drop-shadow(0 0 4px #b05cff)}\n.jj-vines.jj-out{animation:jjfade .5s forwards}\n.jj-vine{fill:none;stroke:#7b2fb5;stroke-width:7;stroke-linecap:round;stroke-dasharray:4000;stroke-dashoffset:4000;animation:jjwrap 1.1s ease-out forwards}\n.jj-thorns{fill:none;stroke:#c99bff;stroke-width:12;stroke-dasharray:2 16;opacity:0;animation:jjthorn 1.1s ease-out forwards}\n.jj-pistols{position:absolute;animation:jjspin 7s linear infinite}\n.jj-pistols.jj-out{animation:jjfade .45s forwards}\n.jj-pistol{position:absolute;width:62px;transform:translate(-50%,-50%);text-align:center;animation:jjhop .35s ease-in-out infinite alternate}\n.jj-pistol img{width:100%;filter:drop-shadow(0 0 4px #ffb400)}\n.jj-pistol b{display:block;margin-top:-6px;font:italic 900 11px 'Arial Black';color:#ffd200;-webkit-text-stroke:.6px #000}\n.jj-bullet{position:absolute;left:0;top:0;width:12px;height:12px;border-radius:50% 50% 50% 50%/65% 65% 35% 35%;background:radial-gradient(circle at 40% 35%,#fff6c2,#d39b1a 60%,#7a5200);box-shadow:0 0 10px #ffd200;transition:transform .18s linear}\n.jj-plane{filter:drop-shadow(0 0 8px #ff6a00);animation:none!important;transform:translate(-50%,-50%)}\n.jj-boosted{box-shadow:inset 0 0 0 2px #ff6a00,inset 0 0 18px rgba(255,106,0,.7)!important}\n.jj-erased{position:absolute;inset:0;background:radial-gradient(circle,rgba(255,0,40,.0),rgba(170,0,30,.55));animation:jjflash 1.7s ease-out forwards;mix-blend-mode:multiply}\n.jj-nail{position:absolute;padding:0;border:0;background:none;cursor:pointer;pointer-events:auto;filter:drop-shadow(3px 4px 3px rgba(0,0,0,.8));animation:jjnail .35s cubic-bezier(.3,1.6,.5,1) both}\n.jj-nail svg{width:100%;height:100%;display:block}\n.jj-nail:hover{filter:drop-shadow(0 0 6px #ffd200)}\n.jj-arrow-wrap{position:absolute;inset:0}\n.jj-arrow-wrap.jj-out,.jj-arrow-wrap.jj-ok{animation:jjfade .5s forwards}\n.jj-arrow-big{position:absolute;filter:drop-shadow(0 0 18px #4dffb8) drop-shadow(0 0 40px #00ff8c);animation:jjglow .5s ease-in-out infinite alternate}\n.jj-arrow-big svg{width:100%;height:100%}\n.jj-arrow-big path{fill:#c8ffe6;stroke:#007a4a;stroke-width:3}\n.jj-arrow-choice{position:absolute;width:62px;height:62px;padding:6px;transform:translate(-50%,-50%) rotate(var(--rot));background:#111;border:3px solid #29c48a;border-radius:50%;cursor:pointer;pointer-events:auto;box-shadow:0 0 10px #29c48a}\n.jj-arrow-choice svg{width:100%;height:100%}.jj-arrow-choice path{fill:#29c48a}\n.jj-arrow-choice:hover{background:#29c48a}.jj-arrow-choice:hover path{fill:#111}\n.jj-arrow-timer{position:absolute;transform:translate(-50%,-50%);font:italic 900 20px 'Arial Black';color:#c8ffe6;-webkit-text-stroke:1px #000}\n.jj-fool{filter:drop-shadow(0 0 6px #e0b860)}\n.jj-sand{position:absolute;width:120px;height:60px;margin-left:-60px;border-radius:50%;background:radial-gradient(ellipse,rgba(222,186,110,.95),rgba(190,150,80,.5) 50%,transparent 70%);animation:jjsand 1.5s ease-out forwards}\n.jj-iggy{position:fixed;left:0;top:0;height:64px;z-index:100000001;cursor:pointer;display:none;transition:none}\n.jj-iggy-body{filter:drop-shadow(0 3px 2px rgba(0,0,0,.7))}\n.jj-iggy span{display:none;position:absolute;right:-6px;top:-8px;font:bold 14px Arial;color:#9fe3ff;text-shadow:0 0 3px #000;animation:jjzz 1.4s infinite}\n.jj-iggy.jj-sleep .jj-iggy-body{opacity:.95}\n.jj-iggy.jj-sleep span{display:block}\n\n/* ---------- Avdol: Magician's Red sets the milk on fire ---------- */\n.jj-fire{position:absolute;left:0;right:0;bottom:0;z-index:6;pointer-events:none;overflow:hidden;\n  background:linear-gradient(to top,rgba(255,60,0,.45),rgba(255,120,0,.25) 60%,transparent);mix-blend-mode:screen}\n.jj-fire i{position:absolute;top:8px;width:var(--w);height:70px;margin-left:calc(var(--w) / -2);border-radius:50% 50% 35% 35%/70% 70% 30% 30%;\n  background:radial-gradient(ellipse at 50% 80%,#fff3b0 0,#ffd000 22%,#ff6a00 48%,rgba(200,20,0,.6) 66%,transparent 72%);transform-origin:bottom;animation:jjflame 1s ease-in-out infinite alternate}\n\n@keyframes jjin{from{opacity:0;transform:translate(-50%,-50%) scale(.6)}to{opacity:1;transform:translate(-50%,-50%) scale(1)}}\n@keyframes jjfade{to{opacity:0}}\n@keyframes jjloom{from{margin-left:-3px}to{margin-left:3px}}\n@keyframes jjpunch{0%{opacity:0;transform:translate(-50%,-50%) rotate(var(--rot)) scale(.6)}25%{opacity:1}100%{opacity:1;transform:translate(calc(-50% + var(--dx)),calc(-50% + var(--dy))) rotate(var(--rot)) scale(1)}}\n@keyframes jjimpact{from{transform:scale(.3);opacity:1}to{transform:scale(1.4);opacity:0}}\n@keyframes jjshout{0%{opacity:0;transform:translate(-50%,-50%) skewX(-12deg) scale(2)}12%{opacity:1;transform:translate(-50%,-50%) skewX(-12deg) scale(1)}80%{opacity:1}100%{opacity:0;transform:translate(-50%,-80%) skewX(-12deg)}}\n@keyframes jjmenace{from{transform:translateY(0) scale(1)}to{transform:translateY(-6px) scale(1.08)}}\n@keyframes jjpop{0%{opacity:0;transform:translate(-50%,-30%) scale(1.6)}15%{opacity:1;transform:translate(-50%,-50%) scale(1)}100%{opacity:0;transform:translate(-50%,-160%)}}\n@keyframes jjstrings{to{background-position:47px 0}}\n@keyframes jjerase{0%{transform:scaleX(0) rotate(-14deg)}40%{transform:scaleX(1) rotate(-14deg);opacity:1}100%{transform:scaleX(1) rotate(-14deg);opacity:0}}\n@keyframes jjspin{to{transform:rotate(360deg)}}\n@keyframes jjwrap{to{stroke-dashoffset:0}}\n@keyframes jjthorn{to{opacity:1}}\n@keyframes jjhop{to{margin-top:-6px}}\n@keyframes jjflash{0%{opacity:0}10%{opacity:1}100%{opacity:0}}\n@keyframes jjnail{from{opacity:0;margin-top:-120px}to{opacity:1;margin-top:0}}\n@keyframes jjglow{to{filter:drop-shadow(0 0 28px #4dffb8) drop-shadow(0 0 60px #00ff8c)}}\n@keyframes jjsand{0%{transform:scale(.2);opacity:1}100%{transform:scale(1.6) translateY(-20px);opacity:0}}\n@keyframes jjwalk{from{translate:0 0}to{translate:0 -4px}}\n@keyframes jjzz{0%,100%{opacity:.3;transform:translateY(0)}50%{opacity:1;transform:translateY(-4px)}}\n@keyframes jjflame{0%{transform:scaleY(.75) scaleX(1.05);opacity:.85}100%{transform:scaleY(1.25) scaleX(.9) translateY(-6px);opacity:1}}\n@keyframes jjready{to{filter:brightness(1.35)}}\n@keyframes jjbob{50%{transform:translateY(-5px)}}\n@keyframes jjidle{50%{transform:translateY(-2px)}}\n.jj-cfire{position:absolute;display:none;border-radius:50%;box-shadow:0 0 40px 10px rgba(255,90,0,.55),inset 0 0 50px rgba(255,120,0,.6);pointer-events:none}\n.jj-cfire i{position:absolute;left:50%;top:50%;width:46px;height:84px;margin:-84px 0 0 -23px;transform-origin:50% 100%;transform:rotate(var(--a)) translateY(calc(var(--r) * -1 + 40px));border-radius:50% 50% 35% 35%/70% 70% 30% 30%;\n  background:radial-gradient(ellipse at 50% 80%,#fff3b0 0,#ffd000 22%,#ff6a00 48%,rgba(200,20,0,.6) 66%,transparent 72%);animation:jjcflame .8s ease-in-out infinite alternate;mix-blend-mode:screen}\n@keyframes jjcflame{from{opacity:.75;scale:.8 .75}to{opacity:1;scale:1 1.2}}\n\n.jj-anim{position:relative;display:block;pointer-events:none}.jj-anim-i{background-repeat:no-repeat}\n.jj-sprite.jj-anim{position:absolute}\n.jj-info-l .jj-anim{filter:drop-shadow(0 0 6px #ff2a8a)}\n\n.jj-iggy.jj-run .jj-iggy-body,.jj-iggy-trot{animation:jjtrot .22s ease-in-out infinite alternate}\n@keyframes jjtrot{to{translate:0 -4px}}\n";
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

})();
