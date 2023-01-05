radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        message = 1
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        while (1 == receivedNumber) {
            break;
        }
    }
    if (2 == receivedNumber) {
        basic.showLeds(`
            . . # # .
            . # . . #
            . . . # .
            . . # . .
            . # # # #
            `)
        while (2 == receivedNumber) {
            break;
        }
    }
    if (3 == receivedNumber) {
        basic.showLeds(`
            . . # # .
            . # . . #
            . . . # .
            . # . . #
            . . # # .
            `)
        while (3 == receivedNumber) {
            break;
        }
    }
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.No)
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
})
radio.onReceivedValue(function (name, value) {
    if ("droite" == name) {
        droite_ou_gauche = 1
    }
    if ("gauche" == name) {
        droite_ou_gauche = 2
    }
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showIcon(IconNames.Angry)
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
})
let droite_ou_gauche = 0
let message = 0
radio.setGroup(1)
message = 0
droite_ou_gauche = 0
basic.forever(function () {
    if (3 == message) {
        if (20 < maqueen.Ultrasonic(PingUnit.Centimeters)) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        }
        if (20 > maqueen.Ultrasonic(PingUnit.Centimeters) && 5 < maqueen.Ultrasonic(PingUnit.Centimeters)) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
        }
        if (5 > maqueen.Ultrasonic(PingUnit.Centimeters)) {
            maqueen.motorStop(maqueen.Motors.All)
            radio.sendNumber(0)
            if (1 == droite_ou_gauche) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 40)
            }
            if (2 == droite_ou_gauche) {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 40)
            }
        }
    }
    if (1 == message) {
        if (0 == maqueen.readPatrol(maqueen.Patrol.PatrolRight) && 0 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        }
        if (0 == maqueen.readPatrol(maqueen.Patrol.PatrolRight) && 1 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
        }
        if (1 == maqueen.readPatrol(maqueen.Patrol.PatrolRight) && 0 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        }
        if (1 == maqueen.readPatrol(maqueen.Patrol.PatrolRight) && 1 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 40)
        }
    }
    if (3 == message) {
        if (0 == maqueen.readPatrol(maqueen.Patrol.PatrolRight) && 0 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        }
        if (0 == maqueen.readPatrol(maqueen.Patrol.PatrolRight) && 1 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        }
        if (1 == maqueen.readPatrol(maqueen.Patrol.PatrolRight) && 0 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
        }
        if (1 == maqueen.readPatrol(maqueen.Patrol.PatrolRight) && 1 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 40)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
        }
    }
})
