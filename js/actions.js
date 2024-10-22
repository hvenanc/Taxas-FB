let clickHamburger = 0;
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const container = document.querySelector(".container");
hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    clickHamburger += 1;
    if (clickHamburger == 1) {
        container.style.display = "none";
    }
    else {
        container.style.display = "block";
        clickHamburger = 0
    }
});