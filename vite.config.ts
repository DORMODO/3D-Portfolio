import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
// Avoid direct use of __dirname in ESM TS build; use URL to resolve paths
import { fileURLToPath } from 'url';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(fileURLToPath(import.meta.url), "../src"),
    },
  },
});

