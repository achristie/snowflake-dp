import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const theme = {
  theme: "one-dark-pro",
};

const options = {
  rehypePlugins: [[rehypePrettyCode, theme]],
  remarkPlugins: [remarkGfm],
};

// https://vitejs.dev/config/

export default defineConfig({
  // @ts-ignore
  plugins: [mdx(options), react()],
});
