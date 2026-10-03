import { resolve } from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // The stylesheets (and the bundled include-media library) still use
        // @import and global Sass functions, which Dart Sass 1.x supports.
        silenceDeprecations: [
          "import",
          "global-builtin",
          "feature-exists",
          "if-function",
        ],
      },
    },
  },
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        notFound: resolve(import.meta.dirname, "404.html"),
      },
    },
  },
})
