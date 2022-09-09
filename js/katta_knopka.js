const mainKnop3 = document.querySelector("#main_knop_clicker3");
const bluezones = document.querySelector("#bluezones");


mainKnop.addEventListener("click", () => {
    console.log("Menu-Big knop is clicked");
    bluezones.style.backgroundImage = "url(images/1_start_menu.gif)";
    mainKnop.style.zIndex = 200;
    mainKnop2.style.zIndex = 201;

    image2.attr('src', image2.src);
})
