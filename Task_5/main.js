// 1. Create an object that defines a time (minutes, hours, seconds) and write the following methods:
// 1.1 To display time in hh:mm:ss format

const timeNow = new Date()

let time = {
    hours: timeNow.getHours(),
    minutes: timeNow.getMinutes(),
    seconds: timeNow.getSeconds(),

    displayTime() {
        let hh = this.hours.toString().padStart(2, '0');
        let mm = this.minutes.toString().padStart(2, '0');
        let ss = this.seconds.toString().padStart(2, '0');
        return `${hh}:${mm}:${ss}`;
    },
    //1.2.To add one second to the time
    addOneSecond() {
        this.seconds += 1;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes += 1;
            if (this.minutes >= 60) {
                this.minutes = 0;
                this.hours += 1;
            }
        }
        this.updateDisplay();
    },
    //1.3. To substract one second from it
    subtractOneSecond() {
        this.seconds -= 1;
        if (this.seconds < 0) {
            this.seconds = 59;
            this.minutes -= 1;
            if (this.minutes < 0) {
                this.minutes = 59;
                this.hours -= 1;
            }
        }
        this.updateDisplay();
    },

    updateDisplay() {
        let timeDisplay = document.getElementById('clock');
        timeDisplay.textContent = this.displayTime();
    }
};

let timeDisplay = document.getElementById('clock');
timeDisplay.textContent = time.displayTime();

let addButton = document.getElementById('addSecond');
addButton.addEventListener('click', () => time.addOneSecond());

let subtractButton = document.getElementById('minusSecond');
subtractButton.addEventListener('click', () => time.subtractOneSecond());
