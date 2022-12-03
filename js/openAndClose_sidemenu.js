// const main = document.querySelector(".main-1");
const menu = document.querySelector("#menuBtn");
const menu2 = document.querySelector("#dmenuBtn");
const cross = document.querySelector(".close_sidemenu");
const blurs = document.querySelector(".blur");
const side = document.querySelector("aside");
const figure = document.querySelector("figure");




menu.addEventListener("click", () => {
    console.log("Menu is clicked");
    blurs.classList.add("active");
    side.classList.add("active");
    figure.classList.add("active");
})



menu2.addEventListener("mouseover", () => {
    setTimeout(() => {
        side.classList.add("active");
        figure.classList.add("active");
    }, 500)

    setTimeout(() => {
        blurs.classList.add("active");
    }, 1000)

})


blurs.addEventListener("mouseover", () => {
    setTimeout(() => {
    blurs.classList.remove("active");
    side.classList.remove("active");
    figure.className = '';
    }, 100)
})

cross.addEventListener("click", () => {
    blurs.classList.remove("active");
    side.classList.remove("active");
    figure.className = '';
})
