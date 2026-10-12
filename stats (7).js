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
