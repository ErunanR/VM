// ===========================
// VALENTINA — 3D COSMIC GALLERY
// Premium Upgrade v2
// Powered by Three.js (WebGL)
// ===========================
import * as THREE from 'three';

// ===========================
// LETTER MAPPING
// ===========================
const VALENTINA = [
  { letter: "V", color: "#ff2d55" },
  { letter: "A", color: "#c430cc" },
  { letter: "L", color: "#ff6b8a" },
  { letter: "E", color: "#ffd700" },
  { letter: "N", color: "#ffb300" },
  { letter: "T", color: "#ff8a80" },
  { letter: "I", color: "#e91e8c" },
  { letter: "N", color: "#ff8c00" },
  { letter: "A", color: "#8a2be2" }
];

// ===========================
// FLOWER DATA — 14 photos
// ===========================
const FLOWERS = [
  { id:1, name:"Rosa Roja Nocturna", scientific:"Rosa × hybrid", image:"public/WhatsApp Image 2026-06-08 at 11.15.01 PM.jpeg", description:"Pertenece a la familia Rosaceae, pariente de manzanas, peras y almendras. Lo que llamamos espinas son en realidad 'aguijones' de la corteza.", tags:["Rosaceae","Aguijones","+300 especies"], color:"#ff2d55", li:0 },
  { id:2, name:"Margarita Africana", scientific:"Osteospermum ecklonis", image:"public/WhatsApp Image 2026-06-11 at 6.28.13 AM.jpeg", description:"Originaria de Sudáfrica. Sus pétalos se cierran de noche y con el cielo nublado, y vuelven a abrirse con el sol.", tags:["Sudáfrica","Fotosensible","Perenne"], color:"#c430cc", li:1 },
  { id:3, name:"Rosa Rosa del Amanecer", scientific:"Rosa × centifolia", image:"public/WhatsApp Image 2026-06-12 at 6.47.53 AM.jpeg", description:"Conocida como 'rosa de los cien pétalos'. Se cultiva en Grasse (Francia) para fabricar perfumes desde el siglo XVI.", tags:["Centifolia","Perfumería","Grasse"], color:"#ff6b8a", li:2 },
  { id:4, name:"Margarita Cósmica", scientific:"Tanacetum parthenium", image:"public/WhatsApp Image 2026-06-13 at 6.21.02 AM.jpeg", description:"Cada 'flor' es en realidad un ramo de cientos de flores diminutas. Se ha usado tradicionalmente contra la fiebre y la migraña.", tags:["Inflorescencia","Asteraceae","Medicinal"], color:"#ffd700", li:3 },
  { id:5, name:"Girasol y Gatito Estelar", scientific:"Helianthus annuus", image:"public/WhatsApp Image 2026-06-14 at 6.52.55 AM.jpeg", description:"Los girasoles jóvenes siguen al sol (heliotropismo). Sus semillas se ordenan en espirales de Fibonacci: a menudo 34, 55 u 89.", tags:["Heliotropismo","Fibonacci","Comestible"], color:"#ffb300", li:4 },
  { id:6, name:"Hibisco del Atardecer", scientific:"Hibiscus rosa-sinensis", image:"public/WhatsApp Image 2026-06-15 at 6.25.45 AM.jpeg", description:"Cada flor vive un solo día. Con sus pétalos se elaboran tintes naturales y cosméticos para el cabello en Asia.", tags:["Efímera","Tropical","Tinte"], color:"#ff8a80", li:5 },
  { id:7, name:"Margarita Africana Estelar", scientific:"Osteospermum ecklonis", image:"public/WhatsApp Image 2026-06-18 at 11.20.17 AM.jpeg", description:"Su centro oscuro está formado por decenas de flores fértiles. Es una de las margaritas con más variedades de color por hibridación.", tags:["Asteraceae","Híbrida","Sudáfrica"], color:"#e91e8c", li:6 },
  { id:8, name:"Thunbergia Solar", scientific:"Thunbergia alata", image:"public/WhatsApp Image 2026-06-19 at 10.10.32 AM.jpeg", description:"Trepadora de crecimiento rápido originaria de África oriental; puede escalar 2 o 3 metros en una sola temporada.", tags:["Trepadora","África","Rápida"], color:"#ff8c00", li:7 },
  { id:9, name:"Tibouchina Galáctica", scientific:"Tibouchina urvilleana", image:"public/WhatsApp Image 2026-06-20 at 5.33.59 PM.jpeg", description:"Originaria de Brasil. Sus pétalos violeta intenso y sus estambres curvos en forma de araña la hacen inconfundible.", tags:["Brasil","Estambres","Arbusto"], color:"#8a2be2", li:8 },
  { id:10, name:"Lantana Arcoíris", scientific:"Lantana camara", image:"public/WhatsApp Image 2026-06-21 at 8.34.50 AM.jpeg", description:"Cambia de color a medida que madura, por eso una sola mata muestra varios tonos. Atrae mariposas y es invasora en muchos países.", tags:["Cambia color","Mariposas","Invasora"], color:"#ff6347", li:null },
  { id:11, name:"Dalia Supernova", scientific:"Dahlia × hortensis", image:"public/WhatsApp Image 2026-06-23 at 6.26.32 AM.jpeg", description:"Flor nacional de México, cultivada por los aztecas. Sus tubérculos son comestibles y existen más de 40.000 variedades registradas.", tags:["México","Comestible","+40.000 var."], color:"#dc143c", li:null },
  { id:12, name:"Azalea Lunar", scientific:"Rhododendron indicum", image:"public/WhatsApp Image 2026-06-23 at 8.29.32 PM.jpeg", description:"Las azaleas son un tipo de rododendro. Algunos ejemplares superan los 100 años, aunque toda la planta es tóxica si se ingiere.", tags:["Rododendro","Longeva","Tóxica"], color:"#ba55d3", li:null },
  { id:13, name:"Geranio Nebulosa", scientific:"Pelargonium × hortorum", image:"public/WhatsApp Image 2026-06-24 at 6.44.54 AM.jpeg", description:"En realidad es un pelargonio, no un geranio verdadero. Sus hojas aromáticas pueden oler a rosa, limón o menta y se usan en perfumería.", tags:["Pelargonio","Aromática","Perfumería"], color:"#ff1493", li:null },
  { id:14, name:"Zinnia Cósmica", scientific:"Zinnia elegans", image:"public/WhatsApp Image 2026-06-25 at 7.27.50 AM.jpeg", description:"En 2016 fue la primera flor en florecer en el espacio, a bordo de la Estación Espacial Internacional. Es originaria de México.", tags:["Espacio","ISS 2016","México"], color:"#ff0066", li:null }
];

// ===========================
// PERFORMANCE DETECTION
// ===========================
const PERF = {
  isLow: false,
  isMobile: /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 768
};
// Simple GPU check: if canvas is tiny on a mobile device, reduce effects
try {
  const testCanvas = document.createElement('canvas');
  const gl = testCanvas.getContext('webgl');
  if (gl) {
    const dbg = gl.getExtension('WEBGL_debug_renderer_info');
    if (dbg) {
      const renderer = gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL).toLowerCase();
      PERF.isLow = /mali-4|adreno 3|powervr sgx/i.test(renderer);
    }
  }
} catch(e) {}

// ===========================
// 2D STAR FIELD (deep background)
// ===========================
class StarField {
  constructor(c) {
    this.c = c; this.x = c.getContext('2d');
    this.stars = [];
    this.resize(); this.init();
    window.addEventListener('resize', () => { this.resize(); this.init(); });
  }
  resize() { this.c.width = innerWidth; this.c.height = innerHeight; }
  init() {
    this.stars = [];
    const n = Math.min(320, Math.floor((innerWidth * innerHeight) / 4000));
    const cols = ['240,234,255','255,212,232','200,200,255','255,224,102','180,180,255','255,180,220'];
    for (let i = 0; i < n; i++) this.stars.push({
      x: Math.random()*this.c.width, y: Math.random()*this.c.height,
      s: Math.random()*2.2+0.2, o: Math.random()*0.8+0.2,
      ts: Math.random()*0.02+0.005, to: Math.random()*Math.PI*2,
      cl: cols[Math.floor(Math.random()*cols.length)]
    });
  }
  update(t) {
    this.x.clearRect(0,0,this.c.width,this.c.height);
    for (const s of this.stars) {
      const tw = Math.sin(t*s.ts+s.to)*0.5+0.5;
      const o = s.o*(0.3+tw*0.7);
      this.x.beginPath(); this.x.arc(s.x,s.y,s.s,0,Math.PI*2);
      this.x.fillStyle = `rgba(${s.cl},${o})`; this.x.fill();
    }
  }
}

// ===========================
// CANVAS PARTICLES SYSTEM (upgraded from CSS)
// ===========================
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: -1000, y: -1000 };
    this.resize();
    this.init();
    window.addEventListener('resize', () => { this.resize(); this.init(); });
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    this.particles = [];
    const count = PERF.isLow ? 30 : (PERF.isMobile ? 50 : 80);
    const colors = [
      { r:255, g:45, b:149 },  // pink
      { r:155, g:48, b:255 },  // purple
      { r:77, g:124, b:255 },  // blue
      { r:0, g:229, b:255 },   // cyan
      { r:255, g:215, b:0 },   // gold
      { r:255, g:110, b:180 }, // rose
      { r:200, g:200, b:255 }, // light blue
    ];
    for (let i = 0; i < count; i++) {
      const c = colors[Math.floor(Math.random() * colors.length)];
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.15,
        color: c,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }
  }

  update(time) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const mouseRepelRadius = 120;
    const mouseRepelForce = 0.8;
    const connectionDist = PERF.isMobile ? 0 : 100; // no connections on mobile

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Mouse repulsion
      const dx = p.x - this.mouse.x;
      const dy = p.y - this.mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouseRepelRadius && dist > 0) {
        const force = (1 - dist / mouseRepelRadius) * mouseRepelForce;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }

      // Damping
      p.vx *= 0.98;
      p.vy *= 0.98;

      // Ensure minimum movement
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed < 0.1) {
        p.vx += (Math.random() - 0.5) * 0.05;
        p.vy += (Math.random() - 0.5) * 0.05;
      }

      p.x += p.vx;
      p.y += p.vy;

      // Wrap
      if (p.x < -10) p.x = this.canvas.width + 10;
      if (p.x > this.canvas.width + 10) p.x = -10;
      if (p.y < -10) p.y = this.canvas.height + 10;
      if (p.y > this.canvas.height + 10) p.y = -10;

      // Twinkle
      const twinkle = Math.sin(time * p.twinkleSpeed + p.twinkleOffset) * 0.5 + 0.5;
      const alpha = p.opacity * (0.4 + twinkle * 0.6);

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${p.color.r},${p.color.g},${p.color.b},${alpha})`;
      this.ctx.fill();

      // Soft glow
      if (p.size > 1.2 && !PERF.isLow) {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(${p.color.r},${p.color.g},${p.color.b},${alpha * 0.08})`;
        this.ctx.fill();
      }

      // Constellation connections (desktop only)
      if (connectionDist > 0) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          if (cdist < connectionDist) {
            const lineAlpha = (1 - cdist / connectionDist) * 0.12 * alpha;
            this.ctx.beginPath();
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.strokeStyle = `rgba(${p.color.r},${p.color.g},${p.color.b},${lineAlpha})`;
            this.ctx.lineWidth = 0.5;
            this.ctx.stroke();
          }
        }
      }
    }
  }
}

// ===========================
// SHOOTING STARS
// ===========================
class ShootingStars {
  constructor() {
    this.stars = [];
    this.lastSpawn = 0;
    this.interval = 4000 + Math.random() * 6000; // 4-10 seconds between shoots
  }

  update(time, ctx, w, h) {
    // Spawn new shooting star
    if (time - this.lastSpawn > this.interval) {
      this.lastSpawn = time;
      this.interval = 3000 + Math.random() * 7000;
      this.stars.push({
        x: Math.random() * w * 0.8,
        y: Math.random() * h * 0.3,
        vx: 4 + Math.random() * 6,
        vy: 2 + Math.random() * 3,
        life: 1,
        decay: 0.008 + Math.random() * 0.012,
        length: 40 + Math.random() * 60,
        width: 1 + Math.random() * 1.5,
        color: Math.random() > 0.5 ? '255,224,102' : '200,200,255'
      });
    }

    // Update & draw
    for (let i = this.stars.length - 1; i >= 0; i--) {
      const s = this.stars[i];
      s.x += s.vx;
      s.y += s.vy;
      s.life -= s.decay;

      if (s.life <= 0) {
        this.stars.splice(i, 1);
        continue;
      }

      const tailX = s.x - s.vx * s.length / Math.sqrt(s.vx*s.vx + s.vy*s.vy) * 0.5;
      const tailY = s.y - s.vy * s.length / Math.sqrt(s.vx*s.vx + s.vy*s.vy) * 0.5;

      const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
      grad.addColorStop(0, `rgba(${s.color},0)`);
      grad.addColorStop(0.6, `rgba(${s.color},${s.life * 0.3})`);
      grad.addColorStop(1, `rgba(${s.color},${s.life * 0.8})`);

      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(s.x, s.y);
      ctx.strokeStyle = grad;
      ctx.lineWidth = s.width * s.life;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Head glow
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.width * 2 * s.life, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${s.color},${s.life * 0.5})`;
      ctx.fill();
    }
  }
}

// ===========================
// PASSWORD SCREEN — ENHANCED
// ===========================
const CORRECT_PASSWORD = "2026*";

function initPassword() {
  const screen = document.getElementById('passwordScreen');
  const input = document.getElementById('passwordInput');
  const btn = document.getElementById('passwordBtn');
  const error = document.getElementById('passwordError');
  const card = document.getElementById('passwordCard');

  // 3D Parallax tilt on mouse move
  if (!PERF.isMobile) {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
    });
  }

  // Ripple effect on button
  btn.addEventListener('click', (e) => {
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });

  function tryPassword() {
    if (input.value === CORRECT_PASSWORD) {
      error.classList.remove('visible');
      card.classList.add('success');

      // Success particle explosion
      createSuccessExplosion(card);

      setTimeout(() => {
        screen.classList.add('hidden');
        startMusic(); // user gesture -> allowed to play audio
        setTimeout(() => startWelcome(), 600);
      }, 800);
    } else {
      error.classList.add('visible');
      input.value = '';
      input.focus();
      setTimeout(() => error.classList.remove('visible'), 2000);
    }
  }

  btn.addEventListener('click', tryPassword);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') tryPassword(); });
  input.focus();
}

// Success explosion particles
function createSuccessExplosion(card) {
  const container = document.createElement('div');
  container.classList.add('success-particles');
  document.body.appendChild(container);

  const rect = card.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const colors = ['#ffd700', '#ff2d95', '#9b30ff', '#ffe066', '#ff6b8a', '#00e5ff'];

  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.classList.add('success-particle');
    const angle = (Math.PI * 2 * i) / 40 + (Math.random() - 0.5) * 0.5;
    const velocity = 80 + Math.random() * 160;
    const size = 3 + Math.random() * 5;
    const color = colors[Math.floor(Math.random() * colors.length)];

    p.style.cssText = `
      left: ${cx}px; top: ${cy}px;
      width: ${size}px; height: ${size}px;
      background: ${color};
      box-shadow: 0 0 ${size * 2}px ${color};
      border-radius: 50%;
    `;
    container.appendChild(p);

    const dx = Math.cos(angle) * velocity;
    const dy = Math.sin(angle) * velocity;

    p.animate([
      { transform: 'translate(0,0) scale(1)', opacity: 1 },
      { transform: `translate(${dx}px,${dy}px) scale(0)`, opacity: 0 }
    ], {
      duration: 800 + Math.random() * 400,
      easing: 'cubic-bezier(0.25,0.46,0.45,0.94)',
      fill: 'forwards'
    });
  }

  setTimeout(() => container.remove(), 1500);
}

// ===========================
// WELCOME ANIMATION — CINEMATIC
// ===========================
function buildLetterCards() {
  const container = document.getElementById('nameLetters');
  container.innerHTML = '';
  VALENTINA.forEach((item, i) => {
    const flower = FLOWERS[i];
    const card = document.createElement('div');
    card.classList.add('letter-card');
    card.innerHTML = `
      <img class="letter-photo" src="${flower.image}" alt="${flower.name}" loading="eager">
      <div class="letter-glass-overlay"></div>
      <div class="letter-char" style="--lc:${item.color}">${item.letter}</div>
    `;
    container.appendChild(card);
  });
}

// Typewriter effect for welcome text
function typewriterEffect(element, text, speed = 80) {
  return new Promise(resolve => {
    element.textContent = '';
    element.style.borderRight = '2px solid rgba(255,224,102,0.8)';
    element.style.animation = 'none'; // pause shimmer during typewrite
    let i = 0;
    const blinkInterval = setInterval(() => {
      element.style.borderColor = element.style.borderColor === 'transparent' ? 'rgba(255,224,102,0.8)' : 'transparent';
    }, 500);

    const type = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        clearInterval(blinkInterval);
        element.style.borderRight = 'none';
        resolve();
      }
    };
    type();
  });
}

// Build constellation lines between letter cards
function buildConstellation() {
  const svg = document.getElementById('constellationSvg');
  if (!svg) return;

  const cards = document.querySelectorAll('.letter-card.revealed');
  if (cards.length < 2) return;

  const contentRect = document.getElementById('welcomeContent').getBoundingClientRect();
  svg.setAttribute('width', contentRect.width);
  svg.setAttribute('height', contentRect.height);
  svg.style.width = contentRect.width + 'px';
  svg.style.height = contentRect.height + 'px';
  svg.innerHTML = '';

  const positions = [];
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    positions.push({
      x: rect.left + rect.width / 2 - contentRect.left,
      y: rect.top + rect.height / 2 - contentRect.top
    });
  });

  // Connect sequential letters
  for (let i = 0; i < positions.length - 1; i++) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', positions[i].x);
    line.setAttribute('y1', positions[i].y);
    line.setAttribute('x2', positions[i + 1].x);
    line.setAttribute('y2', positions[i + 1].y);
    line.style.animationDelay = `${i * 0.2}s`;
    svg.appendChild(line);
  }

  // Add a few extra cross-connections for the constellation look
  const extras = [[0, 3], [2, 5], [4, 7], [1, 6]];
  extras.forEach(([a, b]) => {
    if (a < positions.length && b < positions.length) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', positions[a].x);
      line.setAttribute('y1', positions[a].y);
      line.setAttribute('x2', positions[b].x);
      line.setAttribute('y2', positions[b].y);
      line.style.animationDelay = `${(positions.length + a) * 0.15}s`;
      svg.appendChild(line);
    }
  });

  setTimeout(() => svg.classList.add('visible'), 100);
}

function startWelcome() {
  const screen = document.getElementById('welcomeScreen');
  const text = document.getElementById('welcomeText');
  const cards = document.querySelectorAll('.letter-card');

  screen.classList.add('active');

  // Typewriter then shimmer
  setTimeout(async () => {
    text.classList.add('visible');
    await typewriterEffect(text, 'Bienvenida', 100);
    // Re-enable shimmer animation after typewriter
    text.style.animation = '';
  }, 300);

  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add('revealed'), 1800 + i * 220);
  });

  // Build constellation after all cards revealed
  const constellationTime = 1800 + (cards.length - 1) * 220 + 600;
  setTimeout(() => buildConstellation(), constellationTime);

  const totalTime = 1800 + (cards.length - 1) * 220 + 700 + 2800;
  setTimeout(() => {
    screen.classList.add('fade-out');
    showGalaxy();
  }, totalTime);
}

// =====================================================
// ===============  TRUE 3D GALAXY (WebGL)  ============
// =====================================================
const Galaxy = {
  renderer: null, scene: null, camera: null, raycaster: null,
  flowerSprites: [], glowSprites: [], raccoon: null, dust: null, starPoints: [],
  clock: null,
  // camera orbit (spherical) with damping for a fluid feel
  cam: { theta: 0.5, phi: 1.15, radius: 20 },
  target: { theta: 0.5, phi: 1.15, radius: 20 },
  autoRotate: true,
  dragging: false,
  moved: false,
  pointer: new THREE.Vector2(-2, -2),
  pointerActive: false,
  last: { x: 0, y: 0 },
  pinchDist: null,
  orbitSpeed: 0.2,
  hovered: null,
  started: false
};

// ---- Shared canvas helpers ----
function radialTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  const s = 128;
  const c = document.createElement('canvas'); c.width = c.height = s;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(s/2, s/2, 0, s/2, s/2, s/2);
  g.addColorStop(0, inner);
  g.addColorStop(0.4, inner);
  g.addColorStop(1, outer);
  ctx.fillStyle = g; ctx.fillRect(0, 0, s, s);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// Crop a loaded image into a glowing circular "planet" texture
function circularFlowerTexture(img, colorHex) {
  const size = 256, r = size / 2;
  const c = document.createElement('canvas'); c.width = c.height = size;
  const ctx = c.getContext('2d');

  // cover-fit the source image into the circle
  ctx.save();
  ctx.beginPath();
  ctx.arc(r, r, r - 14, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  const iw = img.naturalWidth, ih = img.naturalHeight;
  const scale = Math.max(size / iw, size / ih);
  const dw = iw * scale, dh = ih * scale;
  ctx.drawImage(img, (size - dw) / 2, (size - dh) / 2, dw, dh);
  // subtle top shine
  const sh = ctx.createLinearGradient(0, 0, 0, size);
  sh.addColorStop(0, 'rgba(255,255,255,0.25)');
  sh.addColorStop(0.4, 'rgba(255,255,255,0)');
  ctx.fillStyle = sh; ctx.fillRect(0, 0, size, size);
  ctx.restore();

  // glowing ring border in the flower's color
  ctx.lineWidth = 9;
  ctx.strokeStyle = colorHex;
  ctx.shadowColor = colorHex;
  ctx.shadowBlur = 18;
  ctx.beginPath();
  ctx.arc(r, r, r - 14, 0, Math.PI * 2);
  ctx.stroke();
  // bright inner rim
  ctx.shadowBlur = 0;
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'rgba(255,255,255,0.55)';
  ctx.beginPath();
  ctx.arc(r, r, r - 16, 0, Math.PI * 2);
  ctx.stroke();

  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// ---- Build a cute low-poly raccoon as the galaxy core ----
function buildRaccoon() {
  const g = new THREE.Group();

  const mat = (color, opts = {}) => new THREE.MeshStandardMaterial({
    color, roughness: opts.rough ?? 0.75, metalness: 0,
    emissive: opts.emissive ?? 0x000000, emissiveIntensity: opts.ei ?? 1
  });
  const ball = (radius, color, opts = {}) =>
    new THREE.Mesh(new THREE.SphereGeometry(radius, 32, 32), mat(color, opts));

  const FUR = 0xb7c0d4, DARK = 0x23252f, LIGHT = 0xeef1f8, NOSE = 0x191a22;

  // Head
  const head = ball(1.3, FUR, { rough: 0.85 });
  head.scale.set(1.05, 0.96, 0.95);
  g.add(head);

  // Ears (outer + dark inner)
  [-1, 1].forEach(sx => {
    const ear = new THREE.Group();
    const outer = ball(0.5, FUR, { rough: 0.85 });
    const inner = ball(0.3, DARK, { rough: 0.6 });
    inner.position.set(0, -0.02, 0.18);
    inner.scale.set(1, 1.05, 0.5);
    ear.add(outer, inner);
    ear.position.set(sx * 0.92, 1.0, 0.05);
    ear.rotation.z = sx * -0.25;
    g.add(ear);
  });

  // Dark eye mask (two patches + bridge)
  [-1, 1].forEach(sx => {
    const patch = ball(0.52, DARK, { rough: 0.5 });
    patch.scale.set(1.05, 0.92, 0.45);
    patch.position.set(sx * 0.46, 0.18, 0.92);
    g.add(patch);
  });
  const bridge = ball(0.3, DARK, { rough: 0.5 });
  bridge.scale.set(1.1, 0.7, 0.4);
  bridge.position.set(0, 0.08, 1.05);
  g.add(bridge);

  // Eyes (white + pupil + highlight) grouped so we can blink
  const eyeGroups = [];
  [-1, 1].forEach(sx => {
    const eg = new THREE.Group();
    const white = ball(0.31, 0xffffff, { rough: 0.25, emissive: 0x222233, ei: 0.4 });
    const pupil = ball(0.18, 0x05060a, { rough: 0.15 });
    pupil.position.set(sx * 0.03, 0.0, 0.22);
    const hi = ball(0.07, 0xffffff, { emissive: 0xffffff, ei: 1.4 });
    hi.position.set(sx * 0.08 + 0.04, 0.1, 0.34);
    eg.add(white, pupil, hi);
    eg.position.set(sx * 0.46, 0.2, 1.18);
    g.add(eg);
    eyeGroups.push(eg);
  });

  // Muzzle / snout
  const muzzle = ball(0.62, LIGHT, { rough: 0.7 });
  muzzle.scale.set(1.0, 0.82, 0.85);
  muzzle.position.set(0, -0.42, 1.0);
  g.add(muzzle);

  // Nose (shiny)
  const nose = ball(0.2, NOSE, { rough: 0.15 });
  nose.scale.set(1.2, 0.9, 0.9);
  nose.position.set(0, -0.28, 1.55);
  g.add(nose);
  const noseHi = ball(0.05, 0xffffff, { emissive: 0xffffff, ei: 1.2 });
  noseHi.position.set(0.07, -0.2, 1.7);
  g.add(noseHi);

  // Blush cheeks (cute)
  [-1, 1].forEach(sx => {
    const cheek = ball(0.22, 0xff8fb0, { emissive: 0xff5e8a, ei: 0.5, rough: 0.6 });
    cheek.scale.set(1.1, 0.7, 0.5);
    cheek.position.set(sx * 0.78, -0.32, 0.95);
    g.add(cheek);
  });

  // Smile (thin torus arc)
  const smileGeo = new THREE.TorusGeometry(0.16, 0.03, 12, 24, Math.PI);
  const smile = new THREE.Mesh(smileGeo, mat(NOSE, { rough: 0.4 }));
  smile.rotation.set(Math.PI, 0, 0);
  smile.position.set(0, -0.62, 1.42);
  g.add(smile);

  g.userData.eyeGroups = eyeGroups;
  g.scale.setScalar(1.15);
  return g;
}

// ---- Nebula volume planes ----
function buildNebulaPlanes() {
  const G = Galaxy;
  const nebulaGroup = new THREE.Group();
  const nebulaColors = [
    { inner: 'rgba(255,45,149,0.06)', outer: 'rgba(255,45,149,0)' },
    { inner: 'rgba(155,48,255,0.05)', outer: 'rgba(155,48,255,0)' },
    { inner: 'rgba(255,215,0,0.04)', outer: 'rgba(255,215,0,0)' },
    { inner: 'rgba(77,124,255,0.04)', outer: 'rgba(77,124,255,0)' },
  ];

  nebulaColors.forEach((nc, i) => {
    const tex = radialTexture(nc.inner, nc.outer);
    const mat = new THREE.SpriteMaterial({
      map: tex, blending: THREE.AdditiveBlending,
      transparent: true, depthWrite: false, opacity: 0.7
    });
    const sprite = new THREE.Sprite(mat);
    const scale = 18 + i * 6;
    sprite.scale.setScalar(scale);
    sprite.position.set(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 10
    );
    nebulaGroup.add(sprite);
  });

  G.scene.add(nebulaGroup);
  G.nebulaGroup = nebulaGroup;
  G.nebulaItems = nebulaGroup.children.map((sprite, i) => ({
    sprite,
    baseX: sprite.position.x,
    baseY: sprite.position.y,
    baseZ: sprite.position.z,
    speed: 0.1 + Math.random() * 0.2,
    phase: Math.random() * Math.PI * 2,
    idx: i
  }));
}

function initGalaxyThree() {
  const canvas = document.getElementById('galaxyCanvas');
  const G = Galaxy;

  G.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  G.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  G.renderer.setClearColor(0x000000, 0);

  G.scene = new THREE.Scene();
  G.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200);
  G.raycaster = new THREE.Raycaster();
  G.clock = new THREE.Clock();

  // ---- Lighting ----
  G.scene.add(new THREE.AmbientLight(0x9aa4d8, 1.15));
  const key = new THREE.DirectionalLight(0xffffff, 1.25);
  key.position.set(3, 5, 6);
  G.scene.add(key);
  const rimPink = new THREE.PointLight(0xff2d95, 2.2, 60);
  rimPink.position.set(-8, 2, 4);
  G.scene.add(rimPink);
  const rimBlue = new THREE.PointLight(0x4d7cff, 2.0, 60);
  rimBlue.position.set(8, -3, 5);
  G.scene.add(rimBlue);
  const coreGold = new THREE.PointLight(0xffd700, 1.6, 30);
  coreGold.position.set(0, 0, 3);
  G.scene.add(coreGold);

  // ---- Galaxy core glow (soft halo behind the raccoon) ----
  const glowTex = radialTexture('rgba(255,224,140,0.9)', 'rgba(255,90,160,0)');
  const coreGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTex, blending: THREE.AdditiveBlending, transparent: true,
    depthWrite: false, opacity: 0.85
  }));
  coreGlow.scale.setScalar(9);
  coreGlow.position.set(0, 0, -0.5);
  G.scene.add(coreGlow);
  G.coreGlow = coreGlow;

  // ---- Raccoon at the center ----
  G.raccoon = buildRaccoon();
  G.scene.add(G.raccoon);

  // ---- Orbit rings (glowing lines) ----
  const ringDefs = [
    { r: 6, color: 0xffd700, op: 0.18 },
    { r: 9.5, color: 0xff2d95, op: 0.14 },
    { r: 13, color: 0x9b30ff, op: 0.11 }
  ];
  ringDefs.forEach(rd => {
    const pts = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * rd.r, 0, Math.sin(a) * rd.r));
    }
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const line = new THREE.Line(geo, new THREE.LineBasicMaterial({
      color: rd.color, transparent: true, opacity: rd.op
    }));
    G.scene.add(line);
  });

  // ---- 3D star field (parallax depth) ----
  buildStarPoints();

  // ---- Cosmic dust (floating glowing particles) ----
  buildDust();

  // ---- Volumetric nebula planes ----
  if (!PERF.isLow) {
    buildNebulaPlanes();
  }

  // ---- Flowers as billboard sprites ----
  buildFlowerSprites();

  // ---- Interaction & resize ----
  initGalaxyInteraction(canvas);
  resizeGalaxy();
  window.addEventListener('resize', resizeGalaxy);

  // ---- Render loop ----
  G.renderer.setAnimationLoop(renderGalaxy);
}

function buildStarPoints() {
  const G = Galaxy;
  const N = PERF.isLow ? 500 : 1000;
  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);
  const palette = [
    [1.0, 0.92, 1.0], [1.0, 0.83, 0.91], [0.78, 0.78, 1.0],
    [1.0, 0.88, 0.4], [0.7, 0.7, 1.0]
  ];
  for (let i = 0; i < N; i++) {
    // shell distribution
    const r = 35 + Math.random() * 55;
    const t = Math.random() * Math.PI * 2;
    const p = Math.acos(2 * Math.random() - 1);
    pos[i*3]   = r * Math.sin(p) * Math.cos(t);
    pos[i*3+1] = r * Math.cos(p) * 0.6;
    pos[i*3+2] = r * Math.sin(p) * Math.sin(t);
    const c = palette[(Math.random() * palette.length) | 0];
    col[i*3] = c[0]; col[i*3+1] = c[1]; col[i*3+2] = c[2];
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const mat = new THREE.PointsMaterial({
    size: 0.55, map: radialTexture(), vertexColors: true,
    transparent: true, opacity: 0.9, depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const points = new THREE.Points(geo, mat);
  G.scene.add(points);
  G.starField3D = points;
}

function buildDust() {
  const G = Galaxy;
  const N = PERF.isLow ? 60 : 140;
  const tex = radialTexture('rgba(255,210,240,0.9)', 'rgba(255,150,210,0)');
  const dust = new THREE.Group();
  const colors = [0xff8fce, 0xffd700, 0x8ad8ff, 0xc08aff, 0xffffff];
  G.dustItems = [];
  for (let i = 0; i < N; i++) {
    const m = new THREE.Sprite(new THREE.SpriteMaterial({
      map: tex, color: colors[(Math.random()*colors.length)|0],
      blending: THREE.AdditiveBlending, transparent: true,
      depthWrite: false, opacity: Math.random() * 0.5 + 0.2
    }));
    const r = 4 + Math.random() * 16;
    const a = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 10;
    m.position.set(Math.cos(a) * r, y, Math.sin(a) * r);
    const s = Math.random() * 0.5 + 0.15;
    m.scale.setScalar(s);
    dust.add(m);
    G.dustItems.push({ m, a, r, y, baseS: s, sp: (Math.random() * 0.4 + 0.1), tw: Math.random() * Math.PI * 2 });
  }
  G.scene.add(dust);
  G.dust = dust;
}

function buildFlowerSprites() {
  const G = Galaxy;
  G.flowerSprites = [];

  // 3 concentric orbits (radii match the ring lines)
  const orbits = [
    { radius: 6, count: 4, startIdx: 0, speed: 1.15, yamp: 0.5 },
    { radius: 9.5, count: 5, startIdx: 4, speed: 0.82, yamp: 0.8 },
    { radius: 13, count: 5, startIdx: 9, speed: 0.55, yamp: 1.1 }
  ];

  const glowTex = radialTexture('rgba(255,255,255,0.85)', 'rgba(255,255,255,0)');
  const loader = new THREE.TextureLoader();

  orbits.forEach(orbit => {
    for (let i = 0; i < orbit.count; i++) {
      const fIdx = orbit.startIdx + i;
      if (fIdx >= FLOWERS.length) break;
      const flower = FLOWERS[fIdx];
      const baseAngle = (i / orbit.count) * Math.PI * 2;

      // colored glow halo behind the flower (always faces camera)
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glowTex, color: new THREE.Color(flower.color),
        blending: THREE.AdditiveBlending, transparent: true,
        depthWrite: false, opacity: 0.6
      }));
      glow.scale.setScalar(3.4);
      G.scene.add(glow);

      // flower sprite (billboard — never goes flat)
      const mat = new THREE.SpriteMaterial({
        color: 0xffffff, transparent: true, opacity: 0, depthWrite: false
      });
      const sprite = new THREE.Sprite(mat);
      const baseScale = 2.0;
      sprite.scale.setScalar(baseScale);
      G.scene.add(sprite);

      // load image -> circular texture
      const img = new Image();
      img.onload = () => {
        mat.map = circularFlowerTexture(img, flower.color);
        mat.needsUpdate = true;
      };
      img.src = encodeURI(flower.image);

      G.flowerSprites.push({
        sprite, glow, mat, flower,
        baseAngle, radius: orbit.radius, speed: orbit.speed,
        yamp: orbit.yamp, yphase: Math.random() * Math.PI * 2,
        baseScale, curScale: baseScale, targetScale: baseScale, opacity: 0,
        // Trail data
        trail: [],
        trailMax: PERF.isLow ? 0 : 8
      });
    }
  });
}

function resizeGalaxy() {
  const G = Galaxy;
  const w = window.innerWidth, h = window.innerHeight;
  G.renderer.setSize(w, h, false);
  G.camera.aspect = w / h;
  // pull the camera back a touch on narrow screens so everything fits
  G.target.radius = G.cam.radius = w < 480 ? 26 : (w < 820 ? 23 : 20);
  G.camera.updateProjectionMatrix();
}

// ---- Pointer / touch interaction ----
function initGalaxyInteraction(canvas) {
  const G = Galaxy;

  const dist2 = (t) => {
    const dx = t[0].clientX - t[1].clientX;
    const dy = t[0].clientY - t[1].clientY;
    return Math.hypot(dx, dy);
  };

  function setPointer(p) {
    if (!p || typeof p.clientX !== 'number') return;
    G.pointer.x = (p.clientX / window.innerWidth) * 2 - 1;
    G.pointer.y = -(p.clientY / window.innerHeight) * 2 + 1;
  }

  function down(e) {
    if (e.touches && e.touches.length === 2) {
      G.pinchDist = dist2(e.touches);
      return;
    }
    G.dragging = true;
    G.moved = false;
    G.autoRotate = false;
    const p = e.touches ? e.touches[0] : e;
    G.last = { x: p.clientX, y: p.clientY };
    setPointer(p); // keep raycaster fresh for taps with no move event
    canvas.style.cursor = 'grabbing';
  }

  function move(e) {
    // pinch zoom
    if (e.touches && e.touches.length === 2 && G.pinchDist) {
      e.preventDefault();
      const d = dist2(e.touches);
      G.target.radius *= G.pinchDist / d;
      G.target.radius = Math.max(9, Math.min(40, G.target.radius));
      G.pinchDist = d;
      return;
    }
    const p = e.touches ? e.touches[0] : e;
    // track pointer for hover
    G.pointer.x = (p.clientX / window.innerWidth) * 2 - 1;
    G.pointer.y = -(p.clientY / window.innerHeight) * 2 + 1;
    G.pointerActive = true;

    if (!G.dragging) return;
    const dx = p.clientX - G.last.x;
    const dy = p.clientY - G.last.y;
    if (Math.abs(dx) + Math.abs(dy) > 8) G.moved = true; // forgiving for finger jitter

    G.target.theta -= dx * 0.006;
    G.target.phi -= dy * 0.006;
    G.target.phi = Math.max(0.25, Math.min(Math.PI - 0.25, G.target.phi));
    G.last = { x: p.clientX, y: p.clientY };
  }

  function up(e) {
    if (e.touches && e.touches.length < 2) G.pinchDist = null;
    if (!G.dragging) return;
    G.dragging = false;
    canvas.style.cursor = 'grab';
    // tap / click (not a drag) -> try to open a flower (use the release position)
    if (!G.moved) {
      const p = (e.touches && e.touches[0]) ? e.touches[0] : (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0] : e;
      setPointer(p);
      handleClick();
    }
    setTimeout(() => { if (!G.dragging) G.autoRotate = true; }, 2500);
  }

  canvas.addEventListener('pointerdown', down);
  window.addEventListener('pointermove', move, { passive: false });
  window.addEventListener('pointerup', up);
  window.addEventListener('pointercancel', up);

  canvas.addEventListener('touchstart', (e) => { if (e.touches.length === 2) down(e); }, { passive: true });
  window.addEventListener('touchmove', (e) => { if (e.touches.length === 2) move(e); }, { passive: false });

  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    G.target.radius += e.deltaY * 0.012;
    G.target.radius = Math.max(9, Math.min(40, G.target.radius));
  }, { passive: false });

  canvas.addEventListener('pointerleave', () => { G.pointerActive = false; G.pointer.set(-2, -2); });
}

const _projV = new THREE.Vector3();
function handleClick() {
  const G = Galaxy;
  const tapX = (G.pointer.x + 1) / 2 * window.innerWidth;
  const tapY = (-G.pointer.y + 1) / 2 * window.innerHeight;
  // Generous screen-space pick: forgiving on touch where sprites are small targets.
  const hitR = window.innerWidth < 600 ? 64 : 46;
  let best = null, bestZ = Infinity;
  G.flowerSprites.forEach(f => {
    if (f.opacity < 0.5) return; // not yet loaded / visible
    _projV.copy(f.sprite.position).project(G.camera);
    if (_projV.z > 1) return; // behind camera
    const sx = (_projV.x + 1) / 2 * window.innerWidth;
    const sy = (-_projV.y + 1) / 2 * window.innerHeight;
    if (Math.hypot(sx - tapX, sy - tapY) > hitR) return;
    // among candidates near the tap, choose the one closest to the camera (frontmost)
    if (_projV.z < bestZ) { bestZ = _projV.z; best = f; }
  });
  if (best) openModal(best.flower);
}

function updateHover() {
  const G = Galaxy;
  const tip = document.getElementById('flowerTooltip');
  if (G.dragging || !G.pointerActive) {
    G.hovered = null;
    if (tip) tip.classList.remove('visible');
    return;
  }
  G.raycaster.setFromCamera(G.pointer, G.camera);
  const hits = G.raycaster.intersectObjects(G.flowerSprites.map(f => f.sprite));
  const found = hits.length ? G.flowerSprites.find(f => f.sprite === hits[0].object) : null;
  G.hovered = found || null;

  if (found && tip) {
    tip.textContent = found.flower.name;
    tip.style.left = ((G.pointer.x + 1) / 2 * window.innerWidth) + 'px';
    tip.style.top = ((-G.pointer.y + 1) / 2 * window.innerHeight) + 'px';
    tip.classList.add('visible');
    document.getElementById('galaxyCanvas').style.cursor = 'pointer';
  } else if (tip) {
    tip.classList.remove('visible');
    if (!G.dragging) document.getElementById('galaxyCanvas').style.cursor = 'grab';
  }
}

function renderGalaxy() {
  const G = Galaxy;
  if (!G.renderer) return;
  const dt = Math.min(G.clock.getDelta(), 0.05);
  const t = G.clock.elapsedTime;

  // auto-rotate camera when idle
  if (G.autoRotate && !G.dragging) G.target.theta += 0.0016;

  // damped camera (fluid)
  G.cam.theta += (G.target.theta - G.cam.theta) * 0.09;
  G.cam.phi   += (G.target.phi   - G.cam.phi)   * 0.09;
  G.cam.radius += (G.target.radius - G.cam.radius) * 0.09;
  const r = G.cam.radius, ph = G.cam.phi, th = G.cam.theta;
  G.camera.position.set(
    r * Math.sin(ph) * Math.sin(th),
    r * Math.cos(ph),
    r * Math.sin(ph) * Math.cos(th)
  );
  G.camera.lookAt(0, 0, 0);

  // advance flower orbits
  const orbitDelta = G.orbitSpeed * dt;
  G.orbitAngle = (G.orbitAngle || 0) + orbitDelta;

  G.flowerSprites.forEach(f => {
    const ang = f.baseAngle + G.orbitAngle * f.speed;
    const x = Math.cos(ang) * f.radius;
    const z = Math.sin(ang) * f.radius;
    const y = Math.sin(t * 0.6 + f.yphase) * f.yamp;
    f.sprite.position.set(x, y, z);
    f.glow.position.set(x, y, z);

    // fade in once texture is ready
    if (f.mat.map && f.opacity < 1) {
      f.opacity = Math.min(1, f.opacity + dt * 1.5);
      f.mat.opacity = f.opacity;
      f.glow.material.opacity = 0.6 * f.opacity;
    }

    // hover pop
    f.targetScale = (G.hovered === f) ? f.baseScale * 1.45 : f.baseScale;
    f.curScale += (f.targetScale - f.curScale) * 0.18;
    f.sprite.scale.setScalar(f.curScale);
    f.glow.scale.setScalar(f.curScale * 1.7 + (G.hovered === f ? 0.8 : 0));
    f.glow.material.opacity = (G.hovered === f ? 0.95 : 0.55) * f.opacity;
  });

  // raccoon idle: bob, gentle sway, blink — always keeps its cute face toward the camera
  if (G.raccoon) {
    G.raccoon.position.y = Math.sin(t * 1.1) * 0.18;
    G.raccoon.rotation.y = th + Math.sin(t * 0.5) * 0.22;
    G.raccoon.rotation.z = Math.sin(t * 0.8) * 0.04;
    // blink every ~4s
    const blinkCycle = t % 4;
    const blink = blinkCycle > 3.85 ? (Math.sin((blinkCycle - 3.85) / 0.15 * Math.PI)) : 0;
    const sy = 1 - blink * 0.85;
    G.raccoon.userData.eyeGroups.forEach(eg => { eg.scale.y = sy; });
  }

  // core glow pulse
  if (G.coreGlow) {
    const s = 9 + Math.sin(t * 1.5) * 0.8;
    G.coreGlow.scale.setScalar(s);
  }

  // nebula drift
  if (G.nebulaItems) {
    G.nebulaItems.forEach(n => {
      n.sprite.position.x = n.baseX + Math.sin(t * n.speed + n.phase) * 3;
      n.sprite.position.y = n.baseY + Math.cos(t * n.speed * 0.7 + n.phase) * 2;
      n.sprite.material.opacity = 0.5 + Math.sin(t * 0.3 + n.phase) * 0.2;
    });
  }

  // dust drift + twinkle
  if (G.dustItems) {
    G.dustItems.forEach(d => {
      d.a += d.sp * dt * 0.2;
      d.m.position.x = Math.cos(d.a) * d.r;
      d.m.position.z = Math.sin(d.a) * d.r;
      d.m.position.y = d.y + Math.sin(t * 0.5 + d.tw) * 0.4;
      const tw = 0.5 + 0.5 * Math.sin(t * 2 + d.tw);
      d.m.material.opacity = 0.2 + tw * 0.4;
    });
  }

  // slow 3D star rotation for depth
  if (G.starField3D) G.starField3D.rotation.y += 0.0004;

  updateHover();
  G.renderer.render(G.scene, G.camera);
}

function showGalaxy() {
  const app = document.getElementById('galaxyApp');
  app.classList.add('visible');

  // init the WebGL galaxy now (after the welcome animation)
  if (!Galaxy.started) {
    Galaxy.started = true;
    try {
      initGalaxyThree();
    } catch (err) {
      console.error('WebGL galaxy failed:', err);
    }
    // hide loader once the first frames have rendered
    setTimeout(() => {
      const loader = document.getElementById('galaxyLoader');
      if (loader) loader.classList.add('hidden');
    }, 900);
  }

  // show instructions on first entry
  setTimeout(() => {
    const ins = document.getElementById('instructions');
    if (ins) ins.classList.add('visible');
  }, 1400);
}

function initSpeedSlider() {
  const slider = document.getElementById('speedSlider');
  if (!slider) return;
  slider.addEventListener('input', (e) => {
    Galaxy.orbitSpeed = parseInt(e.target.value) / 100;
  });
}

function initInstructions() {
  const ins = document.getElementById('instructions');
  const close = () => ins.classList.remove('visible');
  document.getElementById('instructionsBtn').addEventListener('click', close);
  document.getElementById('instructionsClose').addEventListener('click', close);
  document.getElementById('infoBtn').addEventListener('click', () => ins.classList.add('visible'));
}

// ===========================
// BACKGROUND MUSIC (subtle)
// ===========================
const MUSIC = { audio: null, target: 0.11, on: true, started: false };

function startMusic() {
  const a = MUSIC.audio;
  if (!a || MUSIC.started) return;
  MUSIC.started = true;
  a.volume = 0;
  const p = a.play();
  if (p && p.catch) p.catch(() => {});
  // gentle fade-in
  const fade = setInterval(() => {
    if (!MUSIC.on) { clearInterval(fade); return; }
    a.volume = Math.min(MUSIC.target, a.volume + 0.01);
    if (a.volume >= MUSIC.target) clearInterval(fade);
  }, 90);
}

function initMusic() {
  MUSIC.audio = document.getElementById('bgMusic');
  const btn = document.getElementById('musicBtn');
  const icon = document.getElementById('musicIcon');
  if (!btn) return;
  btn.addEventListener('click', () => {
    MUSIC.on = !MUSIC.on;
    btn.classList.toggle('muted', !MUSIC.on);
    icon.textContent = MUSIC.on ? '♪' : '✕';
    if (MUSIC.audio) {
      if (MUSIC.on) {
        MUSIC.audio.play().catch(() => {});
        MUSIC.audio.volume = MUSIC.target;
      } else {
        MUSIC.audio.pause();
      }
    }
  });
}

// ===========================
// MODAL — ENHANCED WITH NAV
// ===========================
let currentFlowerIndex = -1;

function openModal(flower) {
  currentFlowerIndex = FLOWERS.findIndex(f => f.id === flower.id);

  const overlay = document.getElementById('modalOverlay');
  document.getElementById('modalImage').src = flower.image;
  document.getElementById('modalImage').alt = flower.name;
  document.getElementById('modalTitle').textContent = flower.name;
  document.getElementById('modalScientific').textContent = flower.scientific;
  document.getElementById('modalDescription').textContent = flower.description;
  document.getElementById('modalTags').innerHTML = flower.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

  // Counter
  const counter = document.getElementById('modalCounter');
  if (counter) counter.textContent = `${currentFlowerIndex + 1} / ${FLOWERS.length}`;

  const badge = document.getElementById('modalBadge');
  if (flower.li !== null && flower.li !== undefined) {
    const lt = VALENTINA[flower.li];
    badge.textContent = lt.letter;
    badge.style.color = lt.color;
    badge.style.setProperty('--badge-glow', lt.color);
    badge.style.display = 'inline-flex';
  } else {
    badge.style.display = 'none';
  }

  // Update nav buttons
  updateModalNav();

  overlay.classList.add('active');
}

function updateModalNav() {
  const prevBtn = document.getElementById('modalPrev');
  const nextBtn = document.getElementById('modalNext');
  if (prevBtn) {
    prevBtn.style.opacity = currentFlowerIndex > 0 ? '1' : '0.3';
    prevBtn.style.pointerEvents = currentFlowerIndex > 0 ? 'auto' : 'none';
  }
  if (nextBtn) {
    nextBtn.style.opacity = currentFlowerIndex < FLOWERS.length - 1 ? '1' : '0.3';
    nextBtn.style.pointerEvents = currentFlowerIndex < FLOWERS.length - 1 ? 'auto' : 'none';
  }
}

function navigateFlower(direction) {
  const newIndex = currentFlowerIndex + direction;
  if (newIndex < 0 || newIndex >= FLOWERS.length) return;

  // Subtle transition effect
  const modal = document.getElementById('modal');
  modal.style.opacity = '0';
  modal.style.transform = `scale(0.95) translateX(${direction * 20}px)`;

  setTimeout(() => {
    openModal(FLOWERS[newIndex]);
    modal.style.opacity = '1';
    modal.style.transform = 'scale(1) translateX(0)';
  }, 200);
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  currentFlowerIndex = -1;
}

function initModalEvents() {
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Navigation buttons
  const prevBtn = document.getElementById('modalPrev');
  const nextBtn = document.getElementById('modalNext');
  if (prevBtn) prevBtn.addEventListener('click', () => navigateFlower(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => navigateFlower(1));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft' && currentFlowerIndex >= 0) navigateFlower(-1);
    if (e.key === 'ArrowRight' && currentFlowerIndex >= 0) navigateFlower(1);
  });
}

// ===========================
// COMBINED ANIMATION LOOP
// ===========================
function initAnimationLoop(sf, ps, ss) {
  const pCanvas = document.getElementById('particlesCanvas');
  const pCtx = pCanvas ? pCanvas.getContext('2d') : null;
  const t0 = performance.now();

  function loop(ts) {
    const elapsed = ts - t0;

    // Star field background
    sf.update(elapsed);

    // Canvas particles
    if (ps) ps.update(elapsed);

    // Shooting stars — draw on particles canvas
    if (ss && pCtx) {
      ss.update(elapsed, pCtx, pCanvas.width, pCanvas.height);
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

// ===========================
// INIT
// ===========================
function init() {
  const sf = new StarField(document.getElementById('starsCanvas'));

  // Canvas-based particles (replaces CSS particles)
  const pCanvas = document.getElementById('particlesCanvas');
  let ps = null;
  if (pCanvas) {
    ps = new ParticleSystem(pCanvas);
  }

  // Shooting stars
  const ss = PERF.isLow ? null : new ShootingStars();

  // Remove old CSS particles container content (keep element for fallback)
  const oldParticles = document.getElementById('particles');
  if (oldParticles) oldParticles.style.display = 'none';

  initAnimationLoop(sf, ps, ss);

  buildLetterCards();
  initSpeedSlider();
  initInstructions();
  initMusic();
  initPassword();
  initModalEvents();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
