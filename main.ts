input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let Index = 0; Index <= 7; Index++) {
        qwiicgpio.writeOUTPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27), Index)
        basic.pause(1000)
    }
})
function Ampelsteuerung () {
    basic.pause(500)
    GPIOAmpel(0, 0, 1, 1, 0)
    basic.pause(1000)
    GPIOAmpel(0, 1, 0, 1, 0)
    basic.pause(2000)
    GPIOAmpel(1, 0, 0, 1, 0)
    basic.pause(2000)
    GPIOAmpel(1, 0, 0, 0, 1)
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    for (let Index = 0; Index <= 3; Index++) {
        qwiicgpio.writeOUTPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27), Index * 16)
        basic.pause(1000)
    }
})
function GPIOAmpel (Rot: number, Gelb: number, Grün: number, Rot2: number, Grün2: number) {
    Byte = 0
    Byte += Rot * 2 ** 0
    Byte += Gelb * 2 ** 1
    Byte += Grün * 2 ** 2
    Byte += Rot2 * 2 ** 3
    Byte += Grün2 * 2 ** 4
    qwiicgpio.writeOUTPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27), Byte)
}
input.onButtonEvent(Button.A, ButtonEvent.Hold, function () {
    qwiicgpio.writeOUTPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27), 0)
})
input.onButtonEvent(Button.B, ButtonEvent.Hold, function () {
    basic.showNumber(qwiicgpio.readINPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27)))
})
let Byte = 0
basic.showString("I2C-GPIO-AMPEL")
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
loops.everyInterval(1000, function () {
    if (qwiicgpio.readINPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27)) == 64) {
        basic.setLedColor(0x0000ff)
        Ampelsteuerung()
    }
})
