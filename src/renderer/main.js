import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

// translations
import VueI18n from 'vue-i18n'

// CSS Framework - bulma
import 'bulma/css/bulma.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueI18n)

// Ready translated locale messages
const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  fr: {
    message: {
      hello: 'Salut le monde'
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'fr', // set locale
  messages // set locale messages
})

/* eslint-disable no-new */
new Vue({
  i18n,
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
