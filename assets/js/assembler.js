const headModules = [
    '/src/head/01-title.html',
    '/src/head/02-charset.html',
    '/src/head/03-viewport.html',
    '/src/head/04-desc.html',
    '/src/head/05-manifest.html',
    '/src/head/06-favicon.html',
    '/src/head/07-tailwind.html',
    '/src/head/08-tw-config.html',
    '/src/head/09-gtag-js.html',
    '/src/head/10-style-css.html',
    '/src/head/11-fa-icons.html'
];

const bodyModules = [
    '/src/body/01-banner.html',
    '/src/body/02-header.html',
    '/src/body/03-hero.html',
    '/src/body/04-profile.html',
    '/src/body/05-footer.html',
    '/src/body/06-sw-reg.html'
];

async function build() {
    // Inject Head
    for (const path of headModules) {
        const res = await fetch(path);
        const html = await res.text();
        document.head.insertAdjacentHTML('beforeend', html);
    }
    // Inject Body
    for (const path of bodyModules) {
        const res = await fetch(path);
        const html = await res.text();
        document.body.insertAdjacentHTML('beforeend', html);
    }
    
    // Trigger any animations after the DOM is built
    window.dispatchEvent(new Event('site-ready'));
}

build();
