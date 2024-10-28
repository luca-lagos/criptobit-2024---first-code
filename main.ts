input.onButtonPressed(Button.AB, function () {
    basic.showString("ELVO")
    radio.sendValue("PRESLO", 0)
})
radio.onReceivedValue(function (name, value) {
    basic.showString(name)
})
radio.setGroup(1)
