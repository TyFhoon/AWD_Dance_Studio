const nav = document.getElementById("navID");
const computedStyle = window.getComputedStyle(nav);
const burger = document.getElementById("burgerID");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener('resize', function() {
    nav.style.transition = "opacity 0s";
    //If the width is below 900px. It will turn off the navbar for the user to click if needed
    if (window.innerWidth < 900) {
        nav.style.opacity = "0";
        nav.style.zIndex = "-1";
    } else {
        //if its above 900, it will turn the navbar back on
        nav.style.opacity = "1";
        nav.style.zIndex = "10";
    }
});

burger.addEventListener("click", async function() {
    //Disables button so that the animation can finish without ny interuptions
    burger.disabled = true;
    nav.style.transition = "opacity 0.5s";
    console.log("Clicked");
    //gets current opacity
    let currentOpacity = parseFloat(computedStyle.opacity);

    if (currentOpacity === 1){
        nav.style.opacity = "0";
        //waits for the animation to finish
        await sleep(500);
        nav.style.zIndex = "-1";
    }
    else{
        nav.style.zIndex = "10";
        nav.style.opacity = "1";
    }
    burger.disabled = false;
});
