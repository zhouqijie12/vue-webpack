import Vue from 'vue'

import App from './App'
import router from '@/router'
import store from './vuex/index'
import VueAreaLinkage from 'vue-area-linkage'
import plugins from '@/router/plugins'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/assets/css/app.css'

import * as constants from './assets/js/constants'
import {db, user} from './assets/js/constants/index'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

console.log(db.admin_username)

/* Vue.directive('focusa', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})*/

Vue.use(iView)
Vue.use(VueAreaLinkage)
Vue.use(ElementUI)
Vue.use(plugins, 'a', 'b')

new Vue({
  el: "#app",
  router,
  store,
  template: '<App />',
  components: {App}
})
