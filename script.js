setInterval(setClock, 1000);

const hourClock = document.querySelector('[data-hour-counter]');
const minuteClock = document.querySelector('[data-minute-counter]');
const secondClock = document.querySelector('[data-secund-counter]');

function setClock() {
    const now = new Date();
    const secondsRatio = now.getSeconds() / 60;
    const minutesRatio = (now.getMinutes() + secondsRatio) / 60;
    const hoursRatio = (now.getHours() + minutesRatio) / 12;

    rotateClockHand(secondClock, secondsRatio);
    rotateClockHand(minuteClock, minutesRatio);
    rotateClockHand(hourClock, hoursRatio);
}

function rotateClockHand(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();
