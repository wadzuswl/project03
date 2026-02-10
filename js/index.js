// index.html 전용: 필요한 기능만 간단히

// 짧게 쓰기 위한 헬퍼
const $ = (selector) => document.querySelector(selector);

// 헤더 스크롤 효과 + 스크롤탑 버튼 노출
function initHeaderAndScrollTop() {
  const header = $('.header');
  const scrollTopBtn = $('#scrollTop');

  if (!header && !scrollTopBtn) return;

  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle('active', y > 100);
    if (scrollTopBtn) scrollTopBtn.classList.toggle('show', y > 300);
  };

  window.addEventListener('scroll', onScroll);
  onScroll();

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// 모바일 메뉴 토글
function initNavToggle() {
  const toggle = $('.nav-toggle');
  const menu = $('.nav-menu');
  if (!toggle || !menu) return;

  const closeMenu = () => {
    toggle.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('nav-open');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const willOpen = !menu.classList.contains('active');
    toggle.classList.toggle('active', willOpen);
    menu.classList.toggle('active', willOpen);
    document.body.classList.toggle('nav-open', willOpen);
    document.body.style.overflow = willOpen ? 'hidden' : '';
  });

  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('active')) return;
    if (!menu.contains(e.target) && !toggle.contains(e.target)) closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

// 검색 패널 (간단 버전)
function initSearchPanel() {
  const toggle = $('#searchToggle');
  const panel = $('#searchPanel');
  const closeBtn = panel?.querySelector('.search-close');
  const input = $('#searchInput');
  const suggestions = $('#searchSuggestions');
  const searchBtn = panel.querySelector('.search-btn');

  if (!toggle || !panel || !input) return;

  const popular = ['무선이어폰', '스마트워치', '노트북', '태블릿', '키보드'];

  const open = () => {
    document.body.classList.add('search-open');
    panel.setAttribute('aria-hidden', 'false');
    panel.style.display = 'block';
    input.setAttribute('aria-expanded', 'true');
    input.focus();
    renderSuggestions();
  };

  const close = () => {
    document.body.classList.remove('search-open');
    panel.setAttribute('aria-hidden', 'true');
    panel.style.display = 'none';
    input.setAttribute('aria-expanded', 'false');
  };

  const renderSuggestions = (query = '') => {
    if (!suggestions) return;
    suggestions.innerHTML = '';
    const list = query
      ? popular.filter((k) => k.includes(query))
      : popular;

    if (list.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'suggestion-item no-results';
      empty.textContent = '검색 결과가 없습니다';
      suggestions.appendChild(empty);
      return;
    }

    list.forEach((keyword) => {
      const item = document.createElement('a');
      item.className = 'suggestion-item';
      item.href = `sub1.html?search=${encodeURIComponent(keyword)}`;
      item.textContent = keyword;
      suggestions.appendChild(item);
    });
  };

  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = document.body.classList.contains('search-open');
    if (isOpen) close(); else open();
  });

  const runSearch = () => {
    const query = input.value.trim();
    if (!query) return;
    window.location.href = `sub1.html?search=${encodeURIComponent(query)}`;
  };

  searchBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    runSearch();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      runSearch();
    }
  });

  closeBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    close();
  });

  document.addEventListener('click', (e) => {
    if (!document.body.classList.contains('search-open')) return;
    if (!panel.contains(e.target) && !toggle.contains(e.target)) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  input.addEventListener('input', (e) => {
    renderSuggestions(e.target.value.trim());
  });
}

// 장바구니 숫자 표시 (index에서 필요한 만큼만)
function initCartCount() {
  const cartCount = $('.cart-count');
  if (!cartCount) return;
  const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
  const total = items.reduce((sum, item) => sum + (item.quantity || 0), 0);
  cartCount.textContent = total;
  cartCount.style.display = total > 0 ? 'block' : 'none';
}

// 홈 페이지 리스트 렌더링
function renderHome() {
  if (!window.productsData) return;

  const sideList = $('#homeSideList');
  const newScroll = $('#newScroll');
  const storyScroll = $('#storyScroll');
  const infoGrid = $('#infoGrid');
  const matrixGrid = $('#matrixGrid');

  // 인기 상품 (오른쪽 리스트)
  if (sideList) {
    const best = productsData.best.slice(0, 5);
    sideList.innerHTML = best.slice(1).map((p) => `
      <a class="side-item" href="product-detail.html?id=${p.id}">
        <img src="${p.image}" alt="${p.title}">
        <div>
          <div class="side-title">${p.title}</div>
          <div class="side-meta">
            <span>${p.salePrice.toLocaleString()}원</span>
            <span>리뷰 ${p.reviews}</span>
          </div>
        </div>
      </a>
    `).join('');
  }

  // 신상품
  if (newScroll) {
    const items = productsData.new.slice(0, 6);
    newScroll.innerHTML = items.map((p) => `
      <article class="hcard" role="listitem">
        <a href="product-detail.html?id=${p.id}" aria-label="${p.title} 상세 보기">
          <img src="${p.image}" alt="${p.title}">
        </a>
        <div class="hbody">
          <div class="htitle">${p.title}</div>
          <div class="hmeta">
            <span>${p.salePrice.toLocaleString()}원</span>
            <span>리뷰 ${p.reviews}</span>
          </div>
        </div>
      </article>
    `).join('');
  }

  // 추천 스토리
  if (storyScroll) {
    const items = productsData.best.slice(0, 8);
    storyScroll.innerHTML = items.map((p) => `
      <article class="hcard" role="listitem">
        <a href="product-detail.html?id=${p.id}" aria-label="${p.title} 상세 보기">
          <img src="${p.image}" alt="${p.title}">
        </a>
        <div class="hbody">
          <div class="htitle">${p.title}</div>
          <div class="hmeta">
            <span>${p.salePrice.toLocaleString()}원</span>
            <span>리뷰 ${p.reviews}</span>
          </div>
        </div>
      </article>
    `).join('');

    // 좌우 버튼은 간단히 스크롤만
    const prev = $('#storyPrev');
    const next = $('#storyNext');
    const card = storyScroll.querySelector('.hcard');
    const step = card ? card.offsetWidth * 4 : 800;
    prev?.addEventListener('click', () => storyScroll.scrollBy({ left: -step, behavior: 'smooth' }));
    next?.addEventListener('click', () => storyScroll.scrollBy({ left: step, behavior: 'smooth' }));
  }

  // 정보 카드
  if (infoGrid) {
    const infoItems = [
      { icon: 'bi-truck', title: '배송/반품 가이드', desc: '무료배송, 반품/교환 정책을 한 번에 확인하세요.', meta: ['안내', '무료배송'] },
      { icon: 'bi-gift', title: '멤버십 혜택', desc: '신규 가입 쿠폰과 등급별 적립 혜택을 받아보세요.', meta: ['쿠폰', '적립'] },
      { icon: 'bi-credit-card', title: '주문/결제 팁', desc: '결제 수단, 무이자 할부, 간편결제 설정 방법을 알아보세요.', meta: ['결제', 'Tip'] },
      { icon: 'bi-shield-check', title: '보안/안전 안내', desc: '안전한 쇼핑을 위한 보안 가이드를 꼭 읽어보세요.', meta: ['보안', '안심결제'] },
    ];
    infoGrid.innerHTML = infoItems.map((item) => `
      <article class="info-card">
        <div class="info-icon"><i class="bi ${item.icon}"></i></div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <div class="info-meta">${item.meta.map((m) => `<span>${m}</span>`).join('')}</div>
      </article>
    `).join('');
  }

  // 매트릭스
  if (matrixGrid) {
    const sale = productsData.sale.slice(0, 6);
    matrixGrid.innerHTML = `
      <div class="matrix-side">
        ${sale.map((p) => `
          <a class="matrix-card" href="product-detail.html?id=${p.id}">
            <img src="${p.image}" alt="${p.title}">
            <div class="mbody">
              <div class="mtitle">${p.title}</div>
              <div class="mprice">
                ${p.discount > 0 ? `<span class="mprice-original">${p.price.toLocaleString()}원</span>` : ''}
                <span class="mprice-sale">${p.salePrice.toLocaleString()}원</span>
              </div>
              <div class="mmeta">
                <span><i class="bi bi-star-fill"></i> ${p.rating}</span>
                <span><i class="bi bi-chat"></i> 리뷰 ${p.reviews}</span>
              </div>
            </div>
          </a>
        `).join('')}
      </div>
      <a class="matrix-main" href="sub1.html">
        <div class="matrix-banner-content">
          <div class="matrix-banner-badge">SPECIAL</div>
          <div class="matrix-banner-title">동서가구 특가 이벤트</div>
          <div class="matrix-banner-desc">최대 50% 할인! 지금 바로 확인하세요</div>
        </div>
      </a>
    `;
  }

}

// 카운트다운
function initCountdown() {
  const timer = $('#countdownTimer');
  if (!timer) return;

  const endTime = Date.now() + (3 * 24 * 60 * 60 * 1000);
  const pad = (n) => String(n).padStart(2, '0');

  const tick = () => {
    const diff = endTime - Date.now();
    const days = diff > 0 ? Math.floor(diff / (1000 * 60 * 60 * 24)) : 0;
    const hours = diff > 0 ? Math.floor((diff / (1000 * 60 * 60)) % 24) : 0;
    const mins = diff > 0 ? Math.floor((diff / (1000 * 60)) % 60) : 0;
    const secs = diff > 0 ? Math.floor((diff / 1000) % 60) : 0;

    $('#days').textContent = pad(days);
    $('#hours').textContent = pad(hours);
    $('#minutes').textContent = pad(mins);
    $('#seconds').textContent = pad(secs);
  };

  tick();
  setInterval(tick, 1000);
}

// 뉴스레터 (간단 알림)
function initNewsletter() {
  const form = $('#newsletterForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]')?.value.trim();
    if (!email) return;
    alert('뉴스레터 구독이 완료되었습니다!');
    form.reset();
  });
}

// 라이브 알림 (간단 버전)
function initLiveNotification() {
  const box = $('#liveNotification');
  if (!box) return;

  const products = ['디아 LED편백 평상형 SS/Q 침대', '전신거울 수납 선반장', '에이미 거실장', '테라 라텍스탑 천연면피가죽 3인 4인소파'];
  const names = ['김**', '이**', '박**', '최**'];
  let i = 0;

  const show = () => {
    const product = products[i % products.length];
    const name = names[i % names.length];
    box.querySelector('.product-name').textContent = product;
    box.querySelector('.notification-text strong').textContent = name;
    box.classList.add('show');
    setTimeout(() => box.classList.remove('show'), 4000);
    i += 1;
  };

  setTimeout(show, 3000);
  setInterval(show, 15000);

  box.querySelector('.notification-close')?.addEventListener('click', () => {
    box.classList.remove('show');
  });
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
  initHeaderAndScrollTop();
  initNavToggle();
  initSearchPanel();
  initCartCount();
  renderHome();
  initCountdown();
  initNewsletter();
  initLiveNotification();
});
