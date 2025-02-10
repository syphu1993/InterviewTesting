import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [react(),
    viteImagemin({
      webp: {
        quality: 75, 
      },
      mozjpeg: {
        quality: 85,
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4,
      },
      optipng: {
        optimizationLevel: 7,
      },
      gifsicle: {
        optimizationLevel: 3,
        interlaced: false,
      },
    }),
  ],
})
