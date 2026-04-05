bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    receivedString = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    x = parseFloat(receivedString.substr(0, 2))
    y = parseFloat(receivedString.substr(2, 2))
    z = parseFloat(receivedString.substr(4, 2))
    yaw = parseFloat(receivedString.substr(6, 2))
    pitch = parseFloat(receivedString.substr(8, 2))
    mouth = parseFloat(receivedString.substr(10, 2))
    left_eye = parseFloat(receivedString.substr(12, 2))
    right_eye = parseFloat(receivedString.substr(14, 2))
    roll = parseFloat(receivedString.substr(16, 1))
    smile = parseFloat(receivedString.substr(17, 1))
    face_visible = parseFloat(receivedString.substr(18, 1))
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S3, Math.map(mouth, 0, 90, 0, 50))
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S1, Math.map(pitch, 10, 90, 0, 180))
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S2, Math.map(yaw, 10, 90, 135, 45))
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S4, Math.map(left_eye, 10, 60, 0, 98))
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S5, Math.map(right_eye, 10, 60, 155, 70))
})
let face_visible = 0
let smile = 0
let roll = 0
let right_eye = 0
let left_eye = 0
let mouth = 0
let pitch = 0
let yaw = 0
let z = 0
let y = 0
let x = 0
let receivedString = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
