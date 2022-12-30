Mbit_IR.onPressEvent(RemoteButton.Add, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 50)
})
Mbit_IR.onPressEvent(RemoteButton.Six, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 60)
})
Mbit_IR.onPressEvent(RemoteButton.Down, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 50)
})
Mbit_IR.onPressEvent(RemoteButton.Zero, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
})
Mbit_IR.onPressEvent(RemoteButton.Five, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 50)
})
Mbit_IR.onPressEvent(RemoteButton.Beep, function () {
    Tinybit.Music_Car(Tinybit.enMusic.dadadum)
})
Mbit_IR.onPressEvent(RemoteButton.Light, function () {
    if (_1 == 0) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
    } else if (_1 == 1) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
    } else if (_1 == 2) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
    } else if (_1 == 3) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.White)
    } else if (_1 == 4) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Cyan)
    } else if (_1 == 5) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Pinkish)
    } else if (_1 == 6) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Yellow)
    }
})
Mbit_IR.onPressEvent(RemoteButton.Power, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
})
Mbit_IR.onPressEvent(RemoteButton.One, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 10)
})
Mbit_IR.onPressEvent(RemoteButton.Minus, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 50)
})
Mbit_IR.onPressEvent(RemoteButton.Left, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, 50)
})
Mbit_IR.onPressEvent(RemoteButton.Four, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 40)
})
Mbit_IR.onPressEvent(RemoteButton.Right, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, 50)
})
Mbit_IR.onPressEvent(RemoteButton.Nine, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 90)
})
Mbit_IR.onPressEvent(RemoteButton.Two, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 20)
})
Mbit_IR.onPressEvent(RemoteButton.Eight, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 80)
})
Mbit_IR.onPressEvent(RemoteButton.Three, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 30)
})
Mbit_IR.onPressEvent(RemoteButton.Seven, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 70)
})
Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
})
let _1 = 0
_1 = randint(0, 6)
