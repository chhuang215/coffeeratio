import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  base: dev ? '' : '/coffeeratio',
  paths: {
    base: dev ? '' : '/coffeeratio',
    assets: dev ? '' : '/coffeeratio'
  },
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: false,
      strict: true
    }),
  },

  preprocess: [
    preprocess({
      postcss: true
    })
  ]
};

export default config;
