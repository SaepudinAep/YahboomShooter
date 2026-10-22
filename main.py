def bluecontrol():
    if uartData == "A":
        SuperBitV2.motor_run(SuperBitV2.enMotors.M1, 255)
        SuperBitV2.motor_run(SuperBitV2.enMotors.M3, 255)
    elif uartData == "B":
        SuperBitV2.motor_run(SuperBitV2.enMotors.M1, -255)
        SuperBitV2.motor_run(SuperBitV2.enMotors.M3, -255)
    elif uartData == "C":
        SuperBitV2.motor_run(SuperBitV2.enMotors.M1, -255)
        SuperBitV2.motor_run(SuperBitV2.enMotors.M3, 255)
    elif uartData == "D":
        SuperBitV2.motor_run(SuperBitV2.enMotors.M1, 255)
        SuperBitV2.motor_run(SuperBitV2.enMotors.M3, -255)
    elif uartData == "0":
        SuperBitV2.motor_run(SuperBitV2.enMotors.M1, 0)
        SuperBitV2.motor_run(SuperBitV2.enMotors.M3, 0)

def on_bluetooth_connected():
    global connected, uartData
    basic.show_icon(IconNames.HAPPY)
    connected = 1
    while connected == 1:
        uartData = bluetooth.uart_read_until(serial.delimiters(Delimiters.HASH))
        bluecontrol()
        SevenColorLED()
        music2()
        ModeSelect()
        SevenWaterLED()
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    global connected
    basic.show_icon(IconNames.SAD)
    connected = 0
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

def ModeSelect():
    global g_mode
    if uartData == "S":
        basic.show_icon(IconNames.HOUSE)
        g_mode = 1
    elif uartData == "T":
        basic.show_icon(IconNames.ANGRY)
        g_mode = 2
    elif uartData == "U":
        basic.show_icon(IconNames.EIGHTH_NOTE)
        g_mode = 3
    elif uartData == "V":
        basic.show_icon(IconNames.HAPPY)
        g_mode = 0
def SevenColorLED():
    if uartData == "G":
        SuperBitV2.RGB_Program().show_color(neopixel.colors(NeoPixelColors.RED))
        SuperBitV2.RGB_Program().show()
    elif uartData == "H":
        SuperBitV2.RGB_Program().show_color(neopixel.colors(NeoPixelColors.GREEN))
        SuperBitV2.RGB_Program().show()
    elif uartData == "I":
        SuperBitV2.RGB_Program().show_color(neopixel.colors(NeoPixelColors.BLUE))
        SuperBitV2.RGB_Program().show()
    elif uartData == "J":
        SuperBitV2.RGB_Program().show_color(neopixel.colors(NeoPixelColors.YELLOW))
        SuperBitV2.RGB_Program().show()
    elif uartData == "K":
        SuperBitV2.RGB_Program().show_color(neopixel.colors(NeoPixelColors.INDIGO))
        SuperBitV2.RGB_Program().show()
    elif uartData == "L":
        SuperBitV2.RGB_Program().show_color(neopixel.colors(NeoPixelColors.VIOLET))
        SuperBitV2.RGB_Program().show()
    elif uartData == "M":
        SuperBitV2.RGB_Program().clear()
        SuperBitV2.RGB_Program().show()
def SevenWaterLED():
    global g_RGBMode
    if uartData == "N":
        g_RGBMode = 1
    elif uartData == "P":
        g_RGBMode = 2
    elif uartData == "Q":
        g_RGBMode = 3
    elif uartData == "R":
        g_RGBMode = 4
    elif uartData == "W":
        g_RGBMode = 5
def music2():
    music.set_volume(255)
    if uartData == "1":
        pass
    elif uartData == "2":
        pass
    elif uartData == "3":
        pass
    elif uartData == "4":
        pass
    elif uartData == "5":
        pass
    elif uartData == "6":
        pass
    elif uartData == "7":
        pass
    elif uartData == "8":
        pass
    elif uartData == "B1":
        pass
    elif uartData == "B2":
        pass
    elif uartData == "B3":
        pass
    elif uartData == "B4":
        pass
    elif uartData == "B5":
        pass
    elif uartData == "O":
        music.set_volume(0)
g_mode = 0
uartData = ""
connected = 0
g_RGBMode = 0
i = 0
m = 0
g_RGBMode = 0
connected = 0
bluetooth.start_uart_service()
basic.show_string("S")
music.set_built_in_speaker_enabled(False)

def on_forever():
    if g_RGBMode == 1:
        basic.show_icon(IconNames.SQUARE)
    elif g_RGBMode == 2:
        basic.show_icon(IconNames.SMALL_SQUARE)
    elif g_RGBMode == 3:
        basic.show_icon(IconNames.SCISSORS)
    elif g_RGBMode == 4:
        basic.show_icon(IconNames.GHOST)
    elif g_RGBMode == 5:
        basic.show_icon(IconNames.PITCHFORK)
    basic.pause(10)
basic.forever(on_forever)
