let hamburger = document.getElementsByClassName("hamburger");
let cross = document.getElementsByClassName("cross");
let features = document.getElementsByClassName("features");
let hcs = document.getElementsByClassName("hcs");

let screenSm = window.matchMedia("(min-width: 860px)")
let screenXl = window.matchMedia("(min-width: 1280px)")

if(!screenSm.matches){
    hamburger[0].addEventListener('click', ()=>{
        features[0].style.display = "block";
        hamburger[0].style.display = "none";
        cross[0].style.display = "inline-block"
        hcs[0].style.transform = "translatex(-1.5rem)"
    })
    
    cross[0].addEventListener('click', ()=>{
        features[0].style.display = "none";
        hamburger[0].style.display = "inline-block";
        cross[0].style.display = "none"
        hcs[0].style.transform = "translatex(0px)"
    })
}
else if(screenSm.matches){
    console.log("screen hit xl")
    features[0].style.display = "flex";
}
