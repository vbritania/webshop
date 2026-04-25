const Cart = (() => {
  let items = JSON.parse(localStorage.getItem('forge_cart') || '[]');

  function save() {
    localStorage.setItem('forge_cart', JSON.stringify(items));
  }

  function add(product) {
    const existing = items.find(i => i.id === product.id);
    if (existing) {
      existing.qty++;
    } else {
      items.push({ ...product, qty: 1 });
    }
    save();
    updateUI();
    showToast(`${product.name} hinzugefügt`);
  }

  function remove(id) {
    items = items.filter(i => i.id !== id);
    save();
    updateUI();
    renderDrawer();
  }

  function setQty(id, qty) {
    if (qty < 1) return remove(id);
    const item = items.find(i => i.id === id);
    if (item) item.qty = qty;
    save();
    updateUI();
    renderDrawer();
  }

  function total() {
    return items.reduce((s, i) => s + i.price * i.qty, 0);
  }

  function count() {
    return items.reduce((s, i) => s + i.qty, 0);
  }

  function updateUI() {
    const badge = document.getElementById('cartCount');
    if (!badge) return;
    const n = count();
    badge.textContent = n;
    badge.classList.toggle('visible', n > 0);
  }

  function renderDrawer() {
    const container = document.getElementById('cartItems');
    const foot = document.getElementById('cartFoot');
    const totalEl = document.getElementById('cartTotal');
    if (!container) return;

    if (items.length === 0) {
      container.innerHTML = `
        <div class="cart-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <p>Warenkorb ist leer</p>
        </div>`;
      if (foot) foot.style.display = 'none';
      return;
    }

    container.innerHTML = items.map(item => `
      <div class="cart-item">
        <div class="cart-item-img" style="background:${item.color || 'var(--surface)'}; display:flex; align-items:center; justify-content:center; border-radius:4px;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
        </div>
        <div>
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${item.price.toFixed(2).replace('.', ',')}€</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="Cart.setQty(${item.id}, ${item.qty - 1})">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="Cart.setQty(${item.id}, ${item.qty + 1})">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="Cart.remove(${item.id})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
        </button>
      </div>
    `).join('');

    if (foot) {
      foot.style.display = 'block';
      if (totalEl) totalEl.textContent = total().toFixed(2).replace('.', ',') + '€';
    }
  }

  function openDrawer() {
    renderDrawer();
    document.getElementById('cartDrawer')?.classList.add('open');
    document.getElementById('cartOverlay')?.classList.add('open');
  }

  function closeDrawer() {
    document.getElementById('cartDrawer')?.classList.remove('open');
    document.getElementById('cartOverlay')?.classList.remove('open');
  }

  function init() {
    updateUI();
    document.getElementById('cartBtn')?.addEventListener('click', openDrawer);
    document.getElementById('cartClose')?.addEventListener('click', closeDrawer);
    document.getElementById('cartOverlay')?.addEventListener('click', closeDrawer);
  }

  return { add, remove, setQty, total, count, init, items: () => items };
})();

function showToast(msg, type = '') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const el = document.createElement('div');
  el.className = `toast${type ? ' ' + type : ''}`;
  el.textContent = msg;
  container.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 400);
  }, 2800);
}

document.addEventListener('DOMContentLoaded', () => Cart.init());
