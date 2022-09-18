import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const API_BASE_URL = "http://3.94.53.234:8000"
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/create-app': {
           target: API_BASE_URL,
           changeOrigin: true,
           secure: false,      
           ws: false,
       },
       '/up': {
            target: API_BASE_URL,
            changeOrigin: true,
            secure: false,      
            ws: false,
        },
      '/down': {
           target: API_BASE_URL,
           changeOrigin: true,
           secure: false,      
           ws: false,
       },
       '/initialize-build': {
            target: API_BASE_URL,
            changeOrigin: true,
            secure: false,      
            ws: false,
        },
        '/build': {
             target: API_BASE_URL,
             changeOrigin: true,
             secure: false,      
             ws: false,
         },
        '/upload-app': {
             target: API_BASE_URL,
             changeOrigin: true,
             secure: false,      
             ws: false,
         },
       '/projects': {
            target: API_BASE_URL,
            changeOrigin: true,
            secure: false,      
            ws: false,
        },
  }
  }
})
