
// document.getElementById("main_knop_clicker").addEventListener("click", change_gif);
// function change_gif () {
//     console.log("dddd");
//     document.getElementById("bluezones").style.backgroundImage = "url(images/1_start_menu.gif)";
// }



const mainKnop1_1 = document.querySelector("#main_knop_clicker1_1");
const mainKnop1_2 = document.querySelector("#main_knop_clicker1_2");
const mainKnop2_1 = document.querySelector("#main_knop_clicker2_1");
const mainKnop2_2 = document.querySelector("#main_knop_clicker2_2");

const bluezone1 = document.querySelector("#blueZone1");



mainKnop1_1.addEventListener("click", () => {
    console.log("Menu-Big knop 1 is clicked");

    bluezone1.style.backgroundImage = "url(images/1_start_menu.gif)";
    mainKnop1_1.style.zIndex = 200;
    mainKnop1_2.style.zIndex = 201;
})


mainKnop1_2.addEventListener("click", () => {
    console.log("Menu-Big knop 2 is clicked");
    bluezone1.style.backgroundImage = "url(images/1_stop_menu.gif)";
    mainKnop1_1.style.zIndex = 1200;

    setTimeout(() => {
        bluezone1.style.backgroundImage = "url(images/1_basis.gif)";
        mainKnop1_2.style.zIndex = 200;
        mainKnop1_1.style.zIndex = 201;
      }, 1000)
    
})

// mainKnop3.addEventListener("click", () => {
//     console.log("Menu-Big knop 3 is clicked");
//     bluezone2.style.backgroundImage = "url(images/1_basis.gif)";
//     mainKnop3.style.zIndex = 200;
//     mainKnop2.style.zIndex = 200;
//     mainKnop1.style.zIndex = 201;
 
// })