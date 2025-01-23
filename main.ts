OLED.init(60)
radio.setGroup(1)
basic.forever(function () {
    // 右
    // 左
    // 前
    // 后
    if (cbit_输入类.Rocker(
    AnalogPin.P0,
    AnalogPin.P1,
    AnalogPin.P2,
    cbit_输入类.enRocker.Up
    )) {
        radio.sendNumber(4)
        OLED.showString(
        7,
        1,
        "right",
        1
        )
    } else if (cbit_输入类.Rocker(
    AnalogPin.P0,
    AnalogPin.P1,
    AnalogPin.P2,
    cbit_输入类.enRocker.Down
    )) {
        radio.sendNumber(3)
        OLED.showString(
        0,
        1,
        "left",
        1
        )
    } else if (cbit_输入类.Rocker(
    AnalogPin.P0,
    AnalogPin.P1,
    AnalogPin.P2,
    cbit_输入类.enRocker.Left
    )) {
        radio.sendNumber(1)
        OLED.showString(
        5,
        0,
        "up",
        1
        )
    } else if (cbit_输入类.Rocker(
    AnalogPin.P0,
    AnalogPin.P1,
    AnalogPin.P2,
    cbit_输入类.enRocker.Right
    )) {
        radio.sendNumber(2)
        OLED.showString(
        5,
        3,
        "down",
        1
        )
    } else {
        radio.sendNumber(0)
        OLED.showString(
        4,
        1,
        "stop",
        1
        )
    }
    OLED.clear()
    basic.pause(50)
})
