import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vite.dev/config/
export default defineConfig({
  server: {
    https: false,
    proxy: {
      "/t/p/original/:path": {
        target: "https://image.tmdb.org",
        changeOrigin: true,
        secure: false,
      }, // the value you can change with another origin
    },
  }, // Not needed for Vite 5+
  plugins: [react()],
});
