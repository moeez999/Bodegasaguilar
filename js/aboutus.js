showNav();

function showNav() {
  document.querySelector(".main-navigationbar-three").innerHTML = "";

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
          <p class="header-items text-white">
            DELIVERY | Quito - Cumbayá - Tumbaco - Puembo - Los Chillos
          </p>
          <p class="header-items text-white">CALL CENTER | <span class="phone-no">+593 2 32 2311</span></p>
          <p class="header-items text-white">WHATSAPP | <span class="phone-no">+593 99 203 0363</span></p>
          <p class="face-insta"><a href=""><i class="fa-brands fa-facebook-f"></i> </i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
          </p>
        </div>
        <div class="border-bottom"></div>
      </div>
      <nav class="navigation-bar">
        <ul class="nav-list">
          <li class="nav-items text-white  dropdown " >
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
          <li class="nav-items text-white dropdown">
            Products <i class="fa fa-angle-down"></i></i>
            <ul class="dropdown-content " >
            <a  class="subnav-items" href="./completecatalog.html">Complete Catalog</a>
              <a  class="subnav-items" href="./fruitsandvegetable.html">Fruits and vegetables</a>
              <a  class="subnav-items" href="./meatfishvegan.html">Meats, fish <br> and Vegan Food</a>
              <a  class="subnav-items" href="./juicesbeverages.html">Juices, Beverages and <br>Liquors</a>
              <a  class="subnav-items" href="./snacksandpreserves.html">Snacks and Preserves</a>
            </ul>
          </li>
          <li class="nav-items text-white dropdown">
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
          <li class="nav-items text-white">Blog</li>
          <a href="./aboutus.html">
            <li class="nav-items text-white">Us</li>
          </a>
          <a href="./contactus.html">
            <li class="nav-items text-white">Contact Us</li>
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
  document.querySelector(".main-navigationbar-three").append(container);
}
