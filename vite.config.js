import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages project site: base must match the repo name.
// EDIT ME: If you use a user site (<username>.github.io), change base to '/'
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
})
