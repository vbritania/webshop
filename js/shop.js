(() => {
  let activeFilter = 'all';
  let maxPrice = 500;
  let sortMode = 'default';
  let searchQuery = '';

  function getFiltered() {
    let list = PRODUCTS.slice();

    if (activeFilter !== 'all') {
      if (activeFilter === 'sale') {
        list = list.filter(p => p.badge === 'sale');
      } else {
        list = list.filter(p => p.category === activeFilter);
      }
    }

    list = list.filter(p => p.price <= maxPrice);

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    if (sortMode === 'price-asc')  list.sort((a, b) => a.price - b.price);
    if (sortMode === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sortMode === 'name')       list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }

  function renderCard(p) {
    const oldPrice = p.oldPrice ? `<span class="old-price">${p.oldPrice.toFixed(2).replace('.', ',')}€</span>` : '';
    const badge = p.badge ? `<span class="product-badge ${p.badge}">${p.badge === 'new' ? 'Neu' : 'Sale'}</span>` : '';

    return `
      <article class="product-card" data-id="${p.id}">
        <div class="product-img" style="background:${p.color || 'var(--surface)'}">
          ${badge}
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
        </div>
        <div class="product-info">
          <div class="product-category">${p.category === 'fitness' ? 'Fitness' : 'Technik'}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-footer">
            <div class="product-price">
              ${oldPrice}
              ${p.price.toFixed(2).replace('.', ',')}€
            </div>
            <button class="btn-cart" data-id="${p.id}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              In den Korb
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function render() {
    const grid = document.getElementById('productsGrid');
    const countEl = document.getElementById('productsCount');
    const list = getFiltered();

    countEl.textContent = `${list.length} Produkt${list.length !== 1 ? 'e' : ''}`;

    if (list.length === 0) {
      grid.innerHTML = `<div class="no-results"><p>Keine Produkte gefunden</p></div>`;
      return;
    }

    grid.innerHTML = list.map(renderCard).join('');

    grid.querySelectorAll('.btn-cart').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id);
        const product = PRODUCTS.find(p => p.id === id);
        if (!product) return;
        Cart.add(product);
        btn.classList.add('added');
        btn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          Hinzugefügt
        `;
        setTimeout(() => {
          btn.classList.remove('added');
          btn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            In den Korb
          `;
        }, 1800);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    render();

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        render();
      });
    });

    const range = document.getElementById('priceRange');
    const priceVal = document.getElementById('priceVal');
    range?.addEventListener('input', () => {
      maxPrice = parseInt(range.value);
      priceVal.textContent = maxPrice + '€';
      render();
    });

    document.getElementById('sortSelect')?.addEventListener('change', e => {
      sortMode = e.target.value;
      render();
    });

    let searchTimer;
    document.getElementById('searchInput')?.addEventListener('input', e => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        searchQuery = e.target.value.trim();
        render();
      }, 250);
    });
  });
})();
