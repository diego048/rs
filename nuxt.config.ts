// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['nuxt-swiper'],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'RSpharma',
            meta: [
              { name: 'description', content: 'a' }
            ],
          },
      },
})
