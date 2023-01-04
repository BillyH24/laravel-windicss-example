import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

import WindiCSS from 'vite-plugin-windicss' // add this line

export default defineConfig({
    plugins: [
        WindiCSS(), // add this line
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
