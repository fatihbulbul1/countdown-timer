const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")
const age = document.getElementById("age")
const bdate = "26 Jul "
let year = "2023"
let bday = bdate + year
let bdayDate = new Date(bday)
function countdown() {  
    let currentDate = new Date()

    let totalSeconds = (bdayDate - currentDate) / 1000

    if(totalSeconds < 1){
        year++
        bday = bdate+year
        bdayDate = new Date(bday)
        age.innerHTML = parseInt(age.innerHTML) + 1
    }
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const mins = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(mins)
    secondsEl.innerHTML = formatTime(seconds)


}

function formatTime(time) {
    if(time < 10){
        return `0${time}`
    }
    return time
}

countdown()

setInterval(countdown, 1000)
