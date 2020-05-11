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

//Var for interval
let interval;

//Function mode nigth
nigth.addEventListener('click', () => {
  let body = document.querySelector("body")
  var header = document.querySelector("header")
  var section = document.querySelector("section")
  var buttons = document.querySelectorAll("button")

  var current = 'Light',
    replaceable = 'Dark';

  if (body.classList.contains("bodyDark")) {
    current = 'Dark';
    replaceable = 'Light';
  }

  body.classList.replace("body" + current, "body" + replaceable)
  header.classList.replace("header" + current, "header" + replaceable)
  section.classList.replace("section" + current, "section" + replaceable)

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

//Call Functions
btn_start.addEventListener('click', () => {
  HideButtons();


  function count() {
    if (contMili == 100) {
      contMili = 0
      lbl_sec.innerHTML = contSec < 10 ? "0" + contSec++ : contSec++
      if (contSec == 61) {
        lbl_sec.innerHTML = "0" + 0
        lbl_min.style.display = "inline"
        lbl_min.innerHTML = contmin < 10 ? "0" + contmin++ + ":" : contmin++ + ":"
        contSec = 1
        if (contmin == 61) {
          lbl_min.innerHTML = "0:" + 0
          lbl_hr.style.display = "inline"
          lbl_hr.innerHTML = conthora < 10 ? "0" + conthora++ + ":" : conthora++ + ":"
          contmin = 1
        }
      }
    }
    lbl_miliSec.innerHTML = "." + contMili++
  }
  interval = setInterval(count, 10)

})

btn_pause.addEventListener('click', () => {

  HideButtons()

  clearInterval(interval)

})

btn_return.addEventListener('click', () => {
  HideButtons()

})

btn_reset.addEventListener('click', RestartButtons)

let contLap = 1

btn_lap.addEventListener('click', () => {
  let lapArea = document.querySelector('.laps')

  lapArea.innerHTML += `<div>Lap ${contLap < 10 ? "0" + contLap : contLap} - ${conthora < 10 ? "0" + conthora : conthora}:${contmin < 10 ? "0" + contmin : contmin}:${contSec < 10 ? "0" + contSec : contSec}.<span style=" font-size: 0.5em">${contMili}</span></div>`
  contLap++
})