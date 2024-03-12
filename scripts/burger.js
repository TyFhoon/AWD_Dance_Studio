
function changeState(){
    let nav = document.getElementById("navID");
    let computedStyle = window.getComputedStyle(nav);
    
    nav.style.transition = "opacity 0.5s";

    //gets current opacity
    let currentOpacity = parseFloat(computedStyle.opacity);
    console.log(currentOpacity);
    //if nav opacity is 1 then set to 0. If 0 set to 1
    nav.style.opacity = (currentOpacity === 1) ? "0" : "1";
}