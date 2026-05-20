/* ═══════════════════════════════════════════════════
   interactive.js — Drag Scroll, Interactive Map, Food
═══════════════════════════════════════════════════ */

// ── Saigon Cards: Horizontal Drag Scroll ──
(function initDragScroll() {
  const container = document.getElementById('saigonScroll');
  if (!container) return;

  let isDown   = false;
  let startX, scrollLeft;

  container.addEventListener('mousedown', e => {
    isDown            = true;
    container.style.cursor = 'grabbing';
    startX            = e.pageX - container.offsetLeft;
    scrollLeft        = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.style.cursor = 'grab';
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.style.cursor = 'grab';
  });

  container.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x    = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  });

  // Touch support
  let touchStartX, touchScrollLeft;
  container.addEventListener('touchstart', e => {
    touchStartX    = e.touches[0].pageX;
    touchScrollLeft = container.scrollLeft;
  }, { passive: true });

  container.addEventListener('touchmove', e => {
    const dx = touchStartX - e.touches[0].pageX;
    container.scrollLeft = touchScrollLeft + dx;
  }, { passive: true });
})();

// ── Interactive Map ──
(function initMap() {
  const places = [
    {
      name: 'Landmark 81',
      desc: 'Tòa nhà cao nhất Việt Nam, 81 tầng, 461.3m, tại Bình Thạnh. Biểu tượng khát vọng hiện đại của TP.HCM với đài quan sát SkyView trên tầng 79.',
      type: 'Kiến Trúc Hiện Đại'
    },
    {
      name: 'Chợ Bến Thành',
      desc: 'Xây năm 1914, Chợ Bến Thành là biểu tượng giao thương và văn hóa của Sài Gòn. Nơi hội tụ ẩm thực, thủ công mỹ nghệ và đặc sản Nam Bộ.',
      type: 'Chợ Truyền Thống'
    },
    {
      name: 'Nhà Thờ Đức Bà',
      desc: 'Hoàn thành năm 1880 theo phong cách Gothic-Roman của Pháp. Hai tháp chuông 57m, mái đỏ gạch Marseille. Trái tim kiến trúc của Quận 1.',
      type: 'Di Tích Lịch Sử'
    },
    {
      name: 'Phố Đi Bộ Nguyễn Huệ',
      desc: 'Con đường rộng 64m, dài 670m, trung tâm Quận 1. Nơi diễn ra các sự kiện lớn, lễ hội đường phố và là tâm điểm cuộc sống về đêm của Sài Gòn.',
      type: 'Phố Đi Bộ'
    },
    {
      name: 'Bưu Điện Thành Phố',
      desc: 'Xây từ 1886–1891, do Gustave Eiffel thiết kế. Công trình kiến trúc Pháp hiếm có còn nguyên vẹn tại TP.HCM, nằm cạnh Nhà Thờ Đức Bà.',
      type: 'Kiến Trúc Pháp'
    },
    {
      name: 'Địa Đạo Củ Chi',
      desc: 'Hệ thống đường hầm ngầm dài hơn 200km, đào trong hai cuộc kháng chiến. Di tích lịch sử quốc gia, cách trung tâm TP.HCM khoảng 70km.',
      type: 'Di Tích Chiến Tranh'
    },
    {
      name: 'Bến Bạch Đằng',
      desc: 'Bến cảng lịch sử bên sông Sài Gòn. Địa điểm du thuyền ngắm cảnh về đêm nổi tiếng, nơi ánh đèn thành phố phản chiếu lung linh trên mặt nước.',
      type: 'Cảnh Quan Sông Nước'
    },
    {
      name: 'Thảo Điền',
      desc: 'Khu dân cư sáng tạo tại TP. Thủ Đức. Nổi tiếng với cafe độc đáo, nhà hàng quốc tế, studio nghệ thuật và cộng đồng expat quốc tế sôi động.',
      type: 'Khu Sáng Tạo'
    }
  ];

  const placeItems = document.querySelectorAll('.map-place-item');
  const mapInfo    = document.getElementById('mapInfo');
  const mapName    = document.getElementById('mapName');
  const mapDesc    = document.getElementById('mapDesc');
  const mapType    = document.getElementById('mapType');

  if (!placeItems.length || !mapInfo) return;

  function updateMapInfo(index) {
    const p = places[index];

    // Animate out
    mapInfo.style.cssText = 'opacity:0; transform:translateY(20px); transition:none;';

    setTimeout(() => {
      mapName.textContent  = p.name;
      mapDesc.textContent  = p.desc;
      mapType.textContent  = p.type;
      mapInfo.style.cssText = 'opacity:1; transform:translateY(0); transition:opacity 0.5s ease, transform 0.5s ease;';
    }, 180);
  }

  placeItems.forEach(item => {
    item.addEventListener('click', () => {
      placeItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      updateMapInfo(parseInt(item.dataset.place));
    });
  });
})();

// ── Food Cards: Image Hover Scale ──
(function initFoodCards() {
  document.querySelectorAll('.food-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('.food-illustration')?.style && (card.querySelector('.food-illustration').style.transform = 'scale(1.05)');
    });
    card.addEventListener('mouseleave', () => {
      card.querySelector('.food-illustration')?.style && (card.querySelector('.food-illustration').style.transform = 'scale(1)');
    });
  });
})();

// ── Gallery: Lightbox-style expand (simple) ──
(function initGallery() {
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const label = item.querySelector('.gallery-overlay-text')?.textContent || '';
      // Could expand to full lightbox — for now just a quick scale pulse
      item.style.transition = 'transform 0.2s ease';
      item.style.transform  = 'scale(0.97)';
      setTimeout(() => { item.style.transform = ''; }, 200);
    });
  });
})();

console.log('🇻🇳 Vietnam Travel — Interactive modules loaded!');
