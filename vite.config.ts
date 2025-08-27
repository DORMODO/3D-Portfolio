import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
// Avoid direct use of __dirname in ESM TS build; use URL to resolve paths
// @ts-ignore - url & path module types may not be available in some TS setups
import { fileURLToPath } from 'url';
import path from 'path';

// compute project root directory from this file's URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // compute project root relative to this config file
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

