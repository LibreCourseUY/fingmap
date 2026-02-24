/**
 * fingmap - Vite Configuration
 * 
 * This file configures Vite, the build tool for the fingmap project.
 * 
 * Key Concepts:
 * - Vite: Next-generation frontend build tool (fast and modern)
 * - Plugins: Extend Vite functionality
 * - Base path: The base URL the app is served from
 * - Build: Production build configuration
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import lightningcss from 'vite-plugin-lightningcss'

export default defineConfig({
  // Base path: The app will be served from /fingmap/
  // This is important when deploying to subdirectories
  base: "/fingmap/",
  
  // Plugins to use
  plugins: [
    // Vue plugin: Enables Vue 3 single-file component support
    vue(),
    
    // LightningCSS: Fast CSS minification
    lightningcss({
      minify: true
    })
  ],
  
  // Production build configuration
  build: {
    // Use lightningcss for CSS minification
    minify: 'lightningcss'
  }
})
