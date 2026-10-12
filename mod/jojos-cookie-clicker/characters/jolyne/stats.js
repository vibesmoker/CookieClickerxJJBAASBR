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
