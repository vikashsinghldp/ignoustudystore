const products = [
  { id: 141, name: "Assignment", image: "images/BPSC-113.jpg",price:"299"},
  { id: 2, name: "Smartphone", description: "Latest smartphone", image: "images/BPSC-113.jpg" },
  { id: 3, name: "Headphones", description: "Noise-cancelling headphones", image: "images/BPSC-113.jpg" },
  { id: 4, name: "Camera", description: "DSLR camera", image: "images/BPSC-113.jpg" },
  { id: 5, name: "Watch", description: "Smartwatch with many features", image: "images/BPSC-113.jpg" },
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

// Function to display products
function displayProducts(filteredProducts) {
  productList.innerHTML = "";
  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product";
    productCard.innerHTML = `
<img src="${product.image}" alt="Product 2">
        <span class="product_detail">${product.name}</span>
        <p>₹${product.price}</p>
        <a class="btn" href="https://wa.me/message/UX6VXFRH6J4TF1">Buy now</a>
    `;
    productList.appendChild(productCard);
  });
}


// Function to filter products
function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  displayProducts(filteredProducts);
}

// Initial display of products
displayProducts(products);

// Add event listener for search input
searchInput.addEventListener("input", filterProducts);
