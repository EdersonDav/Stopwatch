//Get elements HTML
var nigth =  document.querySelector("#night")

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