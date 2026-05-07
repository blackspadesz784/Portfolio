'use strict';

/**
 * 1. PROJECT DATA 
 * Sabhi 6 projects with Demo aur Source links
 */
const projectData = [
  {
    id: 1,
    title: 'Aayan Art Glass',
    category: 'E-commerce · Static',
    year: '2023',
    icon: 'bi-shop',
    tagline: 'Personal shop static website for business showcase.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    role: 'Frontend Developer',
    duration: '2 Weeks',
    type: 'Freelance',
    intro: 'Aayan Art Glass is a specialized static website designed to showcase artistic glass products, providing a digital presence for a personal business.',
    features: ['Responsive catalog display', 'Contact form integration', 'Image gallery for art pieces'],
    challenge: 'Creating a visually appealing layout that reflects the "artistic" nature of the products.',
    solution: 'Used CSS Grid and clean Bootstrap components to ensure the art remains the focal point.',
    demo: 'https://simran-singh.github.io/aayan-art', // APNA LINK DALEIN
    source: 'https://github.com/your-username/aayan-art' // APNA GITHUB LINK DALEIN
  },
  {
    id: 2,
    title: 'Cheating Detector',
    category: 'AI · Security',
    year: '2024',
    icon: 'bi-eye-fill',
    tagline: 'AI-based online proctoring system.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'React'],
    role: 'AI Developer',
    duration: '1 Month',
    type: 'Personal',
    intro: 'An online cheating detector that monitors user behavior through the webcam to ensure exam integrity.',
    features: ['Head movement tracking', 'Multiple person detection', 'Phone detection using AI'],
    challenge: 'Maintaining real-time performance without lag during live sessions.',
    solution: 'Optimized MediaPipe landmarks processing to run efficiently on the client-side.',
    demo: '#', 
    source: 'https://github.com/your-username/cheating-detector'
  },
  {
    id: 3,
    title: 'Placement Portal',
    category: 'Full Stack · MERN',
    year: '2024',
    icon: 'bi-briefcase-fill',
    tagline: 'Complete recruitment lifecycle management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    role: 'Full Stack Developer',
    duration: '2 Months',
    type: 'Real-world App',
    intro: 'A three-tier placement portal connecting Students, Recruiters, and Admins.',
    features: ['Student Resume upload & Job apply', 'Recruiter job posting', 'Admin dashboard'],
    challenge: 'Implementing a complex permission-based system for three different user roles.',
    solution: 'Used JWT based authentication and specialized middleware to verify Admin status.',
    demo: 'https://simran-singh.github.io/particles', 
    source: 'https://github.com/your-username/placement-portal'
  },
  {
    id: 4,
    title: 'Magical Particles',
    category: 'AI · Interaction',
    year: '2024',
    icon: 'bi-magic',
    tagline: 'Control particles using hand gestures.',
    tech: ['MediaPipe', 'Canvas API', 'JavaScript'],
    role: 'Creative Technologist',
    duration: '2 Weeks',
    type: 'Personal',
    intro: 'A creative coding project where virtual particles react to real-world hand gestures captured via camera.',
    features: ['Gesture-based particle attraction', 'Real-time hand tracking', 'Fluid animations'],
    challenge: 'Mapping hand coordinates to canvas space accurately.',
    solution: 'Applied coordinate normalization and smoothing algorithms for jitter-free movement.',
    demo: 'https://simran-singh.github.io/particles', 
    source: 'https://github.com/your-username/magical-particles'
  },
  {
    id: 5,
    title: 'Digital Haat',
    category: 'Social · MERN',
    year: '2024',
    icon: 'bi-basket-fill',
    tagline: 'Platform for street vendors to go digital.',
    tech: ['React', 'MongoDB', 'Node.js', 'Cloudinary'],
    role: 'Lead Developer',
    duration: '1.5 Months',
    type: 'Social Impact',
    intro: 'Digital Haat empowers street vendors by allowing them to list their products and reach local customers online.',
    features: ['Easy product listing for vendors', 'Location-based discovery', 'Simple UI for non-tech users'],
    challenge: 'Making the interface simple enough for users with limited technical knowledge.',
    solution: 'Designed a minimal dashboard with icon-heavy navigation and local language support.',
    demo: 'https://simran-singh.github.io/particles',
    source: 'https://github.com/your-username/digital-haat'
  },
  {
    id: 6,
    title: 'CollabCart',
    category: 'Student Utility',
    year: '2024',
    icon: 'bi-cart-check-fill',
    tagline: 'Second-hand marketplace & Hackathon team builder.',
    tech: ['React', 'Firebase', 'Express', 'Node'],
    role: 'Full Stack Developer',
    duration: '2 Months',
    type: 'Real-world App',
    intro: 'A dual-purpose platform for students to buy/sell second-hand items and form teams for hackathons.',
    features: ['Peer-to-peer marketplace', 'Team formation for hackathons', 'Detailed project descriptions'],
    challenge: 'Combining two distinct functionalities (Marketplace and Team Builder) into one cohesive UI.',
    solution: 'Created separate modular tabs for "Store" and "Collaboration".',
    demo: 'https://simran-singh.github.io/particles',
    source: 'https://github.com/your-username/collabcart'
  }
];

/**
 * 2. LOADER & INITIALIZATION
 */
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                document.body.classList.add('js-loaded');
                initCounters();
            }, 600);
        }, 1000);
    }
});

/**
 * 3. CUSTOM CURSOR
 */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

if (cursor && follower) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        follower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    });
}

/**
 * 4. COUNTER ANIMATION
 */
function initCounters() {
    const counters = document.querySelectorAll('.stat-num');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = 2000 / target;
        const updateCount = () => {
            if (count < target) {
                count++;
                counter.innerText = count;
                setTimeout(updateCount, speed);
            } else { counter.innerText = target; }
        };
        updateCount();
    });
}

/**
 * 5. INDEX PAGE: RENDER PROJECTS
 */
(function initIndex() {
    const grid = document.getElementById('projectGrid');
    if (!grid) return;

    grid.innerHTML = projectData.map(p => `
        <div class="col-md-6 col-lg-4 project-item">
            <div class="project-card glass-card" onclick="window.location.href='project.html?id=${p.id}'">
                <div class="card-header-area">
                    <span class="proj-num">#0${p.id}</span>
                    <div class="proj-tags"><span>${p.year}</span></div>
                </div>
                <div class="proj-icon"><i class="bi ${p.icon}"></i></div>
                <h3 class="proj-title">${p.title}</h3>
                <p class="proj-desc">${p.tagline}</p>
                <div class="proj-footer">
                    <div class="tech-stack">${p.tech.slice(0, 3).map(t => `<span>${t}</span>`).join('')}</div>
                    <div class="proj-arrow"><i class="bi bi-arrow-up-right"></i></div>
                </div>
            </div>
        </div>
    `).join('');
})();

/**
 * 6. PROJECT DETAIL PAGE
 */
(function initProjectPage() {
    const params = new URLSearchParams(window.location.search);
    const projectId = parseInt(params.get('id'), 10) || 1;
    const project = projectData.find(p => p.id === projectId);

    if (project && document.getElementById('projTitle')) {
        document.getElementById('projTitle').textContent = project.title;
        document.getElementById('projCategory').textContent = project.category;
        document.getElementById('projYear').textContent = project.year;
        document.getElementById('projTagline').textContent = project.tagline;
        document.getElementById('projIntro').textContent = project.intro;
        document.getElementById('projChallenge').textContent = project.challenge;
        document.getElementById('projSolution').textContent = project.solution;
        
        // Meta
        document.getElementById('metaRole').textContent = project.role;
        document.getElementById('metaDuration').textContent = project.duration;
        document.getElementById('metaType').textContent = project.type;
        document.getElementById('metaYear').textContent = project.year;

        // Tech Stack & Features
        document.getElementById('projTechStack').innerHTML = project.tech.map(t => `<span>${t}</span>`).join('');
        document.getElementById('projFeatures').innerHTML = project.features.map(f => `<li>${f}</li>`).join('');

        // Action Buttons (GitHub & Demo)
        const demoBtn = document.getElementById('liveDemoBtn');
        const sourceBtn = document.getElementById('sourceBtn');
        
        if (project.demo === '#') {
            demoBtn.style.display = 'none';
        } else {
            demoBtn.href = project.demo;
            demoBtn.style.display = 'inline-block';
        }

        if (project.source === '#') {
            sourceBtn.style.display = 'none';
        } else {
            sourceBtn.href = project.source;
            sourceBtn.style.display = 'inline-block';
        }

        // Prev/Next Logic
        const prevBtn = document.getElementById('prevProjBtn');
        const nextBtn = document.getElementById('nextProjBtn');

        if (projectId > 1) {
            prevBtn.onclick = () => window.location.href = `project.html?id=${projectId - 1}`;
        } else {
            prevBtn.style.opacity = '0.3';
            prevBtn.style.cursor = 'not-allowed';
        }

        if (projectId < projectData.length) {
            nextBtn.onclick = () => window.location.href = `project.html?id=${projectId + 1}`;
        } else {
            nextBtn.style.opacity = '0.3';
            nextBtn.style.cursor = 'not-allowed';
        }
    }
})();

/**
 * 7. NAVBAR SCROLL
 */
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (nav) {
        window.scrollY > 50 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
    }
});