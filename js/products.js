// ============================================
// 상품 카드 생성 및 로딩
// ============================================
// 이 파일은 상품 데이터를 HTML 카드로 변환하고 화면에 표시하는 기능을 담당합니다.

// ============================================
// 상품 카드 생성 함수
// ============================================
// 상품 정보를 받아서 HTML 카드 형태로 변환합니다.
function createProductCard(product) {
    // 별점 계산 (정수 부분과 반 별점 여부)
    const stars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;

    // 별점 HTML 생성
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        if (i < stars) {
            starsHTML += '<i class="bi bi-star-fill"></i>';
        } else if (i === stars && hasHalfStar) {
            starsHTML += '<i class="bi bi-star-half"></i>';
        } else {
            starsHTML += '<i class="bi bi-star"></i>';
        }
    }

    // 가격 HTML 생성 (할인이 있으면 원가와 할인가 모두 표시)
    const priceHTML = product.discount > 0
        ? `<span class="price-original">${product.price.toLocaleString()}원</span>
           <span class="price-sale">${product.salePrice.toLocaleString()}원</span>`
        : `<span class="price-sale">${product.salePrice.toLocaleString()}원</span>`;

    // 뱃지 HTML (badge와 badgeText가 모두 있을 때만 표시)
    const badgeHTML = (product.badge && product.badgeText)
        ? `<span class="product-badge ${product.badge}">${product.badgeText}</span>`
        : '';

    // 상품 카드 HTML 반환
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image-wrapper">
                ${badgeHTML}
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-overlay">
                    <button class="quick-view-btn"><i class="bi bi-eye"></i> 빠른보기</button>
                    <button class="wishlist-btn"><i class="bi bi-heart"></i></button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-rating">
                    ${starsHTML}
                    <span class="rating-text">${product.rating} (${product.reviews})</span>
                </div>
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
        </div>
    `;
}

// ============================================
// 상품 그리드에 상품 로드
// ============================================
// 특정 컨테이너에 상품 목록을 표시합니다.
// containerId가 null이면 첫 번째 .products-grid를 찾아서 사용합니다.
function loadProducts(containerId, products) {
    let container;
    if (containerId) {
        container = document.getElementById(containerId);
    } else {
        // containerId가 없으면 .products-grid를 찾음
        container = document.querySelector('.products-grid');
    }

    if (!container) return;

    // 상품 카드들을 생성하여 컨테이너에 추가
    container.innerHTML = products.map(product => createProductCard(product)).join('');

    // 상품 카드에 이벤트 리스너 연결
    attachProductEvents();
}

// ============================================
// 상품 카드 이벤트 연결
// ============================================
// 상품 카드의 버튼들(장바구니, 빠른보기, 찜하기)에 클릭 이벤트를 연결합니다.
function attachProductEvents() {
    // 장바구니 추가 버튼
    // 기존 이벤트 리스너를 제거하고 새로 추가 (중복 방지)
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        // 기존 이벤트 리스너 제거를 위해 클론 후 교체
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);

        // 새 버튼에 이벤트 리스너 추가
        newButton.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const productCard = this.closest('.product-card');
            if (!productCard) return;

            // data-product-id 속성에서 상품 ID 가져오기
            let productId = parseInt(productCard.dataset.productId);

            // data-product-id가 없으면 제목으로 상품 찾기
            if (!productId || isNaN(productId)) {
                const titleElement = productCard.querySelector('.product-title');
                if (titleElement) {
                    const title = titleElement.textContent.trim();
                    // productsData에서 제목으로 상품 찾기
                    const allProducts = [
                        ...(productsData.best || []),
                        ...(productsData.new || []),
                        ...(productsData.sale || [])
                    ];
                    const foundProduct = allProducts.find(p => p.title === title);
                    if (foundProduct) {
                        productId = foundProduct.id;
                    }
                }
            }

            // 상품 ID가 있으면 장바구니에 추가
            if (productId && !isNaN(productId)) {
                if (typeof addToCart === 'function') {
                    addToCart(productId);
                }
            } else {
                // 상품을 찾을 수 없으면 알림
                if (typeof showNotification === 'function') {
                    showNotification('상품 정보를 찾을 수 없습니다.');
                } else {
                    alert('상품 정보를 찾을 수 없습니다.');
                }
            }

            // 버튼 클릭 애니메이션
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });

    // 빠른보기 버튼 (상품 상세 페이지로 이동)
    document.querySelectorAll('.quick-view-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            const productCard = this.closest('.product-card');
            const productId = parseInt(productCard.dataset.productId);
            window.location.href = `product-detail.html?id=${productId}`;
        });
    });

    // 찜하기 버튼 (하트 아이콘 토글)
    document.querySelectorAll('.wishlist-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            const icon = this.querySelector('i');
            if (icon.classList.contains('bi-heart-fill')) {
                // 찜 해제
                icon.classList.remove('bi-heart-fill');
                icon.classList.add('bi-heart');
                this.style.color = '';
            } else {
                // 찜 추가
                icon.classList.remove('bi-heart');
                icon.classList.add('bi-heart-fill');
                this.style.color = '#ED2040';
                showNotification('찜 목록에 추가되었습니다!');
            }
        });
    });

    // 상품 카드 클릭 (상세 페이지로 이동)
    // 단, 버튼이나 링크를 클릭한 경우는 제외
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function (e) {
            if (!e.target.closest('button') && !e.target.closest('a')) {
                const productId = parseInt(this.dataset.productId);
                window.location.href = `product-detail.html?id=${productId}`;
            }
        });
    });
}

// ============================================
// 페이지별 상품 로드
// ============================================
// 각 페이지에서 필요한 상품 목록을 로드합니다.
// 주의: 이 부분은 각 페이지에서 필요한 경우에만 호출됩니다.

// 베스트 상품 로드 (bestProducts 컨테이너가 있는 경우)
if (document.getElementById('bestProducts')) {
    loadProducts('bestProducts', productsData.best);
}

// 신상품 로드 (newProducts 컨테이너가 있는 경우)
if (document.getElementById('newProducts')) {
    loadProducts('newProducts', productsData.new);
}

// 특가 상품 로드 (saleProducts 컨테이너가 있는 경우)
if (document.getElementById('saleProducts')) {
    loadProducts('saleProducts', productsData.sale);
}

// ============================================
// 검색 기능
// ============================================
// URL 파라미터에서 검색어를 읽어서 상품을 필터링합니다.
function searchProducts(query) {
    if (!query || !query.trim()) return null;

    // 모든 상품을 합쳐서 검색 대상으로 사용
    const allProducts = [
        ...(productsData.best || []),
        ...(productsData.new || []),
        ...(productsData.sale || [])
    ];

    // 중복 제거 (같은 ID는 한 번만)
    const uniqueProducts = allProducts.filter((product, index, self) =>
        index === self.findIndex(p => p.id === product.id)
    );

    // 검색어를 소문자로 변환하여 대소문자 구분 없이 검색
    const searchQuery = query.trim().toLowerCase();

    // 상품 제목에서 검색어가 포함된 상품 필터링
    const filteredProducts = uniqueProducts.filter(product => {
        const title = (product.title || '').toLowerCase();
        return title.includes(searchQuery);
    });

    return filteredProducts;
}

// ============================================
// 검색 결과 없음 메시지 표시
// ============================================
// 검색 결과가 없을 때 표시할 메시지와 메인으로 가기 버튼을 생성합니다.
function showNoSearchResults(query) {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;

    // 기존 상품 카드 제거
    productsGrid.innerHTML = '';

    // 검색 결과 없음 메시지 HTML 생성
    // CSS 클래스를 사용하여 스타일 적용 (인라인 스타일 제거)
    const noResultsHTML = `
        <div class="search-no-results">
            <div class="no-results-icon">
                <i class="bi bi-search"></i>
            </div>
            <h2 class="no-results-title">
                "${query}"로 검색한 상품이 존재하지 않습니다
            </h2>
            <p class="no-results-desc">
                다른 검색어로 시도해보시거나, 아래 버튼을 통해 메인 페이지로 돌아가세요.
            </p>
            <div class="no-results-actions">
                <a href="index.html" class="btn btn-primary">
                    <i class="bi bi-house-door"></i> 메인으로 가기
                </a>
                <button onclick="window.history.back()" class="btn btn-secondary">
                    <i class="bi bi-arrow-left"></i> 이전 페이지
                </button>
            </div>
        </div>
    `;

    productsGrid.innerHTML = noResultsHTML;
}

// ============================================
// 상품목록 페이지(sub1.html) 처리
// ============================================
// 상품목록 페이지의 products-grid에 상품을 동적으로 로드하거나,
// 이미 있는 하드코딩된 카드들에 이벤트를 연결합니다.
if (document.querySelector('.products-grid')) {
    const productsGrid = document.querySelector('.products-grid');

    // URL 파라미터에서 검색어 읽기
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');

    // 검색어가 있으면 검색 결과 표시
    if (searchQuery) {
        const searchResults = searchProducts(searchQuery);

        if (searchResults && searchResults.length > 0) {
            // 검색 결과가 있으면 해당 상품들만 표시
            loadProducts(null, searchResults);

            // 페이지 제목 업데이트 (선택사항)
            const pageTitle = document.querySelector('.page-title');
            if (pageTitle) {
                pageTitle.textContent = `"${searchQuery}" 검색 결과 (${searchResults.length}개)`;
            }
        } else {
            // 검색 결과가 없으면 안내 메시지 표시
            showNoSearchResults(searchQuery);

            // 페이지 제목 업데이트
            const pageTitle = document.querySelector('.page-title');
            if (pageTitle) {
                pageTitle.textContent = `"${searchQuery}" 검색 결과`;
            }
        }
    } else {
        // 검색어가 없으면 일반 상품 목록 표시
        // products-grid가 비어있거나 상품 카드가 없으면 동적으로 로드
        if (!productsGrid.querySelector('.product-card[data-product-id]')) {
            // 모든 상품을 합쳐서 표시 (또는 필요한 카테고리만)
            const allProducts = [
                ...(productsData.best || []),
                ...(productsData.new || []),
                ...(productsData.sale || [])
            ];

            // 중복 제거 (같은 ID는 한 번만)
            const uniqueProducts = allProducts.filter((product, index, self) =>
                index === self.findIndex(p => p.id === product.id)
            );

            // 상품 그리드에 로드
            loadProducts(null, uniqueProducts.slice(0, 12)); // 최대 12개
        } else {
            // 이미 하드코딩된 카드가 있으면 이벤트만 연결
            attachProductEvents();
        }
    }
}

// ============================================
// 페이지 로드 시 장바구니 이벤트 연결 보장
// ============================================
// DOM이 완전히 로드된 후에도 이벤트가 연결되도록 보장합니다.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // 약간의 지연을 두어 동적으로 추가된 요소에도 이벤트가 연결되도록
        setTimeout(() => {
            attachProductEvents();
            // 장바구니 개수도 업데이트
            if (typeof updateCartCount === 'function') {
                updateCartCount();
            }
        }, 100);
    });
} else {
    // 이미 로드된 경우 즉시 실행
    setTimeout(() => {
        attachProductEvents();
        if (typeof updateCartCount === 'function') {
            updateCartCount();
        }
    }, 100);
}