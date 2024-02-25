// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { shim: false },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  // tailwind
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  alias: {
    pinia:
      '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  },
})
