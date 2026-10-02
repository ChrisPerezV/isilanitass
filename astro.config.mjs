import { defineConfig } from "astro/config";
import { githubPagesAdapter } from "@astrojs/github-pages";

export default defineConfig({
  output: "static",
  adapter: githubPagesAdapter(),
  base: "/isilanitass",
});