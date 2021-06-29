function Startmenu(element){
    element = document.querySelector(".Startmenu");
    console.log(element);
    if(element.style.bottom == "-50px"){
        element.style.bottom = "-1000px"
    }
    else{
        element.style.bottom = "-50px"
    }
}

