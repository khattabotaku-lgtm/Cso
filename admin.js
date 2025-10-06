let PRODUCTS = JSON.parse(localStorage.getItem('CSO_PRODUCTS') || '[]');

const adminForm = document.getElementById('adminForm');
const productsList = document.getElementById('productsList');
let editIndex = null;

function renderProducts() {
  productsList.innerHTML = '';
  PRODUCTS.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'card';
    div.style.marginBottom = '12px';
    div.innerHTML = `
      <div class="thumb"><img src="${p.img}" alt="${p.title}"></div>
      <div class="title">${p.title}</div>
      <div class="desc">${p.desc}</div>
      <div class="meta">
        <div>${p.price}</div>
        <div>
          <button class="buy-btn" onclick="editProduct(${i})">Edit</button>
          <button class="buy-btn" onclick="deleteProduct(${i})">Delete</button>
        </div>
      </div>
    `;
    productsList.appendChild(div);
  });
}

function deleteProduct(index) {
  if(confirm('Are you sure you want to delete this product?')) {
    PRODUCTS.splice(index, 1);
    localStorage.setItem('CSO_PRODUCTS', JSON.stringify(PRODUCTS));
    renderProducts();
  }
}

function editProduct(index) {
  const p = PRODUCTS[index];
  document.getElementById('prodTitle').value = p.title;
  document.getElementById('prodDesc').value = p.desc;
  document.getElementById('prodImg').value = p.img;
  document.getElementById('prodPrice').value = p.price;
  document.getElementById('prodLink').value = p.link;
  editIndex = index;
}

adminForm.addEventListener('submit', e => {
  e.preventDefault();
  const p = {
    title: prodTitle.value.trim(),
    desc: prodDesc.value.trim(),
    img: prodImg.value.trim(),
    price: prodPrice.value.trim(),
    link: prodLink.value.trim()
  };

  if(editIndex !== null){
    PRODUCTS[editIndex] = p; // تعديل المنتج
    editIndex = null;
  } else {
    PRODUCTS.push(p); // إضافة منتج جديد
  }

  localStorage.setItem('CSO_PRODUCTS', JSON.stringify(PRODUCTS));
  renderProducts();
  adminForm.reset();
});

// عرض المنتجات عند تحميل الصفحة
renderProducts();
