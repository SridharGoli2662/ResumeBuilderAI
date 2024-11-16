import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base:"/ResumeBuilderAI/"
  // define: {
  // 'process.env': {
  //   VITE_GEMINI_API_KEY: JSON.stringify(process.env.VITE_GEMINI_API_KEY),
  //     // REACT_APP_GEMINI_API_SECRET: JSON.stringify(process.env.REACT_APP_GEMINI_API_SECRET)
  //   }
  // }
  // server: {
  //   historyApiFallback: true, // Ensures proper routing for SPA
  // },
})
