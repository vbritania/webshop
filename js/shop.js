let productsHtml = '';

products.forEach((products) => {
  productsHtml += `
  <div class="product-card">
    <div class="product-img">
    <img src="images/products/${products.img}" alt="">
    </div>
    <div class="product-info">
      <div class="product-category">${products.category}</div>
      <div class="product-name">${products.name}</div>
      <div class="product-desc">${products.desc}</div>
      <div class="product-footer">
        <div class="product-price"> $${(products.priceCents / 100).toFixed(2)}</div>
        <button class="btn-cart js-add-to-cart" data-product-id="${products.id}"">+</button>
      </div>
    </div>
  </div>
`;

});


document.querySelector(".products-grid").innerHTML = productsHtml;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productsId
    let matchingItem;

    cart.forEach((item) => {
      if(productId === item.productId){
        matchingItem = item;
      }
    });

    if(matchingItem){
      matchingItem.quantity += 1;
    } else{
      cart.push({
        productId: productId,
        quantity: 1
      });
    }

    console.log(cart);

  });
});

let cartTrue;


document.querySelector('.js-cart').addEventListener('click', () => {
  if(!cartTrue){
     
  document.querySelector('.cart').innerHTML =
  `<div class="cart-sidebar">
    <h1> po</h1>
  <header>
    <h2>Warenkorb</h2>
    <span id="cartCount">0 Artikel</span>
  </header>
 
 
 
  <!-- Items -->
  <div class="cart-items">

  </div>
 
  <!-- Footer -->
  <footer id="cartFoot" style="display:none">
    <div class="cart-subtotal">
      <span>Gesamt</span>
      <strong id="cartTotal">0,00 €</strong>
    </div>
    <hr class="cart-divider">
    <button class="btn-checkout">Zur Kasse</button>
    <button class="btn-continue">Weiter einkaufen</button>
  </footer>
 
</div>`;
cartTrue = true;
console.log(cartTrue);
  }

  else{
     document.querySelector('.cart').innerHTML = ``;
     cartTrue = false;
     console.log(cartTrue + "nein");
  }

});