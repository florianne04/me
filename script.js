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
  if (checkoutBtn) { checkoutBtn.addEventListener('click', function (e) { e.preventDefault(); showPaymentModal(); }); }
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

const paymentMethods = {
  'mobile-money': { 'wave': { name: 'Wave', icon: 'fas fa-mobile-alt', color: '#00A651' }, 'mtn-momo': { name: 'MTN Mobile Money', icon: 'fas fa-mobile-alt', color: '#FFC107' }, 'airtel-money': { name: 'Airtel Money', icon: 'fas fa-mobile-alt', color: '#FF0000' }, 'orange-money': { name: 'Orange Money', icon: 'fas fa-mobile-alt', color: '#FF6600' } },
  'bank-cards': { 'visa': { name: 'Visa', icon: 'fab fa-cc-visa', color: '#1A1F71' }, 'mastercard': { name: 'Mastercard', icon: 'fab fa-cc-mastercard', color: '#EB001B' }, 'paypal': { name: 'PayPal', icon: 'fab fa-paypal', color: '#003087' } }
};

function detectRegion() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  if (timezone.includes('Africa/Lagos') || timezone.includes('Africa/Luanda') || timezone.includes('Africa/Brazzaville') || timezone.includes('Africa/Libreville')) return 'afrique-centrale';
  if (timezone.includes('Africa/Dakar') || timezone.includes('Africa/Bamako') || timezone.includes('Africa/Conakry') || timezone.includes('Africa/Abidjan')) return 'afrique-ouest';
  if (timezone.includes('Europe/Paris') || timezone.includes('Europe/Brussels') || timezone.includes('Europe/Berlin') || timezone.includes('Europe/Rome')) return 'europe';
  return 'afrique-centrale';
}

function showPaymentModal() {
  if (cart.length === 0) { showNotification('Votre panier est vide !'); return; }
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const modal = document.createElement('div'); modal.className = 'payment-modal';
  modal.innerHTML = `
    <div class="payment-modal-content">
      <div class="payment-modal-header">
        <h3>💳 Paiement sécurisé</h3>
        <button class="payment-modal-close">&times;</button>
      </div>
      <div class="payment-modal-body">
        <div class="order-summary">
          <h4>Récapitulatif de votre commande :</h4>
          <div class="order-items">${cart.map(item => `
            <div class="order-item"><span>${item.name} (${item.size})</span><span>x${item.quantity}</span><span>${item.price.toLocaleString()} FCFA</span></div>`).join('')}</div>
          <div class="order-total"><strong>Total : ${total.toLocaleString()} FCFA</strong></div>
        </div>
        <div class="payment-methods">
          <h4>Choisissez votre moyen de paiement :</h4>
          <div class="payment-category">
            <h5><i class="fas fa-mobile-alt"></i> Mobile Money</h5>
            <div class="payment-options">
              <button class="payment-option" data-method="wave"><i class="fas fa-mobile-alt" style="color:#00A651;"></i><span>Wave</span></button>
              <button class="payment-option" data-method="orange-money"><i class="fas fa-mobile-alt" style="color:#FF6600;"></i><span>Orange Money</span></button>
              <button class="payment-option" data-method="mtn-momo"><i class="fas fa-mobile-alt" style="color:#FFC107;"></i><span>MTN Mobile Money</span></button>
              <button class="payment-option" data-method="airtel-money"><i class="fas fa-mobile-alt" style="color:#FF0000;"></i><span>Airtel Money</span></button>
            </div>
          </div>
          <div class="payment-category">
            <h5><i class="fas fa-credit-card"></i> Cartes bancaires</h5>
            <div class="payment-options">
              <button class="payment-option" data-method="visa"><i class="fab fa-cc-visa" style="color:#1A1F71;"></i><span>Visa</span></button>
              <button class="payment-option" data-method="mastercard"><i class="fab fa-cc-mastercard" style="color:#EB001B;"></i><span>Mastercard</span></button>
              <button class="payment-option" data-method="paypal"><i class="fab fa-paypal" style="color:#003087;"></i><span>PayPal</span></button>
            </div>
          </div>
        </div>
        <div class="payment-form" id="payment-form" style="display:none;">
          <h4 id="form-title">Informations de paiement</h4>
          <form id="checkout-form"><div id="form-fields"></div>
            <div class="form-actions"><button type="button" class="btn-payment-back">← Retour</button><button type="submit" class="btn-payment-submit">Confirmer le paiement</button></div>
          </form>
        </div>
        <div class="payment-actions" id="payment-actions"><button class="btn-payment-cancel">Annuler</button></div>
      </div>
    </div>`;

  const style = document.createElement('style');
  style.textContent = `
    .payment-modal{position:fixed;inset:0;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:10001;backdrop-filter:blur(5px);} .payment-modal-content{background:#fff;border-radius:20px;max-width:600px;width:95vw;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,0.3);animation:modalSlideIn .3s ease-out;} .payment-modal-header{display:flex;justify-content:space-between;align-items:center;padding:20px 24px;border-bottom:1px solid #f0f0f0;background:linear-gradient(135deg,#bfa76a,#8b7355);color:white;border-radius:20px 20px 0 0;} .payment-modal-header h3{margin:0;font-size:1.3rem;} .payment-modal-close{background:none;border:none;font-size:1.5rem;cursor:pointer;color:white;padding:0;width:30px;height:30px;display:flex;align-items:center;justify-content:center;} .payment-modal-body{padding:24px;} .order-summary{background:#f8f9fa;padding:16px;border-radius:10px;margin-bottom:24px;color:#000;} .order-summary h4{margin:0 0 16px 0;color:#000;} .order-items{margin-bottom:16px;color:#000;} .order-item{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #e0e0e0;color:#000;} .order-item:last-child{border-bottom:none;} .order-total{text-align:right;padding:16px 0;border-top:2px solid #bfa76a;font-size:1.1rem;color:#000;} .payment-methods h4{text-align:center;margin:0 0 20px 0;color:#333;} .payment-category{margin-bottom:24px;} .payment-category h5{margin:0 0 12px 0;color:#333;font-size:1rem;display:flex;align-items:center;gap:8px;} .payment-options{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;} .payment-option{background:#fff;border:2px solid #e0e0e0;border-radius:10px;padding:16px 12px;cursor:pointer;transition:all .3s ease;display:flex;flex-direction:column;align-items:center;gap:8px;font-size:.9rem;font-weight:500;} .payment-option:hover{border-color:#bfa76a;transform:translateY(-2px);box-shadow:0 4px 12px rgba(191,167,106,.2);} .payment-option.selected{border-color:#bfa76a;background:#fefbf5;} .payment-option i{font-size:1.5rem;} .payment-actions{display:flex;justify-content:center;margin-top:24px;} .btn-payment-cancel{background:#f0f0f0;color:#333;border:none;padding:12px 24px;border-radius:8px;font-size:1rem;cursor:pointer;transition:background .2s;} .btn-payment-cancel:hover{background:#e0e0e0;} @keyframes modalSlideIn{from{opacity:0;transform:translateY(-20px) scale(.95);}to{opacity:1;transform:translateY(0) scale(1);}} .payment-form{margin-top:24px;padding:20px;background:#f8f9fa;border-radius:10px;border:1px solid #e0e0e0;} .payment-form h4{margin:0 0 20px 0;color:#333;text-align:center;} .form-group{margin-bottom:16px;} .form-group label{display:block;margin-bottom:6px;font-weight:500;color:#333;} .form-group input,.form-group select,.form-group textarea{width:100%;padding:12px;border:1px solid #ddd;border-radius:6px;font-size:14px;transition:border-color .3s;} .form-group input:focus,.form-group select:focus,.form-group textarea:focus{outline:none;border-color:#bfa76a;box-shadow:0 0 0 2px rgba(191,167,106,.2);} .form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;} .form-actions{display:flex;justify-content:space-between;align-items:center;margin-top:24px;gap:12px;} .btn-payment-back{background:#f0f0f0;color:#333;border:none;padding:12px 20px;border-radius:6px;font-size:14px;cursor:pointer;transition:background .2s;} .btn-payment-back:hover{background:#e0e0e0;} .btn-payment-submit{background:#bfa76a;color:white;border:none;padding:12px 24px;border-radius:6px;font-size:14px;font-weight:600;cursor:pointer;transition:background .2s;} .btn-payment-submit:hover{background:#a8945a;} .btn-payment-submit:disabled{background:#ccc;cursor:not-allowed;} .error-message{color:#d32f2f;font-size:12px;margin-top:4px;} @media (max-width:600px){ .payment-modal-content{border-radius:0;max-height:100vh;} .payment-options{grid-template-columns:1fr;} .form-row{grid-template-columns:1fr;} .form-actions{flex-direction:column;} }
  `;
  document.head.appendChild(style); document.body.appendChild(modal);

  const paymentOptions = modal.querySelectorAll('.payment-option');
  let selectedMethod = null;
  paymentOptions.forEach(option => { option.addEventListener('click', function () { paymentOptions.forEach(opt => opt.classList.remove('selected')); this.classList.add('selected'); selectedMethod = this.getAttribute('data-method'); showPaymentForm(selectedMethod, total); }); });
  const backBtn = modal.querySelector('.btn-payment-back'); if (backBtn) backBtn.addEventListener('click', hidePaymentForm);
  const checkoutForm = modal.querySelector('#checkout-form'); if (checkoutForm) checkoutForm.addEventListener('submit', function (e) { e.preventDefault(); handleFormSubmission(selectedMethod, total); });
  const closeBtn = modal.querySelector('.payment-modal-close'); const cancelBtn = modal.querySelector('.btn-payment-cancel');
  closeBtn.addEventListener('click', () => document.body.removeChild(modal)); cancelBtn.addEventListener('click', () => document.body.removeChild(modal)); modal.addEventListener('click', (e) => { if (e.target === modal) { document.body.removeChild(modal); } });
}

function processPayment(method, total) {
  showNotification(`Redirection vers ${paymentMethods[getMethodCategory(method)][method].name}...`);
  setTimeout(() => { showPaymentSuccess(method, total); }, 1200);
}

function getMethodCategory(method) {
  if (method.includes('money') || method.includes('momo')) return 'mobile-money';
  if (method.includes('visa') || method.includes('mastercard') || method.includes('paypal')) return 'bank-cards';
  return 'local-payment';
}

function showPaymentSuccess(method, total) {
  const methodName = paymentMethods[getMethodCategory(method)][method].name;
  const modal = document.querySelector('.payment-modal');
  if (modal) {
    modal.innerHTML = `
      <div class="payment-modal-content">
        <div class="payment-modal-header" style="background:#00A651;">
          <h3>✅ Paiement réussi !</h3>
        </div>
        <div class="payment-modal-body" style="text-align:center;">
          <div style="font-size: 4rem; color: #00A651; margin: 20px 0;"><i class="fas fa-check-circle"></i></div>
          <h4>Merci pour votre commande !</h4>
          <p>Votre paiement de <strong>${total.toLocaleString()} FCFA</strong> via <strong>${methodName}</strong> a été traité avec succès.</p>
          <p>Vous recevrez un email de confirmation avec les détails de votre commande.</p>
          <div style="margin-top: 24px;">
            <button class="btn-payment-success" onclick="closePaymentModal()">Continuer mes achats</button>
          </div>
        </div>
      </div>`;
    const style = document.createElement('style'); style.textContent = `.btn-payment-success{background:#00A651;color:#fff;border:none;padding:12px 24px;border-radius:8px;font-size:1rem;cursor:pointer;transition:background .2s;} .btn-payment-success:hover{background:#008f45;}`; document.head.appendChild(style);
  }
  // Trigger invoice flow if module is present
  if (window.InvoiceModule && typeof window.InvoiceModule.presentInvoiceFlow === 'function') {
    try { window.InvoiceModule.presentInvoiceFlow({ method, total }); } catch (_) {}
  }
  // Clear cart after success
  cart = []; updateCart(); saveCart(); showNotification('Votre commande a été confirmée !');
}

function closePaymentModal() { const modal = document.querySelector('.payment-modal'); if (modal) { document.body.removeChild(modal); } }

function formatPrice(price) { const eur = (price * FCFA_TO_EUR).toFixed(2); const usd = (price * FCFA_TO_USD).toFixed(2); return `${price.toLocaleString()} FCFA | ${eur} € | ${usd} $`; }

function showPaymentForm(method, total) {
  const paymentMethodsEl = document.querySelector('.payment-methods');
  const paymentForm = document.querySelector('#payment-form');
  const paymentActions = document.querySelector('#payment-actions');
  const formTitle = document.querySelector('#form-title');
  const formFields = document.querySelector('#form-fields');
  paymentMethodsEl.style.display = 'none'; paymentActions.style.display = 'none'; paymentForm.style.display = 'block';
  const methodNames = { 'wave': 'Wave', 'orange-money': 'Orange Money', 'mtn-momo': 'MTN Mobile Money', 'airtel-money': 'Airtel Money', 'visa': 'Visa', 'mastercard': 'Mastercard', 'paypal': 'PayPal' };
  formTitle.textContent = `Paiement via ${methodNames[method]}`;
  formFields.innerHTML = generateFormFields(method);
  setupFormValidation();
}

function hidePaymentForm() {
  const paymentMethodsEl = document.querySelector('.payment-methods');
  const paymentForm = document.querySelector('#payment-form');
  const paymentActions = document.querySelector('#payment-actions');
  const paymentOptions = document.querySelectorAll('.payment-option');
  paymentForm.style.display = 'none'; paymentMethodsEl.style.display = 'block'; paymentActions.style.display = 'block'; paymentOptions.forEach(opt => opt.classList.remove('selected'));
}

function generateFormFields(method) {
  switch (method) {
    case 'visa':
    case 'mastercard':
      return generateCardForm();
    case 'paypal':
      return generatePayPalForm();
    case 'wave':
    case 'orange-money':
    case 'mtn-momo':
    case 'airtel-money':
      return generateMobileMoneyForm(method);
    default:
      return '<p>Méthode de paiement non reconnue</p>';
  }
}

function generateCardForm() {
  return `
    <div class="form-group"><label for="card-number">Numéro de carte *</label><input type="text" id="card-number" name="cardNumber" placeholder="1234 5678 9012 3456" maxlength="19" required><div class="error-message" id="card-number-error"></div></div>
    <div class="form-row">
      <div class="form-group"><label for="expiry">Date d'expiration *</label><input type="text" id="expiry" name="expiry" placeholder="MM/AA" maxlength="5" required><div class="error-message" id="expiry-error"></div></div>
      <div class="form-group"><label for="cvv">CVV *</label><input type="text" id="cvv" name="cvv" placeholder="123" maxlength="4" required><div class="error-message" id="cvv-error"></div></div>
    </div>
    <div class="form-group"><label for="card-name">Nom sur la carte *</label><input type="text" id="card-name" name="cardName" placeholder="Jean Dupont" required><div class="error-message" id="card-name-error"></div></div>
    <div class="form-group"><label for="billing-address">Adresse de facturation (optionnel)</label><textarea id="billing-address" name="billingAddress" placeholder="123 Rue de la Paix, 75001 Paris" rows="3"></textarea></div>`;
}

function generatePayPalForm() {
  return `
    <div style="text-align:center; padding:40px 20px;">
      <i class="fab fa-paypal" style="font-size:3rem; color:#003087; margin-bottom:20px;"></i>
      <h4>Redirection vers PayPal</h4>
      <p>Vous allez être redirigé vers PayPal pour finaliser votre paiement de manière sécurisée.</p>
      <button type="submit" class="btn-payment-submit" style="margin-top:20px;">Continuer vers PayPal</button>
    </div>`;
}

function generateMobileMoneyForm(method) {
  const methodNames = { 'wave': 'Wave', 'orange-money': 'Orange Money', 'mtn-momo': 'MTN Mobile Money', 'airtel-money': 'Airtel Money' };
  return `
    <div class="form-group"><label for="phone-number">Numéro de téléphone *</label><input type="tel" id="phone-number" name="phoneNumber" placeholder="+225 0123456789" required><div class="error-message" id="phone-number-error"></div><small style="color:#666; font-size:12px;">Numéro lié à votre compte ${methodNames[method]}</small></div>
    <div class="form-group"><label for="full-name">Nom complet (optionnel)</label><input type="text" id="full-name" name="fullName" placeholder="Jean Dupont"></div>`;
}

function setupFormValidation() {
  const cardNumber = document.getElementById('card-number'); if (cardNumber) cardNumber.addEventListener('input', function (e) { let value = e.target.value.replace(/\s/g, '').replace(/\D/g, ''); if (value.length > 16) value = value.slice(0, 16); const formatted = value.replace(/(\d{4})(?=\d)/g, '$1 '); e.target.value = formatted; const error = document.getElementById('card-number-error'); error.textContent = value.length < 16 ? 'Le numéro de carte doit contenir 16 chiffres' : ''; });
  const expiry = document.getElementById('expiry'); if (expiry) expiry.addEventListener('input', function (e) { let value = e.target.value.replace(/\D/g, ''); if (value.length > 4) value = value.slice(0, 4); if (value.length >= 2) value = value.slice(0, 2) + '/' + value.slice(2); e.target.value = value; const error = document.getElementById('expiry-error'); if (value.length < 5) { error.textContent = 'Format: MM/AA'; } else { const [month, year] = value.split('/').map(n => parseInt(n, 10)); const currentDate = new Date(); const currentYear = currentDate.getFullYear() % 100; const currentMonth = currentDate.getMonth() + 1; if (month < 1 || month > 12) error.textContent = 'Mois invalide'; else if (year < currentYear || (year === currentYear && month < currentMonth)) error.textContent = 'Carte expirée'; else error.textContent = ''; } });
  const cvv = document.getElementById('cvv'); if (cvv) cvv.addEventListener('input', function (e) { let value = e.target.value.replace(/\D/g, ''); if (value.length > 4) value = value.slice(0, 4); e.target.value = value; const error = document.getElementById('cvv-error'); error.textContent = value.length < 3 ? 'Le CVV doit contenir 3 ou 4 chiffres' : ''; });
  const phoneNumber = document.getElementById('phone-number'); if (phoneNumber) phoneNumber.addEventListener('input', function (e) { let value = e.target.value.replace(/\s/g, ''); e.target.value = value; const error = document.getElementById('phone-number-error'); error.textContent = !/^\+?[0-9]{8,15}$/.test(value) ? 'Format de téléphone invalide' : ''; });
}

function handleFormSubmission(method, total) {
  const form = document.getElementById('checkout-form');
  const formData = new FormData(form);
  if (!validateForm(method)) return;
  const paymentData = preparePaymentData(method, formData, total);
  console.log('Données de paiement à envoyer:', paymentData);
  processPayment(method, total);
}

function validateForm(method) {
  switch (method) {
    case 'visa':
    case 'mastercard':
      return validateCardForm();
    case 'paypal':
      return true;
    case 'wave':
    case 'orange-money':
    case 'mtn-momo':
    case 'airtel-money':
      return validateMobileMoneyForm();
  }
  return true;
}

function validateCardForm() {
  const cardNumber = document.getElementById('card-number');
  const expiry = document.getElementById('expiry');
  const cvv = document.getElementById('cvv');
  const cardName = document.getElementById('card-name');
  let ok = true;
  if (!cardNumber || cardNumber.value.replace(/\s/g, '').length !== 16) { document.getElementById('card-number-error').textContent = 'Numéro de carte invalide'; ok = false; }
  if (!expiry || expiry.value.length !== 5) { document.getElementById('expiry-error').textContent = 'Date d\'expiration invalide'; ok = false; }
  if (!cvv || cvv.value.length < 3) { document.getElementById('cvv-error').textContent = 'CVV invalide'; ok = false; }
  if (!cardName || cardName.value.trim().length < 2) { document.getElementById('card-name-error').textContent = 'Nom requis'; ok = false; }
  return ok;
}

function validateMobileMoneyForm() { const phoneNumber = document.getElementById('phone-number'); if (!phoneNumber || !/^\+?[0-9]{8,15}$/.test(phoneNumber.value)) { document.getElementById('phone-number-error').textContent = 'Numéro de téléphone invalide'; return false; } return true; }

function preparePaymentData(method, formData, total) {
  const baseData = { method, total, cart, timestamp: new Date().toISOString() };
  switch (method) {
    case 'visa':
    case 'mastercard':
      return { ...baseData, cardNumber: formData.get('cardNumber').replace(/\s/g, ''), expiry: formData.get('expiry'), cvv: formData.get('cvv'), cardName: formData.get('cardName'), billingAddress: formData.get('billingAddress') || null };
    case 'paypal':
      return { ...baseData, redirectUrl: 'https://www.paypal.com/checkoutnow' };
    case 'wave':
    case 'orange-money':
    case 'mtn-momo':
    case 'airtel-money':
      return { ...baseData, phoneNumber: formData.get('phoneNumber'), fullName: formData.get('fullName') || null };
    default:
      return baseData;
  }
}

window.showNotification = showNotification;
window.cart = cart;

