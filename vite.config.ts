import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Manika/", // wajib sama dengan nama repo
  plugins: [react()],
});
