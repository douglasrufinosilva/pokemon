import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '10.0.1.134',
    port: 3000,
  },
  plugins: [react()],
})
