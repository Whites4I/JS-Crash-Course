// 1. Розробити сторінку, яка буде відображати поточний час, оновлюючи його кожної секунди. Дизайн на ваш розсуд.

setInterval(
    function clock() {
        const timeNow = new Date();

        const time = {
            hours: timeNow.getHours(),
            minutes: timeNow.getMinutes(),
            seconds: timeNow.getSeconds(),

            clockInner() {
                let { hours, minutes, seconds } = time;
                hours = hours.toString().padStart(2, "0");
                minutes = minutes.toString().padStart(2, "0");
                seconds = seconds.toString().padStart(2, "0");

                const getIdCLock = document.getElementById("clock");
                getIdCLock.innerHTML = `${hours}:${minutes}:${seconds}`;
            }
        }
        time.clockInner();
    }, 1000);