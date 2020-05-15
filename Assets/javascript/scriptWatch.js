//GET ELEMENTS HTML
//img night
let nigth = document.querySelector("#night")

//Displays
let lbl_time = document.querySelector("#time")

// dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// monName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


//Function style dark
nigth.addEventListener('click', () => {
  let body = document.querySelector("body")
  let header = document.querySelector("header")
  let section = document.querySelector("section")
  let btns = document.querySelectorAll(".btn")

  let current = 'Light',
    replaceable = 'Dark';

  if (body.classList.contains("bodyDark")) {
    current = 'Dark';
    replaceable = 'Light';
  }

  body.classList.replace("body" + current, "body" + replaceable)
  header.classList.replace("header" + current, "header" + replaceable)
  section.classList.replace("section" + current, "section" + replaceable)

  for (let btn of btns) {
    btn.classList.replace("btn" + current, "btn" + replaceable)
  }
})



const countriesAndTimes = [
  france = {
    country: "France",
    city: "Paris",
    time: "Europe/Paris"
  },
  united_States = {
    country: "United States",
    city: "Nova York",
    time: "America/New_York"
  },
  spain = {
    country: "Spain",
    city: "Madrid",
    time: "Europe/Madrid"
  },
  china = {
    country: "China",
    city: "Shanghai",
    time: "Asia/Shanghai"
  },
  italy = {
    country: "Italy",
    city: "Rome",
    time: "Europe/Rome"
  },
  germany = {
    country: "Germany",
    city: "Berlin",
    time: "Europe/Berlin"
  },
  united_Kingdom = {
    country: "United Kingdom",
    city: "London",
    time: "Europe/London"
  },
  russia = {
    country: "Russia",
    city: "Moscow",
    time: "Europe/Moscow"
  },
  japan = {
    country: "Japan",
    city: "Tokyo",
    time: "Asia/Tokyo"
  },
  brazil = {
    country: "Brazil",
    city: "São Paulo",
    time: "America/Sao_Paulo"
  }
]

function Hours(i) {

  setInterval(() => {

    let country = {
      timeZone: countriesAndTimes[i].time,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    let datecountry = new Intl.DateTimeFormat([], country);
    lbl_time.innerHTML = datecountry.format(new Date())
  }, 10)
}
