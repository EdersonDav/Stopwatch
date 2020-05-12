//GET ELEMENTS HTML
//img night
let nigth = document.querySelector("#night")

//Buttons
let btn_start = document.querySelector("#start")
let btn_reset = document.querySelector("#reset")
let btn_lap = document.querySelector("#lap")
let btn_pause = document.querySelector("#pause")
let btn_return = document.querySelector("#return")

//Displays 
let lbl_miliSec = document.querySelector("#miliSec")
let lbl_sec = document.querySelector("#sec")
let lbl_min = document.querySelector("#min")
let lbl_hr = document.querySelector("#hr")
let lapArea = document.querySelector('.laps')

//Var for interval
let interval;

//Function style dark
nigth.addEventListener('click', () => {
  let body = document.querySelector("body")
  let header = document.querySelector("header")
  let section = document.querySelector("section")
  let buttons = document.querySelectorAll("button")
  let divLaps = document.querySelector(".laps")

  let current = 'Light',
    replaceable = 'Dark';

  if (body.classList.contains("bodyDark")) {
    current = 'Dark';
    replaceable = 'Light';
  }

  body.classList.replace("body" + current, "body" + replaceable)
  header.classList.replace("header" + current, "header" + replaceable)
  section.classList.replace("section" + current, "section" + replaceable)
  divLaps.classList.replace("laps" + current, "laps" + replaceable)

  for (let button of buttons) {
    button.classList.replace("button" + current, "button" + replaceable)
  }

})

//Function hide buttons
function HideButtons() {

  if (btn_start.style.display != "none" || btn_pause.style.display == "none") {

    //hide button start
    btn_start.style.display = "none"

    //reveal button pause and button lap
    btn_pause.style.display = "inline"
    btn_lap.style.display = "inline"

    //hide button pause and button lap
    btn_return.style.display = "none"
    btn_reset.style.display = "none"

  } else if (btn_pause.style.display != "none") {

    //hide button pause and button lap
    btn_pause.style.display = "none"
    btn_lap.style.display = "none"

    //reveal button pause and button lap
    btn_return.style.display = "inline"
    btn_reset.style.display = "inline"
  }

}

function RestartButtons() {

  //reveal button start
  btn_start.style.display = "inline"

  //hide button pause and button lap
  btn_return.style.display = "none"
  btn_reset.style.display = "none"

}

let contMili = 00
let contSec = 00
let contmin = 00
let conthora = 00

//index laps
let contLap = 1

function initCount() {
  function count() {
    if (contMili == 100) {
      lbl_sec.innerHTML = contSec < 9 ? "0" + ++contSec : ++contSec
      contMili = 0
      if (contSec == 60) {
        lbl_sec.innerHTML = "0" + 0
        lbl_min.style.display = "inline"
        lbl_min.innerHTML = contmin < 9 ? "0" + ++contmin + ":" : ++contmin + ":"
        contSec = 1
        if (contmin == 60) {
          lbl_min.innerHTML = "0:" + 0
          lbl_hr.style.display = "inline"
          lbl_hr.innerHTML = conthora < 9 ? "0" + ++conthora + ":" : ++conthora + ":"
          contmin = 1
        }
      }
    }
    lbl_miliSec.innerHTML = "." + ++contMili
  }
  interval = setInterval(count, 10)
}

//Function reset values
function clearAndResetCount() {
  contMili = 00
  contSec = 00
  contmin = 00
  conthora = 00
  lbl_miliSec.innerHTML = '.0' + 0
  lbl_sec.innerHTML = '0' + 0
  lbl_min.innerHTML = 0
  lbl_hr.innerHTML = 0
  clearInterval(interval)
  lapArea.innerHTML = ''
  contLap = 1
  lbl_min.style.display = "none"
  lbl_hr.style.display = "none"
}

//Call Functions
btn_start.addEventListener('click', () => {
  HideButtons();
  initCount()
})

btn_pause.addEventListener('click', () => {
  HideButtons()
  clearInterval(interval)
})

btn_return.addEventListener('click', () => {
  HideButtons()
  initCount()
})

btn_reset.addEventListener('click', () => {
  clearAndResetCount()
  RestartButtons()
})

btn_lap.addEventListener('click', () => {
  lapArea.innerHTML += `<div>Lap ${contLap < 10 ? "0" + contLap : contLap} - ${conthora < 10 ? "0" + conthora : conthora}:${contmin < 10 ? "0" + contmin : contmin}:${contSec < 10 ? "0" + contSec : contSec}.<span style=" font-size: 0.5em">${contMili}</span></div>`
  contLap++
})