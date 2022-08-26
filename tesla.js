const main = document.querySelector(".main-1");
const menu = document.querySelector("#menuBtn");
const cross = document.querySelector(".close_sidemenu");
const blurs = document.querySelector(".blur");
const side = document.querySelector("aside");

menu.addEventListener("click", () => {
    console.log("Menu is clicked")
    blurs.classList.add("active");
    side.classList.add("active");
})

cross.addEventListener("click", () => {
    blurs.classList.remove("active");
    side.classList.remove("active");
})

const h1 = document.querySelector(".head-1");
const h2 = document.querySelector(".head-2");
const h3 = document.querySelector(".head-3");
const h4 = document.querySelector(".head-4");

const l1 = document.querySelector(".login-1");
const l2 = document.querySelector(".login-2");
const l3 = document.querySelector(".login-3");
const l4 = document.querySelector(".login-4");

const logos = document.querySelector(".logo_on_screen");

main.addEventListener("scroll", () => {
    console.log(main.scrollTop);
    const unit = main.scrollTop;

    if(unit == 0 && unit < 90) {
        h1.classList.remove("hide");
        l1.classList.remove("hide");
        logos.classList.remove("hide");
    } else {
        h1.classList.add("hide");
        l1.classList.add("hide");
        logos.classList.add("hide");
    }

    if (unit > 620 && unit < 660) {
        h2.classList.add("active");
        l2.classList.add("active");
        logos.classList.add("active");
    } else {
        h2.classList.remove("active");
        l2.classList.remove("active");
        logos.classList.remove("active");
    }

    if (unit > 1260 && unit < 1300) {
        h3.classList.add("active");
        l3.classList.add("active");
    } else {
        h3.classList.remove("active");
        l3.classList.remove("active");
    }

    if (unit > 1900 && unit < 1940) {
        h4.classList.add("active");
        l4.classList.add("active");
    } else {
        h4.classList.remove("active");
        l4.classList.remove("active");
    }
})



