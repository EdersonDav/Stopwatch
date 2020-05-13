//GET ELEMENTS HTML
//img night
let nigth = document.querySelector("#night")

//Displays
let lbl_time = document.querySelector("#time")

dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
monName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


function Hours() {
  setInterval(() => {
    let now = new Date
    let hrs = now.getHours() < 10 ? "0" + now.getHours() : now.getHours()
    let min = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()
    let sec = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds()
    //console.log(dayName[now.getDay()] + monName[now.getMonth()])
    lbl_time.innerHTML = `${hrs}:${min}:${sec}`

  }, 10)
}

//Function style dark
nigth.addEventListener('click', () => {
  let body = document.querySelector("body")
  let header = document.querySelector("header")
  let section = document.querySelector("section")

  let current = 'Light',
    replaceable = 'Dark';

  if (body.classList.contains("bodyDark")) {
    current = 'Dark';
    replaceable = 'Light';
  }

  body.classList.replace("body" + current, "body" + replaceable)
  header.classList.replace("header" + current, "header" + replaceable)
  section.classList.replace("section" + current, "section" + replaceable)

})

