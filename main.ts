input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let Index = 0; Index <= 7; Index++) {
        qwiicgpio.writeOUTPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27), Index)
        basic.pause(1000)
    }
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
input.onButtonEvent(Button.B, ButtonEvent.Hold, function () {
    basic.showNumber(qwiicgpio.readINPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27)))
})
loops.everyInterval(1000, function () {
    if (qwiicgpio.readINPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27)) == 64) {
        basic.setLedColor(0x0000ff)
        for (let Index = 0; Index <= 31; Index++) {
            qwiicgpio.writeOUTPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27), Index)
            basic.pause(1000)
        }
        basic.turnRgbLedOff()
    }
})
basic.forever(function () {
    qwiicgpio.beimStart(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27))
    qwiicgpio.setMode(
    qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27),
    qwiicgpio.eIO.IN_inverted,
    qwiicgpio.eIO.IN_inverted,
    qwiicgpio.eIO.OUT,
    qwiicgpio.eIO.OUT,
    qwiicgpio.eIO.OUT,
    qwiicgpio.eIO.OUT,
    qwiicgpio.eIO.OUT,
    qwiicgpio.eIO.OUT
    )
})
