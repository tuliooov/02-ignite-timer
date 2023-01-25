import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://tuliooov.github.io/02-ignite-timer',
  plugins: [react()],
})
