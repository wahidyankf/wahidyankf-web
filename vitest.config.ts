import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    include: ["**/*.{test,spec}.{js,ts,jsx,tsx}"],
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
  },
});
