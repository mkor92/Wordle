import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/words": "http://localhost:5080/",
      "/api/highscore": "http://localhost:5080/",
    },
  },
});
