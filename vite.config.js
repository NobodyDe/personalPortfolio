import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true, // permite usar describe, it, expect sem import
    environment: 'jsdom', // simula o browser
    setupFiles: './src/test/setup.js', // arquivo de setup global
    css: true,
    exclude: ['e2e/**', 'node_modules/**', 'dist/**'], // Ignora testes do Playwright
    passWithNoTests: true, // Não falha caso você não tenha criado arquivos de test unitários ainda
  }, // processa CSS nos testes
});
