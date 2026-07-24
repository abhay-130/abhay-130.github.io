import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // MUST HAVE LEADING AND TRAILING SLASH
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  preview: {
    port: 4173,
    strictPort: true,
  }
});