import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    chunkSizeWarningLimit: 600,
  },
  server: {
    host: "localhost",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    'import.meta.env.VITE_BREVO_API_KEY': JSON.stringify(process.env.VITE_BREVO_API_KEY),
    'import.meta.env.VITE_NOTIFICATION_EMAILS': JSON.stringify(process.env.VITE_NOTIFICATION_EMAILS),
  }
});