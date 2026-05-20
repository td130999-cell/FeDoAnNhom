/* ═══════════════════════════════════════════════════
   hero.js — Slideshow, Stats Counter, Particles
═══════════════════════════════════════════════════ */

// ── Hero Slideshow ──
(function initSlideshow() {
  const slides     = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.hero-indicator');
  let current = 0;
  let autoTimer;

  function goToSlide(n) {
    slides[current].classList.remove('active');
    indicators[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    indicators[current].classList.add('active');
  }

  // Indicator click
  indicators.forEach(ind => {
    ind.addEventListener('click', () => {
      clearInterval(autoTimer);
      goToSlide(parseInt(ind.dataset.slide));
      autoTimer = setInterval(() => goToSlide(current + 1), 5000);
    });
  });

  // Auto advance
  autoTimer = setInterval(() => goToSlide(current + 1), 5000);
})();

// ── Hero Stats Counter ──
(function initCounters() {
  function countUp(id, target, suffix = '') {
    const el   = document.getElementById(id);
    if (!el) return;
    let count  = 0;
    const step = Math.ceil(target / 80);
    const timer = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = count + suffix;
      if (count >= target) clearInterval(timer);
    }, 25);
  }

  // Start counting after hero animations finish
  setTimeout(() => {
    countUp('stat1', 63);
    countUp('stat2', 8);
    countUp('stat3', 18, 'M');
  }, 2200);
})();

// ── Particles ──
(function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  for (let i = 0; i < 28; i++) {
    const p    = document.createElement('div');
    p.className = 'particle';
    const size  = Math.random() * 3 + 1;

    // Alternate between gold and red-tinted particles
    const isRed = Math.random() > 0.75;
    p.style.cssText = `
      width:${size}px;
      height:${size}px;
      left:${Math.random() * 100}%;
      background:${isRed ? '#C8102E' : '#D4A843'};
      animation-duration:${Math.random() * 15 + 10}s;
      animation-delay:${Math.random() * 10}s;
      opacity:${Math.random() * 0.6 + 0.2};
    `;
    container.appendChild(p);
  }
})();
