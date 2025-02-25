import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import removeConsole from 'vite-plugin-remove-console';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  base: '/MockEShop',
  plugins: [react(), removeConsole()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@app': path.resolve(__dirname, './src/app'),
      '@store': path.resolve(__dirname, './src/app/store/index.ts'),
      '@services': path.resolve(__dirname, './src/services'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@config': path.resolve(__dirname, './src/config'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@layout': path.resolve(__dirname, './src/components/Layout'),
      '@UI': path.resolve(__dirname, './src/components/UI'),
      '@appTypes': path.resolve(__dirname, './src/types'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@media': path.resolve(__dirname, './src/media'),
    },
  },
});
