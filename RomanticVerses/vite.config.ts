import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(), runtimeErrorOverlay(), themePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  // Vite expects the `index.html` to be in the root of the project
  // Change root to point to the correct directory
  root: path.resolve(__dirname, "client/src"),
  build: {
    // Ensure the output is placed in the correct location for Vercel
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true, // Cleans the output directory before building
  },
});
