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
for (let value of tiles.getTilesByType(assets.tile`spawn`)) {
    _1x1x1x1 = sprites.create(assets.image`1x1x1x1`, SpriteKind.Enemy)
    tiles.placeOnTile(_1x1x1x1, value)
    tiles.setTileAt(value, sprites.dungeon.floorDark0)
    music.setTempo(80)

    forever(function () {
        music.playTone(131, music.beat(BeatFraction.Whole)) // C3
        music.playTone(156, music.beat(BeatFraction.Half))  // D#3
        music.playTone(175, music.beat(BeatFraction.Half))  // F3
        music.playTone(131, music.beat(BeatFraction.Whole)) // C3

        music.rest(music.beat(BeatFraction.Half))

        music.playTone(196, music.beat(BeatFraction.Half))  // G3
        music.playTone(175, music.beat(BeatFraction.Half))  // F3
        music.playTone(156, music.beat(BeatFraction.Whole)) // D#3

        music.rest(music.beat(BeatFraction.Whole))
    })

    music.setTempo(60)
    music.playTone(110, music.beat(BeatFraction.Double)) // Very low warning tone
    // Shedletsky, 1x1x1x1, variables, etc. above

    music.setTempo(80)

    forever(function () {
        music.playTone(131, music.beat(BeatFraction.Whole))
        music.playTone(156, music.beat(BeatFraction.Half))
        music.playTone(175, music.beat(BeatFraction.Half))
        music.playTone(131, music.beat(BeatFraction.Whole))

        music.rest(music.beat(BeatFraction.Half))

        music.playTone(196, music.beat(BeatFraction.Half))
        music.playTone(175, music.beat(BeatFraction.Half))
        music.playTone(156, music.beat(BeatFraction.Whole))

        music.rest(music.beat(BeatFraction.Whole))
    })

    sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function () {
        music.stopAllSounds()
        music.setTempo(80)
        music.playTone(131, music.beat(BeatFraction.Whole))
    })

    music.setTempo(80)

    forever(function () {
        music.playMelody("C3 D3 E3", 120);
    })

}