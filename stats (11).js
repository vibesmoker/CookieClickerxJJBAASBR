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
