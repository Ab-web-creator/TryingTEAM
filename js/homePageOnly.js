const mainDiv = document.querySelector(".main-1");
const h1 = document.querySelector(".head-1");
const h2 = document.querySelector(".head-2");
const h3 = document.querySelector(".head-3");
const h4 = document.querySelector(".head-4");

const l1 = document.querySelector(".login-1");
const l2 = document.querySelector(".login-2");
const l3 = document.querySelector(".login-3");
const l4 = document.querySelector(".login-4");


mainDiv.addEventListener("scroll", () => {
    console.log(mainDiv.scrollTop);
    const unit = mainDiv.scrollTop;
   

    if(unit == 0 && unit < 590) {
        l1.classList.add("active");
        h1.classList.remove("hide");
        l1.classList.remove("hide");
       
       
    } else {
        h1.classList.add("hide");
        l1.classList.add("hide");
       
    }

    if (unit > 850 && unit < 900) {
        h2.classList.add("active");
        l2.classList.add("active");
       
    } else {
        h2.classList.remove("active");
        l2.classList.remove("active");
       
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



