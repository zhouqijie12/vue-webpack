<template>
    <div class="b">
        【动态组件1】<C><span slot="aaa">ssss</span></C>
    </div>
</template>

<script>
import C from "@/components/c";
export default {
    data() {
        return {
            test: "de_modules/_eslint@3.19.0@eslint/lib/api.js"
        };
    },
    mounted() {
        console.log("BBBBB");
    },
    components: {
        C
    }
};
</script>

<style>
</style>
