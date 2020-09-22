
export default {
    install(Vue, options, options2) {
        console.log(options, 'options')
        console.log(options2, 'options2')
        Vue.prototype.$toUpperCase = function (val) {
            return val.toUpperCase()
        }
        Vue.prototype.num = 10
        Vue.prototype.$opt = options;
        Vue.prototype.$eventBus = new Vue()


        Vue.prototype.$filterRules = function (item) {
            console.log(item);
            let rules = [];
            if (item.required) {
                rules.push({ required: true, message: item.message, trigger: 'blur' })
            }
            if (item.maxLength) {
                rules.push({ min: 1, max: item.maxLength, message: '最多输入' + item.maxLength + '个字符!', trigger: 'blur' })
            }
            if (item.min && item.max) {
                rules.push({ min: item.min, max: item.max, message: `长度在${item.min}到${item.max}个字符`, trigger: 'blur' })
            }
            if (item.validator) {
                rules.push({ validator: item.validator, message: item.funMessage, trigger: 'blur' })
            }
            return rules;
        }

        Vue.mixin({
            created() {
                // console.log('组件开始加载')
            },
            methods: {
                abc() {
                    // alert('fdasfads')
                }
            }
        })
    }
}
