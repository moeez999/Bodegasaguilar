showNav();

function showNav() {
  document.querySelector(".main-navigation-bar").innerHTML = "";

  let container = document.createElement("div");

  let template = `
    <header class="main-head">
    <a href="./index.html">
      <div>
        <img class="bg-auto bg-no-repeat bg-cente" src="./img/site_logo.png" alt="" />
      </div>
    </a>
    <div class="main-nav-head">
      <div class="nav-head">
        <div class="header">
          <p class="header-items">
            DELIVERY | Quito - Cumbayá - Tumbaco - Puembo - Los Chillos
          </p>
          <p class="header-items">CALL CENTER | <span class="phone-no">+593 2 32 2311</span></p>
          <p class="header-items">WHATSAPP | <span class="phone-no">+593 99 203 0363</span></p>
          <p class="face-insta"><a href=""><i class="fa-brands fa-facebook-f"></i> </i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
          </p>
        </div>
        <div class="border-bottom"></div>
      </div>
      <nav class="navigation-bar">
        <ul class="nav-list">
          <li class="nav-items  dropdown " >
            Start <i class="fa fa-angle-down"></i></i>
            <ul class=" dropdown-content" >
            <a  class="subnav-items" href="./index.html">
                <li>store</li>
              </a>
              <a  class="subnav-items" href="./cateringandrestobar.html">
                <li>Catering and Restobar</li>
              </a>
            </ul>
          </li>
          <li class="nav-items dropdown">
            Products <i class="fa fa-angle-down"></i></i>
            <ul class="dropdown-content " >
            <a  class="subnav-items" href="./completecatalog.html">Complete Catalog</a>
              <a  class="subnav-items" href="./fruitsandvegetable.html">Fruits and vegetables</a>
              <a  class="subnav-items" href="./meatfishvegan.html">Meats, fish <br> and Vegan Food</a>
              <a  class="subnav-items" href="./juicesbeverages.html">Juices, Beverages and <br>Liquors</a>
              <a  class="subnav-items" href="./snacksandpreserves.html">Snacks and Preserves</a>
            </ul>
          </li>
          <li class="nav-items dropdown">
            My shopping <i class="fa fa-angle-down"></i></i>
            <ul class="dropdown-content" >
              <a class="subnav-items" href="">
                <li>Sign In/Up and </li>
              </a>
              <a class="subnav-items" href="">
                <li>My Basket</li>
              </a>
              <a class="subnav-items" href="">
                <li>Buy</li>
              </a>
            </ul>
          </li>
          <li class="nav-items">Blog</li>
          <a href="./aboutus.html">
            <li class="nav-items">Us</li>
          </a>
          <a href="./contactus.html">
            <li class="nav-items">Contact Us</li>
          </a>
        </ul>
        <div class="bag-sign"><a href="./signup.html"><i class="fa-solid fa-user-plus"></a></i>
          <a  href="./cart.html"><i class="fa-solid fa-bag-shopping"></i></a>
          <p class="cart-num">0</p>
        </div>
        <a class="to-buy"" href="">To Buy</a>
      </nav>
    </div>
  </header>
  
`;
  container.innerHTML = template;
  document.querySelector(".main-navigation-bar").append(container);
}

// Reveal Event
let revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content-two");
function revealContent() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
}
revealBtn.addEventListener("click", revealContent);
showProduct(itemFour());

function showProduct(meatData) {
  document.querySelector(".products-showed").innerHTML = "";

  for (let index = 0; index < meatData.length; index++) {
    const element = meatData[index];

    let container = document.createElement("div");
    container.classList.add("product-div");
    let template = `
    <img class="product-image picture" src="${element.image}" alt="">
    <h1 class="product-title">${element.name}</h1>
    <input type="text" value="1" class="hidden amount">
    <p class="product-type">${element.category}</p>
    <p class="product-price">${element.price}</p>
    <button class="add-to-cart"><i class="fa-solid fa-bag-shopping shop uppercase"></i>ADD</button>
  
`;
    container.innerHTML = template;
    document.querySelector(".products-showed").append(container);
  }
  addToCart();
}

let meatData = itemFour();

let categoryItems = document.querySelectorAll(".categories-items");
categoryItems.forEach((categoryitem) => {
  categoryitem.addEventListener("click", function (e) {
    let appendData = document.querySelector(".products-showed");
    appendData.innerHTML = "";
    e.preventDefault();
    let sabzi = e.target.dataset.name;
    let newData = meatData.filter((c) => {
      return c.category == sabzi;
    });

    showProduct(newData);
    addToCart();
  });
});

window.onload = function () {
  var sliderSections = document.getElementsByClassName("range-slider");
  for (var x = 0; x < sliderSections.length; x++) {
    var sliders = sliderSections[x].getElementsByTagName("input");
    for (var y = 0; y < sliders.length; y++) {
      if (sliders[y].type === "range") {
        sliders[y].oninput = getVals;

        sliders[y].oninput();
      }
    }
  }
};

function getVals() {
  var parent = this.parentNode;
  var slides = parent.getElementsByTagName("input");
  var slide1 = parseFloat(slides[0].value);
  var slide2 = parseFloat(slides[1].value);

  if (slide1 > slide2) {
    var tmp = slide2;
    slide2 = slide1;
    slide1 = tmp;
  }

  var displayElement = parent.getElementsByClassName("rangeValues")[0];
  displayElement.innerHTML = slide1 + " - " + slide2;
  meatData = itemFour();

  meatData = meatData.filter(function (i) {
    return parseInt(i.price) >= slide1 && parseInt(i.price) <= slide2;
  });
  meatData = meatData.sort(function (a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
  });

  showProduct(meatData);
  addToCart();
}
function showProduct(meatData) {
  document.querySelector(".products-showed").innerHTML = "";

  for (let index = 0; index < meatData.length; index++) {
    const element = meatData[index];

    let container = document.createElement("div");
    container.classList.add("product-div");
    let template = `
    <img class="product-image picture" src="${element.image}" alt="">
    <h1 class="product-title">${element.name}</h1>
     <input type="text" value="1" class="hidden amount">
    <p class="product-type">${element.category}</p>
    <p class="product-price">${element.price}</p>
    <a href=""><button class="add-to-cart"><i class="fa-solid fa-bag-shopping shop uppercase"></i>ADD</button></a>
  
`;
    container.innerHTML = template;
    document.querySelector(".products-showed").append(container);
  }
  addToCart();
}

let groupData = _.groupBy(data, "category");

let qty = document.querySelectorAll(".item-qty");
qty.forEach((element) => {
  let datasetName =
    element.parentElement.querySelector(".categories-items").dataset.name;
  Object.entries(groupData).forEach(([key, value]) =>
    datasetName == key ? (element.innerHTML = value.length) : "0"
  );
});

let lowBtn = document.querySelector(".low");

lowBtn.addEventListener("click", function (e) {
  let appendData = document.querySelector(".products-showed");
  appendData.innerHTML = "";
  e.preventDefault();
  meatData = meatData.sort(function (a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
  });

  showProduct(meatData);
  addToCart();
});

let highBtn = document.querySelector(".high");

highBtn.addEventListener("click", function (e) {
  let appendData = document.querySelector(".products-showed");
  appendData.innerHTML = "";
  e.preventDefault();
  meatData = meatData.sort(function (a, b) {
    return parseFloat(b.price) - parseFloat(a.price);
  });

  showProduct(meatData);
  addToCart();
});
let seekBtn = document.querySelector(".seek-button");

// console.log(seekInput);
// debugger;
seekBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //   debugger;
  let seekInput = document.querySelector(".seek-input").value.toUpperCase();
  let newArray = [];
  meatData.forEach((element) => {
    if (element.name.toUpperCase().includes(seekInput)) {
      newArray.push(element);
    }
    showProduct(newArray);
    addToCart();
  });
});

function addToCart() {
  let addButtonTwo = document.querySelectorAll(".add-to-cart");
  console.log(addButtonTwo);

  function addButton(e) {
    debugger;
    e.preventDefault();

    let target = e.target;
    console.log(target);
    let food = target.closest("div");

    let quantity = food.querySelector(".amount").value;

    let image = food.querySelector(".picture").getAttribute("src");
    let price = food.querySelector(".product-price").innerText;
    let name = food.querySelector(".product-title").innerText;

    let productId = food.dataset.id;

    let product = {
      name,
      image,
      price,
      quantity,
      productId,
    };

    let cartItems = localStorage.getItem("newArray");

    if (cartItems !== null) {
      cartItems = JSON.parse(cartItems);

      cartItems.push(product);

      localStorage.setItem("newArray", JSON.stringify(cartItems));
    } else if (cartItems == null) {
      cartItems = [];
      cartItems.push(product);
      localStorage.setItem("newArray", JSON.stringify(cartItems));
    }
  }
  addButtonTwo.forEach((element) => {
    element.addEventListener("click", addButton);
  });
}
