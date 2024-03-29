import { sveltekit } from "@sveltejs/kit/vite";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";
import { defineConfig } from "vite";

const dev = process.env.NODE_ENV === "development";
const base = dev ? "" : "/coffeeratio";
// const base = "";

export default defineConfig({
  // server: {
  //   base: base
  // },
  build: {
    minify: false,
  },
  plugins: [
    sveltekit(),
    SvelteKitPWA(
      {
        kit: {
          base: base,
          trailingSlash: 'always',
        },
        registerType: "autoUpdate",
        // devOptions: {
        //   enabled: true
        // },
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
          globIgnores: [
            "**/node_modules/**/*",
            "server/**/*"
            // "server/sw.js",
            // "server/workbox-*.js"
          ],
        },
        manifest: {
          name: "CoffeeRatio",
          short_name: "CoffeeRatio",
          icons: [
            {
              src: "./icons/icon-128x128.png",
              sizes: "128x128",
              type: "image/png"
            },
            {
              src: "./icons/icon-144x144.png",
              sizes: "144x144",
              type: "image/png"
            },
            {
              src: "./icons/icon-152x152.png",
              sizes: "152x152",
              type: "image/png"
            },
            {
              src: "./icons/icon-192x192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "./icons/icon-256x256.png",
              sizes: "256x256",
              type: "image/png"
            },
            {
              src: "./icons/icon-512x512.png",
              sizes: "512x512",
              type: "image/png"
            }
          ],
          start_url: "/coffeeratio/",
          // "start_url": "./",
          scope: "https://chhuang215.github.io/coffeeratio/",
          display: "standalone",
          background_color: "#3E4EB8",
          theme_color: "#2F3BA2"
        }
      }
      // {
      //   srcDir: './src',
      //   mode: 'development',
      //   strategies: 'injectManifest',
      //   filename: 'prompt-sw.ts',
      //   scope: '/',
      //   base: '/',
      //   manifest: {
      //     short_name: 'CoffeeRatio',
      //     name: 'CoffeeRatio',
      //     start_url: '/',
      //     scope: '/',
      //     display: 'standalone',
      //     theme_color: "#ffffff",
      //     background_color: "#ffffff",
      //     icons: [
      //       {
      //         src: '/pwa-192x192.png',
      //         sizes: '192x192',
      //         type: 'image/png',
      //       },
      //       {
      //         src: '/pwa-512x512.png',
      //         sizes: '512x512',
      //         type: 'image/png',
      //       },
      //       {
      //         src: '/pwa-512x512.png',
      //         sizes: '512x512',
      //         type: 'image/png',
      //         purpose: 'any maskable',
      //       },
      //     ],
      //   },
      //   injectManifest: {
      //     globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}']
      //   },
      //   devOptions: {
      //     enabled: true,
      //     type: 'module',
      //     navigateFallback: '/',
      //   },
      //   // if you have shared info in svelte config file put in a separate module and use it also here
      //   kit: {}
      // }
    )
  ]
});
