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
