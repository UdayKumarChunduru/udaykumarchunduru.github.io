import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: '/' because this is a GitHub user page (username.github.io)
// If it were a project page, base would be '/repo-name/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
