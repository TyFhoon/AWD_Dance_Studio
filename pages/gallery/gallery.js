
const balletButton = document.getElementById("balletButton");
const abstractButton = document.getElementById("abstractButton");
const ballet_Gallery = document.getElementById("ballet_Gallery");
const abstract_Gallery = document.getElementById("abstract_Gallery");
ballet_Gallery.style.transition = "opacity 0.7s";
abstract_Gallery.style.transition = "opacity 0.7s";

document.addEventListener("DOMContentLoaded", function () {
    balletButton.focus();
    balletButton.style.outline = "none";
});

abstractButton.addEventListener("click", function () {
    ballet_Gallery.style.opacity = "0";
    abstract_Gallery.style.opacity = "1";
});
balletButton.addEventListener("click", function () {
    ballet_Gallery.style.opacity = "1";
    abstract_Gallery.style.opacity = "0";
});

