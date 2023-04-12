var getStoreData = JSON.parse(localStorage.getItem("newArray"));
// console.log(getStoreData);
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
              <a  class="subnav-items" href="">
                <li>Sign In/Up and </li>
              </a>
              <a  class="subnav-items" href="">
                <li>My Basket</li>
              </a>
              <a  class="subnav-items" href="">
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
      </div>
        <a class="to-buy" href="">To Buy</a>
      </nav>
    </div>
  </header>
  
`;
  container.innerHTML = template;
  document.querySelector(".main-navigation-bar").append(container);
}
// let cartData = getData();
// console.log(cartData);

showCart(getStoreData);

function showCart(x) {
  document.querySelector(".cart-items").innerHTML = "";
  // let lel = cartData.length;
  // console.log(lel);

  for (let index = 0; index < x.length; index++) {
    // console.log(x.length);
    const element = x[index];

    let container = document.createElement("div");

    container.classList.add("cart-items");

    let template = `
  
    <div class="carted-items"  id="${element.productId}" >
      <img src="${element.image}" alt="" />
      <p class="name text-base  font-semibold">${element.name}</p>
    
      
        <p class="price text-base font-semibold">${element.price}</p>
      
    <div class="ad-re">
      <button class="plus text-base" onclick="addItem(event, '${
        element.price
      }')" >+</button>
      <input class="amount text-base" type="amount" id="${
        "input-" + index
      }" value="${element.quantity}">
      <button class="minus text-base" onclick="subtractItem(event,'${
        element.price
      }')">−</button>
    </div>
      <p class="total-price text-base font-semibold">${
        element.price * element.quantity
      }</p>
      <a href="" class="remove">
        <div class="delete-button text-lg">❌</div>
      </a>
    </div>
  
  
`;
    container.innerHTML = template;
    document.querySelector(".cart-items").append(container);
  }
}

function addItem(e, productprice) {
  // debugger;
  let x = e.target;

  let rate = x.parentElement
    .closest(".carted-items")
    .querySelector(".total-price");
  // console.log(rate);
  let input = x.parentElement.closest(".carted-items").querySelector(".amount");

  let u = x.parentElement.closest(".carted-items");

  let w = u.querySelector(".name").innerHTML;

  input.value = parseInt(input.value) + 1;
  rate.innerHTML = parseFloat(productprice) * parseInt(input.value);
  subPlusTotal();
  subPlus();

  let filterItems = getStoreData.filter((itemSave) => {
    if (itemSave.productId == u.id && itemSave.name == w) {
      return (itemSave.quantity = input.value);
    }
  });

  filterItems = filterItems[0];
  let productIndex = getStoreData.indexOf(filterItems);
  getStoreData[productIndex] = filterItems;

  localStorage.setItem("newArray", JSON.stringify(getStoreData));
}

function subtractItem(e, productprice) {
  let x = e.target;

  let rate = x.parentElement
    .closest(".carted-items")
    .querySelector(".total-price");
  console.log(rate);
  let input = x.parentElement.closest(".carted-items").querySelector(".amount");
  let u = x.parentElement.closest(".carted-items");

  let w = u.querySelector(".name").innerHTML;

  if (input.value == 1) {
    iziToast.warning({
      title: "Caution",
      position: "topCenter",
      message: "Quantity should be greater than 0",
    });

    input.value = 1;
  } else {
    input.value = parseInt(input.value) - 1;
  }

  rate.innerHTML = parseFloat(productprice) * parseInt(input.value);
  subPlusTotal();
  subPlus();

  let filterItems = getStoreData.filter((itemSave) => {
    if (itemSave.productId == u.id && itemSave.name == w) {
      return (itemSave.quantity = input.value);
    }
  });

  filterItems = filterItems[0];
  let productIndex = getStoreData.indexOf(filterItems);
  getStoreData[productIndex] = filterItems;

  localStorage.setItem("newArray", JSON.stringify(getStoreData));
}

function subPlus() {
  let plus = 0;
  let pricetwo = document.querySelectorAll(".total-price");

  pricetwo.forEach((element) => {
    let subtotal = element.innerHTML;
    console.log(element);
    add = subtotal.replace("$", "");
    plus = plus + parseFloat(add);
  });
  plus = plus;

  let subtotal = document.querySelector(".sub-num");
  subtotal.innerHTML = plus;
}

function subPlusTotal() {
  let sum = 0;
  let priceOne = document.querySelectorAll(".total-price");
  let shippingFee = document.querySelector(".delivery-num").innerText;
  let v = document.querySelector(".vat-num").innerText;
  shippingFee = parseFloat(shippingFee);

  priceOne.forEach((element) => {
    let subtotal = element.innerHTML;

    add = subtotal.replace("$", "");
    sum = sum + parseFloat(add);
  });
  sum = sum + shippingFee + parseFloat(v);

  let total = document.querySelector(".total-num");
  total.innerHTML = sum;
}

//Delete Button
let deleteButton = document.querySelectorAll(".remove");

deleteButton.forEach((x) =>
  x.addEventListener("click", function (e) {
    e.preventDefault();

    let target = e.target;

    let u = target.closest(".carted-items");
    console.log(u);

    let n = u.querySelector(".name").innerHTML;
    // console.log(n);

    let removeFilterItems = getStoreData.filter((itemRemove) => {
      if (itemRemove.productId == u.id && itemRemove.name == n) {
        return u;
      }
    });
    iziToast.success({
      title: "Deleted Successfully",
      position: "center",
      message: "Item successfully removed to cart",
      color: "red",
    });
    console.log(removeFilterItems);
    removeFilterItems = removeFilterItems[0];
    let productIndex = getStoreData.indexOf(removeFilterItems);

    getStoreData.splice(productIndex, 1);

    localStorage.setItem("newArray", JSON.stringify(getStoreData));

    u.remove();
  })
);

function myFunction() {
  let sum = 0;
  let priceOne = document.querySelectorAll(".total-price");
  let shippingFee = document.querySelector(".delivery-num").innerText;
  let v = document.querySelector(".vat-num").innerText;
  let subtotal = document.querySelector(".sub-num");
  shippingFee = parseFloat(shippingFee);

  priceOne.forEach((element) => {
    let subtotal = element.innerHTML;

    add = subtotal.replace("$", "");
    sum = sum + parseFloat(add);
  });
  sum = sum + shippingFee + parseFloat(v);

  let total = document.querySelector(".total-num");
  total.innerHTML = sum;

  document.querySelector(".total-num").innerHTML = sum;

  let plus = 0;
  let pricetwo = document.querySelectorAll(".total-price");

  pricetwo.forEach((element) => {
    let subtotal = element.innerHTML;
    console.log(element);
    add = subtotal.replace("$", "");
    plus = plus + parseFloat(add);
  });
  plus = plus;

  subtotal.innerHTML = plus;
}
