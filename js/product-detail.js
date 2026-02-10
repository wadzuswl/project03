// ============================================
// 상품 상세 페이지
// ============================================
// 이 파일은 product-detail.html의 상품 상세 페이지 기능을 담당합니다.
// URL 파라미터로 받은 상품 ID를 기반으로 상품 정보를 표시하고, 썸네일 클릭 시 메인 이미지를 변경합니다.

// 상품 ID로 상품 찾기 (전역 함수가 있으면 사용)
function getProductById(id) {
    if (typeof window.findProductById === 'function') {
        return window.findProductById(id);
    }
    // fallback: productsData에서 직접 찾기
    const data = window.productsData || (typeof productsData !== 'undefined' ? productsData : null);
    if (!data) return null;

    const allProducts = [
        ...(data.best || []),
        ...(data.new || []),
        ...(data.sale || []),
        ...(data.all || [])
    ];
    return allProducts.find(p => p.id === id) || null;
}

function initProductDetailPage() {
    // 상품 상세 페이지의 주요 요소들
    const mainImage = document.getElementById('mainProductImage');
    const thumbnails = document.querySelectorAll('.thumbnail-images .thumbnail');
    const titleEl = document.querySelector('.product-detail-title');
    const priceOriginalEl = document.querySelector('.product-detail-price .price-original');
    const priceSaleEl = document.querySelector('.product-detail-price .price-sale');
    const ratingScoreEl = document.querySelector('.product-detail-rating .rating-score');
    const reviewCountEl = document.querySelector('.product-detail-rating .review-count');
    const badgesEl = document.querySelector('.product-badges');
    const starsEl = document.querySelector('.product-detail-rating .stars');

    // ============================================
    // URL 파라미터에서 상품 ID 가져오기
    // ============================================
    // product-detail.html 페이지인지 확인
    const currentPage = window.location.pathname.split('/').pop() || '';
    const isDetailPage = currentPage.includes('product-detail.html');
    if (!isDetailPage) return;

    // URL에서 ?id=123 형태의 파라미터 추출
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id') || '', 10);
    if (!Number.isFinite(id)) {
        console.warn('상품 ID를 찾을 수 없습니다.');
        return;
    }

    // 상품 데이터가 로드될 때까지 대기
    let product = null;
    let retryCount = 0;
    const maxRetries = 10;

    const loadProduct = () => {
        product = getProductById(id);
        if (!product && retryCount < maxRetries) {
            retryCount++;
            setTimeout(loadProduct, 100);
            return;
        }
        if (!product) {
            console.error('상품을 찾을 수 없습니다. ID:', id);
            return;
        }

        // 상품 정보 표시
        displayProductInfo(product, mainImage, thumbnails, titleEl, priceOriginalEl, priceSaleEl, ratingScoreEl, reviewCountEl, badgesEl, starsEl);
    };

    loadProduct();
}

function displayProductInfo(product, mainImage, thumbnails, titleEl, priceOriginalEl, priceSaleEl, ratingScoreEl, reviewCountEl, badgesEl, starsEl) {
    if (!product) return;

    // 최근 본 상품에 저장
    try {
        if (typeof saveRecentProduct === 'function') {
            saveRecentProduct(product.id);
        }
    } catch (e) {
        console.warn('최근 본 상품 저장 실패:', e);
    }

    // ============================================
    // 상품 정보 표시
    // ============================================
    if (titleEl) titleEl.textContent = product.title;
    if (ratingScoreEl) ratingScoreEl.textContent = String(product.rating);
    if (reviewCountEl) reviewCountEl.textContent = `(${product.reviews}개 리뷰)`;

    // 가격 표시 (할인이 있으면 원가와 할인가 모두 표시)
    if (priceSaleEl) {
        priceSaleEl.textContent = `${product.salePrice.toLocaleString()}원`;
    }
    if (priceOriginalEl) {
        if (product.discount > 0 && product.price) {
            priceOriginalEl.style.display = 'inline';
            priceOriginalEl.textContent = `${product.price.toLocaleString()}원`;
        } else {
            priceOriginalEl.style.display = 'none';
        }
    }

    // 메인 이미지 설정
    const fallbackImages = [
        product.image,
        `https://picsum.photos/600/600?random=${product.id}1`,
        `https://picsum.photos/600/600?random=${product.id}2`,
        `https://picsum.photos/600/600?random=${product.id}3`
    ];
    const images = Array.isArray(product.images) && product.images.length
        ? product.images
        : fallbackImages;
    if (mainImage) {
        mainImage.src = images[0];
        mainImage.alt = product.title;
    }

    // ============================================
    // 썸네일 이미지 동적 생성 및 클릭 이벤트
    // ============================================
    const thumbnailContainer = document.getElementById('thumbnailImages');
    if (thumbnailContainer) {
        // 기존 썸네일 제거
        thumbnailContainer.innerHTML = '';

        // 이미지 배열이 있으면 최대 5개까지, 없으면 4개까지 생성
        const maxThumbnails = images.length > 0 ? Math.min(images.length, 5) : 4;

        for (let i = 0; i < maxThumbnails; i++) {
            const imageUrl = images[i] || images[images.length - 1] || product.image;
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.className = 'thumbnail' + (i === 0 ? ' active' : '');
            thumbnailDiv.innerHTML = `<img src="${imageUrl}" alt="${product.title} 썸네일 ${i + 1}">`;

            // 썸네일 클릭 이벤트
            thumbnailDiv.addEventListener('click', () => {
                // 모든 썸네일에서 active 클래스 제거
                thumbnailContainer.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                // 클릭한 썸네일에 active 클래스 추가
                thumbnailDiv.classList.add('active');
                // 메인 이미지 변경
                if (mainImage) {
                    mainImage.src = imageUrl;
                    mainImage.alt = `${product.title} 메인 이미지 ${i + 1}`;
                }
            });

            thumbnailContainer.appendChild(thumbnailDiv);
        }
    }

    // 기존 썸네일 요소들도 처리 (하위 호환성)
    if (thumbnails.length) {
        thumbnails.forEach((thumb, idx) => {
            const thumbImg = thumb.querySelector('img');
            if (!thumbImg) return;
            const imageUrl = images[idx] || images[images.length - 1] || product.image;
            thumbImg.src = imageUrl;
            thumbImg.alt = `${product.title} 썸네일 ${idx + 1}`;
            if (idx === 0) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }

            // 썸네일 클릭 이벤트 추가
            thumb.addEventListener('click', () => {
                // 모든 썸네일에서 active 클래스 제거
                thumbnails.forEach(t => t.classList.remove('active'));
                // 클릭한 썸네일에 active 클래스 추가
                thumb.classList.add('active');
                // 메인 이미지 변경 (썸네일의 img src 사용)
                if (mainImage) {
                    mainImage.src = thumbImg.src;
                    mainImage.alt = thumbImg.alt || '상품 메인 이미지';
                }
            });
        });
    }

    // ============================================
    // 배지 표시
    // ============================================
    if (badgesEl) {
        let badgesHTML = '';

        // 할인률 뱃지 (할인이 있을 때만 표시)
        if (product.discount > 0) {
            badgesHTML += `<span class="product-badge discount-badge">${product.discount}% 할인</span>`;
        }

        // 기존 배지 (best, new, sale 등)
        if (product.badge) {
            badgesHTML += `<span class="product-badge ${product.badge}">${product.badgeText || product.badge}</span>`;
        }

        badgesEl.innerHTML = badgesHTML;
    }

    // ============================================
    // 별점 표시
    // ============================================
    if (starsEl) {
        const stars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 >= 0.5;
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
        starsEl.innerHTML = starsHTML;
    }

    // ============================================
    // 장바구니 버튼 이벤트
    // ============================================
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            if (typeof addToCart === 'function') {
                addToCart(product.id);
            }
        });
    }

    // ============================================
    // 탭 메뉴 기능 및 콘텐츠 동적 생성
    // ============================================
    renderTabContent(product);

    const tabButtons = document.querySelectorAll('.product-tabs .tab-btn');
    const tabContents = document.querySelectorAll('.product-tabs .tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;

            // 모든 탭 버튼과 콘텐츠에서 active 제거
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // 클릭한 탭 버튼과 해당 콘텐츠에 active 추가
            btn.classList.add('active');
            const targetContent = document.getElementById(`${targetTab}Tab`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// ============================================
// 탭 콘텐츠 렌더링
// ============================================
function renderTabContent(product) {
    if (!product) return;

    // 상품 상세 탭
    const descriptionTab = document.getElementById('descriptionTab');
    if (descriptionTab) {
        const descriptionContent = descriptionTab.querySelector('.description-content');
        if (descriptionContent) {
            if (product.description) {
                descriptionContent.innerHTML = product.description;
            } else {
                descriptionContent.innerHTML = `
                    <h3>${product.title}</h3>
                    <p>프리미엄 품질의 ${product.title}입니다. 최신 기술과 뛰어난 성능을 자랑하는 제품으로, 일상생활과 업무에 최적화된 디자인을 제공합니다.</p>
                    <h4>주요 특징</h4>
                    <ul>
                        <li>고품질 소재와 정교한 제작 공정</li>
                        <li>사용자 편의성을 고려한 직관적인 디자인</li>
                        <li>오래 지속되는 내구성</li>
                        <li>환경 친화적인 포장</li>
                    </ul>
                `;
            }
        }
    }

    // 상품 스펙 탭
    const specTab = document.getElementById('specTab');
    if (specTab) {
        const specContent = specTab.querySelector('.spec-content');
        if (specContent) {
            if (product.spec && typeof product.spec === 'object') {
                let specHTML = '<table class="spec-table">';
                for (const [key, value] of Object.entries(product.spec)) {
                    specHTML += `
                        <tr>
                            <th>${key}</th>
                            <td>${value}</td>
                        </tr>
                    `;
                }
                specHTML += '</table>';
                specContent.innerHTML = specHTML;
            } else {
                specContent.innerHTML = `
                    <table class="spec-table">
                        <tr>
                            <th>제조사</th>
                            <td>Elexa</td>
                        </tr>
                        <tr>
                            <th>모델명</th>
                            <td>${product.title}</td>
                        </tr>
                        <tr>
                            <th>원산지</th>
                            <td>대한민국</td>
                        </tr>
                        <tr>
                            <th>품질보증기간</th>
                            <td>1년</td>
                        </tr>
                        <tr>
                            <th>A/S 안내</th>
                            <td>1588-0000</td>
                        </tr>
                    </table>
                `;
            }
        }
    }

    // 리뷰 탭
    const reviewsTab = document.getElementById('reviewsTab');
    if (reviewsTab) {
        const reviewsContent = reviewsTab.querySelector('.reviews-content');
        if (reviewsContent) {
            if (product.reviewList && Array.isArray(product.reviewList) && product.reviewList.length > 0) {
                let reviewsHTML = `
                    <div class="reviews-summary">
                        <div class="reviews-summary-rating">
                            <span class="summary-rating-score">${product.rating}</span>
                            <div class="summary-stars">
                                ${generateStarsHTML(product.rating)}
                            </div>
                            <span class="summary-review-count">총 ${product.reviews}개 리뷰</span>
                        </div>
                    </div>
                    <div class="reviews-list">
                `;

                product.reviewList.forEach(review => {
                    reviewsHTML += `
                        <div class="review-item">
                            <div class="review-header">
                                <div class="reviewer-info">
                                    <span class="reviewer-name">${review.author}</span>
                                    ${review.verified ? '<span class="verified-badge">구매확정</span>' : ''}
                                    <div class="review-stars">
                                        ${generateStarsHTML(review.rating)}
                                    </div>
                                </div>
                                <span class="review-date">${review.date}</span>
                            </div>
                            <div class="review-content">
                                <p>${review.content}</p>
                            </div>
                            <div class="review-helpful">
                                <button type="button" class="helpful-btn">
                                    <i class="bi bi-hand-thumbs-up"></i> 도움됨 (${review.helpful})
                                </button>
                            </div>
                        </div>
                    `;
                });

                reviewsHTML += '</div>';
                reviewsContent.innerHTML = reviewsHTML;
            } else {
                reviewsContent.innerHTML = `
                    <div class="no-reviews">
                        <i class="bi bi-chat-dots"></i>
                        <p>아직 작성된 리뷰가 없습니다.</p>
                        <p>첫 번째 리뷰를 작성해보세요!</p>
                    </div>
                `;
            }
        }
    }
}

// ============================================
// 별점 HTML 생성 헬퍼 함수
// ============================================
function generateStarsHTML(rating) {
    const stars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
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
    return starsHTML;
}

// 페이지 로드 시 상품 상세 페이지 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProductDetailPage);
} else {
    initProductDetailPage();
}
