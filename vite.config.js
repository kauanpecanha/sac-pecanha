import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    base: "/sac-pecanha/",
    define: {
      "import.meta.env.WHATSAPP_PHONE": JSON.stringify(
        env.WHATSAPP_PHONE || "",
      ),
    },
  };
});
