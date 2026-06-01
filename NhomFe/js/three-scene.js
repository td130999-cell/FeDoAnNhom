/* ═══════════════════════════════════════════════════
   three-scene.js — Three.js Hero Background
   Requires: three.js r128 loaded via CDN
═══════════════════════════════════════════════════ */

(function initThreeScene() {
  const canvas = document.getElementById('three-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  // ── Renderer ──
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // ── Scene & Camera ──
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // ── Star/Bokeh Particles ──
  const count     = 2000;
  const positions = new Float32Array(count * 3);
  const colors    = new Float32Array(count * 3);

  // Color palettes: gold, red, teal
  const palette = [
    [0.83, 0.66, 0.26],  // gold
    [0.78, 0.06, 0.18],  // red
    [0.10, 0.48, 0.43],  // teal
    [1.00, 0.42, 0.21],  // night orange
  ];

  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

    const col = palette[Math.floor(Math.random() * palette.length)];
    colors[i * 3]     = col[0];
    colors[i * 3 + 1] = col[1];
    colors[i * 3 + 2] = col[2];
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));

  const mat    = new THREE.PointsMaterial({ size: 0.04, vertexColors: true, transparent: true, opacity: 0.8 });
  const points = new THREE.Points(geo, mat);
  scene.add(points);

  // ── Floating Torus Rings ──
  const ringColors = [0xC8102E, 0xD4A843, 0x1A7A6E, 0xFF6B35];
  const rings = ringColors.map((color, i) => {
    const tg   = new THREE.TorusGeometry(1.5 + i * 0.8, 0.008, 8, 80);
    const tm   = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.12 });
    const ring = new THREE.Mesh(tg, tm);
    ring.rotation.x = Math.random() * Math.PI;
    ring.rotation.y = Math.random() * Math.PI;
    ring.position.z = -2 - i * 1.5;
    scene.add(ring);
    return ring;
  });

  // ── Mouse Parallax ──
  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth  - 0.5) * 0.3;
    my = (e.clientY / window.innerHeight - 0.5) * 0.2;
  }, { passive: true });

  // ── Render Loop ──
  let t = 0;
  (function animate() {
    requestAnimationFrame(animate);
    t += 0.003;

    points.rotation.y = t * 0.05 + mx * 0.1;
    points.rotation.x = t * 0.02 + my * 0.1;

    rings.forEach((ring, i) => {
      ring.rotation.x += 0.002 + i * 0.001;
      ring.rotation.y += 0.003 + i * 0.0005;
      ring.material.opacity = 0.08 + Math.sin(t + i) * 0.04;
    });

    renderer.render(scene, camera);
  })();

  // ── Resize ──
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
