import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "./", // 👈 necesario para Render
  plugins: [react()],
})
