function Random () {
    Shedletsky = sprites.create(assets.image`shedletsky`, SpriteKind.Player)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let _1x1x1x1: Sprite = null
let Shedletsky: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Random()
controller.moveSprite(Shedletsky)
scene.cameraFollowSprite(Shedletsky)

// Set up life system with custom heart icon
info.setLife(5)
let heartIcon = image.create(7, 7)
heartIcon.fill(0)
heartIcon.setPixel(1, 0, 2)
heartIcon.setPixel(5, 0, 2)
heartIcon.setPixel(0, 1, 2)
heartIcon.setPixel(2, 1, 2)
heartIcon.setPixel(4, 1, 2)
heartIcon.setPixel(6, 1, 2)
heartIcon.setPixel(0, 2, 2)
heartIcon.setPixel(1, 2, 2)
heartIcon.setPixel(2, 2, 2)
heartIcon.setPixel(3, 2, 2)
heartIcon.setPixel(4, 2, 2)
heartIcon.setPixel(5, 2, 2)
heartIcon.setPixel(6, 2, 2)
heartIcon.setPixel(1, 3, 2)
heartIcon.setPixel(2, 3, 2)
heartIcon.setPixel(3, 3, 2)
heartIcon.setPixel(4, 3, 2)
heartIcon.setPixel(5, 3, 2)
heartIcon.setPixel(2, 4, 2)
heartIcon.setPixel(3, 4, 2)
heartIcon.setPixel(4, 4, 2)
heartIcon.setPixel(3, 5, 2)
info.setLifeImage(heartIcon)
// Dark, forsaken atmosphere - Creation of Hatred style
music.setTempo(100)

forever(function () {
    // Ominous main theme with dissonance
    music.playTone(110, music.beat(BeatFraction.Whole))     // A2 - dark low note
    music.playTone(117, music.beat(BeatFraction.Half))      // A#2 - dissonant
    music.playTone(110, music.beat(BeatFraction.Half))      // A2
    
    music.rest(music.beat(BeatFraction.Quarter))
    
    music.playTone(131, music.beat(BeatFraction.Whole))     // C3 - tension
    music.playTone(139, music.beat(BeatFraction.Half))      // C#3 - dissonant
    music.playTone(147, music.beat(BeatFraction.Half))      // D3
    
    music.rest(music.beat(BeatFraction.Quarter))
    
    music.playTone(123, music.beat(BeatFraction.Double))    // B2 - haunting sustain
    music.playTone(110, music.beat(BeatFraction.Whole))     // A2 - resolve dark
})

forever(function () {
    // Heavy, pulsing bass for dread
    music.playTone(55, music.beat(BeatFraction.Half))       // A1 - very low
    music.playTone(55, music.beat(BeatFraction.Half))       // A1
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(58, music.beat(BeatFraction.Half))       // A#1 - dissonant pulse
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(55, music.beat(BeatFraction.Whole))      // A1 - deep rumble
    music.playTone(49, music.beat(BeatFraction.Whole))      // G1 - ominous low
})

for (let value of tiles.getTilesByType(assets.tile`spawn`)) {
    _1x1x1x1 = sprites.create(assets.image`1x1x1x1`, SpriteKind.Enemy)
    tiles.placeOnTile(_1x1x1x1, value)
    tiles.setTileAt(value, sprites.dungeon.floorDark0)
}