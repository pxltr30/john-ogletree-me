export const Blog = {
    render() {
        return `
            <section id="blog-section" class="log-overview">
                <h2 id="blog-heading" class="m-0 mt-14 mb-6 border-b border-border pb-2 font-mono font-medium text-heading text-xl before:mr-2 before:font-normal before:text-text-light before:content-['##'] md:text-2xl">
                    Log Overview
                </h2>
                
<div id="blog-grid" class="grid grid-cols-repeat-300 gap-6">                    ${this.posts.map(post => `
                        <article>
                            <a href="${post.url}" class="group flex h-full rounded-lg border border-border bg-surface no-underline transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
                                <div class="flex flex-col p-6">
                                    <p class="mb-2 text-xs text-text-light">${post.meta}</p>
                                    <h3 class="m-0 mb-3 font-mono text-xl font-bold text-accent transition-colors duration-200 group-hover:text-heading group-hover:underline">
                                        ${post.title}
                                    </h3>
                                    <p class="mb-6 flex-grow text-[0.95rem] leading-relaxed text-text">${post.excerpt}</p>
                                    <div class="flex flex-wrap gap-2">
                                        ${post.tags.map(tag => `
                                            <span class="rounded-full py-1 px-3 text-xs font-medium" 
                                                  style="background-color: ${tag.bgColor}; color: ${tag.color}">
                                                ${tag.name}
                                            </span>
                                        `).join('')}
                                    </div>
                                </div>
                            </a>
                        </article>
                    `).join('')}
                </div>
                
                <div id="all-posts-link-container" class="mt-8 text-center">
                    <a id="all-posts-link" href="/thoughts/index" 
                       class="inline-flex items-center justify-center rounded-md border border-heading bg-heading py-3 px-8 font-mono font-bold text-text no-underline transition-colors duration-200 hover:border-[#D36C52] hover:bg-[#D36C52] hover:text-text">
                        View All Posts
                    </a>
                </div>
            </section>
        `;
    },

    posts: [
        {
            url: '/thoughts/post-slug-1',
            meta: 'Film Review · 6 min read',
            title: 'Dune: A Masterclass in World-Building',
            excerpt: "Denis Villeneuve's adaptation of the sci-fi epic is a cinematic triumph, blending stunning visuals with a deeply resonant narrative.",
            tags: [
                { name: 'Film', bgColor: 'rgba(106,153,78,0.2)', color: '#6A994E' },
                { name: 'Sci-Fi', bgColor: 'rgba(108,113,196,0.15)', color: '#6C71C4' },
                { name: 'Review', bgColor: 'rgba(108,117,125,0.2)', color: '#6c757d' }
            ]
        },
        {
            url: '/thoughts/post-slug-2',
            meta: 'Tech Review · 8 min read',
            title: "The M4 AstroBook: A Developer's Dream?",
            excerpt: "After a month with Apple's latest hardware, I'm sharing my thoughts on its performance and suitability for web development.",
            tags: [
                { name: 'Tech', bgColor: 'rgba(0,95,115,0.15)', color: '#005f73' },
                { name: 'Apple', bgColor: 'rgba(147,161,161,0.2)', color: '#839496' },
                { name: 'Review', bgColor: 'rgba(108,117,125,0.2)', color: '#6c757d' }
            ]
        },
        {
            url: '/thoughts/post-slug-3',
            meta: 'Personal Essay · 5 min read',
            title: 'Finding Creative Flow in Augusta',
            excerpt: 'How the quiet charm of Martinez and the surrounding area has reshaped my daily process and inspiration.',
            tags: [
                { name: 'Life', bgColor: 'rgba(217,91,138,0.15)', color: '#D95B8A' },
                { name: 'Creativity', bgColor: 'rgba(108,113,196,0.2)', color: '#6C71C4' },
                { name: 'Georgia', bgColor: 'rgba(253,158,116,0.2)', color: '#E4865B' }
            ]
        }
    ]
};