(() => {
  const searchToggleBtn = document.getElementById('searchToggle');
  const searchPanel = document.getElementById('searchPanel');
  const searchCloseBtns = document.querySelectorAll('.search-close');
  const searchInputEl = document.getElementById('searchInput');
  const searchBtn = document.querySelector('.search-btn');
  const searchSuggestions = document.getElementById('searchSuggestions');
  const header = document.querySelector('.header');
  const popularKeywords = ['무선이어폰', '스마트워치', '노트북', '태블릿', '키보드', '마우스', '모니터', '충전기', '스피커', '케이스'];

  function openSearch() {
    document.body.classList.add('search-open');
    searchPanel?.setAttribute('aria-hidden', 'false');
    searchPanel && (searchPanel.style.display = 'block');
    searchInputEl?.setAttribute('aria-expanded', 'true');
    searchInputEl?.focus();
    if (typeof window.__showSearchSuggestions === 'function') window.__showSearchSuggestions('');
    if (searchPanel && header) searchPanel.style.setProperty('--search-panel-top', `${header.getBoundingClientRect().bottom}px`);
  }

  function closeSearch() {
    document.body.classList.remove('search-open');
    searchPanel?.setAttribute('aria-hidden', 'true');
    searchPanel && (searchPanel.style.display = 'none');
    searchInputEl?.setAttribute('aria-expanded', 'false');
  }

  function showSearchSuggestions(query = '') {
    if (!searchSuggestions) return;
    searchSuggestions.innerHTML = '';
    const list = query ? popularKeywords.filter(k => k.includes(query)) : popularKeywords.slice(0, 5);
    if (!query && list.length) {
      const title = document.createElement('div');
      title.className = 'suggestion-title';
      title.textContent = '인기 검색어';
      searchSuggestions.appendChild(title);
    }
    list.length ? list.forEach(k => {
      const a = document.createElement('a');
      a.href = `sub1.html?search=${encodeURIComponent(k)}`;
      a.className = 'suggestion-item';
      a.innerHTML = `<i class="bi bi-${query ? 'search' : 'fire'}"></i> ${k}`;
      searchSuggestions.appendChild(a);
    }) : (() => {
      const empty = document.createElement('div');
      empty.className = 'suggestion-item no-results';
      empty.textContent = '검색 결과가 없습니다';
      searchSuggestions.appendChild(empty);
    })();
    searchSuggestions.classList.add('show');
  }

  searchToggleBtn?.addEventListener('click', (e) => { e.preventDefault(); document.body.classList.contains('search-open') ? closeSearch() : openSearch(); });
  searchCloseBtns.forEach(btn => btn.addEventListener('click', (e) => { e.preventDefault(); closeSearch(); }));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && document.body.classList.contains('search-open')) closeSearch(); });
  document.addEventListener('click', (e) => {
    if (!document.body.classList.contains('search-open')) return;
    if (!searchPanel?.contains(e.target) && !searchToggleBtn?.contains(e.target)) closeSearch();
  });

  if (searchInputEl && searchSuggestions) {
    const runSearch = () => {
      const q = searchInputEl.value.trim();
      if (q) window.location.href = `sub1.html?search=${encodeURIComponent(q)}`;
    };
    searchBtn?.addEventListener('click', (e) => { e.preventDefault(); runSearch(); });
    searchInputEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); runSearch(); } });
    searchInputEl.addEventListener('focus', () => showSearchSuggestions());
    searchInputEl.addEventListener('input', (e) => showSearchSuggestions(e.target.value.trim()));
    window.__showSearchSuggestions = showSearchSuggestions;
  }
})();
