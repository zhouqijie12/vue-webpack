<template>
    <div class="d">
        <p>我是子组件显示的p</p>
        <slot>slot 默认值</slot><br />
        <slot name="todo">slot 名字为todo</slot><br />
        <br /><br />
        <slot name="scopxe" :user="user">
            slot scopxe
            {{ user.lastName }}
        </slot>
        <child :level="level">render components</child>
    </div>
</template>

<script>
import Vue from "vue";
Vue.component("child", {
    render(h) {
        const tag = ["div", "p", "strong", "h1", "h2", "textarea"][this.level];
        return h(tag, this.$slots.default);
    },
    props: {
        level: { type: Number, required: true }
    }
});

export default {
    inject: {
        zhou: {
            from: "zhou1", // 指定取它的值
            default: "sss"
        }
    },
    data() {
        return {
            level: 3,
            user: {
                lastName: "lastNamelastNamelastName",
                firstName: "firstNamefirstName"
            },
            testx: [1, 2, 3, 4]
        };
    },
    inheritAttrs: true,
    props: {
        width: {
            type: String,
            default: ""
        }
    },
    mounted() {
        console.log("this.$attrs", this.$attrs);
        // console.log(this.$listeners);
        // console.log("this.zhou===", this.zhou);
        // console.log("this.$parent", this.$parent);
        // this.$emit("update:titlea", "由titlex变成 子组件改了");
        this.$eventBus.$on("ac", val => {
            console.log(val);
        });
        // console.log('子子子')
    },
    methods: {
        test() {
            console.log("test");
        }
    }
};
</script>

