// 1. Розробити сторінку, яка буде відображати поточний час, оновлюючи його кожної секунди. Дизайн на ваш розсуд.

setInterval(
    function () {
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

/*
2. Розробити сторінку, яка «роздаватиме» ігральні карти двом гравцям, кожному по 6 штук. 
Тип карти обирається випадковим чином. Відобразити на сторінці карти кожного гравця. Дизайн на ваш розсуд…)
*/

function playCards(player, numberCards) {
    const cards = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'T'];
    const suit = ['♠', '♥', '♦', '♣'];
    const cardId = document.getElementById(player);
    for (let i = 1; i <= numberCards; i++) {
        const card = document.createElement('div');
        const cardRank = cards[(Math.floor(Math.random() * cards.length))];
        const cardSuit = suit[(Math.floor(Math.random() * suit.length))];
        card.className = 'card';
        card.innerHTML = `<h3>${cardRank + cardSuit}</h3><h4>${cardRank + cardSuit}</h4>`;
        cardId.appendChild(card);
    }
    console.log(cardId);
}

playCards('player1', 6);
playCards('player2', 6);