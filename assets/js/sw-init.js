/**
 * Service Worker Registration logic for PWA
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Register from the root since the SW file lives there
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('SW Registered:', reg.scope))
            .catch(err => console.error('SW Registration Failed:', err));
    });
}
