//Sleeps js
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const fadeIn = document.getElementById("fadeInID"); //ID of main content
const body = document.body; //gets body

//Shows content with an animation
let start = async() => {
    await sleep(200);
    //Fades in and moves up
    fadeIn.style.transition = "transform 0.7s ease, opacity 0.7s ease";
    fadeIn.style.transform = "translateY(0%)";
    fadeIn.style.opacity = 1;
}
start();


