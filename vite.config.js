import restart from 'vite-plugin-restart'
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: 'src/', // Carpeta donde se encuentran tus archivos fuente
    publicDir: '../public', // Carpeta donde se encuentran los archivos estáticos (como _redirects)
    server: {
        host: true, // Abre al servidor en la red local y muestra la URL
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) // Abre si no es un CodeSandbox
    },
    build: {
        outDir: '../dist', // Carpeta donde se generan los archivos de salida
        emptyOutDir: true, // Vacía la carpeta antes de generar nuevos archivos
        sourcemap: true, // Agrega sourcemap
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'), // Página principal
                about: resolve(__dirname, 'src/about/index.html'), // Página de About
                sermons: resolve(__dirname, 'src/sermons/index.html'), // Página de Sermones
            }
        }
    },
    plugins: [
        restart({ restart: ['../static/**',] }) // Reinicia el servidor en cambios de archivos estáticos
    ],
});
