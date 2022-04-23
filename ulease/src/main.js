import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { handleCredentialResponse } from '@/utils'

Vue.config.productionTip = false

google.accounts.id.initialize({
  client_id: '138087405713-8buo3c9q5atecrbedfejpl589ql8esip.apps.googleusercontent.com',
  callback: handleCredentialResponse,
  cancel_on_tap_outside: false,
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
