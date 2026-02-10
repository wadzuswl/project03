// 마이페이지 탭 + 찜 목록 + 리뷰 탭

function initMyPageTabs() {
  const menu = document.querySelector('.mypage-menu');
  const panels = document.querySelectorAll('.mypage-panel');
  if (!menu || !panels.length) return;

  const openPanel = (key) => {
    panels.forEach(p => p.classList.toggle('active', p.dataset.panel === key));
    menu.querySelectorAll('.menu-item').forEach(a => a.classList.toggle('active', a.dataset.target === key));
    if (key === 'wishlist') loadWishlist();
  };

  menu.addEventListener('click', (e) => {
    const link = e.target.closest('.menu-item');
    if (!link?.dataset.target) return;
    e.preventDefault();
    openPanel(link.dataset.target);
  });

  const first = menu.querySelector('.menu-item.active')?.dataset.target || panels[0]?.dataset.panel;
  if (first) openPanel(first);
}

function starHtml(rating) {
  let html = '';
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) html += '<i class="bi bi-star-fill"></i>';
    else if (i < rating) html += '<i class="bi bi-star-half"></i>';
    else html += '<i class="bi bi-star"></i>';
  }
  return html;
}

function loadWishlist() {
  const grid = document.getElementById('wishlistGrid');
  const empty = document.getElementById('wishlistEmpty');
  if (!grid || !empty) return;
  const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
  const all = [...(productsData?.best || []), ...(productsData?.new || []), ...(productsData?.sale || [])];
  const list = all.filter(p => wishlist.includes(p.id));

  if (!list.length) {
    grid.style.display = 'none';
    empty.style.display = 'block';
    return;
  }
  grid.style.display = 'grid';
  empty.style.display = 'none';

  grid.innerHTML = list.map(p => `
    <div class="product-card" data-product-id="${p.id}">
      <div class="product-image-wrapper">
        <span class="product-badge ${p.badge}">${p.badgeText || ''}</span>
        <img src="${p.image}" alt="${p.title}" class="product-image">
        <div class="product-overlay">
          <button class="quick-view-btn"><i class="bi bi-eye"></i> 빠른보기</button>
          <button class="wishlist-btn active"><i class="bi bi-heart-fill"></i></button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-rating">${starHtml(p.rating)}<span class="rating-text">${p.rating} (${p.reviews})</span></div>
        <h3 class="product-title">${p.title}</h3>
        <div class="product-price">${p.discount > 0 ? `<span class="price-original">${p.price.toLocaleString()}원</span>` : ''}<span class="price-sale">${p.salePrice.toLocaleString()}원</span></div>
        <div class="product-meta"><span class="delivery-info"><i class="bi bi-truck"></i> 무료배송</span></div>
        <button class="add-to-cart-btn"><i class="bi bi-cart-plus"></i> 장바구니</button>
      </div>
    </div>
  `).join('');
  typeof attachProductEvents === 'function' && attachProductEvents();
}

function initReviewTabs() {
  const tabs = document.querySelectorAll('.review-tab');
  const sections = document.querySelectorAll('.review-section');
  if (!tabs.length || !sections.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.dataset.tab;
      sections.forEach(s => s.classList.toggle('active', s.dataset.section === key));
    });
  });
}

initMyPageTabs();
initReviewTabs();
