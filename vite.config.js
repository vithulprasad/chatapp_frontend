import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // 👈 ensures refresh on routes works
  },
  preview: {
    historyApiFallback: true, // 👈 also fix for `vite preview`
  },
})
