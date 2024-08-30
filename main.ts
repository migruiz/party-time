let music_is_on = false
let is_moving = false
let is_speaking = false
input.onButtonPressed(Button.A, function () {
    music_is_on = !(music_is_on)
    if (music_is_on) {
        robot.playSound(Sounds.Party)
    } else {
        robot.stopAllSounds()
    }
})
input.onButtonPressed(Button.AB, function () {
    is_moving = !(is_moving)
})
input.onButtonPressed(Button.B, function () {
    is_speaking = !(is_speaking)
})
// eye brous
basic.forever(function () {
    if (is_moving) {
        robot.moveEyebrows(Eyebrows.Both, EyebrowPosition.Up)
        robot.moveEyebrows(Eyebrows.Both, EyebrowPosition.Center)
    }
})
// text
basic.forever(function () {
    if (is_speaking) {
        robot.say("PARTY TIME !!", Language.English)
        basic.pause(5000)
    }
})
// hand
basic.forever(function () {
    if (is_moving) {
        robot.moveHand(HandPosition.Right)
        robot.moveHand(HandPosition.Left)
    }
})
// body light
basic.forever(function () {
    robot.showBodyColor(BodyLightsPart.Left1, 0xff0000)
    basic.pause(500)
    robot.showBodyColor(BodyLightsPart.Left2, 0x0000ff)
    basic.pause(500)
    robot.showBodyColor(BodyLightsPart.Right1, 0xffff00)
    basic.pause(500)
    robot.showBodyColor(BodyLightsPart.Rigth2, 0x00ff00)
    basic.pause(500)
    robot.showBodyColor(BodyLightsPart.Left1, 0x00ff00)
    basic.pause(500)
    robot.showBodyColor(BodyLightsPart.Left2, 0xffff00)
    basic.pause(500)
    robot.showBodyColor(BodyLightsPart.Right1, 0x0000ff)
    basic.pause(500)
    robot.showBodyColor(BodyLightsPart.Rigth2, 0xff0000)
    basic.pause(500)
})
// text
basic.forever(function () {
    basic.showIcon(IconNames.StickFigure)
    basic.showLeds(`
        . . # . #
        . . # # .
        . # # . .
        # . # . .
        . # . # .
        `)
    basic.showLeds(`
        # . # . .
        . # # . .
        . . # # .
        . . # . #
        . # . # .
        `)
})
// text
basic.forever(function () {
    robot.showText("PARTY TIME !!")
})
// text
basic.forever(function () {
    if (is_moving) {
        robot.blowBubbles()
        basic.pause(4000)
        robot.stopBubbles()
        basic.pause(3000)
    } else {
        robot.stopBubbles()
    }
})
// eye light
basic.forever(function () {
    robot.showEyesColor(Eyes.Both, 0xff0000)
    basic.pause(200)
    robot.showEyesColor(Eyes.Both, 0x00ff00)
    basic.pause(500)
    robot.showEyesColor(Eyes.Both, 0xffff00)
    basic.pause(500)
    robot.showEyesColor(Eyes.Both, 0x0000ff)
    basic.pause(500)
})
// eyes
basic.forever(function () {
    if (is_moving) {
        robot.moveEye(Eyes.Both, EyePosition.Left)
        robot.moveEye(Eyes.Both, EyePosition.Right)
    }
})
