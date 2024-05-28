input.onButtonPressed(Button.A, function () {
    if (LoggingData == 0) {
        LoggingData = 1
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
    } else if (LoggingData == 1) {
        LoggingData = 0
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
let Row_to = ""
let LoggingData = 0
let header_to = ""
let logging_data = 0
logging_data += 1
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
while (logging_data == 0) {
    let Header = 0
    weatherbit.startWeatherMonitoring()
    serial.redirect(
    SerialPin.P15,
    SerialPin.P14,
    BaudRate.BaudRate9600
    )
    header_to = "Temperature" + "," + "Humidity" + "," + "Presure Pha" + "," + "Wind speed" + "," + "Direction" + "," + "Rain"
    serial.writeLine("" + (Header))
    LoggingData = 0
}
basic.forever(function () {
    if (LoggingData == 1) {
        Row_to = "" + input.runningTime() + "," + (weatherbit.temperature() + 0) + "," + (weatherbit.humidity() + 1024) + "," + (weatherbit.pressure() + 25600) + "," + weatherbit.windSpeed() + "," + weatherbit.windDirection() + "," + weatherbit.rain()
    }
    serial.writeLine("Row")
    basic.pause(1 * 1000)
})
