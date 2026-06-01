# 🇻🇳 Vietnam — More Than A Destination
> Đồ án Frontend: Website Du Lịch Việt Nam — Cinematic & Interactive

---

## 📁 Cấu Trúc Project

```
vietnam-site/
│
├── index.html              ← File chính — mở trên trình duyệt
│
├── css/
│   ├── base.css            ← Variables, Reset, Typography, Navbar, Cursor
│   ├── animations.css      ← Tất cả @keyframes & animation classes
│   ├── components.css      ← Hero, Cards, Saigon, Regions, Food, People, Map, Gallery
│   └── sections.css        ← Footer + Responsive breakpoints
│
├── js/
│   ├── data.js             ← Dữ liệu địa điểm, món ăn, timeline (chân thực)
│   ├── cursor.js           ← Custom cursor + scroll progress + navbar
│   ├── hero.js             ← Slideshow + counter stats + particles
│   ├── three-scene.js      ← Three.js 3D background (star field + rings)
│   ├── animations.js       ← GSAP ScrollTrigger + parallax + tilt effects
│   └── interactive.js      ← Drag scroll + interactive map + food cards
│
└── sections/               ← HTML partials (tham khảo / tái sử dụng)
    ├── hero.html
    ├── intro.html
    └── saigon.html
```

---

## 🚀 Cách Chạy

### Mở trực tiếp (đơn giản nhất)
```bash
# Mở file index.html trong trình duyệt
open index.html
# hoặc double-click vào index.html
```

### Dùng local server (khuyến nghị — tránh CORS)
```bash
# Python 3
python3 -m http.server 3000

# Node.js (npx)
npx serve .

# VS Code: cài Live Server extension → click "Go Live"
```

Sau đó mở: **http://localhost:3000**

---

## ✨ Tính Năng

| Feature | File |
|---------|------|
| 🖱️ Custom cursor + follower | `js/cursor.js` |
| 📊 Scroll progress bar | `js/cursor.js` |
| 🎠 Hero slideshow auto-play | `js/hero.js` |
| 🔢 Stats counter animation | `js/hero.js` |
| ✨ Bokeh particles | `js/hero.js` |
| 🌐 Three.js 3D star field | `js/three-scene.js` |
| 💫 3D rotating rings | `js/three-scene.js` |
| 📜 GSAP ScrollTrigger reveal | `js/animations.js` |
| 🃏 Card 3D tilt effect | `js/animations.js` |
| ↔️ Drag horizontal scroll | `js/interactive.js` |
| 🗺️ Interactive map sidebar | `js/interactive.js` |
| 🎞️ Parallax sections | `js/animations.js` |
| 📱 Fully responsive | `css/sections.css` |
| 🌙 Vietnam night theme | `css/base.css` |
| 🎨 SVG city illustrations | `index.html` |

---

## 🎨 Design System

### Màu Sắc
```css
--red:      #C8102E   /* Đỏ cờ Việt Nam */
--gold:     #D4A843   /* Vàng truyền thống */
--teal:     #1A7A6E   /* Xanh ngọc */
--cream:    #FAF6EF   /* Trắng kem */
--dark:     #0A0806   /* Nền đêm */
--wood:     #8B5E3C   /* Gỗ truyền thống */
--night:    #FF6B35   /* Đèn đường Sài Gòn */
--midnight: #0D1B2A   /* Bầu trời đêm */
```

### Font
- **Bebas Neue** — Display / Headings to lớn
- **Cormorant Garamond** — Elegant serif subheadings
- **DM Sans** — Body text, UI labels

### Thư Viện
- [GSAP 3.12](https://gsap.com/) + ScrollTrigger
- [Three.js r128](https://threejs.org/)
- Google Fonts (preconnect)

---

## 📝 Nội Dung Thực Tế

Tất cả thông tin trong website đều **chân thực**:

- ✅ Địa danh: Landmark 81, Chợ Bến Thành, Nhà Thờ Đức Bà, Vịnh Hạ Long, Hội An...
- ✅ Lịch sử: Timeline Sài Gòn từ 1698 đến 2024
- ✅ Văn hóa: 54 dân tộc, ẩm thực vùng miền
- ✅ Con số: 63 tỉnh thành, 8 Di sản UNESCO, 96M dân
- ✅ Ẩm thực: Phở, Bánh Mì, Cơm Tấm, Bún Bò Huế, Gỏi Cuốn, Cà Phê Sữa Đá

---

## 🔧 Tùy Chỉnh

### Đổi màu chủ đạo
Chỉnh trong `css/base.css` phần `:root { }`:
```css
:root {
  --red:  #your-color;
  --gold: #your-color;
}
```

### Thêm địa điểm vào Map
Chỉnh trong `js/data.js`, mảng `saigonPlaces`:
```js
{
  id: 8,
  name: 'Chợ Lớn',
  district: 'Quận 5, TP.HCM',
  type: 'Phố Người Hoa',
  desc: '...',
}
```

### Thêm slide Hero
Trong `index.html`, thêm div mới:
```html
<div class="hero-slide slide-4"></div>
```
Thêm CSS gradient trong `css/components.css`:
```css
.slide-4 { background: ...; }
```

---

## 👨‍💻 Đồ Án Frontend

- **Sinh viên**: [Tên sinh viên]
- **Môn học**: Frontend Development
- **Công nghệ**: HTML5, CSS3, JavaScript ES6+, GSAP, Three.js
- **Thiết kế**: Cinematic Vietnam Travel Website

---

*Made with ❤️ in Sài Gòn 🇻🇳*
