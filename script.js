// ========================================
// RETRO TERMINAL PORTFOLIO
// System Configuration & Data
// ========================================

// ========================================
// i18n - Internationalization
// ========================================
const translations = {
    en: {
        tagline: "Low Level Developer & Systems Programmer",
        intro: "Primarily working on low level systems. Constantly learning about software architecture. Passionate about understanding everything from the ground up.",
        "nav.about": "about",
        "filters.label": "filter --category=",
        "filters.all": "all",
        "projects.title": "projects",
        "modal.motivation": "Motivation",
        "modal.status": "Status",
        "modal.technologies": "Technologies",
        "modal.github": "view_on_github",
        "status.completed": "COMPLETED",
        "status.in-progress": "WORK IN PROGRESS",
        "status.abandoned": "ABANDONED",
        "about.title": "About Me",
        "about.p1": "I'm a systems programmer passionate about understanding how things work at the lowest level. My focus is on performance-critical applications, virtual machines, and low-level architecture.",
        "about.p2": "I believe in building software from first principles, understanding every layer from hardware to application. Currently working with C, Rust, Zig, Odin and Assembly.",
        "about.p3": "When I'm not debugging segfaults or optimizing memory allocations, I'm probably reading documentation or exploring new system architectures.",
        "about.contact": "Contact",
        "footer.text": "\"© 2026 Dario Martin Camino\""
    },
    es: {
        tagline: "Desarrollador de Bajo Nivel y Sistemas",
        intro: "Trabajando principalmente en sistemas de bajo nivel. Aprendiendo constantemente sobre arquitectura de software. Apasionado por entender todo desde los fundamentos.",
        "nav.about": "sobre_mi",
        "filters.label": "filtrar --categoria=",
        "filters.all": "todos",
        "projects.title": "proyectos",
        "modal.motivation": "Motivación",
        "modal.status": "Estado",
        "modal.technologies": "Tecnologías",
        "modal.github": "ver_en_github",
        "status.completed": "TERMINADO",
        "status.in-progress": "EN PROGRESO",
        "status.abandoned": "ABANDONADO",
        "about.title": "Sobre Mí",
        "about.p1": "Soy un programador de sistemas apasionado por entender cómo funcionan las cosas al nivel más bajo. Mi enfoque está en aplicaciones críticas de rendimiento, máquinas virtuales y arquitectura de bajo nivel.",
        "about.p2": "Creo en construir software desde los primeros principios, entendiendo cada capa desde el hardware hasta la aplicación. Actualmente trabajo con C, Rust, Zig, Odin y Assembly.",
        "about.p3": "Cuando no estoy depurando segfaults u optimizando asignaciones de memoria, probablemente esté leyendo documentación o explorando nuevas arquitecturas de sistemas.",
        "about.contact": "Contacto",
        "footer.text": "\"© 2026 Dario Martin Camino\""
    }
};

const categories = {
    "systems": { en: "systems", es: "sistemas" },
    "vm": { en: "vm/interpreters", es: "vm/intérpretes" },
    // "compilers": { en: "compilers", es: "compiladores" },
    "web": { en: "web", es: "web" },
    "tools": { en: "tools", es: "herramientas" },
    "games": { en: "games", es: "juegos" },
    "embedded": { en: "embedded", es: "embebido" }
};

const projectsData = {
    1: {
        title: "Digital Gates Simulator",
        category: "tools",
        motivation: {
            en: "Thought to be a simple digital logic simulator to understand basic circuit design. Might scale it to implement gate templates. My first project with Raylib and it is a great learning experience about graphics programming and event handling.",
            es: "Un proyecto de aprendizaje para entender diseño de circuitos digitales. Implementé un simulador de compuertas lógicas con una interfaz gráfica simple usando Raylib. Fue mi primer proyecto con Raylib y fue una gran experiencia de aprendizaje sobre programación gráfica y manejo de eventos."
        },
        status: "completed",
        technologies: ["C"],
        githubUrl: "https://github.com/patybolo/digisim"
    },
    2: {
        title: "DASM Bytecode Virtual Machine",
        category: "vm",
        motivation: {
            en: "Developed a bytecode VM from scratch in FASM assembly to understand how primitive compilers work under the hood. Lacks support for some instructions that are needed to be considered complete, but got left out to re-implement in v2. Great learning experience about fetch-decode-execute cycle. This was my first project in assembly and it was a deep dive into low-level programming concepts.",
            es: "Desarrollé una máquina virtual de bytecode desde cero en FASM assembly para entender cómo funcionan los compiladores primitivos. Carece de soporte para algunas instrucciones necesarias para considerarse completa, pero se dejaron fuera para re-implementarlas en la v2. Fue una gran experiencia de aprendizaje sobre el ciclo de fetch-decode-execute. Este fue mi primer proyecto en assembly y fue una inmersión profunda en conceptos de programación de bajo nivel."
        },
        status: "completed",
        technologies: ["Assembly"],
        githubUrl: "https://github.com/patybolo/dasm-interpreter"
    },
    3: {
        title: "DASMnt Bytecode Virtual Machine v2",
        category: "vm",
        motivation: {
            en: "Thought to be a complete rewrite of the DASM VM, with a GUI and support for more complex instructions. Had to rethink the architecture due to the simplicity of the original design. Added support for function calls, a more robust instruction set, and a simple GUI for debugging. Still a work in progress, but it's shaping up to be a much more complete and user-friendly VM. Useful for testing out new language features and understanding more complex VM architectures.",
            es: "Una reescritura completa de la VM DASM, con una GUI y soporte para instrucciones más complejas. Tuve que repensar la arquitectura debido a la simplicidad del diseño original. Agregué soporte para llamadas a funciones, un conjunto de instrucciones más robusto y una GUI simple para depuración. Todavía es un trabajo en progreso, pero se está convirtiendo en una VM mucho más completa y fácil de usar. Útil para probar nuevas características de lenguaje y entender arquitecturas de VM más complejas."
        },
        status: "in-progress",
        technologies: ["C", "Assembly"],
        githubUrl: "https://github.com/patybolo/dasmnt"
    },
    4: {
        title: "The King Defeat",
        category: "games",
        motivation: {
            en: "A simple 3D isometric view mobile game inspired in the ads that you see in free mobile games. The player controls a character that only moves left and right, constantly shoots and can pick up weapons that come to them. The goal is to defeat the king that appears after four levels... It's really simple. It was my first approach to Game Development, and had a ton of fun. Made in collaboration with JGameDev (https://github.com/JGameDev1).",
            es: "Un simple juego móvil con vista isométrica 3D inspirado en los anuncios que ves en juegos móviles gratuitos. El jugador controla un personaje que solo se mueve de izquierda a derecha, dispara constantemente y puede recoger armas que vienen hacia él. El objetivo es derrotar al rey que aparece después de cuatro niveles... Es realmente simple. Fue mi primer acercamiento al desarrollo de juegos, y me divertí mucho. Hecho en colaboración con JGameDev (https://github.com/JGameDev1)."
        },
        status: "completed",
        technologies: ["C#", "Unity"],
        githubUrl: "https://github.com/patybolo/The-King-Defeat"
    },
    5: {
        title: "Death Race",
        category: "games",
        motivation: {
            en: "Formerly named Medusa's Lair. A simple 2D top-down party game with support to up to 5 players locally. It's inspired in Red Light, Green Light. One player controls the 'doll'. Made in Godot Engine. Got abandoned due to the director leaving the project, but it was a fun learning experience about game design and development.",
            es: "Anteriormente llamado Medusa's Lair. Un simple juego de fiesta 2D de vista superior con soporte para hasta 5 jugadores localmente. Está inspirado en Red Light, Green Light. Un jugador controla la 'muñeca'. Hecho en Godot Engine. Fue abandonado debido a que el director dejó el proyecto, pero fue una experiencia de aprendizaje divertida sobre diseño y desarrollo de juegos."
        },
        status: "abandoned",
        technologies: ["GDScript", "Godot"],
        githubUrl: "https://github.com/patybolo/deathrace"
    },
    6: {
        title: "DOS-Like Noise Generator",
        category: "tools",
        motivation: {
            en: "A simple tool for generating noise and colorful patterns. It uses dos-like stb-style single file library for the rendering (https://github.com/mattiasgustavsson/dos-like). It also generates and reproduces a .wav audio file containing the _real_ randomized and displayed noise. I love this aesthetic. Not useful, but fun.",
            es: "Una herramienta simple de generacion de estatica y patrones coloridos. Usa una libreria del estilo de stb para el renderizado (https://github.com/mattiasgustavsson/dos-like). Tambien genera y reproduce un archivo .wav de audio que contiene el ruido _real_ randomizado y renderizado. Me encanta esta estetica. No es util, pero es divertido."
        },
        status: "completed",
        technologies: ["C"],
        githubUrl: "https://github.com/patybolo/dos-noisegen"
    },
};

// ========================================
// Global State
// ========================================
let currentLang = 'en';
let currentCategory = 'all';
let currentTheme = 'green';

// ========================================
// Initialization
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeLanguage();
    initializeCategoryFilters();
    renderProjects();
    initializeEventListeners();
    console.log('%c$ whoami', 'color: #00ff41; font-family: monospace; font-size: 16px;');
    console.log('%cDario Martin Camino - Systems Programmer', 'color: #00cc33; font-family: monospace;');
    console.log('%c$ cat message.txt', 'color: #00ff41; font-family: monospace; font-size: 14px;');
    console.log('%cCurious? Check out the code on GitHub!', 'color: #00cc33; font-family: monospace;');
});

// ========================================
// Theme System
// ========================================
function initializeTheme() {
    // Try to get saved theme
    const saved = localStorage.getItem('portfolio_theme');
    if (saved) {
        currentTheme = saved;
        applyTheme(saved);
    }
}

function applyTheme(theme) {
    currentTheme = theme;
    
    // Update body data-theme
    if (theme === 'green') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', theme);
    }
    
    // Update active button
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-theme="${theme}"]`).classList.add('active');
    
    // Save preference
    localStorage.setItem('portfolio_theme', theme);
}

// ========================================
// Language System
// ========================================
function initializeLanguage() {
    // Try to get saved language
    const saved = localStorage.getItem('portfolio_lang');
    if (saved && translations[saved]) {
        currentLang = saved;
    }
    updateLanguageDisplay();
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    localStorage.setItem('portfolio_lang', currentLang);
    updateLanguageDisplay();
    updateCategoryLabels();
    renderProjects(); // Re-render projects with new language
}

function updateLanguageDisplay() {
    document.getElementById('currentLang').textContent = currentLang.toUpperCase();
    
    // Update all i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
}

function t(key) {
    return translations[currentLang][key] || key;
}

// ========================================
// Category Filter System
// ========================================
function initializeCategoryFilters() {
    const container = document.getElementById('categoryFilters');
    
    Object.keys(categories).forEach(catKey => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.dataset.category = catKey;
        
        const catName = categories[catKey][currentLang];
        btn.innerHTML = `<span class="btn-brackets">[</span>${catName}<span class="btn-brackets">]</span>`;
        
        container.appendChild(btn);
    });
}

function filterByCategory(category) {
    currentCategory = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // Re-render projects
    renderProjects();
}

function updateCategoryLabels() {
    document.querySelectorAll('.filter-btn:not([data-category="all"])').forEach(btn => {
        const catKey = btn.dataset.category;
        const catName = categories[catKey][currentLang];
        btn.innerHTML = `<span class="btn-brackets">[</span>${catName}<span class="btn-brackets">]</span>`;
    });
}

// ========================================
// Project Rendering
// ========================================
function renderProjects() {
    const container = document.getElementById('projectsGrid');
    container.innerHTML = '';
    
    Object.keys(projectsData).forEach(id => {
        const project = projectsData[id];
        
        // Filter by category
        if (currentCategory !== 'all' && project.category !== currentCategory) {
            return;
        }
        
        const card = createProjectCard(id, project);
        container.appendChild(card);
    });
}

function createProjectCard(id, project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.project = id;
    card.dataset.category = project.category; // Add category to card
    
    const categoryName = categories[project.category]?.[currentLang] || project.category;
    
    card.innerHTML = `
        <div class="project-image">
            <img src="assets/project${id}.jpg" alt="${project.title}" 
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%230a0e0a%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2220%22 fill=%22%2300cc33%22 text-anchor=%22middle%22 dy=%22.3em%22 font-family=%22monospace%22%3E${project.title}%3C/text%3E%3C/svg%3E'">
        </div>
        <div class="project-info">
            <div class="project-category">[${categoryName}]</div>
            <h3 class="project-title">${project.title}</h3>
            <div class="project-tags">
                ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openProjectModal(id));
    return card;
}

// ========================================
// Modal System
// ========================================
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    
    document.getElementById('modalTitleText').textContent = project.title;
    
    // Get translated motivation
    const motivation = typeof project.motivation === 'object' 
        ? project.motivation[currentLang] 
        : project.motivation;
    document.getElementById('modalMotivation').textContent = motivation;
    
    // Set status
    const statusEl = document.getElementById('modalStatus');
    statusEl.textContent = t(`status.${project.status}`);
    statusEl.className = `status-badge ${project.status}`;
    
    // Set technologies
    const techContainer = document.getElementById('modalTechnologies');
    techContainer.innerHTML = project.technologies
        .map(tech => `<span class="tag">${tech}</span>`)
        .join('');
    
    // Set GitHub link
    document.getElementById('modalGithubLink').href = project.githubUrl;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function openAboutModal() {
    const modal = document.getElementById('aboutModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ========================================
// Event Listeners
// ========================================
function initializeEventListeners() {
    // Language toggle
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    
    // About button
    document.getElementById('aboutBtn').addEventListener('click', openAboutModal);
    
    // Theme switcher buttons
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;
            applyTheme(theme);
        });
    });
    
    // Category filter buttons (including 'all')
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            filterByCategory(category);
        });
    });
    
    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            closeModal(modal.id);
        });
    });
    
    // Modal overlay clicks
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            closeModal(modal.id);
        });
    });
    
    // Escape key closes modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                closeModal(modal.id);
            });
        }
    });
}
