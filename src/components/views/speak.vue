<template>
    <div class="speak">我 speak {{ smoeProps }}</div>
</template>

<script>
export default {
    props: {
        smoeProps: {
            type: String,
            default: "speak...."
        }
    }
};
</script>

<style>
</style>
