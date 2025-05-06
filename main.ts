input.onGesture(Gesture.Shake, function () {
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (Hand == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
let Hand = 0
music.play(music.stringPlayable("E D G F B E C E ", 120), music.PlaybackMode.UntilDone)
