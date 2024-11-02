import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '',
  plugins: [react()],
  logLevel: 'warn',
  clearScreen: false,
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/react/components'),
      '@svg': path.resolve(__dirname, 'src/assets/svg'),
      '@img': path.resolve(__dirname, 'src/assets/img'),
      '@sections': path.resolve(__dirname, 'src/react/sections'),
      '@pages': path.resolve(__dirname, 'src/react/pages'),
      '@style_scss': path.resolve(__dirname, 'src/style_scss'),
      '@data': path.resolve(__dirname, 'src/scripts/data.js'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        api: "modern-compiler"
      },
    },
  },
});