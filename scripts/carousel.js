fetch("https://hryhorievmaksymkep.github.io/KP_Json_API/products.json")
    .then(response => response.json())
    .then(response => {
        let data = response;
        console.log(data);
        for(let i=0; i<5; i++){
            imgPlaceholder[i].style.backgroundImage = "url(" + data[i].img + ")";
            stars[i].textContent = data[i].rate;
            names[i].textContent = data[i].name;
            
            if(data[i].new == 0){
                newBudge[i].classList.add("hide");
            }
            if(data[i].discount != null){
                newPrices[i].textContent = data[i].price - data[i].price*data[i].discount;
                oldPrices[i].textContent = data[i].price;
                discountBudge[i].textContent = "-" + data[i].discount*100 + "%";
            }
            else{
                newPrices[i].textContent = data[i].price;
                oldPrices[i].classList.add("hide");
                discountBudge[i].classList.toggle("hide");
            }
        }
    });

const imgPlaceholder = document.getElementsByClassName("element-card");
const stars = document.getElementsByClassName("element-content-stars");
const names = document.getElementsByClassName("element-content-name");
const newPrices = document.getElementsByClassName("element-content-new-price");
const oldPrices = document.getElementsByClassName("element-content-old-price");
const discountBudge = document.getElementsByClassName("element-card-budges-sale");
const newBudge = document.getElementsByClassName("element-card-budges-new");
