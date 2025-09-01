import { resolve } from "path";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router"],
          styling: ["@vanilla-extract/css", "@vanilla-extract/recipes", "clsx"],
          utils: ["dayjs", "uuid", "zod"],
          icons: ["lucide-react"],
          fetching: ["swr"],
        },
      },
    },
  },
});
