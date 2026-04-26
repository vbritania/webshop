let html = '';

html = `
  <div class="product-card">
    <div class="product-img">
      <img src="cable-managment.jpg" alt="Cable Management Kit">
    </div>
    <div class="product-info">
      <div class="product-category">Technik</div>
      <div class="product-name">Cable Management Kit</div>
      <div class="product-desc">Organize cables neatly with adjustable straps and clips.</div>
      <div class="product-footer">
        <div class="product-price">12,99€</div>
        <button class="btn-cart" data-id="1">+</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="product-img">
      <img src="chalk.webp" alt="Climbing Chalk">
    </div>
    <div class="product-info">
      <div class="product-category">Fitness</div>
      <div class="product-name">Climbing Chalk</div>
      <div class="product-desc">Improve grip and reduce moisture during workouts.</div>
      <div class="product-footer">
        <div class="product-price">8,99€</div>
        <button class="btn-cart" data-id="2">+</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="product-img">
      <img src="digital-multimeter.jpg" alt="Digital Multimeter">
    </div>
    <div class="product-info">
      <div class="product-category">Tools</div>
      <div class="product-name">Digital Multimeter</div>
      <div class="product-desc">Measure voltage, current, and resistance with high accuracy.</div>
      <div class="product-footer">
        <div class="product-price">24,99€</div>
        <button class="btn-cart" data-id="3">+</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="product-img">
      <img src="foam-roller.jpg" alt="Foam Roller">
    </div>
    <div class="product-info">
      <div class="product-category">Fitness</div>
      <div class="product-name">Foam Roller</div>
      <div class="product-desc">Relieve muscle tension and aid recovery after exercise.</div>
      <div class="product-footer">
        <div class="product-price">19,99€</div>
        <button class="btn-cart" data-id="4">+</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="product-img">
      <img src="knee-sleeves.webp" alt="Knee Sleeves">
    </div>
    <div class="product-info">
      <div class="product-category">Fitness</div>
      <div class="product-name">Knee Sleeves</div>
      <div class="product-desc">Provide warmth and support for knees during heavy lifts.</div>
      <div class="product-footer">
        <div class="product-price">34,99€</div>
        <button class="btn-cart" data-id="5">+</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="product-img">
      <img src="power-belt.webp" alt="Powerlifting Belt">
    </div>
    <div class="product-info">
      <div class="product-category">Fitness</div>
      <div class="product-name">Powerlifting Belt</div>
      <div class="product-desc">Enhance lumbar support and intra-abdominal pressure.</div>
      <div class="product-footer">
        <div class="product-price">39,99€</div>
        <button class="btn-cart" data-id="6">+</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="product-img">
      <img src="resistance-band.webp" alt="Resistance Band Set">
    </div>
    <div class="product-info">
      <div class="product-category">Fitness</div>
      <div class="product-name">Resistance Band Set</div>
      <div class="product-desc">Versatile bands for strength training and stretching.</div>
      <div class="product-footer">
        <div class="product-price">14,99€</div>
        <button class="btn-cart" data-id="7">+</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="product-img">
      <img src="screwdriver-set.jpg" alt="Screwdriver Set">
    </div>
    <div class="product-info">
      <div class="product-category">Tools</div>
      <div class="product-name">Screwdriver Set</div>
      <div class="product-desc">Precision screwdrivers for electronics and household repairs.</div>
      <div class="product-footer">
        <div class="product-price">18,99€</div>
        <button class="btn-cart" data-id="8">+</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="product-img">
      <img src="soldering-station.jpg" alt="Soldering Station">
    </div>
    <div class="product-info">
      <div class="product-category">Electronics</div>
      <div class="product-name">Soldering Station</div>
      <div class="product-desc">Adjustable temperature soldering iron for DIY projects.</div>
      <div class="product-footer">
        <div class="product-price">49,99€</div>
        <button class="btn-cart" data-id="9">+</button>
      </div>
    </div>
  </div>

  <div class="product-card">
    <div class="product-img">
      <img src="USB.jpg" alt="USB Flash Drive">
    </div>
    <div class="product-info">
      <div class="product-category">Electronics</div>
      <div class="product-name">USB Flash Drive</div>
      <div class="product-desc">High-speed storage for files and backups.</div>
      <div class="product-footer">
        <div class="product-price">12,99€</div>
        <button class="btn-cart" data-id="10">+</button>
      </div>
    </div>
  </div>
`;

document.querySelector(".products-grid").innerHTML = html;