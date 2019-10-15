<template>
    <div class="d">
        <p>定取它的值定取它的值</p>
        <slot>slotaaaaa</slot><br/>
        <slot name="todo">slotaaaaa有名字</slot><br/>
        <br/><br/>
        <slot name="scopxe" :user="user">
            {{ user.lastName }}
        </slot>
        <child :level="level">render components</child>
    </div>
</template>

<script>

import Vue from 'vue'
Vue.component('child', {
    render(h) {
        const tag = ['div', 'p', 'strong', 'h1', 'h2', 'textarea'][this.level]
        return h(tag, this.$slots.default)
    },
    props: {
        level: {  type: Number,  required: true  } 
    }
});

export default {
    inject: {
        zhou: {
            from: 'zhou1', // 指定取它的值
            default: 'sss'
        }
    },
    data() {
        return {
            level: 3,
            user:{
                lastName:"Zhang",
                firstName:"yue"
            },
            testx:[1,2,3,4]
        };
    },
    props: {
        width: {
            type: String,
            default: ''
        }
    },
    mounted() {
        console.log(this.$attrs);
        console.log(this.$listeners);
        console.log('this.zhou===', this.zhou);
        this.$emit("update:titlea", '子组件改了x');

        this.$eventBus.$on('ac', (val) => {
            console.log(val);
        })
        console.log('子子子')
    },
    methods: {
        test () {
            console.log('test');
        }
    }
};
</script>

