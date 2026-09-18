import '../css/app.css';
import './bootstrap';

import { createInertiaApp, router } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Aegis Software';

createInertiaApp({
    title: (title) => title, // This will be overridden by your SEO component
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),

    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);

        // Google Analytics
        router.on('navigate', (event) => {
            if (typeof window.gtag === 'function') {
                window.gtag('config', 'G-FK4QJ73DST', {
                    page_path: event.detail.page.url,
                });
            }
        });
    },

    progress: {
        color: '#4B5563',
    },
});