
const day = document.querySelector("#day")
const month = document.querySelector("#month")
const year = document.querySelector("#year")
const hour = document.querySelector("#hour")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")
const AmPm = document.querySelector("#AmPm")

// console.log(day,month,year,hour,minutes,seconds,AmPm)

const month_names = ["January", "February", "March", "April", "May", "June", "July","August", "September" , "October", "November", "December"]

function clock() {
    const dateTime = new Date()

    day.innerHTML= dateTime.getDate() + "/"
    month.innerHTML=month_names[dateTime.getMonth()] + "/"
    year.innerHTML= dateTime.getFullYear() 
    
    hour.innerHTML = dateTime.getHours() + " :"
    minutes.innerHTML = dateTime.getMinutes() + " :"
    seconds.innerHTML = + " :"

    // let sec = dateTime.getSeconds()
    // if (sec < 10) {
    //     sec= "0" +sec
        
    // }
    // seconds.innerHTML = sec +" ";

    dateTime.getSeconds() < 10 ? seconds.innerHTML= `0${dateTime.getSeconds()}` : seconds.innerHTML= dateTime.getSeconds()

    dateTime.getMinutes() < 10 ? minutes.innerHTML= `0${dateTime.getMinutes()} :` : minutes.innerHTML= dateTime.getMinutes() + " :"

    dateTime.getHours() > 12 ? AmPm.innerHTML= "Pm" : AmPm.innerHTML= "Am"


}


setInterval(clock)