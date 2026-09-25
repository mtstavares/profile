import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolveSite } from './src/config/site.ts'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...loadEnv(mode, process.cwd(), ''), ...process.env }
  return {
    base: resolveSite(env.VITE_SITE_URL, env.VITE_BASE_PATH).base,
    build: { outDir: env.BUILD_OUT_DIR || 'dist' },
    plugins: [react(), tailwindcss()],
  }
})
