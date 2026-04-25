const ORDERS = [
  { id: '#FG-2847', name: 'Pro Lifting Belt', date: '18. Apr 2025', price: 89.99, status: 'delivered' },
  { id: '#FG-2831', name: 'Digital Multimeter', date: '02. Apr 2025', price: 79.99, status: 'shipped' },
  { id: '#FG-2801', name: 'Resistance Bands Set', date: '14. März 2025', price: 34.99, status: 'delivered' },
];

const STATUS_LABELS = {
  delivered: 'Geliefert',
  shipped:   'Versendet',
  pending:   'Ausstehend',
};

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.profile-nav-item');
  const sections = document.querySelectorAll('.profile-section');

  navItems.forEach(btn => {
    btn.addEventListener('click', () => {
      navItems.forEach(b => b.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('section-' + btn.dataset.section)?.classList.add('active');
    });
  });

  const ordersList = document.getElementById('ordersList');
  if (ordersList) {
    ordersList.innerHTML = ORDERS.map(o => `
      <div class="order-item">
        <div>
          <div class="order-id">${o.id}</div>
          <div class="order-name">${o.name}</div>
          <div class="order-meta">${o.date}</div>
        </div>
        <span class="order-status status-${o.status}">${STATUS_LABELS[o.status]}</span>
        <div class="order-price">${o.price.toFixed(2).replace('.', ',')}€</div>
      </div>
    `).join('');
  }

  document.getElementById('saveBtn')?.addEventListener('click', () => {
    const first = document.getElementById('firstName').value.trim();
    const last  = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();

    if (first) document.getElementById('displayName').textContent = `${first} ${last}`;
    if (email) document.getElementById('displayEmail').textContent = email;

    showToast('Profil gespeichert', 'success');
  });
});
