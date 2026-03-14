const profileHTML = `
<h2 class="m-0 mt-14 mb-6 border-b border-border pb-2 text-heading text-xl before:content-['##_']">Profile</h2>
<section id="profile-section" class="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
    <div id="profile-card" class="flex flex-col gap-5 rounded-lg border border-border bg-surface p-6 transition-all hover:border-accent/50">
        <div class="flex flex-col items-start gap-6 border-b border-border pb-5 md:flex-row md:items-center">
            <div class="flex flex-1 items-center gap-4">
                <div class="relative">
                    <img src="/assets/images/logo.svg" alt="John Ogletree" class="h-16 w-16 rounded-full border-2 border-border shadow-inner" />
                    <div class="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-surface bg-green-500"></div>
                </div>
                <div class="flex flex-col">
                    <h3 class="font-mono font-medium text-heading text-xl">John Ogletree</h3>
                    <p class="text-text-light text-sm">@pxltr30 | Digital Creator</p>
                </div>
            </div>
        </div>
        
        <div class="grid grid-cols-3 gap-4 text-center">
            <div class="flex flex-col">
                <span class="stat-value text-accent font-bold" data-value="12">0</span>
                <span class="text-[10px] uppercase tracking-wider text-text-light">Projects</span>
            </div>
            <div class="flex flex-col border-x border-border">
                <span class="stat-value text-accent font-bold" data-value="8">0</span>
                <span class="text-[10px] uppercase tracking-wider text-text-light">Skills</span>
            </div>
            <div class="flex flex-col">
                <span class="stat-value text-accent font-bold" data-value="2026">0</span>
                <span class="text-[10px] uppercase tracking-wider text-text-light">Est.</span>
            </div>
        </div>

        <p class="text-sm text-text-light leading-relaxed italic">
            "Bridging the gap between creative vision and technical execution through clean, modular code."
        </p>
    </div>

    <div class="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 transition-all hover:border-accent/50">
        <h4 class="text-xs uppercase tracking-[0.2em] text-heading font-bold">System_Capabilities</h4>
        <div class="flex flex-wrap gap-2">
            <span class="rounded bg-accent/10 px-2 py-1 text-[10px] text-accent border border-accent/20">HTML5</span>
            <span class="rounded bg-accent/10 px-2 py-1 text-[10px] text-accent border border-accent/20">TailwindCSS</span>
            <span class="rounded bg-accent/10 px-2 py-1 text-[10px] text-accent border border-accent/20">JavaScript</span>
            <span class="rounded bg-accent/10 px-2 py-1 text-[10px] text-accent border border-accent/20">UI/UX</span>
            <span class="rounded bg-accent/10 px-2 py-1 text-[10px] text-accent border border-accent/20">Git</span>
            <span class="rounded bg-accent/10 px-2 py-1 text-[10px] text-accent border border-accent/20">Digital Strategy</span>
        </div>
    </div>
</section>
`;

// Inject the Profile HTML
document.getElementById('profile-container').innerHTML = profileHTML;

// Stat Counting Logic
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-value');
    stats.forEach(stat => {
        const target = +stat.getAttribute('data-value');
        const count = +stat.innerText;
        const speed = 100; // Lower is faster
        const increment = target / speed;

        if (count < target) {
            stat.innerText = Math.ceil(count + increment);
            setTimeout(animateStats, 10);
        } else {
            stat.innerText = target;
        }
    });
};

// Start animation when section is in view
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateStats();
        observer.unobserve(entries[0].target);
    }
}, { threshold: 0.5 });

observer.observe(document.getElementById('profile-container'));
