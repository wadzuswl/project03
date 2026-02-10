// 최근 본 상품 (localStorage)

function saveRecentProduct(productId) {
  let list = JSON.parse(localStorage.getItem('recentProducts') || '[]');
  list = list.filter(id => id !== productId);
  list.unshift(productId);
  localStorage.setItem('recentProducts', JSON.stringify(list.slice(0, 4)));
}

function loadRecentProducts() {
  const section = document.getElementById('recentProductsSection');
  const container = document.getElementById('recentProducts');
  if (!container) return;
  const ids = JSON.parse(localStorage.getItem('recentProducts') || '[]');
  if (!ids.length) {
    section && (section.style.display = 'none');
    return;
  }
  section && (section.style.display = 'block');
  const all = [...(productsData?.best || []), ...(productsData?.new || []), ...(productsData?.sale || [])];
  const list = ids.map(id => all.find(p => p.id === id)).filter(Boolean);
  container.innerHTML = list.map(p => createProductCard(p)).join('');
  typeof attachProductEvents === 'function' && attachProductEvents();
}
loadRecentProducts();
