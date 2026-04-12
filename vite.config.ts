import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Production: GitHub Pages project site — https://<user>.github.io/<repo>/
const GITHUB_PAGES_BASE = '/VK-testTask-CatPinterest/'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? GITHUB_PAGES_BASE : '/',
}))
