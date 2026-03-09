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
        "footer.text": "\"© 2026 Dario Martin Camino | Built with <3 and coffee\""
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
        "footer.text": "\"© 2026 Dario Martin Camino | Construido con <3 y café\""
    }
};

const categories = {
    "systems": { en: "systems", es: "sistemas" },
    "vm": { en: "vm/interpreters", es: "vm/intérpretes" },
    "compilers": { en: "compilers", es: "compiladores" },
    "tools": { en: "tools", es: "herramientas" },
    "embedded": { en: "embedded", es: "embebido" }
};

const projectsData = {
    1: {
        title: "Custom Memory Allocator",
        category: "systems",
        motivation: {
            en: "Built a custom memory allocator to understand memory management at its core. Implemented various allocation strategies including first-fit, best-fit, and buddy system. This project taught me about fragmentation, memory alignment, and performance trade-offs.",
            es: "Construí un asignador de memoria personalizado para entender la gestión de memoria en su núcleo. Implementé varias estrategias de asignación incluyendo first-fit, best-fit y buddy system. Este proyecto me enseñó sobre fragmentación, alineación de memoria y compromisos de rendimiento."
        },
        status: "completed",
        technologies: ["C", "Assembly"],
        githubUrl: "https://github.com/patybolo/memory-allocator"
    },
    2: {
        title: "Bytecode Virtual Machine",
        category: "vm",
        motivation: {
            en: "Developed a stack-based VM from scratch to understand how interpreters work under the hood. Implemented a bytecode compiler and runtime with garbage collection. Great learning experience about instruction dispatch and optimization.",
            es: "Desarrollé una máquina virtual basada en pila desde cero para entender cómo funcionan los intérpretes internamente. Implementé un compilador de bytecode y runtime con recolección de basura. Gran experiencia de aprendizaje sobre despacho de instrucciones y optimización."
        },
        status: "in-progress",
        technologies: ["Rust", "Assembly"],
        githubUrl: "https://github.com/patybolo/bytecode-vm"
    },
    3: {
        title: "Compiler Frontend",
        category: "compilers",
        motivation: {
            en: "A learning project to understand lexing, parsing, and semantic analysis. Built a recursive descent parser and type checker for a simple language. Abandoned in favor of more complete projects, but valuable for understanding compiler theory.",
            es: "Un proyecto de aprendizaje para entender análisis léxico, sintáctico y semántico. Construí un parser de descenso recursivo y verificador de tipos para un lenguaje simple. Abandonado en favor de proyectos más completos, pero valioso para entender teoría de compiladores."
        },
        status: "abandoned",
        technologies: ["C++", "Python"],
        githubUrl: "https://github.com/patybolo/compiler-frontend"
    }
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
