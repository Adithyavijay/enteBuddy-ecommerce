import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{ 
    watch: {
      usePolling: true, // Forces Vite to use polling for file watching
    },
    proxy:{
      '/api':{
        target:'http://localhost:3000'
      }
    } ,
    host: '127.0.0.1',
    hmr: {
      host: '127.0.0.1',
    },
  }
})
