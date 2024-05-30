def on_button_pressed_a():
    global LoggingData
    if LoggingData == 0:
        LoggingData = 1
        basic.show_leds("""
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            """)
    elif LoggingData == 1:
        LoggingData = 0
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
input.on_button_pressed(Button.A, on_button_pressed_a)

Row = ""
LoggingData = 0
header_to = ""
logging_data = 0
logging_data += -1
basic.show_leds("""
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    """)
while logging_data == -1:
    Header = 0
    weatherbit.start_weather_monitoring()
    serial.redirect(SerialPin.P15, SerialPin.P14, BaudRate.BAUD_RATE9600)
    header_to = "Temperature" + "," + "Humidity" + "," + "Presure Pha" + "," + "Wind speed" + "," + "Direction" + "," + "Rain"
    serial.write_line("" + str((Header)))
    LoggingData = 0

def on_forever():
    global Row
    if LoggingData == 1:
        Row = "" + str(input.running_time()) + "," + str((weatherbit.temperature() + 0)) + "," + str((weatherbit.humidity() + 1024)) + "," + str((weatherbit.pressure() + 25600)) + "," + str(weatherbit.wind_speed()) + "," + weatherbit.wind_direction() + "," + str(weatherbit.rain())
        serial.write_line(Row)
        basic.pause(1 * 1000)
basic.forever(on_forever)
