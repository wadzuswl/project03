// 장바구니 추가·개수 (localStorage)

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function updateCartCount() {
  const el = document.querySelector('.cart-count');
  if (!el) return;
  const total = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
  el.textContent = total;
  el.style.display = total > 0 ? 'block' : 'none';
}

function addToCart(productId) {
  const product = [...(productsData?.best || []), ...(productsData?.new || []), ...(productsData?.sale || [])].find(p => p.id === productId);
  if (!product) return;
  const existing = cartItems.find(item => item.id === productId);
  if (existing) existing.quantity += 1;
  else cartItems.push({ id: product.id, title: product.title, price: product.salePrice, originalPrice: product.price, image: product.image, quantity: 1 });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  updateCartCount();
  showNotification('장바구니에 추가되었습니다!');
}

updateCartCount();
