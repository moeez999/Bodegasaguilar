// navigation-bar

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
   <div class="text-2xl font-black reveal-btn">☰</div>
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
            <a href="./index.html">
                <li>store</li>
              </a>
              <a href="./cateringandrestobar.html">
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
              <a href="">
                <li>Sign In/Up and </li>
              </a>
              <a href="">
                <li>My Basket</li>
              </a>
              <a href="">
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
          <a href="./cart.html"><i class="fa-solid fa-bag-shopping"></i></a>
        </div>
        <a class="to-buy" href="">To Buy</a>
      </nav>
    </div>
  </header>
  
`;
  container.innerHTML = template;
  document.querySelector(".main-navigation-bar").append(container);
}

$(".fade").slick({
  dots: true,
  autoplay: true,
  fade: true,
  speed: 300,

  rows: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
});

//Dynamic-for-Product

let productsData = getData();
showProduct(data);

function showProduct(productsData) {
  document.querySelector(".product-one").innerHTML = "";

  for (let index = 0; index < productsData.length; index++) {
    const element = productsData[index];

    let container = document.createElement("div");

    container.classList.add("product-div");
    container.setAttribute("data-id", `${element._id.$oid}`);
    let template = `

    <img class="product-image  picture" src="${element.image}" alt="">
    <h1 class="product-title">${element.name}</h1>
    <p class="product-type">${element.category}</p>
    <input type="text" value="1" class="hidden amount">
    <p class="product-price">${element.price}</p>
    <a href=""><button class="add-to-cart"><i class="fa-solid fa-bag-shopping shop uppercase"></i>ADD</button></a>

`;
    container.innerHTML = template;
    document.querySelector(".product-one").append(container);
  }
  $(".autoplay").slick({
    dots: true,
    autoplay: true,
    speed: 300,
    variableWidth: true,
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // if (window.innerWidth > 320)
  //   config = {
  //     autoplay: true,
  //     arrows: false,
  //     dots: true,
  //     speed: 500,
  //     // variableWidth: true,
  //     rows: 2,
  //     slidesToShow: 4,
  //     slidesToScroll: 4,
  //   };
  // else
  //   config = {
  //     autoplay: true,
  //     arrows: false,
  //     dots: true,
  //     speed: 500,

  //     rows: 2,
  //     slidesToShow: 4,
  //     slidesToScroll: 4,
  //   };

  // $(".autoplay").slick(config);

  addButton();
}

// Reveal Event
let revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".main-nav-head");
function revealContent() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
}
revealBtn.addEventListener("click", revealContent);

showVegeFruit(item());

function showVegeFruit(vegeData) {
  document.querySelector(".main-f-v").innerHTML = "";

  for (let index = 0; index < vegeData.length; index++) {
    const element = vegeData[index];

    let container = document.createElement("div");

    container.classList.add("f-v-products");
    container.setAttribute("data-id", `${element._id.$oid}`);
    let template = `

      <img class="product-image-two picture" src="${element.image}" alt="">
      <div>
        <h1 class="product-title">${element.name}</h1>
        <input type="text" value="1" class="hidden amount">
        <p>⭐⭐⭐⭐⭐</p>
        <p  class="product-price">${element.price}</p>
       </div>
       <a href=""><button class="add-to-cart"><i class="fa-solid fa-bag-shopping shop uppercase"></i>ADD</button></a>

  
`;
    container.innerHTML = template;
    document.querySelector(".main-f-v").append(container);
  }
  addButton();
}

showFruit(itemTwo());

function showFruit(fruitData) {
  // debugger;
  document.querySelector(".main-f").innerHTML = "";

  for (let index = 0; index < fruitData.length; index++) {
    const element = fruitData[index];

    let container = document.createElement("div");

    container.classList.add("f-two");
    container.setAttribute("data-id", `${element._id.$oid}`);

    let template = `

      <div class="container"><img class="product-image-three picture rounded-2xl" src="${element.image}" alt=""></div>
        <h1 class="product-title">${element.name}</h1>
        <input type="text" value="1" class="hidden amount">
        <p>${element.category}</p>
        <p>⭐⭐⭐⭐⭐</p>
        <p class="product-price">${element.price}</p>
        <a href="" class="add" id="${element._id}"><button class="add-to-cart"><i class="fa-solid fa-bag-shopping shop uppercase"></i>ADD</button></a>

  
`;
    container.innerHTML = template;
    document.querySelector(".main-f").append(container);
  }
  addButton();
}

$(".quotes").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  autoplay: true,
});

if (window.innerWidth > 480)
  config = {
    breakpoint: 600,
    autoplay: true,
    arrows: false,
    dots: true,
    speed: 500,

    rows: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

$(".partners").slick(config);

function addButton() {
  let addButtonTwo = document.querySelectorAll(".add-to-cart");
  console.log(addButtonTwo);
  // debugger;
  function addButton(e) {
    // debugger;
    e.preventDefault();

    let target = e.target;
    console.log(target);
    let food = target.closest("div");
    // console.log(food);
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
