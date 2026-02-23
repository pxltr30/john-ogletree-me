document.addEventListener('DOMContentLoaded', () => {
    // Function to load navbar HTML
    const loadNavbar = async () => {
        try {
            // Corrected path for navbar.html
            const response = await fetch('/assets/components/navbar.html');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const navbarHtml = await response.text();
            document.getElementById('navbar-placeholder').innerHTML = navbarHtml;
            initializeMobileMenu(); // Initialize mobile menu after content is loaded
            document.dispatchEvent(new CustomEvent('navbarLoaded'));
        } catch (error) {
            console.error('Error loading navbar:', error);
        }
    };

    // Function to load footer HTML
    const loadFooter = async () => {
        try {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (!footerPlaceholder) return;
            
            // Corrected path for footer.html
            const response = await fetch('/assets/components/footer.html');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const footerHtml = await response.text();
            footerPlaceholder.innerHTML = footerHtml;
            document.dispatchEvent(new CustomEvent('footerLoaded'));
        } catch (error) {
            console.error('Error loading footer:', error);
        }
    };

    // Mobile Menu Logic
    const initializeMobileMenu = () => {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenuClose = document.getElementById('mobile-menu-close');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-menu-link');

        const toggleMenu = () => {
            const isOpen = mobileMenu.classList.toggle('active');
            if (isOpen) {
                mobileMenu.style.pointerEvents = 'auto';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                mobileMenu.style.pointerEvents = 'none';
                document.body.style.overflow = '';
            }
        };

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', toggleMenu);
        }

        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', toggleMenu);
        }

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    };

    // Function to preload all same-origin links
    const preloadAllLinks = () => {
        const links = document.querySelectorAll('a[href]');
        const prefetchedUrls = new Set(); // To prevent duplicate prefetches

        links.forEach(link => {
            try {
                const url = new URL(link.href, window.location.href);

                // Only prefetch same-origin, non-fragment links, and not the current page
                if (url.protocol === window.location.protocol && 
                    url.host === window.location.host &&
                    url.hash === '' && // Exclude fragment links
                    url.pathname + url.search !== window.location.pathname + window.location.search && // Exclude current page
                    !prefetchedUrls.has(url.href)) // Exclude duplicates
                {
                    const prefetchLink = document.createElement('link');
                    prefetchLink.rel = 'prefetch';
                    prefetchLink.href = url.href;
                    document.head.appendChild(prefetchLink);
                    prefetchedUrls.add(url.href);
                    // console.log('Prefetching:', url.href); // For debugging
                }
            } catch (e) {
                // console.warn('Invalid URL encountered, skipping prefetch:', link.href, e);
            }
        });
    };


    loadNavbar(); // Call loadNavbar when DOM is ready
    loadFooter(); // Call loadFooter when DOM is ready
    preloadAllLinks(); // Call preloadAllLinks when DOM is ready
});
