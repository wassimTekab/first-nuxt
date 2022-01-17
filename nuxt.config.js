import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate:'%s - global title',
    title: pkg.name,// default title
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red' },
  // loading:"~/componets/LoadingBar.vue" if we want to create custom progress bar

  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~/plugins/hello.js", mode: "server" },
    // { src: "~/plugins/hello.js", mode: "client" }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  // extend routes
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'blog2',
        path: '/asd',
        component: resolve(__dirname, 'pages/blog.vue')
      })
    }
  },
  //midllewares
  serverMiddleware:[
    // "middlewaare", // node module
    '~/middleware/logger.js',// global middleware
    { path:'/blog',handler:'~/middleware/logger.js'}
  ],


  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
