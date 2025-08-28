const FCFA_TO_EUR = 1 / 655;
const FCFA_TO_USD = 1 / 600;

const products = [
  { id: 1, name: "T-shirt Classic Blanc", category: "tshirts", design: "classic", price: 6000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["blanc"], image1: "images/T-Shirt-Classic-Blanc.png", image2: "images/T-Shirt-Classic-Blanc.png", description: "T-shirt Classic MONTROVIA en blanc - Élégance intemporelle" },
  { id: 2, name: "T-shirt Classic Noir", category: "tshirts", design: "classic", price: 6000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["noir"], image1: "images/T-Shirt-Classic-Noir.png", image2: "images/T-Shirt-Classic-Noir.png", description: "T-shirt Classic MONTROVIA en noir - Sophistication pure" },
  { id: 3, name: "T-shirt Classic Rouge", category: "tshirts", design: "classic", price: 6000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["rouge"], image1: "images/T-shirt-Classic-Rouge.png", image2: "images/T-shirt-Classic-Rouge.png", description: "T-shirt Classic MONTROVIA en rouge - Passion et élégance" },
  { id: 4, name: "T-shirt Classic Rose", category: "tshirts", design: "classic", price: 6000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["rose"], image1: "images/T-Shirt-Classic-Rose.png", image2: "images/T-Shirt-Classic-Rose.png", description: "T-shirt Classic MONTROVIA en rose - Douceur et raffinement" },
  { id: 5, name: "T-shirt Classic Marron", category: "tshirts", design: "classic", price: 6000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["marron"], image1: "images/T-Shirt-Classic-Marron.png", image2: "images/T-Shirt-Classic-Marron.png", description: "T-shirt Classic MONTROVIA en marron - Authenticité et style" },
  { id: 6, name: "T-shirt Genesis Blanc", category: "tshirts", design: "genesis", price: 8000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["blanc"], image1: "images/T-Shirt-Genesis-Blanc.png", image2: "images/T-Shirt-Genesis-Blanc.png", description: "T-shirt Genesis MONTROVIA en blanc - Innovation et modernité" },
  { id: 7, name: "T-shirt Genesis Noir", category: "tshirts", design: "genesis", price: 8000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["noir"], image1: "images/T-Shirt-Genesis-Noir.png", image2: "images/T-Shirt-Genesis-Noir.png", description: "T-shirt Genesis MONTROVIA en noir - Puissance et audace" },
  { id: 8, name: "T-shirt Genesis Rouge", category: "tshirts", design: "genesis", price: 8000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["rouge"], image1: "images/T-shirt-Genesis-Rouge.png", image2: "images/T-shirt-Genesis-Rouge.png", description: "T-shirt Genesis MONTROVIA en rouge - Énergie et dynamisme" },
  { id: 9, name: "T-shirt Genesis Rose", category: "tshirts", design: "genesis", price: 8000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["rose"], image1: "images/T-shirt-Genesis-Rose.png", image2: "images/T-shirt-Genesis-Rose.png", description: "T-shirt Genesis MONTROVIA en rose - Créativité et originalité" },
  { id: 10, name: "T-shirt Genesis Marron", category: "tshirts", design: "genesis", price: 8000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["marron"], image1: "images/T-Shirt-Genesis-Marron.png", image2: "images/T-Shirt-Genesis-Marron.png", description: "T-shirt Genesis MONTROVIA en marron - Élégance contemporaine" },
  { id: 11, name: "Hoodie Classic Noir", category: "hoodies", design: "classic", price: 13000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["noir"], image1: "images/Hoodie-Classic-Noir.png", image2: "images/Hoodie-Classic-Noir.png", description: "Hoodie Classic MONTROVIA en noir - Confort et style intemporel" },
  { id: 12, name: "Hoodie Genesis Blanc", category: "hoodies", design: "genesis", price: 16000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["blanc"], image1: "images/Hoodie-Genesis-Blanc.png", image2: "images/Hoodie-Genesis-Blanc.png", description: "Hoodie Genesis MONTROVIA en blanc - Modernité et confort" },
  { id: 13, name: "Hoodie Genesis Noir", category: "hoodies", design: "genesis", price: 16000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["noir"], image1: "images/Hoodie-Genesis-Noir.png", image2: "images/Hoodie-Genesis-Noir.png", description: "Hoodie Genesis MONTROVIA en noir - Élégance contemporaine" },
  { id: 14, name: "Jogging Classic Noir", category: "jogging", design: "classic", price: 20000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["noir"], image1: "images/Jogging-Classic-Noir.png", image2: "images/Jogging-Classic-Noir.png", description: "Jogging Classic MONTROVIA en noir - Style urbain intemporel" },
  { id: 15, name: "Jogging Genesis Beige", category: "jogging", design: "genesis", price: 25000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["beige"], image1: "images/Jogging-Genesis-Beige.png", image2: "images/Jogging-Genesis-Beige.png", description: "Jogging Genesis MONTROVIA en beige - Élégance moderne" },
  { id: 16, name: "Bonnet Blanc", category: "bonnets", design: "classic", price: 2500, sizes: ["One Size"], colors: ["blanc"], image1: "images/Bonnet-Blanc.png", image2: "images/Bonnet-Blanc.png", description: "Bonnet MONTROVIA en blanc - Accessoire élégant" },
  { id: 17, name: "Bonnet Noir", category: "bonnets", design: "classic", price: 2500, sizes: ["One Size"], colors: ["noir"], image1: "images/Bonnet-Noir.png", image2: "images/Bonnet-Noir.png", description: "Bonnet MONTROVIA en noir - Accessoire sophistiqué" },
  { id: 18, name: "Hoodie Classic Blanc", category: "hoodies", design: "classic", price: 13000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["blanc"], image1: "placeholder", image2: "placeholder", description: "Hoodie Classic MONTROVIA en blanc - Indispensable lumineux" },
  { id: 19, name: "Hoodie Classic Rouge", category: "hoodies", design: "classic", price: 13000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["rouge"], image1: "placeholder", image2: "placeholder", description: "Hoodie Classic MONTROVIA en rouge - Caractère affirmé" },
  { id: 20, name: "Hoodie Classic Beige", category: "hoodies", design: "classic", price: 13000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["beige"], image1: "placeholder", image2: "placeholder", description: "Hoodie Classic MONTROVIA en beige - Sobriété élégante" },
  { id: 21, name: "Hoodie Genesis Bleu", category: "hoodies", design: "genesis", price: 16000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["bleu"], image1: "placeholder", image2: "placeholder", description: "Hoodie Genesis MONTROVIA en bleu - Énergie maîtrisée" },
  { id: 22, name: "Hoodie Genesis Vert", category: "hoodies", design: "genesis", price: 16000, sizes: ["S","M","L","XL","2XL","3XL"], colors: ["vert"], image1: "placeholder", image2: "placeholder", description: "Hoodie Genesis MONTROVIA en vert - Fraîcheur moderne" },
  { id: 23, name: "Crop Top Classic Noir", category: "croptops", design: "classic", price: 7000, sizes: ["S","M","L"], colors: ["noir"], image1: "placeholder", image2: "placeholder", description: "Crop Top Classic MONTROVIA en noir - Minimalisme puissant" },
  { id: 24, name: "Crop Top Classic Blanc", category: "croptops", design: "classic", price: 7000, sizes: ["S","M","L"], colors: ["blanc"], image1: "placeholder", image2: "placeholder", description: "Crop Top Classic MONTROVIA en blanc - Pureté affirmée" },
  { id: 25, name: "Crop Top Classic Rose", category: "croptops", design: "classic", price: 7000, sizes: ["S","M","L"], colors: ["rose"], image1: "placeholder", image2: "placeholder", description: "Crop Top Classic MONTROVIA en rose - Douceur assumée" },
  { id: 26, name: "Chapeau Noir", category: "chapeaux", design: "classic", price: 4500, sizes: ["One Size"], colors: ["noir"], image1: "placeholder", image2: "placeholder", description: "Chapeau MONTROVIA noir - Finition soignée" },
  { id: 27, name: "Chapeau Beige", category: "chapeaux", design: "classic", price: 4500, sizes: ["One Size"], colors: ["beige"], image1: "placeholder", image2: "placeholder", description: "Chapeau MONTROVIA beige - Élégance décontractée" }
];

let cart = [];

const productsGrid = document.getElementById('products-grid');
const cartCount = document.querySelector('.cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const categoryFilter = document.getElementById('category-filter');
const sizeFilter = document.getElementById('size-filter');
const colorFilter = document.getElementById('color-filter');

document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '/nouveau site/') {
    document.body.classList.add('intro-active');
    setTimeout(function () { document.querySelector('.intro-splash').classList.add('hide'); document.body.classList.remove('intro-active'); }, 2500);
  }

  displayProducts(products);
  setupEventListeners();
  loadCart();

  if (window.location.hash) {
    const id = window.location.hash.substring(1);
    const target = document.getElementById(id);
    if (target) {
      setTimeout(() => { const y = target.getBoundingClientRect().top + window.pageYOffset - 100; window.scrollTo({ top: y, behavior: 'smooth' }); }, 200);
    }
  }

  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function (e) {
      e.preventDefault(); e.stopPropagation();
      navMenu.classList.toggle('active'); hamburger.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) { navMenu.classList.remove('active'); hamburger.classList.remove('active'); document.body.style.overflow = ''; }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) { navMenu.classList.remove('active'); hamburger.classList.remove('active'); document.body.style.overflow = ''; }
    });
  }
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function () { navMenu.classList.remove('active'); hamburger.classList.remove('active'); document.body.style.overflow = ''; });
  });

  const searchToggle = document.getElementById('search-toggle');
  if (searchToggle) {
    let searchBox = document.getElementById('floating-search-box');
    if (!searchBox) {
      searchBox = document.createElement('div');
      searchBox.id = 'floating-search-box';
      searchBox.innerHTML = `
        <input type="text" id="floating-search-input" placeholder="Rechercher un produit..." style="padding:0.7rem 1rem;font-size:1rem;border-radius:8px;border:1px solid #ccc;width:220px;max-width:90vw;outline:none;">
        <button id="floating-search-close" style="margin-left:8px;padding:0.7rem 1rem;border-radius:8px;border:none;background:#bfa76a;color:#fff;font-weight:600;cursor:pointer;">Fermer</button>
      `;
      searchBox.style.position = 'fixed'; searchBox.style.top = '70px'; searchBox.style.right = '30px'; searchBox.style.zIndex = '9999'; searchBox.style.background = '#fff'; searchBox.style.boxShadow = '0 4px 24px rgba(0,0,0,0.12)'; searchBox.style.padding = '1rem'; searchBox.style.display = 'none';
      document.body.appendChild(searchBox);
    }
    searchToggle.addEventListener('click', function (e) { e.preventDefault(); searchBox.style.display = 'block'; document.getElementById('floating-search-input').focus(); });
    document.getElementById('floating-search-close').onclick = function () { searchBox.style.display = 'none'; };
    document.getElementById('floating-search-input').oninput = function (e) {
      const value = e.target.value.toLowerCase().replace(/[-\s]/g, '');
      const normalized = (str) => str.toLowerCase().replace(/[-\s]/g, '');
      const pluralize = (str) => str.endsWith('s') ? str.slice(0, -1) : str;
      const filtered = products.filter(p => {
        const fields = [p.name, p.description, getCategoryName(p.category), p.category];
        return fields.some(f => { const fNorm = normalized(f); return fNorm.includes(value) || fNorm.includes(pluralize(value)) || pluralize(fNorm).includes(value); });
      });
      displayProducts(filtered);
    };
  }

  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const name = contactForm.querySelector('input[placeholder="Nom complet"]').value.trim();
      const email = contactForm.querySelector('input[placeholder="Email"]').value.trim();
      const message = contactForm.querySelector('textarea').value.trim();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true; submitBtn.textContent = 'Envoi...';
      try {
        const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, message }) });
        const data = await res.json();
        if (data.success) { alert('Votre message a bien été envoyé !'); contactForm.reset(); } else { alert(data.message || 'Erreur lors de l\'envoi du message.'); }
      } catch (_) { alert('Erreur lors de l\'envoi du message.'); }
      submitBtn.disabled = false; submitBtn.textContent = 'Envoyer';
    });
  }
});

function setupEventListeners() {
  const designFilter = document.getElementById('design-filter');
  if (designFilter) designFilter.addEventListener('change', filterProducts);
  if (categoryFilter) categoryFilter.addEventListener('change', filterProducts);
  if (sizeFilter) sizeFilter.addEventListener('change', filterProducts);
  if (colorFilter) colorFilter.addEventListener('change', filterProducts);

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) { e.preventDefault(); const targetId = href.substring(1); const targetSection = document.getElementById(targetId); if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  const categoryLinks = document.querySelectorAll('.category-link');
  categoryLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const url = new URL(this.href);
      const category = url.searchParams.get('category');
      const boutiqueSection = document.getElementById('boutique');
      if (boutiqueSection) { boutiqueSection.scrollIntoView({ behavior: 'smooth' }); }
      if (category && categoryFilter) { setTimeout(() => { categoryFilter.value = category; filterProducts(); }, 500); }
    });
  });

  const cartToggle = document.getElementById('cart-toggle');
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartClose = document.getElementById('cart-close');
  const overlay = document.getElementById('overlay');
  if (cartToggle) { cartToggle.addEventListener('click', function (e) { e.preventDefault(); cartSidebar.classList.add('active'); overlay.classList.add('active'); }); }
  if (cartClose) { cartClose.addEventListener('click', function () { cartSidebar.classList.remove('active'); overlay.classList.remove('active'); }); }
  if (overlay) { overlay.addEventListener('click', function () { cartSidebar.classList.remove('active'); overlay.classList.remove('active'); }); }

  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) { checkoutBtn.addEventListener('click', function (e) { e.preventDefault(); placeOrderCOD(); }); }
}

function displayProducts(productsToShow) {
  if (!productsGrid) return; productsGrid.innerHTML = '';
  productsToShow.forEach(product => { const productCard = createProductCard(product); productsGrid.appendChild(productCard); });
}

function createProductCard(product) {
  const card = document.createElement('div'); card.className = 'product-card';
  card.innerHTML = `
    <div class="product-image">
      <div class="product-image-container">
        <div class="product-image-main">
          ${product.image1 !== "placeholder" ? `<img src="${product.image1}" alt="${product.name}" class="product-img">` : `<div class="product-placeholder"><i class="fas fa-tshirt"></i></div>`}
        </div>
        <div class="product-image-hover">
          ${product.image2 !== "placeholder" ? `<img src="${product.image2}" alt="${product.name} - Vue alternative" class="product-img">` : `<div class="product-placeholder"><i class="fas fa-tshirt"></i></div>`}
        </div>
      </div>
      <div class="product-overlay">
        <button class="btn btn-primary add-to-cart" data-product-id="${product.id}"><i class="fas fa-shopping-cart"></i> Ajouter au panier</button>
      </div>
    </div>
    <div class="product-info">
      <h3>${product.name}</h3>
      <p class="product-category">${getCategoryName(product.category)} - ${product.design.charAt(0).toUpperCase() + product.design.slice(1)}</p>
      <p class="product-price">${formatPrice(product.price)}</p>
      <div class="product-options">
        <select class="product-size" data-product-id="${product.id}">
          <option value="">Choisir une taille</option>
          ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
        </select>
      </div>
    </div>`;

  const addToCartBtn = card.querySelector('.add-to-cart');
  addToCartBtn.addEventListener('click', function () {
    if (!isUserLoggedIn()) { window.location.href = 'espace-client.html?next=add-to-cart'; return; }
    const productId = parseInt(this.getAttribute('data-product-id'));
    const sizeSelect = card.querySelector('.product-size');
    const selectedSize = sizeSelect.value;
    if (!selectedSize) { alert('Veuillez sélectionner une taille'); return; }
    addToCart(productId, selectedSize);
  });
  return card;
}

function getCategoryName(category) {
  const categories = { 'tshirts': 'T-shirts', 'hoodies': 'Hoodies', 'jogging': 'Jogging', 'bonnets': 'Bonnets', 'croptops': 'Crop Tops', 'chapeaux': 'Chapeaux' };
  return categories[category] || category;
}

function filterProducts() {
  const designFilter = document.getElementById('design-filter');
  const design = designFilter ? designFilter.value : '';
  const category = categoryFilter.value;
  const size = sizeFilter.value;
  const color = colorFilter.value;
  let filteredProducts = products.filter(product => {
    if (design && product.design !== design) return false;
    if (category && product.category !== category) return false;
    if (size && !product.sizes.includes(size)) return false;
    if (color && !product.colors.includes(color)) return false;
    return true;
  });
  displayProducts(filteredProducts);
}

function addToCart(productId, size) {
  const product = products.find(p => p.id === productId); if (!product) return;
  const existingItem = cart.find(item => item.id === productId && item.size === size);
  if (existingItem) { existingItem.quantity += 1; } else { cart.push({ id: productId, name: product.name, price: product.price, size: size, quantity: 1 }); }
  updateCart(); saveCart(); showNotification('Produit ajouté au panier !');
}

function updateCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
  if (cartItems) {
    cartItems.innerHTML = '';
    if (cart.length === 0) { cartItems.innerHTML = '<p class="empty-cart">Votre panier est vide</p>'; }
    else { cart.forEach(item => { const cartItem = createCartItem(item); cartItems.appendChild(cartItem); }); }
  }
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (cartTotal) { cartTotal.textContent = total.toLocaleString() + ' FCFA'; }
}

function createCartItem(item) {
  const cartItem = document.createElement('div'); cartItem.className = 'cart-item';
  cartItem.innerHTML = `
    <div class="cart-item-info">
      <h4>${item.name}</h4>
      <p>Taille: ${item.size}</p>
      <p>${item.price.toLocaleString()} FCFA</p>
    </div>
    <div class="cart-item-controls">
      <button class="quantity-btn minus" data-id="${item.id}" data-size="${item.size}">-</button>
      <span class="quantity">${item.quantity}</span>
      <button class="quantity-btn plus" data-id="${item.id}" data-size="${item.size}">+</button>
      <button class="remove-btn" data-id="${item.id}" data-size="${item.size}"><i class="fas fa-trash"></i></button>
    </div>`;
  cartItem.querySelector('.minus').addEventListener('click', function () { updateQuantity(item.id, item.size, -1); });
  cartItem.querySelector('.plus').addEventListener('click', function () { updateQuantity(item.id, item.size, 1); });
  cartItem.querySelector('.remove-btn').addEventListener('click', function () { removeFromCart(item.id, item.size); });
  return cartItem;
}

function updateQuantity(productId, size, change) {
  const item = cart.find(item => item.id === productId && item.size === size); if (!item) return;
  item.quantity += change; if (item.quantity <= 0) { removeFromCart(productId, size); } else { updateCart(); saveCart(); }
}

function removeFromCart(productId, size) {
  cart = cart.filter(item => !(item.id === productId && item.size === size)); updateCart(); saveCart(); showNotification('Produit retiré du panier');
}

function saveCart() { localStorage.setItem('nonchalant-cart', JSON.stringify(cart)); }
function loadCart() { const savedCart = localStorage.getItem('nonchalant-cart'); if (savedCart) { cart = JSON.parse(savedCart); updateCart(); } }

function showNotification(message) {
  const notification = document.createElement('div'); notification.className = 'notification'; notification.textContent = message;
  notification.style.cssText = `position: fixed; top: 100px; right: 20px; background: var(--color-sage); color: white; padding: 1rem 2rem; border-radius: var(--border-radius); box-shadow: var(--shadow-medium); z-index: 10000; transform: translateX(100%); transition: transform 0.3s ease;`;
  document.body.appendChild(notification);
  setTimeout(() => { notification.style.transform = 'translateX(0)'; }, 100);
  setTimeout(() => { notification.style.transform = 'translateX(100%)'; setTimeout(() => { try { document.body.removeChild(notification); } catch (_) {} }, 300); }, 3000);
}

function animateOnScroll() {
  const elements = document.querySelectorAll('.product-card, .section-title, .about-content');
  const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; } }); });
  elements.forEach(element => { element.style.opacity = '0'; element.style.transform = 'translateY(30px)'; element.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; observer.observe(element); });
}
document.addEventListener('DOMContentLoaded', function () { animateOnScroll(); });

window.addEventListener('scroll', function () { const header = document.querySelector('.header'); if (window.scrollY > 100) { header.classList.add('scrolled'); } else { header.classList.remove('scrolled'); } });

function detectRegion() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  if (timezone.includes('Africa/Lagos') || timezone.includes('Africa/Luanda') || timezone.includes('Africa/Brazzaville') || timezone.includes('Africa/Libreville')) return 'afrique-centrale';
  if (timezone.includes('Africa/Dakar') || timezone.includes('Africa/Bamako') || timezone.includes('Africa/Conakry') || timezone.includes('Africa/Abidjan')) return 'afrique-ouest';
  if (timezone.includes('Europe/Paris') || timezone.includes('Europe/Brussels') || timezone.includes('Europe/Berlin') || timezone.includes('Europe/Rome')) return 'europe';
  return 'afrique-centrale';
}
function closePaymentModal() { const modal = document.querySelector('.payment-modal'); if (modal) { document.body.removeChild(modal); } }

function formatPrice(price) { const eur = (price * FCFA_TO_EUR).toFixed(2); const usd = (price * FCFA_TO_USD).toFixed(2); return `${price.toLocaleString()} FCFA | ${eur} € | ${usd} $`; }

// Cash-on-Delivery simple flow
function placeOrderCOD() {
  if (!isUserLoggedIn()) { window.location.href = 'espace-client.html?next=checkout'; return; }
  if (cart.length === 0) { showNotification('Votre panier est vide !'); return; }
  const totals = computeTotalsWithShipping(cart);
  // Generate invoice directly (COD)
  if (window.InvoiceModule && typeof window.InvoiceModule.presentInvoiceFlow === 'function') {
    try { window.InvoiceModule.presentInvoiceFlow({ method: 'Paiement à la livraison', total: totals.total }); } catch (_) {}
  }
  // Clear cart after placing order
  cart = []; updateCart(); saveCart();
}

function computeTotalsWithShipping(items) {
  const subtotal = items.reduce((s, it) => s + it.price * it.quantity, 0);
  const region = detectRegion();
  let shipping = 0;
  if (region === 'europe') shipping = 8000; else if (region === 'afrique-ouest') shipping = 2000; else shipping = 3000;
  return { subtotal, shipping, total: subtotal + shipping };
}

function isUserLoggedIn() { try { return !!JSON.parse(localStorage.getItem('mt-user') || 'null'); } catch (_) { return false; } }

window.showNotification = showNotification;
window.cart = cart;

