const leftSliderArrow = document.getElementById("left-slider-nav-btn");
const rightSliderArrow = document.getElementById("right-slider-nav-btn");
const placeholder = document.getElementById("slider-img-placeholder");

sliderNavDots = [
    document.getElementById("slider-nav-dot-1"),
    document.getElementById("slider-nav-dot-2"),
    document.getElementById("slider-nav-dot-3")
];

images = [
    "https://mebliromax.com.ua/sites/default/files/2023-12/beylis_polo-15.jpg",
    "https://vetromebel.com/storage/17329/66b4b94a5245a_654909d8842f7_m-70-siriy-chorniy3.jpg",
    "https://images.prom.ua/4795434210_w600_h600_4795434210.jpg",
];

i = 0;

sliderNavDots[0].style.background = "#ffffff";

function sliderLeft(){
    sliderNavDots[0].style.background = "#6C7275";
    sliderNavDots[1].style.background = "#6C7275";
    sliderNavDots[2].style.background = "#6C7275";

    if(i != 2){
        i += 1;

        placeholder.style.backgroundImage = "url(" + images[i] + ")";
        sliderNavDots[i].style.background = "#ffffff";    
    }

    else{
        i = 0;
        placeholder.style.backgroundImage = "url(" + images[0] + ")";
        sliderNavDots[0].style.background = "#ffffff";
    }

    return i;
}

function sliderRight(){
    sliderNavDots[0].style.background = "#6C7275";
    sliderNavDots[1].style.background = "#6C7275";
    sliderNavDots[2].style.background = "#6C7275";

    if(i != 0){
        i -= 1;
        placeholder.style.backgroundImage = "url(" + images[i] + ")";
        sliderNavDots[i].style.background = "#ffffff";
    }

    else{
        i = 2;
        placeholder.style.backgroundImage = "url(" + images[2] + ")";
        sliderNavDots[2].style.background = "#ffffff";
    }

    return i;
}

leftSliderArrow.addEventListener("click", sliderRight);
rightSliderArrow.addEventListener("click", sliderLeft);