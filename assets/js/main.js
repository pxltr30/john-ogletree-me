import DATA from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const heroSlot = document.getElementById('hero-slot');
    const dataSlot = document.getElementById('data-slot');
    
    // Identify current page
    const path = window.location.pathname;
    const page = path.split("/").pop().replace(".html", "") || "index";

    // 1. Inject Global Header
    const header = document.createElement('header');
    header.className = "sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md p-4";
    header.innerHTML = `
        <div class="container mx-auto flex justify-between items-center">
            <a href="index.html" class="font-bold text-heading tracking-tighter">jvhn0gl3 / Echo</a>
            <nav class="flex gap-6 text-sm uppercase tracking-widest">
                <a href="index.html" class="${page === 'index' ? 'text-accent' : 'text-text-light'} hover:text-accent transition-colors">Home</a>
                <a href="about.html" class="${page === 'about' ? 'text-accent' : 'text-text-light'} hover:text-accent transition-colors">About</a>
                <a href="projects.html" class="${page === 'projects' ? 'text-accent' : 'text-text-light'} hover:text-accent transition-colors">Projects</a>
            </nav>
        </div>
    `;
    body.prepend(header);

    // 2. Inject Hero Content
    if (heroSlot) {
        const heroData = (page === "index" || page === "") ? DATA.profile : DATA.pages[page];
        if (heroData) {
            heroSlot.innerHTML = `
                <h1 class="text-5xl font-bold text-heading md:text-7xl mb-4">${heroData.name || heroData.title}</h1>
                <p class="text-text-light text-xl max-w-2xl">${heroData.bio || heroData.description}</p>
            `;
        }
    }

    // 3. Inject Contextual Data
    if (dataSlot) {
        if (page === "index" || page === "") renderItems(DATA.skills, 'skill');
        else if (page === "projects") renderItems(DATA.projects, 'project');
    }

    function renderItems(items, type) {
        if (!items) return;
        dataSlot.innerHTML = items.map(item => `
            <div class="fade-in-up border border-border bg-surface p-6 rounded-lg hover:border-accent transition-colors group">
                <h3 class="text-heading font-bold mb-2 group-hover:text-accent">${item.title || item.name}</h3>
                <p class="text-sm text-text-light">${item.description || ''}</p>
                ${type === 'skill' ? `
                    <div class="w-full bg-border h-1 mt-4">
                        <div class="bg-accent h-full skill-progress" data-progress="${item.progress}"></div>
                    </div>
                ` : ''}
            </div>
        `).join('');
        observeElements();
    }

    function observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    const bar = entry.target.querySelector('.skill-progress');
                    if (bar) bar.style.width = bar.getAttribute('data-progress') + '%';
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    }
});
