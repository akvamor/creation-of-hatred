# Copilot Instructions for Creation of Hatred

## Project Overview
This is a **MakeCode Arcade** game project using TypeScript. The game involves a player character (Shedletsky) avoiding enemies (1x1x1x1) with collision detection and background music loops.

## Architecture & Key Files

### Core Game Files
- **`main.ts`**: Primary game logic with event handlers, sprite setup, and music sequences
- **`main.blocks`**: Visual block-based representation (MakeCode blocks editor)
- **`assets.json`**: Empty asset manifest (assets defined in `.jres` files)
- **`images.g.ts`** & **`images.g.jres`**: Auto-generated sprite images (DO NOT manually edit)
- **`tilemap.g.ts`** & **`tilemap.g.jres`**: Auto-generated tilemap data (DO NOT manually edit)

### PXT Modules (Dependencies)
Located in `pxt_modules/`:
- **`game/`**: Core game engine (sprites, physics, scenes, controllers)
- **`device/`**: Device-specific sprites and assets
- **`base/`**: Low-level runtime (control, math, buffers)
- **`core/`**: Hardware abstractions (pins, I2C, SPI)
- **`screen/`, `mixer/`, `power/`, `settings/`**: Subsystem modules

## Development Workflow

### Building & Testing
Use the PXT CLI commands defined in `Makefile`:
```bash
pxt build    # Compile TypeScript
pxt deploy   # Build and deploy to device
pxt test     # Run test suite
```

### Editing the Game
- **Primary workflow**: Use MakeCode Arcade web editor at https://arcade.makecode.com/
- Import this repo via URL: https://github.com/akvamor/creation-of-hatred
- **DO NOT** manually edit `.g.ts` or `.g.jres` files - these are auto-generated from the visual editor

### GitHub Pages Deployment
- Configured via Jekyll (`Gemfile`, `_config.yml`)
- Live URL: https://akvamor.github.io/creation-of-hatred/
- Theme: `jekyll-theme-slate`
- Includes MakeCode embed script in README

## Code Patterns & Conventions

### Sprite Management
```typescript
// Create sprites using assets namespace
let sprite = sprites.create(assets.image`spriteName`, SpriteKind.Player)

// Place sprites on tilemap spawn points
for (let value of tiles.getTilesByType(assets.tile`spawn`)) {
    tiles.placeOnTile(sprite, value)
    tiles.setTileAt(value, sprites.dungeon.floorDark0) // Clear spawn tile
}
```

### Event Handlers
```typescript
// Collision detection
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
```

### Music Patterns
Multiple `forever()` loops for background music are common in this codebase:
```typescript
music.setTempo(80)
forever(function () {
    music.playTone(131, music.beat(BeatFraction.Whole)) // C3
    music.playTone(156, music.beat(BeatFraction.Half))  // D#3
    // ...
})
```

### Tilemap Usage
- Tilemaps defined visually in MakeCode editor
- Access via `tilemap` literal: `tiles.setCurrentTilemap(tilemap\`level1\`)`
- Spawn points use custom tiles (e.g., `assets.tile\`spawn\``)

## TypeScript Configuration
- **Target**: ES5 (`tsconfig.json`)
- **No implicit any**: Enabled
- **Excludes**: `pxt_modules/**/*test.ts`

## Important Constraints

### Asset Generation
- Images and tilemaps are managed through the MakeCode visual editor
- The `.jres` files contain hex-encoded image data
- The `.g.ts` files contain TypeScript wrappers auto-generated from `.jres`

### MakeCode Arcade APIs
This project uses MakeCode Arcade-specific APIs:
- `sprites.*` - Sprite creation and management
- `tiles.*` - Tilemap operations
- `controller.*` - Input handling
- `scene.*` - Camera and scene management
- `info.*` - Game info (lives, score)
- `music.*` - Audio playback

Reference: https://arcade.makecode.com/reference

## Testing
Test file `test.ts` is currently empty - tests are typically run through the MakeCode simulator rather than unit tests.
