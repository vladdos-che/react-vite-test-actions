import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-vite-test-actions/', // Имя твоего репозитория
  plugins: [react()],
})
