import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  optimizeDeps: {
    include: ['prop-types', 'react-vertical-timeline-component']
  },
  base: process.env.VITE_BASE_PATH || "/3D-Portfolio",
})
