import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import rem from './rem'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import { Navbar, TabItem } from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  rem,
  render: h => h(App)
}).$mount('#app')
