'use strict';

/* =============================================
   PROJECT DATA
   ============================================= */
const projectData = [
  {
    id: 1,
    title: 'Aayan Art Glass',
    category: 'E-commerce · Static',
    year: '2025',
    icon: 'bi-shop',
    tagline: 'Personal shop static website for business showcase.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    role: 'Frontend Developer',
    duration: '2 Weeks',
    type: 'Freelance',
    intro: 'Aayan Art Glass is a specialized static website designed to showcase artistic glass products, providing a digital presence for a personal business. The goal was to create a visually appealing catalog that highlights the artistry of each product.',
    features: [
      'Responsive catalog display for all devices',
      'Contact form integration for customer inquiries',
      'Image gallery for art pieces with lightbox effect',
      'SEO-optimized structure for local discovery'
    ],
    challenge: 'Creating a visually appealing layout that reflects the artistic nature of the products while keeping performance high on low-end devices.',
    solution: 'Used CSS Grid and clean Bootstrap components with lazy-loading images to ensure the art remains the focal point without sacrificing performance.',
    demo: 'https://blackspadesz784.github.io/aayan-art-glass/',
    source: 'https://github.com/blackspadesz784/aayan-art-glass',
    color: 'linear-gradient(135deg, #06B6D4, #0EA5E9)'
  },
  {
    id: 2,
    title: 'Cheating Detector',
    category: 'AI · Security',
    year: '2026',
    icon: 'bi-eye-fill',
    tagline: 'AI-based online proctoring system for exam integrity.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'React'],
    role: 'AI Developer',
    duration: '1 Month',
    type: 'Personal',
    intro: 'An intelligent online cheating detector that monitors user behavior through the webcam to ensure exam integrity. Uses computer vision and machine learning to detect suspicious activities in real-time.',
    features: [
      'Head movement tracking with MediaPipe Face Mesh',
      'Multiple person detection in camera frame',
      'Phone detection using object recognition AI',
      'Real-time alerts and violation reporting'
    ],
    challenge: 'Maintaining real-time performance without lag during live sessions while running complex ML inference.',
    solution: 'Optimized MediaPipe landmarks processing to run efficiently on the client-side with frame skipping and threshold smoothing algorithms.',
    demo: '#',
    source: 'https://github.com/blackspadesz784/Online-Cheat-Dector',
    color: 'linear-gradient(135deg, #8B5CF6, #06B6D4)'
  },
  {
    id: 3,
    title: 'Placement Portal',
    category: 'Full Stack · MERN',
    year: '2026',
    icon: 'bi-briefcase-fill',
    tagline: 'Complete recruitment lifecycle management platform.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    role: 'Full Stack Developer',
    duration: '2 Months',
    type: 'Real-world App',
    intro: 'A three-tier placement portal connecting Students, Recruiters, and Admins on a single platform. Students can browse and apply for jobs, recruiters post openings and manage applications, and admins oversee the entire process.',
    features: [
      'Student resume upload and job application system',
      'Recruiter dashboard for posting and managing jobs',
      'Admin panel with analytics and user management',
      'JWT-based role authentication for three user types',
      'Real-time application status tracking'
    ],
    challenge: 'Implementing a complex permission-based system for three different user roles without creating security vulnerabilities.',
    solution: 'Used JWT-based authentication with specialized middleware to verify user roles and restrict access at both the API and UI level.',
    demo: 'https://placement-portal-frontend-nelc.onrender.com',
    source: 'https://github.com/blackspadesz784/placement-portal',
    color: 'linear-gradient(135deg, #06B6D4, #38BDF8)'
  },
  {
    id: 4,
    title: 'Magical Particles',
    category: 'AI · Creative Coding',
    year: '2026',
    icon: 'bi-magic',
    tagline: 'Control particles using real-time hand gestures.',
    tech: ['MediaPipe', 'Canvas API', 'JavaScript'],
    role: 'Creative Technologist',
    duration: '2 Weeks',
    type: 'Personal',
    intro: 'A creative coding experiment where virtual particles react to real-world hand gestures captured via camera. The particles simulate fluid physics and respond dynamically to finger positions and hand movements.',
    features: [
      'Gesture-based particle attraction and repulsion',
      'Real-time hand tracking with 21-point landmark detection',
      'Fluid physics simulation with Canvas API',
      'Multi-finger interaction support',
      'Dynamic color shifting based on velocity'
    ],
    challenge: 'Mapping hand coordinates from camera space to canvas space accurately, and reducing jitter for a smooth experience.',
    solution: 'Applied coordinate normalization with a Kalman-inspired smoothing algorithm to eliminate jitter while maintaining real-time responsiveness.',
    demo: 'https://blackspadesz784.github.io/Megical-particles/',
    source: 'https://github.com/blackspadesz784/Megical-particles',
    color: 'linear-gradient(135deg, #F59E0B, #EF4444)'
  },
  {
    id: 5,
    title: 'Digital Haat',
    category: 'Social Impact · MERN',
    year: '2026',
    icon: 'bi-basket-fill',
    tagline: 'Empowering street vendors to go digital.',
    tech: ['React', 'MongoDB', 'Node.js', 'Cloudinary'],
    role: 'Lead Developer',
    duration: '1.5 Months',
    type: 'Social Impact',
    intro: 'Digital Haat empowers street vendors and small businesses by allowing them to list their products and reach local customers online. The platform bridges the gap between traditional street markets and the digital economy.',
    features: [
      'Easy product listing dashboard for vendors',
      'Location-based discovery for nearby customers',
      'Cloudinary-powered image uploads',
      'Simple UI designed for non-tech users',
      'WhatsApp-based inquiry system'
    ],
    challenge: 'Making the interface simple enough for users with limited technical knowledge while still providing powerful features for vendors.',
    solution: 'Designed a minimal dashboard with icon-heavy navigation, large touch targets, and local language support across the interface.',
    demo: 'https://blackspadesz784.github.io/Digital-Haat/',
    source: 'https://github.com/blackspadesz784/Digital-Haat',
    color: 'linear-gradient(135deg, #22C55E, #06B6D4)'
  },
  {
    id: 6,
    title: 'CollabCart',
    category: 'Student Utility',
    year: '2026',
    icon: 'bi-cart-check-fill',
    tagline: 'Second-hand marketplace and hackathon team builder.',
    tech: ['React', 'Firebase', 'Express', 'Node.js'],
    role: 'Full Stack Developer',
    duration: '2 Months',
    type: 'Real-world App',
    intro: 'A dual-purpose platform for college students: a peer-to-peer marketplace for second-hand items, and a team formation system for hackathons. CollabCart solves two major student pain points in one cohesive product.',
    features: [
      'Peer-to-peer marketplace for buying and selling items',
      'Team formation system for hackathons and projects',
      'Skill-based matching for team builders',
      'Firebase real-time chat between buyers and sellers',
      'Profile system with skills and project history'
    ],
    challenge: 'Combining two distinct functionalities (Marketplace and Team Builder) into one cohesive UI without making either feel like an afterthought.',
    solution: 'Created separate modular tabs for "Store" and "Collaboration" with shared authentication and a unified profile system that serves both contexts.',
    demo: 'https://collabcart-frontend.onrender.com',
    source: 'https://github.com/blackspadesz784/CollabCart',
    color: 'linear-gradient(135deg, #38BDF8, #818CF8)'
  }
];

/* =============================================
   LOADER
   ============================================= */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('hidden');
    setTimeout(() => {
      loader.style.display = 'none';
      document.body.classList.add('js-loaded');
      initCounters();
      startTyping();
      initSkillBars();
    }, 700);
  }, 1000);
});

/* =============================================
   CUSTOM CURSOR
   ============================================= */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

if (cursor && follower) {
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      follower.style.width = '60px';
      follower.style.height = '60px';
      follower.style.opacity = '0.5';
    });
    el.addEventListener('mouseleave', () => {
      follower.style.width = '36px';
      follower.style.height = '36px';
      follower.style.opacity = '1';
    });
  });
}

/* =============================================
   TYPING ANIMATION
   ============================================= */
const phrases = ['Full Stack Developer', 'MERN Stack Engineer', 'AI Enthusiast', 'Problem Solver'];
let phraseIdx = 0, charIdx = 0, isDeleting = false;

function startTyping() {
  const el = document.querySelector('.typing-text');
  if (!el) return;
  typeLoop(el);
}

function typeLoop(el) {
  const current = phrases[phraseIdx];
  if (isDeleting) {
    el.textContent = current.substring(0, charIdx--);
  } else {
    el.textContent = current.substring(0, charIdx++);
  }

  let delay = isDeleting ? 60 : 100;

  if (!isDeleting && charIdx === current.length + 1) {
    isDeleting = true;
    delay = 2200;
  } else if (isDeleting && charIdx < 0) {
    isDeleting = false;
    charIdx = 0;
    phraseIdx = (phraseIdx + 1) % phrases.length;
    delay = 400;
  }

  setTimeout(() => typeLoop(el), delay);
}

/* =============================================
   COUNTER ANIMATION
   ============================================= */
function initCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    let count = 0;
    const duration = 1800;
    const stepTime = Math.max(duration / target, 20);

    const tick = () => {
      count = Math.min(count + 1, target);
      el.textContent = count;
      if (count < target) setTimeout(tick, stepTime);
    };
    tick();
  });
}

/* =============================================
   SKILL BARS
   ============================================= */
function initSkillBars() {
  const bars = document.querySelectorAll('.progress-fill');
  bars.forEach(bar => {
    const pct = bar.dataset.pct || '0';
    setTimeout(() => { bar.style.width = pct + '%'; }, 200);
  });
}

/* =============================================
   SCROLL ANIMATIONS
   ============================================= */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (entry.target.classList.contains('progress-fill')) {
        const pct = entry.target.dataset.pct || '0';
        entry.target.style.width = pct + '%';
      }
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.querySelectorAll('.progress-fill').forEach(el => observer.observe(el));

/* =============================================
   NAVBAR ACTIVE SECTION & SCROLL
   ============================================= */
const navbar = document.getElementById('mainNav');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  if (navbar) {
    window.scrollY > 60 ? navbar.classList.add('scrolled') : navbar.classList.remove('scrolled');
  }

  const scrollBtn = document.getElementById('scrollTop');
  if (scrollBtn) {
    window.scrollY > 400 ? scrollBtn.classList.add('visible') : scrollBtn.classList.remove('visible');
  }

  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

/* =============================================
   HAMBURGER MENU
   ============================================= */
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');
const navMobileClose = document.getElementById('navMobileClose');

if (hamburger && navMobile) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMobile.classList.toggle('open');
    document.body.style.overflow = navMobile.classList.contains('open') ? 'hidden' : '';
  });

  if (navMobileClose) {
    navMobileClose.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMobile.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMobile.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* =============================================
   SCROLL TO TOP
   ============================================= */
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* =============================================
   RENDER PROJECTS
   ============================================= */
(function renderProjects() {
  const grid = document.getElementById('projectGrid');
  if (!grid) return;

  grid.innerHTML = projectData.map(p => `
    <div class="project-card glass-card reveal" onclick="window.location.href='project${p.id}.html'" tabindex="0" role="button" aria-label="View ${p.title}">
      <div class="card-top">
        <span class="proj-number">#0${p.id}</span>
        <span class="proj-year-badge">${p.year}</span>
      </div>
      <div class="proj-icon-wrap">
        <i class="bi ${p.icon}"></i>
      </div>
      <h3 class="proj-title">${p.title}</h3>
      <p class="proj-desc">${p.tagline}</p>
      <div class="proj-footer">
        <div class="proj-tech">
          ${p.tech.slice(0, 3).map(t => `<span>${t}</span>`).join('')}
        </div>
        <div class="proj-arrow">
          <i class="bi bi-arrow-up-right"></i>
        </div>
      </div>
    </div>
  `).join('');

  // Re-observe new elements
  grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Keyboard accessibility
  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        card.click();
      }
    });
  });
})();

/* =============================================
   CONTACT FORM
   ============================================= */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent! I\'ll get back to you soon.');
    contactForm.reset();
  });
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="bi bi-check-circle-fill"></i> ${msg}`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}
