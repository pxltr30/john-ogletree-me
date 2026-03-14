const components = [
    { id: 'navbar-container', url: '/components/navbar.html' },
    { id: 'hero-section', url: '/components/hero.html' },
    { id: 'profile-section', url: '/components/profile.html' },
    { id: 'services-section', url: '/components/services.html' },
    { id: 'projects-section', url: '/components/projects.html' },
    { id: 'connect-section', url: '/components/connect.html' },
    { id: 'blog-section', url: '/components/blog.html' },
    { id: 'resume-section', url: '/components/resume.html' },
    { id: 'faq-section', url: '/components/faq.html' },
    { id: 'footer-container', url: '/components/footer.html' },
    { id: 'mobile-menu-container', url: '/components/mobile-menu.html' }
];

async function loadPage() {
    // 1. Fetch all HTML fragments
    const loadTasks = components.map(async (comp) => {
        const res = await fetch(comp.url);
        if (res.ok) {
            document.getElementById(comp.id).innerHTML = await res.text();
        }
    });

    await Promise.all(loadTasks);

    // 2. Initialize UI Logic after elements exist
    initMobileMenu();
    initAnimations();
}

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-button');
    const closeBtn = document.getElementById('close-mobile-menu-button');
    const overlay = document.getElementById('mobile-menu-overlay');
    const menu = document.getElementById('mobile-menu');

    const toggle = () => {
        overlay?.classList.toggle('hidden');
        menu?.classList.toggle('translate-x-full');
        document.body.classList.toggle('overflow-hidden');
    };

    [btn, closeBtn, overlay].forEach(el => el?.addEventListener('click', toggle));
}

function initAnimations() {
    // Skill Bar Animation
    const skillItems = document.querySelectorAll('.skill-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target.querySelector('.skill-progress');
                const pct = entry.target.querySelector('.skill-percentage');
                const val = bar.getAttribute('data-progress');
                bar.style.width = `${val}%`;
                pct.textContent = `${val}%`;
            }
        });
    }, { threshold: 0.2 });

    skillItems.forEach(item => observer.observe(item));
}

document.addEventListener('DOMContentLoaded', loadPage);
