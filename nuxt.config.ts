// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  buildModules: ['@nuxt/typescript-build'],
  devtools: {enabled:true},
  modules: ['@nuxtjs/tailwindcss','@invictus.codes/nuxt-vuetify','@pinia/nuxt'],
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ] 
    }
  },
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
    }
  }
})
