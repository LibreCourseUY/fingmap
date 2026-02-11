import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import lightningcss from 'vite-plugin-lightningcss'

export default defineConfig({
  base: "/fingmap",
  plugins: [
    vue(),
    lightningcss({
      minify: true
    })
  ],
  build: {
    minify: 'lightningcss'
  }
})
