export const Projects = {
    render() {
        return `
            <section id="projects-section" class="projects-overview">
                <h2 id="projects-heading" class="m-0 mt-14 mb-6 border-b border-border pb-2 font-mono font-medium text-heading text-xl before:mr-2 before:font-normal before:text-text-light before:content-['##'] md:text-2xl">
                    Creations Overview
                </h2>
                
<div id="projects-grid" class="grid grid-cols-repeat-300 gap-6">                    ${this.projects.map(project => `
                        <div class="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
                            <div class="aspect-video overflow-hidden">
                                <img src="${project.image}" alt="${project.title}" 
                                     class="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                                     loading="lazy"
                                     onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'">
                            </div>
                            <div class="flex flex-grow flex-col p-6">
                                <h3 class="m-0 mb-2 font-mono text-xl font-bold text-accent">${project.title}</h3>
                                <p class="mb-4 text-[0.95rem] text-text-light">${project.description}</p>
                                <div class="flex flex-wrap gap-2">
                                    ${project.tags.map(tag => `
                                        <span class="rounded-full py-1 px-3 text-xs font-medium" 
                                              style="background-color: ${tag.bgColor}; color: ${tag.color}">
                                            ${tag.name}
                                        </span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div id="all-projects-link-container" class="mt-8 text-center">
                    <a id="all-projects-link" href="/projects/index" 
                       class="inline-flex items-center justify-center rounded-md border border-heading bg-heading py-3 px-8 font-mono font-bold text-text no-underline transition-colors duration-200 hover:border-[#D36C52] hover:bg-[#D36C52] hover:text-text">
                        View All Projects
                    </a>
                </div>
            </section>
        `;
    },

    projects: [
        {
            title: 'Echo - Personal Portfolio',
            description: 'The very website you are on. A fully responsive personal hub built with Astro, showcasing a blend of design and modern web technologies.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
            tags: [
                { name: 'Astro', bgColor: 'rgba(224,122,95,0.15)', color: '#B35F48' },
                { name: 'CSS', bgColor: 'rgba(38,139,210,0.15)', color: '#268BD2' },
                { name: 'JavaScript', bgColor: 'rgba(181,137,0,0.2)', color: '#b58900' }
            ]
        },
        {
            title: 'QuantumLeap - SaaS Dashboard',
            description: 'A UI/UX concept for a next-generation analytics platform, focusing on data visualization and intuitive user workflows.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
            tags: [
                { name: 'Figma', bgColor: 'rgba(163,55,240,0.1)', color: '#8327c3' },
                { name: 'UI/UX', bgColor: 'rgba(61,135,166,0.15)', color: '#3D87A6' },
                { name: 'Prototyping', bgColor: 'rgba(188,71,73,0.15)', color: '#BC4749' }
            ]
        },
        {
            title: 'CodeGenius - AI Assistant UI',
            description: 'An interface design for an AI-powered code completion tool, designed to be unobtrusive yet powerful for developers.',
            image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop',
            tags: [
                { name: 'UI Design', bgColor: 'rgba(42,161,152,0.15)', color: '#2AA198' },
                { name: 'UX Research', bgColor: 'rgba(203,75,22,0.15)', color: '#CB4B16' }
            ]
        }
    ]
};