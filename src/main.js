import Vue from 'vue'

import App from './App'
import router from '@/router'
import store from './vuex/index'
import VueAreaLinkage from 'vue-area-linkage'

import '@/assets/css/app.css'

import * as constants from './assets/js/constants';
import {db, user} from './assets/js/constants/index'

console.log(db.admin_username)

/*Vue.directive('focusa', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})*/


Vue.use(VueAreaLinkage);

new Vue({
    el:"#app",
    router,
    store,
    template:'<App />',
    components:{App}
})

