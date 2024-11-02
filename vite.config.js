import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  base: '/test',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/react/components'),
      '@svg': path.resolve(__dirname, 'src/assets/svg'),
      '@img': path.resolve(__dirname, 'src/assets/img'),
      '@sections': path.resolve(__dirname, 'src/react/sections'),
      '@pages': path.resolve(__dirname, 'src/react/pages')
    }
  }
})