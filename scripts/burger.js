const nav = document.getElementById("navID");
const computedStyle = window.getComputedStyle(nav);
const burger = document.getElementById("burgerID");

window.addEventListener('resize', function() {
    nav.style.transition = "opacity 0s";
    //If the width is below 900px. It will turn off the navbar for the user to click if needed
    if (window.innerWidth < 900) {
        nav.style.opacity = "0";
    } else {
        //if its above 900, it will turn the navbar back on
        nav.style.opacity = "1";
    }
});

burger.addEventListener("click", function() {
    nav.style.transition = "opacity 0.5s";
    console.log("Clicked");
    //gets current opacity
    let currentOpacity = parseFloat(computedStyle.opacity);
    //if nav opacity is 1 then set to 0. If 0 set to 1
    nav.style.opacity = (currentOpacity === 1) ? "0" : "1";
});
