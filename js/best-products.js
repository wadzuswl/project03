// 베스트 상품 페이지 (sub2.html)

const getBestProducts = () => (window.productsData || (typeof productsData !== 'undefined' ? productsData : null))?.best || [];

function starHtml(rating) {
    let s = '';
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(rating)) s += '<i class="bi bi-star-fill"></i>';
        else if (i < rating) s += '<i class="bi bi-star-half"></i>';
        else s += '<i class="bi bi-star"></i>';
    }
    return s;
}

// TOP 3 베스트 상품 표시 (특별 강조)
function renderTop3Products(products) {
    const top3Grid = document.getElementById('bestTop3Grid');
    if (!top3Grid) return;

    // 상위 3개만 가져오기
    const top3 = products.slice(0, 3);

    // 그리드 초기화
    top3Grid.innerHTML = '';

    // 각 상품을 TOP 3 카드로 변환하여 추가
    top3.forEach((product, index) => {
        const card = createTop3ProductCard(product, index + 1);
        top3Grid.appendChild(card);
    });

    // 상품 카드 이벤트 연결
    if (typeof attachProductEvents === 'function') {
        attachProductEvents();
    }
}

// 나머지 베스트 상품 표시
function renderBestProducts(products) {
    const grid = document.getElementById('bestProductsGrid');
    const countEl = document.getElementById('bestProductsCount');

    if (!grid) return;

    // 상품 개수 업데이트
    if (countEl) {
        countEl.textContent = products.length;
    }

    // 상위 3개를 제외한 나머지 상품 (4~8위까지만)
    const others = products.slice(3, 8);

    // 그리드 초기화
    grid.innerHTML = '';

    // 각 상품을 카드로 변환하여 추가
    others.forEach((product, index) => {
        const card = createBestProductCard(product, index + 4); // 4위부터 시작
        grid.appendChild(card);
    });

    // 상품 카드 이벤트 연결 (main.js의 attachProductEvents 사용)
    if (typeof attachProductEvents === 'function') {
        attachProductEvents();
    }
}

function createTop3ProductCard(product, rank) {
    const card = document.createElement('div');
    card.className = 'best-top3-card';
    card.setAttribute('data-product-id', product.id);
    const rankIcon = { 1: 'bi-trophy-fill', 2: 'bi-award-fill', 3: 'bi-award-fill' }[rank] || 'bi-award-fill';
    const priceHTML = product.discount > 0
        ? `<span class="price-original">${product.price.toLocaleString()}원</span><span class="price-sale">${product.salePrice.toLocaleString()}원</span>`
        : `<span class="price-sale">${product.salePrice.toLocaleString()}원</span>`;
    card.innerHTML = `
        <div class="top3-rank-badge rank-${rank}">
            <i class="bi ${rankIcon}"></i>
            <span>${rank}위</span>
        </div>
        <div class="product-image-wrapper">
            <img src="${product.image}" alt="${product.title}" class="product-image">
        </div>
        <div class="product-info">
            <div class="product-rating">${starHtml(product.rating)}<span class="rating-text">${product.rating} (${product.reviews})</span></div>
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price">
                ${priceHTML}
            </div>
            <div class="product-meta">
                <span class="delivery-info"><i class="bi bi-truck"></i> 무료배송</span>
                <span class="review-count"><i class="bi bi-chat"></i> 리뷰 ${product.reviews}</span>
            </div>
            <button class="add-to-cart-btn"><i class="bi bi-cart-plus"></i> 장바구니</button>
        </div>
    `;

    return card;
}

// 일반 베스트 상품 카드 생성 (랭킹 번호 포함)
function createBestProductCard(product, rank = null) {
    const card = document.createElement('div');
    card.className = 'product-card best-product-card';
    card.setAttribute('data-product-id', product.id);

    const priceHTML = product.discount > 0
        ? `<span class="price-original">${product.price.toLocaleString()}원</span><span class="price-sale">${product.salePrice.toLocaleString()}원</span>`
        : `<span class="price-sale">${product.salePrice.toLocaleString()}원</span>`;
    const rankHTML = rank ? `<div class="product-rank">${rank}위</div>` : '';

    card.innerHTML = `
        <div class="product-image-wrapper">
            ${rankHTML}
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-overlay">
                <button class="quick-view-btn"><i class="bi bi-eye"></i> 빠른보기</button>
                <button class="wishlist-btn"><i class="bi bi-heart"></i></button>
            </div>
        </div>
        <div class="product-info">
            <div class="product-rating">${starHtml(product.rating)}<span class="rating-text">${product.rating} (${product.reviews})</span></div>
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price">
                ${priceHTML}
            </div>
            <div class="product-meta">
                <span class="delivery-info"><i class="bi bi-truck"></i> 무료배송</span>
                <span class="review-count"><i class="bi bi-chat"></i> 리뷰 ${product.reviews}</span>
            </div>
            <button class="add-to-cart-btn"><i class="bi bi-cart-plus"></i> 장바구니</button>
        </div>
    `;

    return card;
}

const sortProducts = (products, type) => {
    const sorted = [...products];
    const fns = { popular: (a, b) => b.reviews - a.reviews, rating: (a, b) => b.rating - a.rating, 'price-low': (a, b) => a.salePrice - b.salePrice, 'price-high': (a, b) => b.salePrice - a.salePrice, reviews: (a, b) => b.reviews - a.reviews };
    return fns[type] ? sorted.sort(fns[type]) : sorted;
};

function initBestProductsPage() {
    if (!window.location.pathname.includes('sub2.html')) return;
    let bestProducts = getBestProducts();
    if (!bestProducts.length) return;
    renderTop3Products(bestProducts);
    renderBestProducts(bestProducts);
    document.getElementById('sortSelect')?.addEventListener('change', (e) => {
        const sorted = sortProducts(bestProducts, e.target.value);
        renderTop3Products(sorted);
        renderBestProducts(sorted);
    });
}
document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', initBestProductsPage) : initBestProductsPage();