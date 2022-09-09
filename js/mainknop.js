// document.getElementById("main_knop_clicker").addEventListener("click", change_gif);
// function change_gif () {
//     console.log("dddd");
//     document.getElementById("bluezones").style.backgroundImage = "url(images/1_start_menu.gif)";
// }

const mainKnop = document.querySelector("#main_knop_clicker");
const mainKnop2 = document.querySelector("#main_knop_clicker2");
const mainKnop3 = document.querySelector("#main_knop_clicker3");
const bluezones = document.querySelector("#bluezones");

var image1 = new Image();
image1.src = "images/1_basis.gif";
var image2 = new Image();
image2.src = "images/1_start_menu.gif";
var image3 = new Image();
image3.src = "images/1_stop_menu.gif";



mainKnop.addEventListener("click", () => {
    console.log("Menu-Big knop is clicked");
    bluezones.style.backgroundImage = "url(images/1_start_menu.gif)";
    mainKnop.style.zIndex = 200;
    mainKnop2.style.zIndex = 201;

    image2.attr('src', image2.src);
})

mainKnop2.addEventListener("click", () => {
    console.log("Menu-Big knop 2 is clicked");
    bluezones.style.backgroundImage = "url(images/1_stop_menu.gif)";
    mainKnop3.style.zIndex = 201;
    mainKnop2.style.zIndex = 200;

    image3.attr('src', image3.src);
})

mainKnop3.addEventListener("click", () => {
    console.log("Menu-Big knop 3 is clicked");
    bluezones.style.backgroundImage = "url(images/1_basis.gif)";
    mainKnop3.style.zIndex = 200;
    mainKnop2.style.zIndex = 200;
    mainKnop.style.zIndex = 201;

    image1.attr('src', image1.src);
})