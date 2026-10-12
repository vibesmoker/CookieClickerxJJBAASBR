# JoJo's Cookie Clicker

A fan mod for the Steam version of **Cookie Clicker** that adds a crew of twelve
*JoJo's Bizarre Adventure* Stand users to your bakery. Feed them cookies to level them
up (to 100), unleash their Stand abilities, and enjoy passive bonuses. Characters,
Stands and their idle/rush animations are rendered from **your own copy** of
*JoJo's Bizarre Adventure: All-Star Battle R*.

> Unofficial fan project. Not affiliated with Orteil/DashNet, Playsaurus, Bandai Namco,
> CyberConnect2 or the JoJo's Bizarre Adventure rights holders.

## The crew

| Character | Unlock | Kit |
|---|---|---|
| Jotaro Kujo | start | Star Platinum ORA rush clicks the cookie 15×/sec; passive click power |
| Joseph Joestar | bake 10,000 cookies | Hermit Purple binds the cookie for bonus click power |
| Okuyasu Nijimura | 50K cookies | The Hand: next click +10,000% (leveling only trims the cooldown) |
| Giorno Giovanna | own 10 buildings | passive CpS |
| Jolyne Cujoh | 250K cookies | Stone Free rush: 5 clicks/s for 5s (Lv1) → 20/s for 15s (Lv100) |
| Jonathan Joestar | own 25 buildings | passive CpS |
| Muhammad Avdol | 1M cookies | passive CpS, milk on fire, random chance to set the cookie on fire for a production boost |
| Guido Mista | click 1,000 times | passive click power + Sex Pistols bullet pass |
| Narancia Ghirga | 5M cookies | Aerosmith boosts a random building's production |
| King Crimson / Diavolo / Doppio | one of every building, then 1B | free-building chance → Doppio's nails → Diavolo cooldown buff |
| Iggy | 60 grandmas, then 25M | wanders the screen, digs coffee gum, naps on teammates to buff them |
| Dragon's Dream | 100M cookies | direction-arrow challenge: halves your next upgrade cost |

Also: Harvest replaces the Cursor (store icon + cursors circling the cookie), an
All-Star-Battle-style Stand Users panel with live info for each character,
and a minimize button with a golden Stand Arrow to bring the panel back.

## Repository layout

```
mod/jojos-cookie-clicker/     the mod as it is installed in Cookie Clicker
  main.js                     generated – do not edit by hand (see src/)
  info.txt                    Cookie Clicker mod manifest
  anims.json                  sprite-sheet metadata (frames, size, fps)
  characters/<name>/stats.js  every character's numbers – edit these to rebalance
  characters/<name>/anim/     sprite sheets  (game-derived, git-ignored)
  characters/<name>/*.png     portraits/fallback images (game-derived, git-ignored)
  assets/                     Harvest sprites, fists, ringtone (game-derived, git-ignored)
src/
  runtime.js                  all mod logic and UI
  style.css                   panel + effect styles
  gen_stats.py                regenerates characters/*/stats.js defaults
  build.py                    builds mod/.../main.js from the pieces above
tools/asset-pipeline/         regenerate the game-derived assets from your own ASBR copy
```

## Installing (players)

1. Close Cookie Clicker.
2. Copy the `mod/jojos-cookie-clicker` folder into
   `C:\Program Files (x86)\Steam\steamapps\common\Cookie Clicker\resources\app\mods\local\`
   so that `...\mods\local\jojos-cookie-clicker\main.js` exists.
3. Make sure the game-derived assets are present (see below). Without them the
   mod still runs but character images will be missing.
4. Start the game and enable **JoJo's Cookie Clicker** under Options → Mods.

## Rebalancing

Open `mod/jojos-cookie-clicker/characters/<name>/stats.js` in any text editor.
Values are listed in order: stat bonuses → cooldowns → uptime → chances.
`...Lv1` / `...Lv100` pairs set level 1 and level 100; levels in between are
interpolated (cooldowns step down every 5 levels). Save and restart the game.
A typo in one file only makes that character fall back to the built-in defaults.

## Building `main.js`

```bash
python src/build.py          # embeds the default stats, anims.json and CSS into main.js
node --check mod/jojos-cookie-clicker/main.js
```
`python src/gen_stats.py` rewrites every `stats.js` from the defaults in that script
(it overwrites hand edits).

## Regenerating the game assets (needs your own All-Star Battle R)

1. **Extract** model/texture/motion files:
   `python tools/asset-pipeline/extract_motions.py "<ASBR>/data" <Arrow-Forge folder> tools/asset-pipeline/asbr-extract`
   (uses Arrow-Forge's standard-library CPK reader; Blender's bundled Python works).
2. **Importer**: get maxcabd's `cc2_xfbin_blender_anm` add-on, put it in
   `tools/asset-pipeline/cc2_xfbin_blender/`, and apply
   `cc2_xfbin_blender_anm-blender42.patch` (Blender 4.x API fixes + a flat textured material).
3. **Render** frames with Blender 4.2 as a Python module
   (`pip install bpy==4.2.0` on Python 3.11):
   `cd tools/asset-pipeline && JJ_SPC=asbr-extract/data/spc/ BLENDER_PY=<python with bpy> python jobs.py`
4. **Pack** sprite sheets and update `anims.json`: `python tools/asset-pipeline/pack.py`,
   then `python src/build.py`.

Portraits come from the in-game character-select screen; the Harvest cursor and
fist sprites were cut from rendered models. The Doppio ringtone is a user-supplied clip.

## Credits

- Cookie Clicker by Orteil & Opti (DashNet / Playsaurus).
- XFBIN tooling: SutandoTsukai181 / mosamadeeb (xfbin_lib, cc2_xfbin_blender),
  maxcabd (animation import fork), Arrow-Forge (ASBR CPK reader).
- JoJo's Bizarre Adventure © Hirohiko Araki & LUCKY LAND COMMUNICATIONS/SHUEISHA.
