/**
 * data/places.js
 * ──────────────
 * Dữ liệu các địa điểm du lịch — dùng trong interactive map
 * Tất cả thông tin đều chân thực, có thật tại Việt Nam.
 */

window.VIETNAM_DATA = {

  // ── Saigon / HCMC landmarks ──
  saigonPlaces: [
    {
      id: 0,
      name: 'Landmark 81',
      district: 'Bình Thạnh, TP.HCM',
      type: 'Kiến Trúc Hiện Đại',
      desc: 'Tòa nhà cao nhất Việt Nam, 81 tầng, 461.3m. Biểu tượng khát vọng hiện đại của TP.HCM với đài quan sát SkyView trên tầng 79.',
      openYear: 2018,
      highlight: 'Điểm check-in hot nhất TP.HCM'
    },
    {
      id: 1,
      name: 'Chợ Bến Thành',
      district: 'Quận 1, TP.HCM',
      type: 'Chợ Truyền Thống',
      desc: 'Xây năm 1914, Chợ Bến Thành là biểu tượng giao thương và văn hóa của Sài Gòn. Nơi hội tụ ẩm thực, thủ công mỹ nghệ và đặc sản Nam Bộ.',
      openYear: 1914,
      highlight: 'Hoạt động 24/7, khu ẩm thực về đêm'
    },
    {
      id: 2,
      name: 'Nhà Thờ Đức Bà',
      district: 'Quận 1, TP.HCM',
      type: 'Di Tích Lịch Sử',
      desc: 'Hoàn thành năm 1880 theo phong cách Gothic-Roman của Pháp. Hai tháp chuông 57m, mái đỏ gạch Marseille. Trái tim kiến trúc của Quận 1.',
      openYear: 1880,
      highlight: 'Kiến trúc Pháp nguyên vẹn nhất TP.HCM'
    },
    {
      id: 3,
      name: 'Phố Đi Bộ Nguyễn Huệ',
      district: 'Quận 1, TP.HCM',
      type: 'Phố Đi Bộ',
      desc: 'Con đường rộng 64m, dài 670m trung tâm Quận 1. Nơi diễn ra các sự kiện lớn, lễ hội đường phố, tâm điểm cuộc sống về đêm của Sài Gòn.',
      openYear: 2015,
      highlight: 'Lễ hội Tết, sự kiện quốc tế tại đây'
    },
    {
      id: 4,
      name: 'Bưu Điện Thành Phố',
      district: 'Quận 1, TP.HCM',
      type: 'Kiến Trúc Pháp',
      desc: 'Xây từ 1886–1891 do Gustave Eiffel thiết kế. Công trình kiến trúc Pháp hiếm có còn nguyên vẹn tại TP.HCM, nằm cạnh Nhà Thờ Đức Bà.',
      openYear: 1891,
      highlight: 'Bức ảnh Hồ Chí Minh lớn nhất trong nhà'
    },
    {
      id: 5,
      name: 'Địa Đạo Củ Chi',
      district: 'Huyện Củ Chi, TP.HCM',
      type: 'Di Tích Chiến Tranh',
      desc: 'Hệ thống đường hầm ngầm dài hơn 200km, đào trong hai cuộc kháng chiến. Di tích lịch sử quốc gia, cách trung tâm TP.HCM khoảng 70km.',
      openYear: null,
      highlight: '3 tầng sâu, rộng khắp 250km²'
    },
    {
      id: 6,
      name: 'Bến Bạch Đằng',
      district: 'Quận 1, TP.HCM',
      type: 'Cảnh Quan Sông Nước',
      desc: 'Bến cảng lịch sử bên sông Sài Gòn. Địa điểm du thuyền ngắm cảnh về đêm nổi tiếng, nơi ánh đèn thành phố phản chiếu lung linh trên mặt nước.',
      openYear: null,
      highlight: 'Khởi hành cruise tour từ đây'
    },
    {
      id: 7,
      name: 'Thảo Điền',
      district: 'TP. Thủ Đức',
      type: 'Khu Sáng Tạo',
      desc: 'Khu dân cư sáng tạo tại TP. Thủ Đức. Nổi tiếng với café độc đáo, nhà hàng quốc tế, studio nghệ thuật và cộng đồng expat sôi động.',
      openYear: null,
      highlight: 'Café culture & street art nổi tiếng'
    }
  ],

  // ── Saigon Timeline ──
  saigonTimeline: [
    { year: 1698, event: 'Nguyễn Hữu Cảnh xác lập vùng đất Sài Gòn – Gia Định, đặt nền móng cho thành phố phương Nam.', color: 'gold' },
    { year: 1859, event: 'Pháp chiếm thành Gia Định, mở ra thời kỳ Sài Gòn trở thành "Hòn Ngọc Viễn Đông".', color: 'red' },
    { year: 1975, event: 'Giải phóng miền Nam, thống nhất đất nước. Sài Gòn đổi tên thành Thành phố Hồ Chí Minh.', color: 'teal' },
    { year: 1986, event: 'Đổi Mới — cuộc cải cách kinh tế lịch sử đưa TP.HCM bước vào kỷ nguyên phát triển vượt bậc.', color: 'gold' },
    { year: 2010, event: 'TP.HCM kỷ niệm 300 năm Sài Gòn – Gia Định và đón nhận nhiều dự án hạ tầng quy mô lớn.', color: 'night' },
    { year: 2018, event: 'Landmark 81 hoàn thành — tòa nhà cao nhất Đông Nam Á, biểu tượng khát vọng của Sài Gòn.', color: 'gold' },
    { year: 2024, event: 'TP.HCM tiếp tục là đầu tàu kinh tế, thu hút FDI và du lịch quốc tế hàng đầu Việt Nam.', color: 'red' }
  ],

  // ── Vietnam Regions ──
  regions: [
    {
      id: 'north',
      name: 'Miền Bắc',
      title: 'Hà Nội & Vịnh Hạ Long',
      mood: 'Truyền thống — Núi non — Văn hóa cổ',
      spots: ['Hồ Hoàn Kiếm', 'Phố Cổ Hà Nội', 'Vịnh Hạ Long', 'Sa Pa', 'Ninh Bình', 'Đền Hùng', 'Tam Cốc']
    },
    {
      id: 'central',
      name: 'Miền Trung',
      title: 'Hội An & Đà Nẵng',
      mood: 'Di sản — Biển — Văn hóa lịch sử',
      spots: ['Phố Cổ Hội An', 'Cầu Vàng', 'Cố Đô Huế', 'Mỹ Sơn', 'Phong Nha', 'Non Nước', 'Bán Đảo Sơn Trà']
    },
    {
      id: 'south',
      name: 'Miền Nam',
      title: 'Mekong & Phú Quốc',
      mood: 'Năng động — Hiện đại — Sông nước',
      spots: ['TP. Hồ Chí Minh', 'Đồng Bằng Sông Cửu Long', 'Phú Quốc', 'Cần Thơ', 'Chợ Nổi Cái Răng', 'Mũi Né', 'Côn Đảo']
    }
  ],

  // ── Vietnamese Dishes ──
  food: [
    { name: 'Phở Bò',      origin: 'Hà Nội · Toàn Quốc', desc: 'Linh hồn ẩm thực Việt — nước dùng ninh xương bò nhiều giờ, bánh phở mềm, thịt thái mỏng.' },
    { name: 'Bánh Mì',     origin: 'Toàn Quốc',           desc: 'Di sản ẩm thực thế giới — ổ bánh mì giòn rụm nhân thịt nguội, pâté, rau thơm.' },
    { name: 'Cơm Tấm',     origin: 'TP. Hồ Chí Minh',    desc: 'Linh hồn bữa sáng Sài Gòn — sườn nướng, chả trứng và mỡ hành xanh mướt.' },
    { name: 'Bún Bò Huế',  origin: 'Huế · Miền Trung',   desc: 'Vị cay nồng đặc trưng cố đô — sả, mắm ruốc, bò và chả cua tươi ngon.' },
    { name: 'Gỏi Cuốn',    origin: 'Miền Nam',            desc: 'Trong lành tươi mát — tôm, thịt, bún, rau thơm cuộn bánh tráng, chấm tương đậu phộng.' },
    { name: 'Cà Phê Sữa Đá', origin: 'Toàn Quốc',       desc: 'Văn hóa cafe đặc trưng — phin nhỏ giọt chậm rãi, sữa đặc ngọt ngào, đá lạnh tan dần.' }
  ],

  // ── Fun Facts ──
  facts: {
    provinces: 63,
    unescoSites: 8,
    tourists: '18M',  // lượng khách quốc tế mỗi năm
    population: '96M',
    ethnicGroups: 54,
    coastlineKm: 3260
  }
};
