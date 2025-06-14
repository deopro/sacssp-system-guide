// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    compatibilityDate: '2025-06-13',
    minify: true,
    compressPublicAssets: true
  },
  routeRules: {
    '/**': { 
      cors: true,
      headers: {
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
        'Access-Control-Allow-Origin': '*'
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
  ]
}) 