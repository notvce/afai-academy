import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Ensure all VITE_ environment variables are properly embedded
  const defineEnv: Record<string, string> = Object.fromEntries(
    Object.entries(process.env)
      .filter(([key]) => key.startsWith('VITE_'))
      .map(([key, value]) => [`import.meta.env.${key}`, JSON.stringify(value)])
  );

  return {
    base: '/',
    build: {
      chunkSizeWarningLimit: 600,
    },
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Asegura que Vite sólo considere variables con prefijo VITE_
    envPrefix: 'VITE_',
    // Inyección condicional (sólo cuando existan en process.env)
    define: defineEnv,
  };
});
