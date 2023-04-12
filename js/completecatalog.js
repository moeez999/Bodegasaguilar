//(1)Navigation Bar

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

// Variable for Data

var sabziData = getData();

//product show

function showProduct(sabziData) {
  document.querySelector(".products-showed").innerHTML = "";

  for (let index = 0; index < sabziData.length; index++) {
    const element = sabziData[index];

    let container = document.createElement("div");
    container.classList.add("product-div");
    container.setAttribute("data-id", `${element._id.$oid}`);
    let template = `
    <img class="product-image picture" src="${element.image}" alt="">
    <h1 class="product-title">${element.name}</h1>
    <input type="text" value="1" class="hidden amount">
    <p class="product-type">${element.category}</p>
    <p class="product-price">${element.price}</p>
<button class="add-to-cart add-cart"><i class="fa-solid fa-bag-shopping shop uppercase"></i>ADD</button>
  
`;
    container.innerHTML = template;
    document.querySelector(".products-showed").append(container);
  }
}
showProduct(sabziData);
// Pagination
const itemsPerPage = 6;

var currentPage = 1;

const pageNumbers = document.getElementById("page-numbers");
function numOfPages() {
  pageNumbers.innerHTML = "";

  const totalPages = Math.ceil(sabziData.length / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const pageNumber = document.createElement("span");
    pageNumber.innerHTML = i;
    pageNumber.addEventListener("click", function () {
      currentPage = i;
      showPage();
    });
    pageNumbers.appendChild(pageNumber);
  }
}

function showPage() {
  // debugger;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let filterData = sabziData.slice(startIndex, endIndex);
  showProduct(filterData);

  const pageNumbers = document.getElementById("page-numbers");

  for (let i = 0; i < pageNumbers.children.length; i++) {
    if (i + 1 === currentPage) {
      pageNumbers.children[i].classList.add("active");
    } else {
      pageNumbers.children[i].classList.remove("active");
    }
  }
}

numOfPages();
showPage();

//(4)category-product-show

let categoryItems = document.querySelectorAll(".categories-items");
categoryItems.forEach((categoryitem) => {
  categoryitem.addEventListener("click", function (e) {
    currentPage = 1;
    let appendData = document.querySelector(".products-showed");
    appendData.innerHTML = "";
    e.preventDefault();
    let sabzi = e.target.dataset.name;
    console.log(sabzi);
    sabziData = getData().filter((c) => {
      return c.category == sabzi;
    });
    // console.log(filteredData);

    showProduct(sabziData);
    numOfPages();
    showPage();
    addToCart();
  });
});

//(6)Categories length number
let r = document.querySelectorAll(".dot");

let groupData = _.groupBy(data, "category");

let qty = document.querySelectorAll(".item-qty");
qty.forEach((element) => {
  let datasetName =
    element.parentElement.querySelector(".categories-items").dataset.name;
  Object.entries(groupData).forEach(([key, value]) =>
    datasetName == key ? (element.innerHTML = value.length) : "0"
  );
});
// (5)Search bar

let seekBtn = document.querySelector(".seek-button");

seekBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let seekInput = document.querySelector(".seek-input").value.toUpperCase();
  let newArray = [];

  sabziData.forEach((element) => {
    if (element.name.toUpperCase().includes(seekInput)) {
      newArray.push(element);
    }
  });
  showProduct(newArray);

  addToCart();
});

// (2) Reveal Event for High and Low
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

  sabziData = sabziData.filter(function (i) {
    return parseInt(i.price) >= slide1 && parseInt(i.price) <= slide2;
  });
  sabziData = sabziData.sort(function (a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
  });

  showProduct(sabziData);
  numOfPages();
  showPage();
  addToCart();
}

//(7) Low to High Button
let lowBtn = document.querySelector(".low");

lowBtn.addEventListener("click", function (e) {
  let appendData = document.querySelector(".products-showed");
  appendData.innerHTML = "";
  e.preventDefault();
  sabziData = sabziData.sort(function (a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
  });
  showProduct(sabziData);
  addToCart();
  numOfPages();
  showPage();
});
//(8) High to low Button
let highBtn = document.querySelector(".high");

highBtn.addEventListener("click", function (e) {
  let appendData = document.querySelector(".products-showed");
  appendData.innerHTML = "";
  e.preventDefault();
  sabziData = sabziData.sort(function (a, b) {
    return parseFloat(b.price) - parseFloat(a.price);
  });
  showProduct(sabziData);
  addToCart();
  numOfPages();
  showPage();
});

// (9) Add To cart Funtion

function addToCart() {
  let addButtonTwo = document.querySelectorAll(".add-to-cart");

  function addButton(e) {
    // debugger;
    e.preventDefault();

    let target = e.target;
    console.log(target);
    let food = target.closest("div");

    let quantity = food.querySelector(".amount").value;

    let image = food.querySelector(".picture").getAttribute("src");
    let price = food.querySelector(".product-price").innerText;
    let name = food.querySelector(".product-title").innerText;

    let productId = food.dataset.id;
    console.log(productId);
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

      let t = cartItems.filter(
        (s) => s.productId == product.productId && s.name == product.name
      );
      if (t.length == 0) {
        cartItems.push(product);
      } else {
        cartItems = cartItems.map((productSave) => {
          // debugger;
          if (productSave.productId == t[0].productId) {
            // console.log(quantity);
            // debugger;
            productSave.quantity =
              parseInt(productSave.quantity) + parseInt(product.quantity);
          }
          return productSave;
        });

        localStorage.setItem("newArray", JSON.stringify(cartItems));
      }
      localStorage.setItem("newArray", JSON.stringify(cartItems));
    } else if (cartItems == null) {
      cartItems = [];
      cartItems.push(product);
      localStorage.setItem("newArray", JSON.stringify(cartItems));
    }
    iziToast.success({
      title: "Added Successfully",
      message: "Item successfully added to cart",
      color: "green",
    });
  }
  addButtonTwo.forEach((element) => {
    element.addEventListener("click", addButton);
  });
}
