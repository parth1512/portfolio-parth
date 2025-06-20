import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.png', '**/*.ttf'],
  build: {
    rollupOptions: {
      external: [], // Clear external dependencies unless necessary
    },
  },
  optimizeDeps: {
    include: ['@react-three/fiber', '@react-three/drei', '@react-three/rapier', 'meshline'],
  },
});
