// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    compatibilityDate: '2024-03-13',
    minify: true,
    compressPublicAssets: true
  },
  routeRules: {
    '/**': { 
      cors: true,
      headers: {
        'access-control-allow-methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
        'access-control-allow-origin': '*'
      }
    }
  },
  experimental: {
    payloadExtraction: false,
    treeshakeClientOnly: true,
    componentIslands: true
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 1000
    },
    css: {
      devSourcemap: true
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  router: {
    options: {
      strict: false
    }
  },
  css: [
    '~/assets/css/main.css'
  ],
  ssr: false,
  target: 'static',
  generate: {
    fallback: true
  }
}) 