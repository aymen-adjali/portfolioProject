const body = document.querySelector("body");
const toggled = document.querySelector(".toggle");
const list = document.querySelectorAll(".nav-menu ul li a");
const nav_menu = document.querySelector(".nav-menu");
const home = document.querySelector("#home");
const project = document.querySelector("#projects");
const about = document.querySelector("#about-me");
const contact = document.querySelector("#contact-me");

const mobileMenu = () => {
    body.classList.toggle("scroll-lock");
    nav_menu.classList.toggle("active");
};

const mobile = () => {
    nav_menu.classList.toggle("active");
    body.classList.remove("scroll-lock");
};

window.addEventListener("scroll", () => {
    if(home.getBoundingClientRect().top <=1) {
        list.forEach((item) => {
            if(item.hash === "#home") {
                item.classList.add("highlight");
            } else {
                item.classList.remove("highlight");
            }
        });
    }
    if(project.getBoundingClientRect().top <=1) {
        list.forEach((item) => {
            if(item.hash === "#projects") {
                item.classList.add("highlight");
            } else {
                item.classList.remove("highlight");
            }
        });
    }
    if(about.getBoundingClientRect().top <=100) {
        list.forEach((item) => {
            if(item.hash === "#about-me") {
                item.classList.add("highlight");
            } else {
                item.classList.remove("highlight");
            }
        });
    }
    if(contact.getBoundingClientRect().top <=200) {
        list.forEach((item) => {
            if(item.hash === "#contact-me") {
                item.classList.add("highlight");
            } else {
                item.classList.remove("highlight");
            }
        });
    }
});

toggled.addEventListener("click", mobileMenu);
list.forEach((item) => {
    item.addEventListener("click", mobile);
})
