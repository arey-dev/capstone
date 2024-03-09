// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { shim: false },
  modules: [
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-primevue',
  ],

  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },

  supabase: {
    redirectOptions: {
      exclude: ['/signup'],
    },
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
        },
      ],
    },
  },

  primevue: {
    options: { unstyled: true },
    importPT: {
      from: '~/presets/wind/',
    },
  },

  // tailwind
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {
      content: ['presets/**/*.{js,vue,ts}'],
      darkMode: 'selector',
      theme: {
        fontFamily: { sans: ['Inter var', 'sans-serif'] },
        extend: {
          colors: {
            'primary-50': 'var(--primary-50)',
            'primary-100': 'var(--primary-100)',
            'primary-200': 'var(--primary-200)',
            'primary-300': 'var(--primary-300)',
            'primary-400': 'var(--primary-400)',
            'primary-500': 'var(--primary-500)',
            'primary-600': 'var(--primary-600)',
            'primary-700': 'var(--primary-700)',
            'primary-800': 'var(--primary-800)',
            'primary-900': 'var(--primary-900)',
            'primary-950': 'var(--primary-950)',
            'surface-0': 'var(--surface-0)',
            'surface-50': 'var(--surface-50)',
            'surface-100': 'var(--surface-100)',
            'surface-200': 'var(--surface-200)',
            'surface-300': 'var(--surface-300)',
            'surface-400': 'var(--surface-400)',
            'surface-500': 'var(--surface-500)',
            'surface-600': 'var(--surface-600)',
            'surface-700': 'var(--surface-700)',
            'surface-800': 'var(--surface-800)',
            'surface-900': 'var(--surface-900)',
            'surface-950': 'var(--surface-950)',
            'surface-ground': 'var(--surface-ground)',
            'surface-section': 'var(--surface-section)',
            'surface-border': 'var(--surface-border)',
            'surface-hover': 'var(--surface-hover)',
            'surface-ground-dark': 'var(--surface-ground-dark)',
            'surface-section-dark': 'var(--surface-section-dark)',
            'surface-border-dark': 'var(--surface-border-dark)',
            'surface-hover-dark': 'var(--surface-hover-dark)',
          },
        },
      },
      plugins: [],
    },
    injectPosition: 'first',
    viewer: true,
  },

  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  },
})
