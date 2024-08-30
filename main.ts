robot.playSound(Sounds.Party)
// text
basic.forever(function () {
    robot.say("PARTY TIME !!", Language.English)
    basic.pause(2000)
})
// eye brous
basic.forever(function () {
    robot.moveEyebrows(Eyebrows.Both, EyebrowPosition.Up)
    robot.moveEyebrows(Eyebrows.Both, EyebrowPosition.Center)
})
// hand
basic.forever(function () {
    robot.moveHand(HandPosition.Right)
    robot.moveHand(HandPosition.Left)
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
    robot.blowBubbles()
    basic.pause(4000)
    robot.stopBubbles()
    basic.pause(3000)
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
    robot.moveEye(Eyes.Both, EyePosition.Left)
    robot.moveEye(Eyes.Both, EyePosition.Right)
})
