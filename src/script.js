//GET ELEMENTS HTML
//img night
let nigth =  document.querySelector("#night")

//Buttons
let btn_start =  document.querySelector("#start")
let btn_reset =  document.querySelector("#reset")
let btn_lap =  document.querySelector("#lap")
let btn_pause =  document.querySelector("#pause")
let btn_return =  document.querySelector("#return")

//Displays 
let lbl_miliSec = document.querySelector("#miliSec")
let lbl_sec = document.querySelector("#sec")
let lbl_min = document.querySelector("#min")
let lbl_hr = document.querySelector("#hr")

//Function mode nigth
nigth.addEventListener('click', ()=> {
    let body = document.querySelector("body")
    let header = document.querySelector("header")
    let section = document.querySelector("section")
    let buttons = document.querySelectorAll("button")

    if(body.classList.contains("bodyLight")){

        body.classList.replace("bodyLight","bodyDark")
        header.classList.replace("headerLight","headerDark")
        section.classList.replace("sectionLight","sectionDark")

        for(let button of buttons){
            button.classList.replace("buttonLight","buttonDark")
        }

    }else{
        body.classList.replace("bodyDark","bodyLight")
        header.classList.replace("headerDark","headerLight")
        section.classList.replace("sectionDark","sectionLight")

        for(let button of buttons){
            button.classList.replace("buttonDark","buttonLight")
        }
    }

})

//Function hide buttons
function HideButtons(){

    if(btn_start.style.display != "none" || btn_pause.style.display == "none"){

        //hide button start
        btn_start.style.display = "none"
        
        //reveal button pause and button lap
        btn_pause.style.display = "inline"
        btn_lap.style.display = "inline"

        //hide button pause and button lap
        btn_return.style.display = "none"
        btn_reset.style.display = "none"

    }else if(btn_pause.style.display != "none"){

        //hide button pause and button lap
        btn_pause.style.display = "none"
        btn_lap.style.display = "none"

        //reveal button pause and button lap
        btn_return.style.display = "inline"
        btn_reset.style.display = "inline"
    }
    
}

function RestartButtons(){

    //reveal button start
    btn_start.style.display = "inline"

    //hide button pause and button lap
    btn_return.style.display = "none"
    btn_reset.style.display = "none"

}

function Run() {
    let numMiliSec = 0;

    setInterval(() => {
        lbl_miliSec.innerHTML =  numMiliSec
        numMiliSec++
    }, 100);
    
}

//Call Functions
btn_start.addEventListener('click',()=>{HideButtons(); Run()})
btn_pause.addEventListener('click',HideButtons)
btn_return.addEventListener('click',HideButtons)
btn_reset.addEventListener('click',RestartButtons)


