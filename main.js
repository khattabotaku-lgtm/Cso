const grid = document.getElementById('productsGrid');
let PRODUCTS = JSON.parse(localStorage.getItem('CSO_PRODUCTS') || '[]');

function createCard(p){
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <div class="thumb"><img src="${p.img}" alt="${p.title}"></div>
    <div class="title">${p.title}</div>
    <div class="desc">${p.desc}</div>
    <div class="meta">
      <div style="color:var(--muted)">${p.price}</div>
      <button class="buy-btn" onclick="window.open('${p.link}','_blank')">Buy</button>
    </div>`;
  return card;
}

function renderProducts(){
  grid.innerHTML = '';
  PRODUCTS.forEach((p,i)=>{
    const c = createCard(p);
    c.style.animation = `in 480ms ease ${i*80}ms forwards`;
    c.style.opacity = 0;
    grid.appendChild(c);
  });
}

// تحميل المنتجات عند فتح الصفحة
renderProducts();
