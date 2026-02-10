// 장바구니 페이지 (sub3) - 수량 +/-·삭제·합계

const parseWon = (text) => parseInt(String(text).replace(/\D/g, ''), 10) || 0;
const formatWon = (num) => `${Number(num || 0).toLocaleString()}원`;

function updateCartSummary() {
  const items = document.querySelectorAll('.cart-item');
  let sum = 0;
  items.forEach(item => {
    if (item.querySelector('.item-checkbox')?.checked)
      sum += parseWon(item.querySelector('.total-price')?.textContent);
  });
  const totalEl = document.querySelector('.summary-row.total .final-price');
  const subtotalEl = document.querySelector('.summary-row span:nth-child(2)');
  if (subtotalEl) subtotalEl.textContent = formatWon(sum);
  if (totalEl) totalEl.textContent = formatWon(sum);
}

function syncCartToStorage(itemEl, qty) {
  const id = parseInt(itemEl.querySelector('.cart-item-delete')?.dataset.itemId || '0', 10);
  if (!id) return;
  const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
  const found = cart.find(ci => ci.id === id);
  if (found) { found.quantity = qty; localStorage.setItem('cartItems', JSON.stringify(cart)); }
}

function renderCartItems() {
  const container = document.querySelector('.cart-items');
  if (!container) return;
  const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  container.querySelectorAll('.cart-item').forEach(el => el.remove());

  if (!cartItems.length) {
    container.innerHTML = `<div class="cart-empty"><div class="empty-state"><i class="bi bi-cart-x empty-icon"></i><p>장바구니가 비어있습니다</p><a href="sub1.html" class="btn">쇼핑하러 가기</a></div></div>`;
    return;
  }

  cartItems.forEach(item => {
    const total = item.price * item.quantity;
    const hasOriginal = item.originalPrice && item.originalPrice > item.price;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <label class="checkbox-wrapper"><input type="checkbox" class="item-checkbox" checked><span></span></label>
      <div class="cart-item-image"><img src="${item.image || 'https://via.placeholder.com/120'}" alt="${item.title}"></div>
      <div class="cart-item-info">
        <h3 class="cart-item-title">${item.title}</h3>
        <div class="cart-item-option">${item.option ? `<span>${item.option}</span>` : ''}</div>
        <div class="cart-item-price">${hasOriginal ? `<span class="price-original">${item.originalPrice.toLocaleString()}원</span>` : ''}<span class="price-sale">${item.price.toLocaleString()}원</span></div>
      </div>
      <div class="cart-item-quantity">
        <button class="qty-btn minus" type="button"><i class="bi bi-dash"></i></button>
        <input type="number" value="${item.quantity}" min="1" class="qty-input">
        <button class="qty-btn plus" type="button"><i class="bi bi-plus"></i></button>
      </div>
      <div class="cart-item-total"><span class="total-price">${total.toLocaleString()}원</span></div>
      <button class="cart-item-delete" data-item-id="${item.id}" type="button"><i class="bi bi-x-lg"></i></button>
    `;
    container.appendChild(div);
  });

  initCartPage();
}

function initCartPage() {
  const container = document.querySelector('.cart-items');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const item = e.target.closest('.cart-item');
    if (!item) return;
    const minus = e.target.closest('.qty-btn.minus');
    const plus = e.target.closest('.qty-btn.plus');
    const del = e.target.closest('.cart-item-delete');
    const input = item.querySelector('.qty-input');
    const totalEl = item.querySelector('.total-price');
    const unit = parseWon(item.querySelector('.price-sale')?.textContent);

    if (minus && input) {
      const qty = Math.max(1, parseInt(input.value, 10) - 1);
      input.value = qty;
      totalEl.textContent = formatWon(unit * qty);
      syncCartToStorage(item, qty);
      updateCartSummary();
    } else if (plus && input) {
      const qty = parseInt(input.value, 10) + 1;
      input.value = qty;
      totalEl.textContent = formatWon(unit * qty);
      syncCartToStorage(item, qty);
      updateCartSummary();
    } else if (del) {
      const id = parseInt(del.dataset.itemId || '0', 10);
      if (id) {
        const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
        localStorage.setItem('cartItems', JSON.stringify(cart.filter(ci => ci.id !== id)));
      }
      item.remove();
      updateCartSummary();
      typeof updateCartCount === 'function' && updateCartCount();
    }
  });

  container.addEventListener('change', (e) => {
    if (e.target.classList.contains('item-checkbox')) { updateCartSummary(); return; }
    if (e.target.classList.contains('qty-input')) {
      const item = e.target.closest('.cart-item');
      const qty = Math.max(1, parseInt(e.target.value, 10) || 1);
      e.target.value = qty;
      const unit = parseWon(item?.querySelector('.price-sale')?.textContent);
      const totalEl = item?.querySelector('.total-price');
      if (totalEl) totalEl.textContent = formatWon(unit * qty);
      syncCartToStorage(item, qty);
      updateCartSummary();
    }
  });

  const selectAll = document.getElementById('selectAll');
  selectAll?.addEventListener('change', () => {
    container.querySelectorAll('.item-checkbox').forEach(cb => cb.checked = selectAll.checked);
    updateCartSummary();
  });

  updateCartSummary();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderCartItems);
else renderCartItems();
