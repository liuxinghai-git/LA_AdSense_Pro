import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
export default defineConfig({
  site: 'https://hotel101losangeles.com', // Replace with your actual URL
  integrations: [tailwind(), react()]
});