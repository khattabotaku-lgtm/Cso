// Products array — add or remove products here
const products = [
  {
    title: "Cyber Tool 1",
    desc: "Description of Cyber Tool 1",
    img: "images/tool1.jpg",
    price: "$20",
    link: "https://gumroad.com/product1"
  },
  {
    title: "Cyber Tool 2",
    desc: "Description of Cyber Tool 2",
    img: "images/tool2.jpg",
    price: "$15",
    link: "https://gumroad.com/product2"
  }
];

// Render products on page
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="thumb"><img src="${product.img}" alt="${product.title}"></div>
      <div class="title">${product.title}</div>
      <div class="desc">${product.desc}</div>
      <div class="meta">
        <span class="price">${product.price}</span>
        <a class="buy-btn" href="${product.link}" target="_blank">Buy</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Initialize products
renderProducts();
