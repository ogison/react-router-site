
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    host: "0.0.0.0",
    allowedHosts: [
      "6d266c81-c425-4b6e-a2ca-7a093894d91e-00-2ujwznhwd6lmb.pike.replit.dev",
      ".replit.dev"
    ],
  },
});
