/**
 * fingmap - Main Entry Point
 * 
 * This is the main JavaScript entry point for the fingmap Vue.js application.
 * It creates and mounts the Vue application to the DOM.
 * 
 * Key Concepts:
 * - Vue 3: Progressive JavaScript framework for building UIs
 * - createApp: Creates a new Vue application instance
 * - mount(): Attaches the Vue app to a DOM element
 */

import { createApp } from 'vue'
import App from './App.vue'

// Create the Vue application and mount it to the element with id="app"
// This is typically <div id="app"></div> in index.html
createApp(App).mount('#app')
