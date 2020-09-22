<template>
    <div class="render">
        {{ msg }} <anchor-test :level="2" title="特性333">特性</anchor-test>
    </div>
</template>

<script>
import Vue from "vue";
export default {
    data() {
        return {
            msg: "render"
        };
    },
    mounted() {},
    created() {}
};
</script>
