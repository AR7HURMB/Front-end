const hoursElem = document.getElementById("hours");
const minsElem = document.getElementById("minutes");
const secsElem = document.getElementById("seconds");

function updateClock() {
    let currentDate = new Date()
    hoursElem.textContent = currentDate.getHours()
    minsElem.textContent = currentDate.getMinutes()
    secsElem.textContent = currentDate.getSeconds()
}

setInterval(updateClock, 1)