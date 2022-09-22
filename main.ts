input.onPinPressed(TouchPin.P0, function () {
    music.playMelody("C E C E D C D C ", 120)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("JÁ!")
    music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Forever)
    basic.pause(randint(0, 5000))
    basic.showLeds(`
        . . . . #
        . . # . #
        . # # # .
        . . # . .
        . # . # .
        `)
})
