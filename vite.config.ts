import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      plugins: [react(), tsconfigPaths()]
    }
  } else {
    return {
      plugins: [react(), tsconfigPaths()],
      base: './'
    }
  }
})
