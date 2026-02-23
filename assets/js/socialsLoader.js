document.addEventListener('DOMContentLoaded', () => {
    const loadSocials = async () => {
        try {
            const response = await fetch('/assets/data/socials.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const socials = await response.json();
            
            // Populate Index Page Social Links (immediately if present)
            const indexSocialLinks = document.getElementById('social-links');
            if (indexSocialLinks) {
                indexSocialLinks.innerHTML = socials.map(social => `
                    <a id="social-${social.id}" href="${social.url}" aria-label="${social.name} Profile">
                        <i id="icon-${social.id}" class="${social.iconClass} text-2xl"></i>
                    </a>
                `).join('');
            }

            // Function to populate components once they're loaded
            const populateNavbar = () => {
                const mobileSocialLinks = document.getElementById('mobile-menu-footer');
                if (mobileSocialLinks) {
                    mobileSocialLinks.innerHTML = socials.map(social => `
                        <a id="mobile-social-${social.id}" href="${social.url}" class="text-text-light hover:text-accent">
                            <i id="mobile-icon-${social.id}" class="${social.iconClass} text-2xl"></i>
                        </a>
                    `).join('');
                }
            };

            const populateFooter = () => {
                const footerSocialLinks = document.getElementById('footer-socials');
                if (footerSocialLinks) {
                    footerSocialLinks.innerHTML = socials.map(social => `
                        <a id="footer-${social.id}" href="${social.url}" class="text-text-light hover:text-accent transition-colors">
                            <i class="${social.iconClass} text-xl"></i>
                        </a>
                    `).join('');
                }
            };

            // Listen for custom events from navbarLoader.js
            document.addEventListener('navbarLoaded', populateNavbar);
            document.addEventListener('footerLoaded', populateFooter);

            // In case they loaded BEFORE this script (unlikely with DOMContentLoaded but safe)
            if (document.getElementById('mobile-menu-footer')) populateNavbar();
            if (document.getElementById('footer-socials')) populateFooter();

        } catch (error) {
            console.error('Error loading socials:', error);
        }
    };

    loadSocials();
});
