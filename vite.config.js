import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ecosolution-tech", 
  server: {
    open: '/ecosolution-tech',
    port: 3000,
  },
})
