document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------------------------------------------------------
     1. DRAWER TOGGLES (Cart & Mobile Menu)
  -------------------------------------------------------------------------- */
  const cartDrawerOpenBtn = document.getElementById('cart-drawer-open');
  const cartDrawerCloseBtn = document.getElementById('cart-drawer-close');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-overlay');
  
  const mobileMenuOpenBtn = document.getElementById('mobile-menu-open');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');

  function openCart() {
    cartDrawer.classList.remove('translate-x-full');
    cartOverlay.classList.remove('opacity-0', 'pointer-events-none');
    updateCartDrawer(); // Fetch latest cart data
  }

  function closeCart() {
    cartDrawer.classList.add('translate-x-full');
    cartOverlay.classList.add('opacity-0', 'pointer-events-none');
  }

  if(cartDrawerOpenBtn) cartDrawerOpenBtn.addEventListener('click', openCart);
  if(cartDrawerCloseBtn) cartDrawerCloseBtn.addEventListener('click', closeCart);
  if(cartOverlay) cartOverlay.addEventListener('click', closeCart);

  if(mobileMenuOpenBtn && mobileMenuDrawer) {
    mobileMenuOpenBtn.addEventListener('click', () => mobileMenuDrawer.classList.remove('-translate-x-full'));
    mobileMenuCloseBtn.addEventListener('click', () => mobileMenuDrawer.classList.add('-translate-x-full'));
  }

  /* -------------------------------------------------------------------------
     2. SHOPIFY AJAX CART
  -------------------------------------------------------------------------- */
  function formatMoney(cents) {
    return '₹' + (cents / 100).toFixed(2).replace(/\.00$/, '');
  }

  function updateCartDrawer() {
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => {
        // Update item count badge
        document.querySelectorAll('.cart-item-count').forEach(el => el.textContent = cart.item_count);
        // Update subtotal
        document.getElementById('cart-subtotal').textContent = formatMoney(cart.total_price);
        
        // Update free shipping bar (Assuming ₹1500 threshold)
        const threshold = 150000; 
        const away = threshold - cart.total_price;
        const progress = Math.min(100, (cart.total_price / threshold) * 100);
        document.getElementById('cart-shipping-bar').style.width = progress + '%';
        
        const awayText = document.getElementById('cart-shipping-away');
        if(awayText) {
          if (away > 0) {
            awayText.textContent = formatMoney(away);
            awayText.parentElement.innerHTML = `You are <span id="cart-shipping-away" class="text-[#e040a0]">${formatMoney(away)}</span> away from FREE shipping!`;
          } else {
            awayText.parentElement.innerHTML = `🎉 You have unlocked <span class="text-[#e040a0] font-black">FREE SHIPPING</span>!`;
          }
        }

        // Render Items
        const container = document.getElementById('cart-items-container');
        if (cart.items.length === 0) {
          container.innerHTML = '<div class="text-center py-20 text-gray-500 font-medium">Your cart is empty.</div>';
          return;
        }

        let html = '';
        cart.items.forEach(item => {
          html += `
            <div class="flex gap-4">
              <div class="w-20 h-20 bg-gray-50 rounded-[4px] border border-gray-100 flex-shrink-0">
                <img src="${item.image}" alt="${item.product_title}" class="w-full h-full object-contain p-1 mix-blend-multiply" />
              </div>
              <div class="flex-grow">
                <h4 class="font-bold text-gray-900 text-sm leading-tight">${item.product_title}</h4>
                <p class="text-gray-500 text-xs mb-2">${item.variant_title !== 'Default Title' ? item.variant_title : ''}</p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center border border-gray-200 rounded-[4px] w-20 h-8">
                    <button class="flex-1 text-gray-500 hover:bg-gray-50 font-bold" onclick="changeItemQty('${item.key}', ${item.quantity - 1})">−</button>
                    <span class="w-6 text-center text-xs font-black">${item.quantity}</span>
                    <button class="flex-1 text-gray-500 hover:bg-gray-50 font-bold" onclick="changeItemQty('${item.key}', ${item.quantity + 1})">+</button>
                  </div>
                  <span class="font-black text-gray-900 text-sm">${formatMoney(item.final_line_price)}</span>
                </div>
              </div>
            </div>
          `;
        });
        container.innerHTML = html;
      });
  }

  // Global function for onclick handlers
  window.changeItemQty = function(key, quantity) {
    fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: key, quantity: quantity })
    })
    .then(response => response.json())
    .then(cart => updateCartDrawer())
    .catch(error => console.error('Error:', error));
  };

  /* -------------------------------------------------------------------------
     3. PRODUCT PAGE - ATC Intercept & Variant Selection
  -------------------------------------------------------------------------- */
  const addToCartForm = document.getElementById('AddToCartForm');
  if (addToCartForm) {
    addToCartForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(addToCartForm);
      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(item => {
        openCart();
      })
      .catch(error => console.error('Error:', error));
    });

    // Quantity buttons
    const qtyInput = document.getElementById('Quantity');
    document.querySelector('.qty-minus')?.addEventListener('click', () => {
      let val = parseInt(qtyInput.value);
      if(val > 1) qtyInput.value = val - 1;
    });
    document.querySelector('.qty-plus')?.addEventListener('click', () => {
      qtyInput.value = parseInt(qtyInput.value) + 1;
    });
  }

  /* -------------------------------------------------------------------------
     4. PRODUCT PAGE - Gallery Thumbnails
  -------------------------------------------------------------------------- */
  const mainImage = document.getElementById('MainProductImage');
  const thumbnails = document.querySelectorAll('.gallery-thumbnail, .gallery-thumbnail-mobile');
  
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
      // Remove active state
      thumbnails.forEach(t => t.classList.remove('border-gray-900'));
      // Add active state
      this.classList.add('border-gray-900');
      // Swap image
      mainImage.src = this.getAttribute('data-image-src');
    });
  });

  /* -------------------------------------------------------------------------
     5. PRODUCT PAGE - Accordions
  -------------------------------------------------------------------------- */
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
      const icon = this.querySelector('.accordion-icon');
      
      if (targetContent.classList.contains('hidden')) {
        targetContent.classList.remove('hidden');
        targetContent.classList.add('block');
        icon.textContent = 'remove';
      } else {
        targetContent.classList.add('hidden');
        targetContent.classList.remove('block');
        icon.textContent = 'add';
      }
    });
  });

  /* -------------------------------------------------------------------------
     6. HOMEPAGE - 3D Scroll Video Sequence (HTML5 Canvas)
  -------------------------------------------------------------------------- */
  const canvas = document.getElementById('video-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const totalFrames = 300;
    const images = [];
    let imagesLoaded = 0;

    canvas.width = 1920;
    canvas.height = 1080;

    // Load frames from Shopify CDN
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      // Format: frame_001.jpg - assuming uploaded to Shopify Files
      const frameIndex = i.toString().padStart(3, '0');
      img.src = `https://estrip.in/cdn/shop/files/frame_${frameIndex}.jpg`; 
      img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === 1) {
          ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
        }
      };
      images.push(img);
    }

    const container = document.getElementById('scroll-sequence-container');
    
    window.addEventListener('scroll', () => {
      const rect = container.getBoundingClientRect();
      // Calculate how far we've scrolled into the container
      const scrollProgress = -rect.top / (rect.height - window.innerHeight);
      
      // Clamp between 0 and 1
      const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);
      
      // Map to frame index
      const frameIndex = Math.min(
        totalFrames - 1,
        Math.floor(clampedProgress * totalFrames)
      );

      // Draw the frame if it's loaded
      if (images[frameIndex] && images[frameIndex].complete) {
        ctx.drawImage(images[frameIndex], 0, 0, canvas.width, canvas.height);
      }
    }, { passive: true });
  }

});
