import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from './vuex/index'
import VueAreaLinkage from 'vue-area-linkage'
import plugins from '@/router/plugins'
import speak from '@/components/views/speak';
import Im from 'imzqj';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/app.css'
import { db } from './assets/js/constants/index'
import iView from 'iview'
import VueDraggableResizable from 'vue-draggable-resizable'
import VueClipboard from 'vue-clipboard2'
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
    {
        name: 'react app', // app name registered
        entry: '//localhost:3002',
        container: '#app2',
        activeRule: '/user',
    }
]);
start();


// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.component("anchor-test", {
    props: {
        level: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },
    render(h) {
        // 字符串
        // return h("h" + this.level, [
        //     h('a', {
        //         domProps: {
        //             href: '#' + this.level
        //         }
        //     },
        //         this.$slots.default
        //     )
        // ]);

        // 对象或者组件
        // return h({
        //     template: '<div>test render</div>'
        // })

        return h(speak, {
            props: {
                smoeProps: 'foo'
            }
        })

        // 函数
        let eleFun = function () {
            return {
                template: `<div>Hello Vue!</div>`
            }
        }
        return h(eleFun())
    }
});


// import 'iview/dist/styles/iview.css'

console.log(db.admin_username)

// Vue.directive('focusa', {
//   // 当被绑定的元素插入到 DOM 中时……
//   inserted: function (el) {
//     // 聚焦元素
//     el.focus()
//   }
// })
Vue.use(Im)
Vue.use(iView)
Vue.use(VueAreaLinkage)
Vue.use(ElementUI)
Vue.use(VueClipboard)
Vue.use(plugins, 'a', 'b')

new Vue({
    el: '#app',
    router,
    store,
    template: '<App />',
    components: { App }
})
