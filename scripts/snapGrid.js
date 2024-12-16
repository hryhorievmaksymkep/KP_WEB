const grid_3_3 = document.getElementsByClassName("snap-grid-3-3")[0];
const grid_4_3 = document.getElementsByClassName("snap-grid-4-3")[0];
const grid_2_4 = document.getElementsByClassName("snap-grid-2-4")[0];
const grid_1_4 = document.getElementsByClassName("snap-grid-1-4")[0];
const grid = document.getElementsByClassName("shop-page-grid-list")[0];

function fillGrid() {
  const imgPlaceholder = document.getElementsByClassName("shop-element-card");
  const stars = document.getElementsByClassName("shop-element-content-stars");
  const names = document.getElementsByClassName("shop-element-content-name");
  const newPrices = document.getElementsByClassName("shop-element-content-new-price");
  const oldPrices = document.getElementsByClassName("shop-element-content-old-price");
  const discountBudge = document.getElementsByClassName("shop-element-card-budges-sale");
  const newBudge = document.getElementsByClassName("shop-element-card-budges-new");

  fetch("https://hryhorievmaksymkep.github.io/KP_Json_API/products.json")
    .then(response => response.json())
    .then(response => {
        let data = response;
        for(let i=0; i<imgPlaceholder.length; i++){
          imgPlaceholder[i].style.backgroundImage = "url(../" + data[i].img + ")";
          stars[i].textContent = data[i].rate;
          names[i].textContent = data[i].name;
          
          if(data[i].new) {
            newBudge[i].classList.remove("hide");
        } else {
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
}


function snapGrid_3_3(){
    grid_3_3.style.background = "#E8ECEF";
    grid_4_3.style.background = "#fff";
    grid_2_4.style.background = "#fff";
    grid_1_4.style.background = "#fff";

    grid.replaceChildren();

    grid.style.gridTemplateColumns = "repeat(3, 1fr)";
    grid.style.gridTemplateRows = "repeat(3, 430px)"; 

    for(let i = 0; i<9; i++){
        const element = document.createElement('div');
        element.classList.add('shop-element');
        element.innerHTML = `
          <div class="shop-element-card">
            <div class="shop-element-card-budges">
              <p class="shop-element-card-budges-new">НОВЕ</p>
              <p class="shop-element-card-budges-sale"></p>
            </div>
            <div class="shop-element-card-favourite">
              <div class="unliked"><i class="fa-regular fa-heart"></i></div>
              <div class="liked hide"><i class="fa-solid fa-heart"></i></div>
            </div>
            <div class="shop-element-card-button-hover">
              <p>Додати до кошика</p>
            </div>
          </div>
          <div class="shop-element-content">
            <p class="shop-element-content-stars"></p>
            <p class="shop-element-content-name"></p>
            <p class="shop-element-content-prices">
              <span class="shop-element-content-new-price"></span>
              <span class="shop-element-content-old-price grey-font"></span>
            </p>
          </div>
        `;
    
        grid.appendChild(element);
    }

    fillGrid();
}

function snapGrid_4_3(){
    grid_3_3.style.background = "#fff";
    grid_4_3.style.background = "#E8ECEF";
    grid_2_4.style.background = "#fff";
    grid_1_4.style.background = "#fff";

    grid.replaceChildren();

    grid.style.gridTemplateColumns = "repeat(4, 1fr)";
    grid.style.gridTemplateRows = "repeat(3, 430px)"; 

    for(let i = 0; i<12; i++){
        const element = document.createElement('div');
        element.classList.add('element');
        element.innerHTML = `
          <div class="shop-element-card">
            <div class="shop-element-card-budges">
              <p class="shop-element-card-budges-new">НОВЕ</p>
              <p class="shop-element-card-budges-sale"></p>
            </div>
            <div class="shop-element-card-favourite">
              <div class="unliked"><i class="fa-regular fa-heart"></i></div>
              <div class="liked hide"><i class="fa-solid fa-heart"></i></div>
            </div>
            <div class="shop-element-card-button-hover">
              <p>Додати до кошика</p>
            </div>
          </div>
          <div class="shop-element-content">
            <p class="shop-element-content-stars"></p>
            <p class="shop-element-content-name"></p>
            <p class="shop-element-content-prices">
              <span class="shop-element-content-new-price"></span>
              <span class="shop-element-content-old-price grey-font"></span>
            </p>
          </div>
        `;
    
        grid.appendChild(element);
    }

    fillGrid();
}

function snapGrid_2_4(){
    grid_3_3.style.background = "#fff";
    grid_4_3.style.background = "#fff";
    grid_2_4.style.background = "#E8ECEF";
    grid_1_4.style.background = "#fff";

    grid.replaceChildren();

    grid.style.gridTemplateColumns = "repeat(2, 150px)";
    grid.style.gridTemplateRows = "repeat(4, 280px)"; 

    for(let i = 0; i<8; i++){
        const element = document.createElement('div');
        element.classList.add('element');
        element.innerHTML = `
          <div class="shop-element-card">
            <div class="shop-element-card-budges">
              <p class="shop-element-card-budges-new">НОВЕ</p>
              <p class="shop-element-card-budges-sale"></p>
            </div>
            <div class="shop-element-card-favourite">
              <div class="unliked"><i class="fa-regular fa-heart"></i></div>
              <div class="liked hide"><i class="fa-solid fa-heart"></i></div>
            </div>
            <div class="shop-element-card-button-hover">
              <p>Додати до кошика</p>
            </div>
          </div>
          <div class="shop-element-content">
            <p class="shop-element-content-stars"></p>
            <p class="shop-element-content-name"></p>
            <p class="shop-element-content-prices">
              <span class="shop-element-content-new-price"></span>
              <span class="shop-element-content-old-price grey-font"></span>
            </p>
          </div>
        `;
    
        grid.appendChild(element);
    }

    fillGrid();
}

function snapGrid_1_4(){
    grid_3_3.style.background = "#fff";
    grid_4_3.style.background = "#fff";
    grid_2_4.style.background = "#fff";
    grid_1_4.style.background = "#E8ECEF";

    grid.replaceChildren();

    grid.style.gridTemplateColumns = "repeat(1, 310px)";
    grid.style.gridTemplateRows = "repeat(4, 450px)";

    for(let i = 0; i<4; i++){
        const element = document.createElement('div');
        element.classList.add('element');
        element.innerHTML = `
          <div class="shop-element-card">
            <div class="shop-element-card-budges">
              <p class="shop-element-card-budges-new">НОВЕ</p>
              <p class="shop-element-card-budges-sale"></p>
            </div>
            <div class="shop-element-card-favourite">
              <div class="unliked"><i class="fa-regular fa-heart"></i></div>
              <div class="liked hide"><i class="fa-solid fa-heart"></i></div>
            </div>
            <div class="shop-element-card-button-hover">
              <p>Додати до кошика</p>
            </div>
          </div>
          <div class="shop-element-content">
            <p class="shop-element-content-stars"></p>
            <p class="shop-element-content-name"></p>
            <p class="shop-element-content-prices">
              <span class="shop-element-content-new-price"></span>
              <span class="shop-element-content-old-price grey-font"></span>
            </p>
          </div>
        `;
        grid.appendChild(element);
        document.getElementsByClassName("element")[i].style.width = "310px"; 
        document.getElementsByClassName("element")[i].style.height = "450px"; 
        document.getElementsByClassName("shop-element-card")[i].style.width = "310px";
        document.getElementsByClassName("shop-element-card")[i].style.backgroundSize = "310px 250px";
        document.getElementsByClassName("shop-element-content")[i].style.top = "-20px";
        document.getElementsByClassName("shop-element-card-budges")[i].style.top = "20px";
        document.getElementsByClassName("shop-element-card-budges")[i].style.left = "20px";
        document.getElementsByClassName("shop-element-card-favourite")[i].style.top = "-20px";
        document.getElementsByClassName("shop-element-card-favourite")[i].style.left = "260px";
        document.getElementsByClassName("shop-element-card-button-hover")[i].style.top = "340px";
        document.getElementsByClassName("shop-element-card-button-hover")[i].style.opacity = "1";
        document.getElementsByClassName("shop-element-card-button-hover")[i].style.visibility = "visible";
        document.getElementsByClassName("shop-element-card-button-hover")[i].style.borderRadius = "0";
        document.getElementsByClassName("shop-element-card-button-hover")[i].style.width = "300px";
        document.getElementsByClassName("shop-element-card-button-hover")[i].style.fontSize = "20px";
        document.getElementsByClassName("shop-element-content")[i].style.left = "10px";
        document.getElementsByClassName("shop-element-content")[i].style.fontSize = "20px";
        document.getElementsByClassName("shop-element-content-prices")[i].style.paddingRight = "200px";
    }

    fillGrid();
}

grid_3_3.style.background = "#fff";
grid_4_3.style.background = "#fff";
grid_2_4.style.background = "#fff";
grid_1_4.style.background = "#E8ECEF";

grid.replaceChildren();

grid.style.gridTemplateColumns = "repeat(1, 310px)";
grid.style.gridTemplateRows = "repeat(4, 450px)";

for(let i = 0; i<4; i++){
    const element = document.createElement('div');
    element.classList.add('element');
    element.innerHTML = `
      <div class="shop-element-card">
        <div class="shop-element-card-budges">
          <p class="shop-element-card-budges-new">НОВЕ</p>
          <p class="shop-element-card-budges-sale"></p>
        </div>
        <div class="shop-element-card-favourite">
          <div class="unliked"><i class="fa-regular fa-heart"></i></div>
          <div class="liked hide"><i class="fa-solid fa-heart"></i></div>
        </div>
        <div class="shop-element-card-button-hover">
          <p>Додати до кошика</p>
        </div>
      </div>
      <div class="shop-element-content">
        <p class="shop-element-content-stars"></p>
        <p class="shop-element-content-name"></p>
        <p class="shop-element-content-prices">
          <span class="shop-element-content-new-price"></span>
          <span class="shop-element-content-old-price grey-font"></span>
        </p>
      </div>
    `;
    grid.appendChild(element);
    document.getElementsByClassName("element")[i].style.width = "310px"; 
    document.getElementsByClassName("element")[i].style.height = "450px"; 
    document.getElementsByClassName("shop-element-card")[i].style.width = "310px";
    document.getElementsByClassName("shop-element-card")[i].style.backgroundSize = "310px 250px";
    document.getElementsByClassName("shop-element-content")[i].style.top = "-20px";
    document.getElementsByClassName("shop-element-card-budges")[i].style.top = "20px";
    document.getElementsByClassName("shop-element-card-budges")[i].style.left = "20px";
    document.getElementsByClassName("shop-element-card-favourite")[i].style.top = "-20px";
    document.getElementsByClassName("shop-element-card-favourite")[i].style.left = "260px";
    document.getElementsByClassName("shop-element-card-button-hover")[i].style.top = "340px";
    document.getElementsByClassName("shop-element-card-button-hover")[i].style.opacity = "1";
    document.getElementsByClassName("shop-element-card-button-hover")[i].style.visibility = "visible";
    document.getElementsByClassName("shop-element-card-button-hover")[i].style.borderRadius = "0";
    document.getElementsByClassName("shop-element-card-button-hover")[i].style.width = "300px";
    document.getElementsByClassName("shop-element-card-button-hover")[i].style.fontSize = "20px";
    document.getElementsByClassName("shop-element-content")[i].style.left = "10px";
    document.getElementsByClassName("shop-element-content")[i].style.fontSize = "20px";
    document.getElementsByClassName("shop-element-content-prices")[i].style.paddingRight = "200px";
}

fillGrid();


grid_3_3.addEventListener("click", snapGrid_3_3);
grid_4_3.addEventListener("click", snapGrid_4_3);
grid_2_4.addEventListener("click", snapGrid_2_4);
grid_1_4.addEventListener("click", snapGrid_1_4);