input.onButtonPressed(Button.A, function () {
    startbit.setPWMServo(startbit.startbit_servorange.range1, 3, 0, 500)
    basic.pause(500)
    startbit.setPWMServo(startbit.startbit_servorange.range1, 1, 0, 500)
    basic.pause(500)
    startbit.setPWMServo(startbit.startbit_servorange.range1, 2, 0, 500)
})
input.onButtonPressed(Button.AB, function () {
    startbit.startbit_setMotorSpeed(100, -100)
    basic.pause(500)
    startbit.startbit_setMotorSpeed(-100, 100)
    basic.pause(500)
    startbit.startbit_setMotorSpeed(0, 0)
})
input.onButtonPressed(Button.B, function () {
    startbit.setPWMServo(startbit.startbit_servorange.range1, 3, 90, 500)
    basic.pause(500)
    startbit.setPWMServo(startbit.startbit_servorange.range1, 2, 90, 500)
    basic.pause(500)
    startbit.setPWMServo(startbit.startbit_servorange.range1, 1, 90, 500)
})
startbit.startbit_Init()
basic.forever(function () {
	
})
