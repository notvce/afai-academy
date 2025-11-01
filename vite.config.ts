import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Inlineo explícito de variables VITE_* si existen en el entorno del runner (CI)
  // De esta forma garantizamos que queden embebidas en el bundle en GitHub Actions.
  const defineEnv: Record<string, string> = {};
  if (process.env.VITE_MAILDIVER_API_KEY) {
    defineEnv["import.meta.env.VITE_MAILDIVER_API_KEY"] = JSON.stringify(
      process.env.VITE_MAILDIVER_API_KEY
    );
  }
  if (process.env.VITE_NOTIFICATION_EMAILS) {
    defineEnv["import.meta.env.VITE_NOTIFICATION_EMAILS"] = JSON.stringify(
      process.env.VITE_NOTIFICATION_EMAILS
    );
  }

  return {
    base: '/',
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
