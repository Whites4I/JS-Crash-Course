// 1. Create an object that defines a time (minutes, hours, seconds) and write the following methods:
// 1.1 To display time in hh:mm:ss format

window.onload = function () {
    window.setInterval(function () {

        const timeNow = new Date();

        const creationDateObj = {
            hours: timeNow.getHours(),
            minutes: timeNow.getMinutes(),
            seconds: timeNow.getSeconds(),

            clock() {
                const displayTime = document.getElementById("clock");
                displayTime.innerHTML = creationDateObj.seconds;
            },

            addSecond() {
                const addSecond = document.getElementById("addSecond")
                addSecond.onclick = () => {
                    creationDateObj.seconds -= 1;
                }
            }

        }

        creationDateObj.clock();

    }, 1000);
}

