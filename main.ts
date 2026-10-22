function bluecontrol() {
    if (uartData == "A") {
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M1, 255)
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M3, 255)
    } else if (uartData == "B") {
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M1, -255)
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M3, -255)
    } else if (uartData == "C") {
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M1, -255)
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M3, 255)
    } else if (uartData == "D") {
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M1, 255)
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M3, -255)
    } else if (uartData == "0") {
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M1, 0)
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M3, 0)
    }
    
}

bluetooth.onBluetoothConnected(function on_bluetooth_connected() {
    
    basic.showIcon(IconNames.Happy)
    connected = 1
    while (connected == 1) {
        uartData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
        bluecontrol()
        SevenColorLED()
        music2()
        ModeSelect()
        SevenWaterLED()
    }
})
bluetooth.onBluetoothDisconnected(function on_bluetooth_disconnected() {
    
    basic.showIcon(IconNames.Sad)
    connected = 0
})
function ModeSelect() {
    
    if (uartData == "S") {
        basic.showIcon(IconNames.House)
        g_mode = 1
    } else if (uartData == "T") {
        basic.showIcon(IconNames.Angry)
        g_mode = 2
    } else if (uartData == "U") {
        basic.showIcon(IconNames.EighthNote)
        g_mode = 3
    } else if (uartData == "V") {
        basic.showIcon(IconNames.Happy)
        g_mode = 0
    }
    
}

function SevenColorLED() {
    if (uartData == "G") {
        SuperBitV2.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        SuperBitV2.RGB_Program().show()
    } else if (uartData == "H") {
        SuperBitV2.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
        SuperBitV2.RGB_Program().show()
    } else if (uartData == "I") {
        SuperBitV2.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
        SuperBitV2.RGB_Program().show()
    } else if (uartData == "J") {
        SuperBitV2.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
        SuperBitV2.RGB_Program().show()
    } else if (uartData == "K") {
        SuperBitV2.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Indigo))
        SuperBitV2.RGB_Program().show()
    } else if (uartData == "L") {
        SuperBitV2.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Violet))
        SuperBitV2.RGB_Program().show()
    } else if (uartData == "M") {
        SuperBitV2.RGB_Program().clear()
        SuperBitV2.RGB_Program().show()
    }
    
}

function SevenWaterLED() {
    
    if (uartData == "N") {
        g_RGBMode = 1
    } else if (uartData == "P") {
        g_RGBMode = 2
    } else if (uartData == "Q") {
        g_RGBMode = 3
    } else if (uartData == "R") {
        g_RGBMode = 4
    } else if (uartData == "W") {
        g_RGBMode = 5
    }
    
}

function music2() {
    music.setVolume(255)
    if (uartData == "1") {
        
    } else if (uartData == "2") {
        
    } else if (uartData == "3") {
        
    } else if (uartData == "4") {
        
    } else if (uartData == "5") {
        
    } else if (uartData == "6") {
        
    } else if (uartData == "7") {
        
    } else if (uartData == "8") {
        
    } else if (uartData == "B1") {
        
    } else if (uartData == "B2") {
        
    } else if (uartData == "B3") {
        
    } else if (uartData == "B4") {
        
    } else if (uartData == "B5") {
        
    } else if (uartData == "O") {
        music.setVolume(0)
    }
    
}

let g_mode = 0
let uartData = ""
let connected = 0
let g_RGBMode = 0
let i = 0
let m = 0
g_RGBMode = 0
connected = 0
bluetooth.startUartService()
basic.showString("S")
music.setBuiltInSpeakerEnabled(false)
basic.forever(function on_forever() {
    if (g_RGBMode == 1) {
        basic.showIcon(IconNames.Square)
    } else if (g_RGBMode == 2) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (g_RGBMode == 3) {
        basic.showIcon(IconNames.Scissors)
    } else if (g_RGBMode == 4) {
        basic.showIcon(IconNames.Ghost)
    } else if (g_RGBMode == 5) {
        basic.showIcon(IconNames.Pitchfork)
    }
    
    basic.pause(10)
})
