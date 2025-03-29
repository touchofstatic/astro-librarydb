// @ts-check
import { defineConfig } from 'astro/config';

import db from '@astrojs/db';

import netlify from '@astrojs/netlify';

import pagefind from "astro-pagefind";

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [db(), pagefind(), preact()],
  adapter: netlify(),
});