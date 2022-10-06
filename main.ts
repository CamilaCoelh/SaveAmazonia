input.onPinPressed(TouchPin.P0, function () {
    music.playMelody("C E C E D C D C ", 120)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("JÁ!")
    music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Forever)
    basic.pause(randint(1000, 5000))
    basic.showLeds(`
        . . . . #
        . . # . #
        . # # # .
        . . # . #
        . # . # .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    if (touch == 0) {
        cont_2 += 1
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (touch == 0) {
        cont_1 += 1
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
let touch = 0
let cont_2 = 0
let cont_1 = 0
cont_1 += 0
cont_2 += 0
basic.forever(function () {
	
})
