//GET ELEMENTS HTML
let body = document.querySelector("body")
let header = document.querySelector("header")
let section = document.querySelector("section")
let btns = document.querySelectorAll(".btn")

//img night
let nigth = document.querySelector("#night")

//Displays
let lbl_time = document.querySelector("#time")

let h2Country = document.querySelector("#country")
let h2City = document.querySelector("#city")


// dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// monName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


//Function style dark
nigth.addEventListener('click', () => {
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
  alterImagBody()
})



const countriesAndTimes = [
  france = {
    country: "France",
    city: "Paris",
    time: "Europe/Paris",
    imgDay: "ParisDay",
    imgNight: "ParisNight"
  },
  united_states = {
    country: "United States",
    city: "Nova York",
    time: "America/New_York",
    imgDay: "NewYorkDay",
    imgNight: "NewYorkNight"
  },
  spain = {
    country: "Spain",
    city: "Madrid",
    time: "Europe/Madrid",
    imgDay: "MadridDay",
    imgNight: "MadridNight"
  },
  china = {
    country: "China",
    city: "Shanghai",
    time: "Asia/Shanghai",
    imgDay: "ShanghaDay",
    imgNight: "ShanghaiNight"
  },
  italy = {
    country: "Italy",
    city: "Rome",
    time: "Europe/Rome",
    imgDay: "RomeDay",
    imgNight: "RomeNight"
  },
  germany = {
    country: "Germany",
    city: "Berlin",
    time: "Europe/Berlin",
    imgDay: "BerlinDay",
    imgNight: "BerlinNight"
  },
  united_kingdom = {
    country: "United Kingdom",
    city: "London",
    time: "Europe/London",
    imgDay: "LondonDay",
    imgNight: "LondonNight"
  },
  russia = {
    country: "Russia",
    city: "Moscow",
    time: "Europe/Moscow",
    imgDay: "MoscowDay",
    imgNight: "MoscowNight"
  },
  japan = {
    country: "Japan",
    city: "Tokyo",
    time: "Asia/Tokyo",
    imgDay: "TokyoDay",
    imgNight: "TokyoNight"
  },
  brazil = {
    country: "Brazil",
    city: "Rio de Janeiro",
    time: "America/Sao_Paulo",
    imgDay: "RioDay",
    imgNight: "RioNight"
  }
]

let interval

function Hours(i) {
  h2Country.innerHTML = `${countriesAndTimes[i].country}`
  h2City.innerHTML = ` ${countriesAndTimes[i].city}`
  clearInterval(interval)
  alterImagBody()

  function count() {
    let country = {
      timeZone: countriesAndTimes[i].time,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    let datecountry = new Intl.DateTimeFormat([], country);
    lbl_time.innerHTML = datecountry.format(new Date())
  }
  interval = setInterval(count, 10)

}

function alterImagBody() {
  let index = h2Country.textContent.replace(" ", "_").toLowerCase();
  let arrayCountry = ["france", "united_states", "spain", "china", "italy", "germany", "united_kingdom", "russia", "japan", "brazil",]
  let i = arrayCountry.indexOf(index)
  img = body.classList.contains("bodyDark") ? countriesAndTimes[i].imgNight : countriesAndTimes[i].imgDay
  body.style.backgroundImage = `url('Assets/img/${img}.jpg')`
}