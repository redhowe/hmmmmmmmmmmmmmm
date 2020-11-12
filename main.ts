controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Once upon a time, a snake lived in a cave. The snake was happy there, or at least he should have been. He was scared, read a book, but he realised this was where he was meant to be.", DialogLayout.Full)
    music.playMelody("C D E C E C E D ", 120)
    game.showLongText("That is the end of the game! Useless game! Only dialogue!", DialogLayout.Bottom)
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark2, function (sprite, location) {
    game.showLongText("The paper says..", DialogLayout.Bottom)
    game.showLongText("There is no goal to this game. All dialogue. If you like reading you can press B.", DialogLayout.Right)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight2, function (sprite, location) {
    game.showLongText("You throw out the paper. It would not be of any help anyway.", DialogLayout.Bottom)
    game.showLongText("That is it to this game. Why did you play anyway?", DialogLayout.Bottom)
    game.reset()
})
let mySprite = sprites.create(img`
    . . . . c c c c c c . . . . . . 
    . . . c 6 7 7 7 7 6 c . . . . . 
    . . c 7 7 7 7 7 7 7 7 c . . . . 
    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 6 c 7 7 6 f c . . 
    . . . f c c c c 7 7 6 f 7 7 c . 
    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
    . . c c c c c c c c c f . . . . 
    `, SpriteKind.Player)
game.showLongText("Hello? you say. Your speech echoes into the distance.", DialogLayout.Bottom)
game.showLongText("ROAR!!!", DialogLayout.Top)
game.showLongText("Waugh! That roar is scary! Afraid, you sneak back into the shadows...", DialogLayout.Bottom)
mySprite.x += 10
game.showLongText("Wow! You stumble upon a rock? No, it feels soft. Crunchy? Thin? You pick it up. An old piece of paper. Useless, is it?", DialogLayout.Bottom)
tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.floorDark2,sprites.dungeon.floorLight2], TileScale.Sixteen))
scene.cameraFollowSprite(mySprite)
game.showLongText("Step on white to not read. Step on purple to read.", DialogLayout.Bottom)
controller.moveSprite(mySprite)
