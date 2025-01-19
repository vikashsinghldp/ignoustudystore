const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
document.addEventListener('click', function (event) {
    // Check if the click is outside the navbar
    const isClickInsideNavbar = event.target.closest('.nav');
    
    // If the click is outside, hide all dropdowns
    if (!isClickInsideNavbar) {
        nav.classList.remove("openNav");
    }
});
let slides = document.querySelectorAll(".slider .slide");
let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(() => {
  showSlide(currentSlide + 1);
}, 3000);
/*
function searchProducts() {
  const searchInput = document.getElementById('productSearch').value.toLowerCase();
  const products = document.querySelectorAll('.productGrid');

  products.forEach(product => {
    const productName = product.getAttribute('data-name').toLowerCase();
    if (productName.includes(searchInput)) {
      product.style.display = 'block'; // Show product
    } else {
      product.style.display = 'none'; // Hide product
    }
  });
}
*/
function searchProducts(){
  console.log("hello world");
}