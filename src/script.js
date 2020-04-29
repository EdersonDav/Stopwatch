//GET ELEMENTS HTML
//img night
var nigth =  document.querySelector("#night")

//Buttons
var btn_start =  document.querySelector("#start")
var btn_reset =  document.querySelector("#reset")
var btn_lap =  document.querySelector("#lap")
var btn_pause =  document.querySelector("#pause")
var btn_return =  document.querySelector("#return")

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

btn_start.addEventListener('click',HideButtons)
btn_pause.addEventListener('click',HideButtons)
btn_return.addEventListener('click',HideButtons)
btn_reset.addEventListener('click',RestartButtons)


//Function mode nigth
nigth.addEventListener('click', ()=> {
    var body = document.querySelector("body")
    var header = document.querySelector("header")
    var section = document.querySelector("section")
    var buttons = document.querySelectorAll("button")

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