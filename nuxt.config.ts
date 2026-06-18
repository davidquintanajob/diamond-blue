// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

const siteUrl =
  process.env.NUXT_PUBLIC_SITE_URL || "https://your-domain.com";

const siteName = "Diamond Blue Pool Services";

const siteDescription =
  "Professional pool cleaning, maintenance, repair and renovation services for residential and commercial pools.";

export default defineNuxtConfig({
  compatibilityDate: "2026-01-01",

  devtools: {
    enabled: false,
  },

  css: [
    "~/assets/css/main.css",
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "nuxt-og-image",
    "@nuxt/image", // <--- AÑADIDO
  ],

  runtimeConfig: {
    public: {
      siteUrl,
      siteName,
      siteDescription,
    },
  },

  site: {
    url: siteUrl,
    name: siteName,
  },

  // Para eliminar el warning de og-image (si no usas generación dinámica)
  ogImage: {
    zeroRuntime: true,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },

      title: siteName,

      titleTemplate: `%s | ${siteName}`,

      meta: [
        {
          charset: "utf-8",
        },

        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },

        {
          name: "description",
          content: siteDescription,
        },

        {
          name: "keywords",
          content:
            "pool cleaning,pool maintenance,pool repair,pool renovation,swimming pools,residential pools,commercial pools",
        },

        {
          name: "author",
          content: siteName,
        },

        {
          name: "robots",
          content: "index,follow,max-image-preview:large",
        },

        {
          name: "theme-color",
          content: "#0EA5E9",
        },

        {
          name: "msapplication-TileColor",
          content: "#0EA5E9",
        },

        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },

        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "default",
        },

        /*
        |--------------------------------------------------------------------------
        | Open Graph
        |--------------------------------------------------------------------------
        */

        {
          property: "og:type",
          content: "website",
        },

        {
          property: "og:site_name",
          content: siteName,
        },

        {
          property: "og:title",
          content: siteName,
        },

        {
          property: "og:description",
          content: siteDescription,
        },

        {
          property: "og:url",
          content: siteUrl,
        },

        {
          property: "og:locale",
          content: "en_US",
        },

        {
          property: "og:image",
          content: `${siteUrl}/seo.jpg`,
        },

        {
          property: "og:image:width",
          content: "1200",
        },

        {
          property: "og:image:height",
          content: "630",
        },

        {
          property: "og:image:type",
          content: "image/jpeg",
        },

        {
          property: "og:image:alt",
          content: siteName,
        },

        /*
        |--------------------------------------------------------------------------
        | Twitter
        |--------------------------------------------------------------------------
        */

        {
          name: "twitter:card",
          content: "summary_large_image",
        },

        {
          name: "twitter:title",
          content: siteName,
        },

        {
          name: "twitter:description",
          content: siteDescription,
        },

        {
          name: "twitter:image",
          content: `${siteUrl}/seo.jpg`,
        },

        {
          name: "twitter:image:alt",
          content: siteName,
        },
      ],

      link: [
        {
          rel: "canonical",
          href: siteUrl,
        },

        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },

        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
        },

        {
          rel: "manifest",
          href: "/site.webmanifest",
        },

        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },

        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },

        {
          rel: "dns-prefetch",
          href: "//fonts.googleapis.com",
        },
      ],
    },
  },

  sitemap: {
    autoLastmod: true,
    discoverImages: true,
  },

  nitro: {
    compressPublicAssets: true,
  },
});