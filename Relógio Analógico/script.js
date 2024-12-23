const mins_pointer = document.getElementById("mins-pointer")
const hours_pointer = document.getElementById("hours-pointer")
const secs_pointer = document.getElementById("secs-pointer")

function updateRotate() {
    let currentDate = new Date()

    if (currentDate.getHours <= 12) {
        hours_pointer.style.rotate = `${currentDate.getHours() * 6}deg`
    } else {
        hours_pointer.style.rotate = `${(currentDate.getHours() - 12) * 6}deg`
    }
    mins_pointer.style.rotate = `${currentDate.getMinutes() * 6}deg`
    secs_pointer.style.rotate = `${currentDate.getSeconds() * 6}deg`
}

updateRotate()

setInterval(updateRotate, 1000)