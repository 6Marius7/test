input.onButtonPressed(Button.A, function () {
	
})
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
	
})
