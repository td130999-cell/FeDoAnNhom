/* ═══════════════════════════════════════════════════
   animations.js — GSAP ScrollTrigger + Tilt + Parallax
   Requires: GSAP + ScrollTrigger loaded via CDN
═══════════════════════════════════════════════════ */

// Guard: GSAP must be loaded
if (typeof gsap === 'undefined') {
  console.warn('GSAP not loaded. Skipping animations.');
} else {

  gsap.registerPlugin(ScrollTrigger);

  // ── Helper: batch reveal ──
  function revealElements(selector, fromVars, toVars, scrollStart = 'top 85%') {
    document.querySelectorAll(selector).forEach((el, i) => {
      gsap.fromTo(el, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: el,
          start: scrollStart,
          toggleActions: 'play none none none'
        }
      });
    });
  }

  // ── Fade up ──
  revealElements('.gsap-reveal',
    { opacity: 0, y: 80 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
  );

  // ── Slide from left ──
  revealElements('.gsap-reveal-left',
    { opacity: 0, x: -80 },
    { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out' }
  );

  // ── Slide from right ──
  revealElements('.gsap-reveal-right',
    { opacity: 0, x: 80 },
    { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out' }
  );

  // ── Scale in ──
  document.querySelectorAll('.gsap-scale').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, scale: 0.85 },
      {
        opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
        delay: (i % 4) * 0.1,
        scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
      }
    );
  });

  // ── Saigon title big parallax ──
  gsap.to('.saigon-title', {
    yPercent: -10,
    scrollTrigger: {
      trigger: '#saigon',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  });

  // ── Saigon cards stagger ──
  gsap.fromTo('.saigon-card',
    { opacity: 0, y: 60 },
    {
      opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: '.saigon-cards', start: 'top 80%', toggleActions: 'play none none none' }
    }
  );

  // ── Timeline items stagger ──
  gsap.fromTo('.timeline-item',
    { opacity: 0, x: -30 },
    {
      opacity: 1, x: 0, stagger: 0.15, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: '.timeline-track', start: 'top 80%', toggleActions: 'play none none none' }
    }
  );

  // ── Region panels stagger ──
  gsap.fromTo('.region-panel',
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1, scale: 1, stagger: 0.2, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.regions-grid', start: 'top 75%', toggleActions: 'play none none none' }
    }
  );

  // ── Intro stat float ──
  gsap.fromTo('.intro-stat-float',
    { opacity: 0, x: -50 },
    {
      opacity: 1, x: 0, duration: 1, ease: 'elastic.out(1, 0.5)',
      scrollTrigger: { trigger: '.intro-visual', start: 'top 70%', toggleActions: 'play none none none' }
    }
  );

  // ── Intro small card pop ──
  gsap.fromTo('.intro-card-small',
    { opacity: 0, scale: 0, rotate: -10 },
    {
      opacity: 1, scale: 1, rotate: 0, duration: 0.8, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: '.intro-visual', start: 'top 70%', toggleActions: 'play none none none' }
    }
  );

  // ── Quote bg text parallax ──
  gsap.to('.quote-bg-text', {
    xPercent: -20,
    scrollTrigger: {
      trigger: '#quote-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  });

  // ── Gallery even items parallax ──
  document.querySelectorAll('.gallery-item:nth-child(even)').forEach(item => {
    gsap.to(item, {
      y: -40,
      scrollTrigger: { trigger: '#gallery', start: 'top bottom', end: 'bottom top', scrub: 1 }
    });
  });

  // ── Footer big text parallax ──
  gsap.to('.footer-big-text', {
    yPercent: 20,
    scrollTrigger: { trigger: 'footer', start: 'top bottom', end: 'bottom top', scrub: 1.5 }
  });

  // ── Looping floats (GSAP tweens, no keyframes needed) ──
  gsap.to('.intro-shape',      { rotation: 360, duration: 20, repeat: -1, ease: 'none' });
  gsap.to('.intro-card-small', { y: -10, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.to('.intro-stat-float', { y: 8,  duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' });

  // ── Map dot pulse ──
  gsap.to('.map-dot', {
    scale: 1.5, opacity: 0.4,
    duration: 1.5, repeat: -1, yoyo: true,
    stagger: 0.5, ease: 'sine.inOut'
  });

  // ── Intersection Observer fallback ──
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}

// ── 3D Card Tilt (no GSAP dependency) ──
document.querySelectorAll('.people-card, .saigon-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x    = (e.clientX - rect.left) / rect.width  - 0.5;
    const y    = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform  = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(10px)`;
    card.style.transition = 'transform 0.1s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform  = 'perspective(1000px) rotateY(0) rotateX(0) translateZ(0)';
    card.style.transition = 'transform 0.5s ease';
  });
});
