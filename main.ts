input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let Index = 0; Index <= 7; Index++) {
        qwiicgpio.writeOUTPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27), Index)
        basic.pause(1000)
    }
})
pins.onPulsed(DigitalPin.P1, PulseValue.Low, function () {
    basic.turnRgbLedOff()
    basic.showNumber(qwiicgpio.bitwise(qwiicgpio.readINPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27)), qwiicgpio.eBit.RIGHT, 6))
})
pins.onPulsed(DigitalPin.P1, PulseValue.High, function () {
    basic.setLedColor(0x0000ff)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    for (let Index = 0; Index <= 3; Index++) {
        qwiicgpio.writeOUTPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27), Index * 16)
        basic.pause(1000)
    }
})
input.onButtonEvent(Button.A, ButtonEvent.Hold, function () {
    qwiicgpio.writeOUTPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27), 0)
})
basic.forever(function () {
    qwiicgpio.setMode(
    qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27),
    qwiicgpio.eIO.IN,
    qwiicgpio.eIO.IN,
    qwiicgpio.eIO.OUT,
    qwiicgpio.eIO.OUT,
    qwiicgpio.eIO.OUT,
    qwiicgpio.eIO.OUT,
    qwiicgpio.eIO.OUT,
    qwiicgpio.eIO.OUT
    )
})
