export const Services = {
    render() {
        return `
            <section id="services-section" class="services-overview">
                <h2 id="services-heading" class="m-0 mt-14 mb-6 border-b border-border pb-2 font-mono font-medium text-heading text-xl before:mr-2 before:font-normal before:text-text-light before:content-['##'] md:text-2xl">
                    Capabilities Overview
                </h2>
                
<div id="services-grid" class="grid grid-cols-repeat-280 gap-6">
                    ${this.services.map(service => `
                        <div class="flex flex-col gap-4 rounded-lg border border-border bg-surface p-8 transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
                            <div class="text-accent">
                                <i class="${service.icon} text-3xl"></i>
                            </div>
                            <h3 class="m-0 font-mono text-xl font-bold text-accent">${service.title}</h3>
                            <p class="flex-grow text-[0.95rem] leading-relaxed text-text-light">${service.description}</p>
                        </div>
                    `).join('')}
                </div>
                
                <div id="all-services-link-container" class="mt-8 text-center">
                    <a id="all-services-link" href="/services/index" 
                       class="inline-flex items-center justify-center rounded-md border border-heading bg-heading py-3 px-8 font-mono font-bold text-text no-underline transition-colors duration-200 hover:border-[#D36C52] hover:bg-[#D36C52] hover:text-text">
                        View All Services
                    </a>
                </div>
            </section>
        `;
    },

    services: [
        {
            icon: 'fa-solid fa-laptop-code',
            title: 'Web Design & Development',
            description: 'Crafting responsive, high-performance websites from scratch. I focus on clean code and user-centric design to build digital experiences that work beautifully on any device.'
        },
        {
            icon: 'fa-solid fa-wand-magic-sparkles',
            title: 'Interactive Prototyping',
            description: 'Bringing ideas to life with high-fidelity, clickable prototypes. This crucial step allows for user testing and validation before a single line of code is written.'
        },
        {
            icon: 'fa-solid fa-chess',
            title: 'Digital Strategy & Consultation',
            description: 'Leveraging user research and analytics to help you make informed decisions. I provide insights that align your digital presence with your business goals for measurable success.'
        }
    ]
};