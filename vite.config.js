import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '',
  plugins: [react(),
  {
    name: 'filter-error-output',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const originalError = console.error;
        console.error = (...args) => {
          const filteredArgs = args.filter(arg => !arg.includes('File:'));
          originalError(...filteredArgs);
        };
        next();
      });
    },
  },
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/react/components'),
      '@svg': path.resolve(__dirname, 'src/assets/svg'),
      '@img': path.resolve(__dirname, 'src/assets/img'),
      '@sections': path.resolve(__dirname, 'src/react/sections'),
      '@pages': path.resolve(__dirname, 'src/react/pages'),
      '@style_scss': path.resolve(__dirname, 'src/style_scss'),
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