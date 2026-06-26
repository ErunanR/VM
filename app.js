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
// STARS CANVAS (Background)
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
// TRUE 3D GALAXY SYSTEM
// ===========================
let galaxyRotX = -15;       // Camera tilt (X-axis)
let galaxyRotY = 0;         // Camera rotation (Y-axis)
let galaxyOrbitAngle = 0;   // The continuous orbit rotation
let galaxyScale = 1;        // Zoom level
let orbitSpeedMultiplier = 0.5; // Controlled by slider

let autoRotate = true;
let dragging = false;
let isClickPrevented = false; // Prevents clicks after dragging
let dragStartX = 0;
let dragStartY = 0;
let lastPointer = { x: 0, y: 0 };
let velocity = { x: 0, y: 0 };
let flowerNodes = [];       
let initialPinchDistance = null;
let initialScale = 1;

function showGalaxy() {
  const app = document.getElementById('galaxyApp');
  app.classList.add('visible');
  setTimeout(() => {
    const hint = document.getElementById('galaxyHint');
    if (hint) hint.classList.add('hidden');
  }, 5000);
}

function getRadiusMultiplier() {
  if (innerWidth <= 420) return 0.55;
  if (innerWidth <= 768) return 0.75;
  return 1;
}

function buildGalaxy() {
  const scene = document.getElementById('galaxyScene');
  flowerNodes = [];
  const rm = getRadiusMultiplier();

  // 3 concentric orbits
  const orbits = [
    { radius: 150 * rm, count: 4, startIdx: 0, speed: 1.2 },
    { radius: 240 * rm, count: 5, startIdx: 4, speed: 0.8 },
    { radius: 330 * rm, count: 5, startIdx: 9, speed: 0.5 }
  ];

  orbits.forEach((orbit) => {
    for (let i = 0; i < orbit.count; i++) {
      const fIdx = orbit.startIdx + i;
      if (fIdx >= FLOWERS.length) break;
      const flower = FLOWERS[fIdx];

      // Base angle in degrees for evenly spacing them on the ring
      const baseAngle = (i / orbit.count) * 360;

      const node = document.createElement('div');
      node.classList.add('flower-node');
      node.style.setProperty('--fc', flower.color);

      // We separate the 'inner' element to apply inverse rotation (billboard effect)
      let letterHTML = '';
      if (flower.li !== null && flower.li !== undefined) {
        const lt = VALENTINA[flower.li];
        letterHTML = `<span class="flower-node-letter" style="--fc:${lt.color}">${lt.letter}</span>`;
      }

      node.innerHTML = `
        <div class="flower-node-inner">
          <img class="flower-node-img" src="${flower.image}" alt="${flower.name}" loading="lazy">
          <div class="flower-node-glow"></div>
          <span class="flower-node-name">${flower.name}</span>
          ${letterHTML}
        </div>
      `;

      // Reliable click event (checks global drag flag)
      node.addEventListener('click', (e) => {
        if (isClickPrevented) return;
        e.stopPropagation();
        openModal(flower);
      });

      scene.appendChild(node);
      
      const innerEl = node.querySelector('.flower-node-inner');
      
      flowerNodes.push({
        el: node,
        innerEl: innerEl,
        baseAngle: baseAngle,
        radius: orbit.radius,
        speed: orbit.speed
      });
    }
  });
}

function update3DPositions() {
  const scene = document.getElementById('galaxyScene');

  // 1. Apply camera rotation and zoom to the entire scene
  scene.style.transform = `scale(${galaxyScale}) rotateX(${galaxyRotX}deg) rotateY(${galaxyRotY}deg)`;

  // 2. Calculate orbit positions and apply billboard effect to each flower
  flowerNodes.forEach(fn => {
    // Current angle in the orbit
    const currentAngle = fn.baseAngle + (galaxyOrbitAngle * fn.speed);
    const rad = (currentAngle * Math.PI) / 180;
    
    // Position in 3D space (orbiting on the X-Z plane, Y=0)
    const x = Math.cos(rad) * fn.radius;
    const z = Math.sin(rad) * fn.radius;
    
    fn.el.style.transform = `translate3d(${x}px, 0px, ${z}px)`;

    // BILLBOARD EFFECT: Reverse the scene's rotation so the image always faces the camera
    // We reverse Y first, then X (opposite order of the scene's rotation)
    fn.innerEl.style.transform = `rotateY(${-galaxyRotY}deg) rotateX(${-galaxyRotX}deg)`;
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
    isClickPrevented = false; // Reset on down
    autoRotate = false;
    velocity = { x: 0, y: 0 };
    
    const point = e.touches ? e.touches[0] : e;
    lastPointer = { x: point.clientX, y: point.clientY };
    dragStartX = point.clientX;
    dragStartY = point.clientY;
    viewport.style.cursor = 'grabbing';
  }

  function onPointerMove(e) {
    if (e.touches && e.touches.length === 2 && initialPinchDistance) {
      // Multi-touch Pinch to zoom
      e.preventDefault();
      const currentDistance = getDistance(e.touches);
      const scaleChange = currentDistance / initialPinchDistance;
      galaxyScale = initialScale * scaleChange;
      galaxyScale = Math.max(0.3, Math.min(3.0, galaxyScale));
      return;
    }

    if (!dragging) return;
    const point = e.touches ? e.touches[0] : e;
    const dx = point.clientX - lastPointer.x;
    const dy = point.clientY - lastPointer.y;
    
    // If moved more than 5px, it's definitely a drag, not a click
    if (Math.abs(point.clientX - dragStartX) > 5 || Math.abs(point.clientY - dragStartY) > 5) {
      isClickPrevented = true;
    }

    // Adjust sensitivity based on scale (zoom)
    const sensX = 0.5 / galaxyScale;
    const sensY = 0.5 / galaxyScale;

    galaxyRotY += dx * sensX;
    galaxyRotX -= dy * sensY; // Minus because dragging down should rotate scene up
    
    // Limit X rotation so you don't go completely upside down, but give freedom
    galaxyRotX = Math.max(-85, Math.min(85, galaxyRotX));

    velocity = { x: dx * sensX, y: -dy * sensY };
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
      
      // Clear the click prevention flag after a tiny delay so the click event has time to fire and be blocked
      setTimeout(() => {
        isClickPrevented = false;
      }, 50);
    }
  }

  function applyInertia() {
    if (dragging) return;
    if (Math.abs(velocity.x) < 0.05 && Math.abs(velocity.y) < 0.05) {
      setTimeout(() => { autoRotate = true; }, 1000);
      return;
    }
    galaxyRotY += velocity.x;
    galaxyRotX += velocity.y;
    galaxyRotX = Math.max(-85, Math.min(85, galaxyRotX));
    
    velocity.x *= 0.93;
    velocity.y *= 0.93;
    requestAnimationFrame(applyInertia);
  }

  // Use Pointer Events for seamless mouse/touch support without preventing scroll randomly
  viewport.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove, { passive: false });
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerUp);

  // Fallback for touch pinch-zoom strictly (pointer events handle one finger drag perfectly)
  viewport.addEventListener('touchstart', (e) => {
    if(e.touches.length === 2) onPointerDown(e);
  }, { passive: true });
  window.addEventListener('touchmove', (e) => {
    if(e.touches.length === 2) onPointerMove(e);
  }, { passive: false });

  // Mouse wheel zoom
  viewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomSpeed = 0.0015;
    galaxyScale -= e.deltaY * zoomSpeed;
    galaxyScale = Math.max(0.3, Math.min(3.0, galaxyScale));
  }, { passive: false });
}

function initSpeedSlider() {
  const slider = document.getElementById('speedSlider');
  if (!slider) return;
  slider.addEventListener('input', (e) => {
    // Map 0-100 to 0 - 1.5 speed multiplier
    const val = parseInt(e.target.value);
    orbitSpeedMultiplier = val / 100;
  });
}

function startGalaxyLoop() {
  function tick() {
    if (autoRotate && !dragging) {
      // Automatically slowly spin the camera for a cinematic feel
      galaxyRotY += 0.05;
    }
    // Always advance the orbit of the planets based on the slider speed
    galaxyOrbitAngle += orbitSpeedMultiplier;
    
    update3DPositions();
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
  initSpeedSlider();
  initGalaxyInteraction();
  startGalaxyLoop();
  initPassword();
  initModalEvents();
});
