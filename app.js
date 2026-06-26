// ===========================
// VALENTINA — LETTER MAPPING
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
  { id:1, name:"Rosa Roja Nocturna", scientific:"Rosa × hybrid", image:"public/WhatsApp Image 2026-06-08 at 11.15.01 PM.jpeg", description:"Rosa roja capturada bajo la luz de la noche, con gotas de rocío sobre sus pétalos aterciopelados. Es símbolo universal del amor apasionado.", tags:["Amor","Nocturna","Rocío"], color:"#ff2d55", li:0 },
  { id:2, name:"Margarita Africana", scientific:"Osteospermum ecklonis", image:"public/WhatsApp Image 2026-06-11 at 6.28.13 AM.jpeg", description:"La margarita africana deslumbra con sus pétalos púrpura-magenta y un centro oscuro hipnótico. Originaria de Sudáfrica.", tags:["Africana","Púrpura","Resistente"], color:"#c430cc", li:1 },
  { id:3, name:"Rosa Rosa del Amanecer", scientific:"Rosa × centifolia", image:"public/WhatsApp Image 2026-06-12 at 6.47.53 AM.jpeg", description:"Una rosa rosa con gotas de lluvia que parecen diamantes sobre sus pétalos. Famosa por su fragancia dulce y delicada.", tags:["Elegante","Fragante","Lluvia"], color:"#ff6b8a", li:2 },
  { id:4, name:"Margarita Cósmica", scientific:"Tanacetum parthenium", image:"public/WhatsApp Image 2026-06-13 at 6.21.02 AM.jpeg", description:"Margaritas blancas puras con centro dorado, agrupadas como pequeñas constelaciones. Cada 'flor' son cientos de flores agrupadas.", tags:["Pureza","Medicinal","Constelación"], color:"#ffd700", li:3 },
  { id:5, name:"Girasol y Gatito Estelar", scientific:"Helianthus annuus", image:"public/WhatsApp Image 2026-06-14 at 6.52.55 AM.jpeg", description:"Un girasol acompañado por un tierno gatito. El girasol sigue al sol mediante heliotropismo. Espirales de Fibonacci.", tags:["Solar","Gatito","Fibonacci"], color:"#ffb300", li:4 },
  { id:6, name:"Hibisco del Atardecer", scientific:"Hibiscus rosa-sinensis", image:"public/WhatsApp Image 2026-06-15 at 6.25.45 AM.jpeg", description:"Un hibisco rosa-salmón con estambres dorados contra un cielo azul tropical. Cada flor dura solo un día.", tags:["Tropical","Efímera","Atardecer"], color:"#ff8a80", li:5 },
  { id:7, name:"Margarita Africana Estelar", scientific:"Osteospermum ecklonis", image:"public/WhatsApp Image 2026-06-18 at 11.20.17 AM.jpeg", description:"Primer plano espectacular de la margarita africana magenta. Pétalos del rosa intenso al púrpura profundo.", tags:["Magenta","Macro","Sudáfrica"], color:"#e91e8c", li:6 },
  { id:8, name:"Thunbergia Solar", scientific:"Thunbergia alata", image:"public/WhatsApp Image 2026-06-19 at 10.10.32 AM.jpeg", description:"La Susana de ojos negros brilla con pétalos naranja vibrante y un centro oscuro como un eclipse.", tags:["Naranja","Trepadora","Alegría"], color:"#ff8c00", li:7 },
  { id:9, name:"Tibouchina Galáctica", scientific:"Tibouchina urvilleana", image:"public/WhatsApp Image 2026-06-20 at 5.33.59 PM.jpeg", description:"La flor de la princesa con pétalos violeta intenso y sépalos rojizos aterciopelados. Originaria de Brasil.", tags:["Violeta","Brasil","Terciopelo"], color:"#8a2be2", li:8 },
  { id:10, name:"Lantana Arcoíris", scientific:"Lantana camara", image:"public/WhatsApp Image 2026-06-21 at 8.34.50 AM.jpeg", description:"La lantana despliega un arcoíris: amarillo, naranja, rosa y rojo en la misma inflorescencia. Cambian de color al madurar.", tags:["Multicolor","Mariposas","Cambiante"], color:"#ff6347", li:null },
  { id:11, name:"Dalia Supernova", scientific:"Dahlia × hortensis", image:"public/WhatsApp Image 2026-06-23 at 6.26.32 AM.jpeg", description:"La dalia muestra pétalos magenta en espiral perfecta. Flor nacional de México, cultivada por los aztecas.", tags:["México","Espiral","Supernova"], color:"#dc143c", li:null },
  { id:12, name:"Azalea Lunar", scientific:"Rhododendron indicum", image:"public/WhatsApp Image 2026-06-23 at 8.29.32 PM.jpeg", description:"La azalea violeta-lila ilumina cualquier jardín. Símbolo de feminidad y templanza en Asia.", tags:["Lila","Delicada","Asia"], color:"#ba55d3", li:null },
  { id:13, name:"Geranio Nebulosa", scientific:"Pelargonium × hortorum", image:"public/WhatsApp Image 2026-06-24 at 6.44.54 AM.jpeg", description:"Geranios rosa intenso con gotas de rocío. Son las flores más populares de los balcones del mundo.", tags:["Balcones","Fragante","Rosa"], color:"#ff1493", li:null },
  { id:14, name:"Zinnia Cósmica", scientific:"Zinnia elegans", image:"public/WhatsApp Image 2026-06-25 at 7.27.50 AM.jpeg", description:"La zinnia magenta fue la primera flor cultivada en el espacio (2016, Estación Espacial Internacional).", tags:["Espacial","Amistad","NASA"], color:"#ff0066", li:null }
];

// ===========================
// STARS CANVAS
// ===========================
class StarField {
  constructor(c) {
    this.c = c; this.x = c.getContext('2d');
    this.stars = []; this.shooting = [];
    this.resize(); this.init();
    window.addEventListener('resize', () => { this.resize(); this.init(); });
  }
  resize() { this.c.width = innerWidth; this.c.height = innerHeight; }
  init() {
    this.stars = [];
    const n = Math.min(400, Math.floor((innerWidth * innerHeight) / 3000));
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
      if (s.s > 1.3) {
        this.x.beginPath(); this.x.arc(s.x,s.y,s.s*3,0,Math.PI*2);
        this.x.fillStyle = `rgba(${s.cl},${o*0.08})`; this.x.fill();
      }
    }
    if (Math.random() > 0.993) this.shooting.push({
      x:Math.random()*this.c.width, y:Math.random()*this.c.height*0.5,
      l:Math.random()*80+40, sp:Math.random()*8+6,
      a:Math.PI/4+(Math.random()-0.5)*0.3, o:1, life:0
    });
    for (let i=this.shooting.length-1;i>=0;i--) {
      const ss=this.shooting[i];
      ss.x+=Math.cos(ss.a)*ss.sp; ss.y+=Math.sin(ss.a)*ss.sp;
      ss.life++; ss.o=Math.max(0,1-ss.life/40);
      if(ss.o<=0){this.shooting.splice(i,1);continue;}
      const tx=ss.x-Math.cos(ss.a)*ss.l, ty=ss.y-Math.sin(ss.a)*ss.l;
      const g=this.x.createLinearGradient(tx,ty,ss.x,ss.y);
      g.addColorStop(0,`rgba(255,255,255,0)`);
      g.addColorStop(1,`rgba(255,255,255,${ss.o})`);
      this.x.beginPath(); this.x.moveTo(tx,ty); this.x.lineTo(ss.x,ss.y);
      this.x.strokeStyle=g; this.x.lineWidth=1.5; this.x.stroke();
      this.x.beginPath(); this.x.arc(ss.x,ss.y,2,0,Math.PI*2);
      this.x.fillStyle=`rgba(255,255,255,${ss.o})`; this.x.fill();
    }
  }
}

// ===========================
// PARTICLES
// ===========================
function createParticles() {
  const ct = document.getElementById('particles');
  const cols = ['rgba(255,45,149,0.35)','rgba(155,48,255,0.25)','rgba(77,124,255,0.25)','rgba(0,229,255,0.25)','rgba(255,215,0,0.3)','rgba(255,110,180,0.3)'];
  for (let i=0;i<25;i++) {
    const p=document.createElement('div'); p.classList.add('particle');
    const sz=Math.random()*4+1, cl=cols[Math.floor(Math.random()*cols.length)], dur=Math.random()*20+15;
    p.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;background:${cl};box-shadow:0 0 ${sz*3}px ${cl};animation-duration:${dur}s;animation-delay:-${Math.random()*dur}s;`;
    ct.appendChild(p);
  }
}

// ===========================
// PASSWORD SCREEN
// ===========================
const CORRECT_PASSWORD = "2026*";

function initPassword() {
  const screen = document.getElementById('passwordScreen');
  const input = document.getElementById('passwordInput');
  const btn = document.getElementById('passwordBtn');
  const error = document.getElementById('passwordError');

  function tryPassword() {
    const val = input.value;
    if (val === CORRECT_PASSWORD) {
      error.classList.remove('visible');
      screen.classList.add('hidden');
      setTimeout(() => startWelcome(), 600);
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

// ===========================
// WELCOME ANIMATION
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

function startWelcome() {
  const screen = document.getElementById('welcomeScreen');
  const text = document.getElementById('welcomeText');
  const cards = document.querySelectorAll('.letter-card');

  screen.classList.add('active');
  setTimeout(() => text.classList.add('visible'), 300);

  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add('revealed'), 1200 + i * 220);
  });

  const totalTime = 1200 + (cards.length - 1) * 220 + 700 + 2500;
  setTimeout(() => {
    screen.classList.add('fade-out');
    showGalaxy();
  }, totalTime);
}

// ===========================
// GALAXY — 2D Orbital System
// ===========================
// Flowers orbit in 2D circles; we apply a perspective tilt via CSS on the container.
// Each flower node counter-rotates so the photo always faces the viewer.

let galaxyAngle = 0;       // current Y-rotation (degrees)
let galaxyTilt = -30;       // tilt (X-rotation)
let autoRotate = true;
let dragging = false;
let lastPointer = { x: 0, y: 0 };
let velocity = { x: 0, y: 0 };
let flowerNodes = [];       // { el, angle, orbit, radius }

function showGalaxy() {
  const app = document.getElementById('galaxyApp');
  app.classList.add('visible');
  setTimeout(() => {
    const hint = document.getElementById('galaxyHint');
    if (hint) hint.classList.add('hidden');
  }, 5000);
}

function getRadiusMultiplier() {
  if (innerWidth <= 420) return 0.52;
  if (innerWidth <= 768) return 0.7;
  return 1;
}

function buildGalaxy() {
  const scene = document.getElementById('galaxyScene');
  flowerNodes = [];

  const rm = getRadiusMultiplier();

  // 3 orbits
  const orbits = [
    { radius: 130 * rm, count: 4, startIdx: 0, speed: 1 },
    { radius: 200 * rm, count: 5, startIdx: 4, speed: 0.7 },
    { radius: 265 * rm, count: 5, startIdx: 9, speed: 0.5 }
  ];

  orbits.forEach((orbit, oi) => {
    for (let i = 0; i < orbit.count; i++) {
      const fIdx = orbit.startIdx + i;
      if (fIdx >= FLOWERS.length) break;
      const flower = FLOWERS[fIdx];

      // Base angle evenly distributed
      const baseAngle = (i / orbit.count) * 360;

      const node = document.createElement('div');
      node.classList.add('flower-node');
      node.style.setProperty('--fc', flower.color);

      // Letter label
      let letterHTML = '';
      if (flower.li !== null && flower.li !== undefined) {
        const lt = VALENTINA[flower.li];
        letterHTML = `<span class="flower-node-letter" style="--fc:${lt.color}">${lt.letter}</span>`;
      }

      node.innerHTML = `
        <img class="flower-node-img" src="${flower.image}" alt="${flower.name}" loading="lazy">
        <div class="flower-node-glow"></div>
        <span class="flower-node-name">${flower.name}</span>
        ${letterHTML}
      `;

      // custom click logic to prevent drag collisions
      let isDragging = false;
      let startX = 0; let startY = 0;

      node.addEventListener('pointerdown', (e) => {
        isDragging = false;
        startX = e.clientX;
        startY = e.clientY;
      });
      
      node.addEventListener('pointermove', (e) => {
        if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
          isDragging = true;
        }
      });
      
      node.addEventListener('pointerup', (e) => {
        if (!isDragging) {
          e.stopPropagation();
          openModal(flower);
        }
      });

      scene.appendChild(node);

      flowerNodes.push({
        el: node,
        baseAngle: baseAngle,
        radius: orbit.radius,
        speed: orbit.speed,
        orbitIndex: oi
      });
    }
  });
}

let galaxyScale = 1;
let initialPinchDistance = null;
let initialScale = 1;

function updateFlowerPositions() {
  const scene = document.getElementById('galaxyScene');
  const tiltRad = (galaxyTilt * Math.PI) / 180;

  // Scale the entire scene for zoom
  scene.style.transform = `scale(${galaxyScale})`;

  flowerNodes.forEach(fn => {
    const totalAngle = fn.baseAngle + galaxyAngle * fn.speed;
    const rad = (totalAngle * Math.PI) / 180;

    // 2D circle, tilted in perspective
    const x = Math.cos(rad) * fn.radius;
    const y = Math.sin(rad) * fn.radius * Math.sin(tiltRad + Math.PI / 2);
    const z = Math.sin(rad) * fn.radius * Math.cos(tiltRad + Math.PI / 2);

    // Scale based on z-depth for 3D feel
    const depthScale = 0.6 + 0.4 * ((z + fn.radius) / (fn.radius * 2));
    const opacity = 0.5 + 0.5 * ((z + fn.radius) / (fn.radius * 2));

    fn.el.style.transform = `translate(${x}px, ${y}px) scale(${depthScale})`;
    fn.el.style.zIndex = Math.round(z + 500);
    fn.el.style.opacity = opacity;
  });
}

function initGalaxyInteraction() {
  const viewport = document.getElementById('galaxyViewport');

  function getDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function onPointerDown(e) {
    if (e.touches && e.touches.length === 2) {
      initialPinchDistance = getDistance(e.touches);
      initialScale = galaxyScale;
      return;
    }
    
    dragging = true;
    autoRotate = false;
    velocity = { x: 0, y: 0 };
    const point = e.touches ? e.touches[0] : e;
    lastPointer = { x: point.clientX, y: point.clientY };
    viewport.style.cursor = 'grabbing';
  }

  function onPointerMove(e) {
    if (e.touches && e.touches.length === 2 && initialPinchDistance) {
      // Pinch to zoom
      e.preventDefault();
      const currentDistance = getDistance(e.touches);
      const scaleChange = currentDistance / initialPinchDistance;
      galaxyScale = initialScale * scaleChange;
      galaxyScale = Math.max(0.4, Math.min(2.5, galaxyScale));
      return;
    }

    if (!dragging) return;
    const point = e.touches ? e.touches[0] : e;
    const dx = point.clientX - lastPointer.x;
    const dy = point.clientY - lastPointer.y;

    galaxyAngle += dx * (0.5 / galaxyScale);
    galaxyTilt += dy * (0.3 / galaxyScale);
    galaxyTilt = Math.max(-80, Math.min(-5, galaxyTilt));

    velocity = { x: dx * (0.5 / galaxyScale), y: dy * (0.3 / galaxyScale) };
    lastPointer = { x: point.clientX, y: point.clientY };
  }

  function onPointerUp(e) {
    if (e.touches && e.touches.length < 2) {
      initialPinchDistance = null;
    }
    
    if (dragging) {
      dragging = false;
      viewport.style.cursor = 'grab';
      applyInertia();
    }
  }

  function applyInertia() {
    if (dragging) return;
    if (Math.abs(velocity.x) < 0.05 && Math.abs(velocity.y) < 0.05) {
      setTimeout(() => { autoRotate = true; }, 2000);
      return;
    }
    galaxyAngle += velocity.x;
    galaxyTilt += velocity.y;
    galaxyTilt = Math.max(-80, Math.min(-5, galaxyTilt));
    velocity.x *= 0.94;
    velocity.y *= 0.94;
    requestAnimationFrame(applyInertia);
  }

  viewport.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);
  viewport.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: false });
  window.addEventListener('touchend', onPointerUp);

  // Mouse wheel zoom
  viewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomSpeed = 0.0015;
    galaxyScale -= e.deltaY * zoomSpeed;
    galaxyScale = Math.max(0.4, Math.min(2.5, galaxyScale));
  }, { passive: false });
}

function startGalaxyLoop() {
  function tick() {
    if (autoRotate && !dragging) {
      galaxyAngle += 0.2;
    }
    updateFlowerPositions();
    requestAnimationFrame(tick);
  }
  tick();
}

// ===========================
// MODAL
// ===========================
function openModal(flower) {
  const overlay = document.getElementById('modalOverlay');
  document.getElementById('modalImage').src = flower.image;
  document.getElementById('modalImage').alt = flower.name;
  document.getElementById('modalTitle').textContent = flower.name;
  document.getElementById('modalScientific').textContent = flower.scientific;
  document.getElementById('modalDescription').textContent = flower.description;
  document.getElementById('modalTags').innerHTML = flower.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

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

  overlay.classList.add('active');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
}

function initModalEvents() {
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ===========================
// ANIMATION LOOP (stars)
// ===========================
function initAnimationLoop(sf) {
  const t0 = performance.now();
  (function loop(ts) { sf.update(ts - t0); requestAnimationFrame(loop); })(t0);
}

// ===========================
// INIT
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  const sf = new StarField(document.getElementById('starsCanvas'));
  initAnimationLoop(sf);
  createParticles();

  buildLetterCards();
  buildGalaxy();
  initGalaxyInteraction();
  startGalaxyLoop();
  initPassword();
  initModalEvents();
});
