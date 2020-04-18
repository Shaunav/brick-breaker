namespace SpriteKind {
    export const edge = SpriteKind.create()
    export const ball = SpriteKind.create()
    export const top = SpriteKind.create()
    export const brick = SpriteKind.create()
    export const heart = SpriteKind.create()
    export const laserball = SpriteKind.create()
    export const ballPower = SpriteKind.create()
    export const heartPower = SpriteKind.create()
    export const extra = SpriteKind.create()
    export const safeBall = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.brick, function (sprite, otherSprite) {
    info.changeScoreBy(15)
    otherSprite.destroy(effects.ashes, 200)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    numBricks += -1
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.extra, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 200)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    numBricks += -1
    extraBall = sprites.createProjectileFromSprite(img`
4 4 4 a a 4 4 4 
4 4 a a a a 4 4 
4 a a a a a a 4 
a a a a a a a a 
a a a a a a a a 
4 a a a a a a 4 
4 4 a a a a 4 4 
4 4 4 a a 4 4 4 
`, otherSprite, 0, 40)
    extraBall.setKind(SpriteKind.ballPower)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ballPower, function (sprite, otherSprite) {
    otherSprite.destroy()
    newBall = sprites.createProjectileFromSprite(img`
8 a 8 
a a a 
8 a 8 
`, sprite, 0, -100)
    newBall.setKind(SpriteKind.safeBall)
})
sprites.onOverlap(SpriteKind.safeBall, SpriteKind.edge, function (sprite, otherSprite) {
    sprite.setVelocity(-1 * sprite.vx, sprite.vy)
})
sprites.onOverlap(SpriteKind.safeBall, SpriteKind.top, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
})
sprites.onOverlap(SpriteKind.safeBall, SpriteKind.brick, function (sprite, otherSprite) {
    info.changeScoreBy(15)
    otherSprite.destroy(effects.ashes, 200)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    numBricks += -1
})
sprites.onOverlap(SpriteKind.safeBall, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity((sprite.x - otherSprite.x) * 3, -1 * sprite.vy)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log(convertToText(numBricks))
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.heart, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 200)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    numBricks += -1
    powerHeart = sprites.createProjectileFromSprite(img`
8 2 2 8 8 2 2 8 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
8 2 2 2 2 2 2 8 
8 8 2 2 2 2 8 8 
8 8 8 2 2 8 8 8 
`, otherSprite, 0, 40)
    powerHeart.setKind(SpriteKind.heartPower)
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.edge, function (sprite, otherSprite) {
    sprite.setVelocity(-1 * sprite.vx, sprite.vy)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.heartPower, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (true) {
    	
    }
})
sprites.onOverlap(SpriteKind.safeBall, SpriteKind.extra, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 200)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    numBricks += -1
    extraBall = sprites.createProjectileFromSprite(img`
4 4 4 a a 4 4 4 
4 4 a a a a 4 4 
4 a a a a a a 4 
a a a a a a a a 
a a a a a a a a 
4 a a a a a a 4 
4 4 a a a a 4 4 
4 4 4 a a 4 4 4 
`, otherSprite, 0, 40)
    extraBall.setKind(SpriteKind.ballPower)
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity((sprite.x - otherSprite.x) * 3, -1 * sprite.vy)
    if (sprite.vy > -130) {
        sprite.vy += -5
    }
})
function buildSetBricks () {
    for (let index = 0; index <= 6; index++) {
        for (let index2 = 0; index2 < 4; index2++) {
            createBrick(index * 16 + 32, col * 8 + 24)
            col += 1
        }
        col = 0
    }
}
function createBrick (x: number, y: number) {
    randNum = Math.randomRange(0, 16)
    if (randNum <= 4) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (randNum > 4 && randNum <= 9) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (randNum > 9 && randNum <= 14) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (randNum == 15) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f a a a 2 2 2 a a 2 2 2 a a a f 
f a a a 2 2 2 2 2 2 2 2 a a a f 
f a a a 2 2 2 2 2 2 2 2 a a a f 
f a a a a 2 2 2 2 2 2 a a a a f 
f a a a a a 2 2 2 2 a a a a a f 
f a a a a a a 2 2 a a a a a a f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.heart)
    } else {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 8 8 8 8 8 a a a a 8 8 8 8 8 f 
f 8 8 8 8 a a a a a a 8 8 8 8 f 
f 8 8 8 a a a a a a a a 8 8 8 f 
f 8 8 8 a a a a a a a a 8 8 8 f 
f 8 8 8 8 a a a a a a 8 8 8 8 f 
f 8 8 8 8 8 a a a a 8 8 8 8 8 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.extra)
    }
    brick2.setPosition(x, y)
    numBricks += 1
}
sprites.onOverlap(SpriteKind.safeBall, SpriteKind.heart, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 200)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    numBricks += -1
    powerHeart = sprites.createProjectileFromSprite(img`
8 2 2 8 8 2 2 8 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
8 2 2 2 2 2 2 8 
8 8 2 2 2 2 8 8 
8 8 8 2 2 8 8 8 
`, otherSprite, 0, 40)
    powerHeart.setKind(SpriteKind.heartPower)
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.top, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
})
let startBallVar = 0
let brick2: Sprite = null
let randNum = 0
let powerHeart: Sprite = null
let newBall: Sprite = null
let extraBall: Sprite = null
let col = 0
let numBricks = 0
info.setScore(0)
info.setLife(3)
scene.setBackgroundColor(8)
let paddle = sprites.create(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, SpriteKind.Player)
paddle.setPosition(80, 110)
controller.moveSprite(paddle, 100, 0)
paddle.setFlag(SpriteFlag.StayInScreen, true)
let top2 = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.top)
top2.setPosition(80, 0)
let left = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.edge)
left.setPosition(0, 60)
let right = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.edge)
right.setPosition(159, 60)
let ballVar = sprites.create(img`
. 1 1 . 
1 1 1 1 
1 1 1 1 
. 1 1 . 
`, SpriteKind.ball)
numBricks = 0
col = 0
buildSetBricks()
game.onUpdate(function () {
    if (startBallVar == 0) {
        ballVar.setPosition(paddle.x, 105)
        ballVar.setVelocity(0, 0)
        if (controller.A.isPressed()) {
            startBallVar = 1
        }
    }
    if (startBallVar == 1) {
        ballVar.setVelocity(Math.randomRange(-30, 30), -50)
        startBallVar = 2
    }
    if (ballVar.y > 115) {
        startBallVar = 0
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (numBricks <= 0) {
        numBricks = 0
        startBallVar = 0
        effects.confetti.startScreenEffect()
        pause(2000)
        effects.confetti.endScreenEffect()
        buildSetBricks()
        info.changeScoreBy(100)
    }
})
