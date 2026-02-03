input.onButtonPressed(Button.A, function () {
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 25)
})
basic.showLeds(`
    . # # # .
    . # . . .
    . # # . .
    . # . . .
    . # # # .
    `)
basic.forever(function () {
	
})
