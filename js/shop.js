let productsHtml = '';

products.forEach((products) => {
  productsHtml += `
  <div class="product-card">
    <div class="product-img">
      <img src="../images/products/${products.image}" alt="Cable Management Kit">
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



