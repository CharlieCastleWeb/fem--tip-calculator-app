import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "/fem--tip-calculator-app/",
  plugins: [tailwindcss()],
});
