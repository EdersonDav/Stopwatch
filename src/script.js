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
    var body = document.querySelector("body")
    var header = document.querySelector("header")
    var section = document.querySelector("section")
    var buttons = document.querySelectorAll("button")

    var current = 'Light', replaceable = 'Dark';

    if(body.classList.contains("bodyDark")){
        current = 'Dark';
        replaceable = 'Light';
    }

    body.classList.replace("body"+current, "body"+replaceable)
    header.classList.replace("header"+current,"header"+replaceable)
    section.classList.replace("section"+current,"section"+replaceable)

    for(let button of buttons){
        button.classList.replace("button"+current,"button"+replaceable)
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



