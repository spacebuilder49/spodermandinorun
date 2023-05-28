enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Dead
}
namespace SpriteKind {
    export const Ground = SpriteKind.create()
    export const Cloud = SpriteKind.create()
}
function initGround () {
    ground1 = sprites.create(img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffcccccccccccccccccffffccccccccccccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffccccffcfffffffffffffffffffffffcffccccfffffffffffffffffffffffffccccffcfffffffffffffcffffffffffffffffffffffffffccccffcfffffffffffcffcccfffffffffffffffffcffcccffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffccccffcfffffffffffffffffffffffffccccfcfffffffcffffffffffffffccfcffffffffccccffcfffffccccffcffffffffffffffffffcfffffffffffffffccccffcfffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555ffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff55fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.Ground)
    ground2 = sprites.create(img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffffffffffffffccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffcffffcffffffffffffffffcffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ccccccccccccccccccccccccccccccccccccccccccccccccccccffffffccccccccccccccccffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffcccffcfffffffffffffffffcccffcfffffffffffcffccccffffffffffffffffffffffffffcfffffffffffffcffccccfffffffffffffffffffffffffccccffcfffffffffffffffffffffffcffccccff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffcffccccfffffffffffffffcffffffffffffffffffcffccccfffffcffccccffffffffcfccffffffffffffffcfffffffcfccccfffffffffffffffffffffffffcffccccfffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555fffffffffffffffffffffffffffffffffffffffffffffffffff555555555ffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ffffffffff555ffffffffffffffffffffffffffffffffffffffffff555555fffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffff
        ffffffffffffffffff55555555ffffffffffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffff555555555555ffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fff5fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.Ground)
    ground1.setPosition(scene.screenWidth() / 2, 120)
    ground2.setPosition(ground1.x + scene.screenWidth(), 120)
    ground1.vx = -100
    ground2.vx = -100
    ground1.z = 2
    ground2.z = 2
}
function initRaptor () {
    raptor = sprites.create(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f 2 2 2 2 f 2 f . . . 
        . . . f f 2 2 2 2 f 2 2 2 f . . 
        . . . f 2 2 2 f f 2 2 2 2 f . . 
        . . . f f f f 2 2 2 2 2 2 2 f . 
        . . . f 2 2 2 2 f f f f 2 2 f . 
        . . f f f f f f f 2 2 2 f f f . 
        . . f f 2 2 2 2 2 f 2 2 2 2 f . 
        . . f 2 2 2 2 2 2 f 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 f 2 f . . . 
        . . . . f f 2 2 2 2 2 f f . . . 
        . . . . . 2 8 8 2 2 2 f f . . . 
        . . . . . 2 8 8 2 2 2 f f . . . 
        . . . . . f 2 2 f 2 f 2 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Player)
    run = animation.createAnimation(ActionKind.Walking, 100)
    run.addAnimationFrame(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f 2 2 2 2 f 2 f . . . 
        . . . f f 2 2 2 2 f 2 2 2 f . . 
        . . . f 2 2 2 f f 2 2 2 2 f . . 
        . . . f f f f 2 2 2 2 2 2 2 f . 
        . . . f 2 2 2 2 f f f f 2 2 f . 
        . . f f f f f f f 2 2 2 f f f . 
        . . f f 2 2 2 2 2 f 2 2 2 2 f . 
        . . f 2 2 2 2 2 2 f 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 f 2 f . . . 
        . . . . f f 2 2 2 2 2 f f . . . 
        . . . . . 2 8 8 2 2 2 f f . . . 
        . . . . . 2 8 8 2 2 2 f f . . . 
        . . . . . f 2 2 f 2 f 2 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    run.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f 2 2 2 2 f 2 f . . . 
        . . . f f 2 2 2 2 f 2 2 2 f . . 
        . . . f 2 2 2 f f 2 2 2 2 f . . 
        . . . f f f f 2 2 2 2 2 2 2 f . 
        . . . f 2 2 2 2 f f f f 2 2 f . 
        . . f f f f f f f 2 2 2 f f f . 
        . . f f 2 2 2 2 2 f 2 2 2 2 f . 
        . . f 2 2 2 2 2 2 f 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 f 2 f . . . 
        . . . . 2 8 8 2 2 2 2 f f . . . 
        . . . . 2 8 8 2 2 2 f f f . . . 
        . . . . f 8 8 f 2 2 f 2 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `)
    animation.attachAnimation(raptor, run)
    jump = animation.createAnimation(ActionKind.Jumping, 200)
    jump.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f 2 2 2 2 f 2 f . . . 
        . . . f f 2 2 2 2 f 2 2 2 f . . 
        . . . f 2 2 2 f f 2 2 2 2 f . . 
        . . . f f f f 2 2 2 2 2 2 2 f . 
        . . . f 2 2 2 2 f f f f 2 2 f . 
        . . f f f f f f f 2 2 2 f f f . 
        . . f f 2 2 2 2 2 f 2 2 2 2 f . 
        . . f 2 2 2 2 2 2 f 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 f 2 f . . . 
        . . . . . f 2 8 8 2 2 f f . . . 
        . . . . . f 2 8 8 2 2 f f . . . 
        . . . . f f f 8 8 f f 2 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `)
    animation.attachAnimation(raptor, jump)
    dead = animation.createAnimation(ActionKind.Dead, 200)
    dead.addAnimationFrame(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f 2 2 2 2 f 2 f . . . 
        . . . f f 2 2 2 2 f 2 2 2 f . . 
        . . . f 2 2 2 f f 2 2 2 2 f . . 
        . . . f f f f 2 2 2 2 2 2 2 f . 
        . . . f 2 2 2 2 f f f f 2 2 f . 
        . . f f f f f f f 2 2 2 f f f . 
        . . f f 2 2 2 2 2 f 2 2 2 2 f . 
        . . f 2 2 2 2 2 2 f 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 f 2 f . . . 
        . . . . f f 2 2 2 2 2 f f . . . 
        . . . . . 2 8 8 2 2 2 f f . . . 
        . . . . . 2 8 8 2 2 2 f f . . . 
        . . . . . f 2 2 f 2 f 2 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    animation.attachAnimation(raptor, dead)
    raptor.z = 3
    raptor.setPosition(15, 94)
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (raptor.y == 94 && end == 0) {
        raptor.vy = -160
        animation.setAction(raptor, ActionKind.Jumping)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    end = 1
    animation.setAction(raptor, ActionKind.Dead)
    pause(50)
    game.over(false, effects.dissolve)
})
let cloud: Sprite = null
let cactus: Sprite = null
let choice = 0
let dead: animation.Animation = null
let jump: animation.Animation = null
let run: animation.Animation = null
let raptor: Sprite = null
let ground2: Sprite = null
let ground1: Sprite = null
let end = 0
let idle = null
game.setDialogCursor(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f 2 2 2 2 2 2 f f f . . 
    . . f f 2 2 2 2 2 2 2 2 2 f . . 
    . . f 2 2 f f f f f f 2 2 f . . 
    . . f f f f 2 2 2 2 f f f f . . 
    . f f 2 f 2 f 2 2 f 2 f 2 f f . 
    . f 2 2 2 2 f 2 2 f 2 2 2 2 f . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . . f 2 2 2 f f 2 2 2 f . . . 
    . . 8 8 f 2 2 2 2 2 2 f 8 8 . . 
    . . 8 8 f 2 2 f f f 2 f 8 8 . . 
    . . 8 8 f 2 2 2 f 2 2 f 8 8 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `)
game.splash("spoder man ")
scene.setBackgroundColor(1)
initGround()
initRaptor()
info.setScore(0)
end = 0
game.showLongText("press enter to jump", DialogLayout.Top)
game.onUpdate(function () {
    if (raptor.y < 94) {
        raptor.ay = 400
    } else {
        raptor.ay = 0
        raptor.y = 94
        if (end == 0) {
            animation.setAction(raptor, ActionKind.Walking)
        }
    }
})
game.onUpdateInterval(50, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(1000, function () {
    ground1.vx += -1
    ground2.vx += -1
})
game.onUpdateInterval(1000, function () {
    choice = randint(0, 4)
    if (choice == 0) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................ff..............
            .............fffffff............
            ...........fffffffffff..........
            .........ffffffffffffff.........
            ........ffffffffffffffff........
            ........fffffffffffffffff.......
            ........fffffffffffffffff.......
            ........fffffffffffffffff.......
            ........fffffffffffffffff.......
            ........ffffffffffffffffff......
            ........ffffffffffffffffff......
            ........ffffffffffffffffff......
            ........fffffffffffffffff.......
            ........fffffffffffffffff.......
            ........fffffffffffffffff.......
            .......fffffffffffffffff........
            .......fffffffffffffffff........
            .......fffffffffffffffff........
            .......fffffffffffffffff........
            .......fffffffffffffffff........
            ......ffffffffffffffffff........
            .....fffffffffffffffffff........
            `, ground1.vx, 0)
        cactus.y = 94
        cactus.z = 2
    } else if (choice == 1) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ...............f................
            ...............f................
            .............ffff...............
            ..........fffffffff.............
            ........ffffffffffff............
            ........ffffffffffffff..........
            ........fffffffffffffff.........
            ........fffffffffffffff.........
            ........fffffffffffffff.........
            ........ffffffffffffffff........
            ........ffffffffffffffff........
            ........ffffffffffffffff........
            ........ffffffffffffffff........
            ........ffffffffffffffff........
            .......fffffffffffffffff........
            .......ffffffffffffffffff.......
            .......ffffffffffffffffff.......
            .......ffffffffffffffffff.......
            .......fffffffffffffffffff......
            .......fffffffffffffffffff......
            .......ffffffffffffffffff.......
            .......ffffffffffffffffff.......
            .......ffffffffffffffffff.......
            `, ground1.vx, 0)
        cactus.y = 94
        cactus.z = 2
    } else if (choice == 2) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ....................f...........
            ....................f...........
            ....................f...........
            ....................f...........
            ....................f...........
            ....................f...........
            .......fffffff......f...........
            .......fffffffff...fff..........
            .......fffffffff.ffffff.........
            .......fffffffffffffffff........
            .......fffffffffffffffff........
            .......ffffffffffffffffff.......
            .......ffffffff.fffffffff.......
            .......ffffffff.fffffffff.......
            .......ffffffff.fffffffff.......
            .......ffffffff.fffffffff.......
            .......ffffffff.fffffffff.......
            ......fffffffff.fffffffff.......
            `, ground1.vx, 0)
        cactus.y = 94
        cactus.z = 2
    }
})
game.onUpdateInterval(1500, function () {
    if (Math.percentChance(40)) {
        cloud = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ...........bbbbbbb....bbb.......
            ......bbbbbbbbbbbbbbbbbbbbbbbb..
            ....bbbbbbbbbbbbbbbbbbbbbbbbbbb.
            ...bbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            ...bbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            .bbbbbbbbbbbbbbbbbbbbbbbbbbbbb..
            .bbbbbbbbbbbbbbbbbbbbbbbbbbbbb..
            .bbbbbbbbbbbbbbbb...............
            .bbbbbbbbbbbbbbbb...............
            .bbbbbbbbbbbbbbb................
            .bbbbbbbbb......................
            ................................
            `, ground1.vx / 4, 0)
        cloud.y = randint(20, 60)
        cloud.setKind(SpriteKind.Cloud)
        cloud.z = 1
    }
})
forever(function () {
    if (ground2.x < -1 * (scene.screenWidth() / 2)) {
        ground2.x = ground1.x + scene.screenWidth()
    }
})
forever(function () {
    if (ground1.x < -1 * (scene.screenWidth() / 2)) {
        ground1.x = ground2.x + scene.screenWidth()
    }
})
