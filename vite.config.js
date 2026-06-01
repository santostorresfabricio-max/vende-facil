import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Carga las variables de entorno según el modo (dev, build)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    // Si existe la variable VITE_BASE_URL, la usa; si no, usa la raíz '/'
    base: env.VITE_BASE_URL || '/',
  }
})