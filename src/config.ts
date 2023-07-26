// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Oskar's Life";
export const SITE_DESCRIPTION =
  "Welcome to my blog! I write about my life, modern web development, mindfulness and overall being a better person. Living my life to the fullest!";
export const TWITTER_HANDLE = "@dev_oskar";
export const MY_NAME = "Oskar";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
