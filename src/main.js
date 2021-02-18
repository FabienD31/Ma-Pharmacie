import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)

import Accueil from './components/Accueil';
import Login from './components/Login';
import Product from './components/Product';
import PeremptionList from './components/PeremptionList';
import SecourFirst from './components/SecourFirst';
import Stock from './components/Stock';

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/',name:"accueil", component: Accueil },
    { path: '/login', component: Login},
    { path: '/product', component: Product}, 
    { path: '/peremtion', component: PeremptionList }, 
    { path: '/secours', component: SecourFirst},
    { path: '/stock', component: Stock}
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
