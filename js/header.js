// 헤더 스크롤 + 스크롤탑 + 모바일 메뉴

const header = document.querySelector('.header');
const scrollTopBtn = document.getElementById('scrollTop');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

window.addEventListener('scroll', () => {
  const y = window.pageYOffset;
  header?.classList.toggle('active', y > 100);
  scrollTopBtn?.classList.toggle('show', y > 300);
});

scrollTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

if (navToggle && navMenu) {
  const close = () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('nav-open');
    document.body.style.overflow = '';
  };

  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !navMenu.classList.contains('active');
    navToggle.classList.toggle('active', open);
    navMenu.classList.toggle('active', open);
    document.body.classList.toggle('nav-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) close();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && navMenu.classList.contains('active')) close(); });
}
