const notificationCloser = document.getElementById("notification-close");
const burgerMenuCloser = document.getElementsByClassName("burger-menu-close")[0];
const burgerMenu = document.getElementById("burger");
const bgShadow = document.getElementById("bg-shadowing");


function closeNotification(){
    document.getElementsByClassName("notification")[0].classList.add("hide");
    document.getElementsByClassName("main-menu")[0].style.top = 0;
}

function menuToggle(){
    bgShadow.classList.toggle("hide");
    burgerMenu.classList.toggle("hide");
    document.getElementsByClassName("phone-menu")[0].classList.toggle("hide");
}

burgerMenu.addEventListener("click", menuToggle);
burgerMenuCloser.addEventListener("click", menuToggle);
notificationCloser.addEventListener("click", closeNotification);