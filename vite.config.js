import restart from 'vite-plugin-restart'
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: 'src/',
    publicDir: 'public',
    server: {
        host: true,
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                about: resolve(__dirname, 'src/about/index.html'),
                leaders: resolve(__dirname, 'src/leaders/index.html'),
                sermons: resolve(__dirname, 'src/sermons/index.html'),
                gospel: resolve(__dirname, 'src/live/index.html'),
                give: resolve(__dirname, 'src/give/index.html'),
            }
        }
    },
    plugins: [
        restart({ restart: ['../static/**'] })
    ],
});
