<template>
    <div class="vuex">
        我是add
        <hr />
        <p>state:{{ cs0 }}-{{ cs1 }}-{{ cs2 }}</p>
        <input type="button" value="-" @click="reduce({ b: 10 })" />
        <input type="button" value="+" @click="add({ n: 5 })" />
        <input type="button" value="+" @click="addaSync({ n: 1 })" />
        <p>getters:{{ num2 }}-{{ num3 }}--{{ filterCount }}--{{ test }}</p>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
    data() {
        return {
            numa: 0
        };
    },
    computed: {
        cs0() {
            return this.$store.state.buyStore.count;
        },
        ...mapState({
            cs1: state => state.buyStore.count
        }),
        ...mapState("buyStore", {
            cs2: state => state.count
        }),
        num3() {
            return this.$store.getters["buyStore/filterCount"];
        },
        ...mapGetters("buyStore", {
            num2: "filterCount"
        }),
        ...mapGetters("buyStore", ["filterCount", "test"])
    },
    created() {},
    methods: {
        /*reduce(){
            this.$store.commit('reduce',{n:20,b:10});

        },
        /*add(){
            //同步操作
            //this.$store.commit('add')
            /*this.$store.commit({
                type: 'add',
                n: 10
            })

            //触发一个异步操作
            this.$store.dispatch('addAction');
        }*/
        // ...mapMutations({
        //     add: 'buyStore/add',
        //     reduce: 'buyStore/reduce'
        // }),
        ...mapMutations("buyStore", {
            add: "add",
            reduce: "reduce"
        }),
        ...mapMutations("buyStore", ["add", "reduce"]),
        // ...mapActions({
        //     addaSync: 'buyStore/addAction'
        // }),
        ...mapActions("buyStore", {
            addaSync: "addAction"
        })
    }
};
</script>

<style>
input {
    width: 20px;
    height: 20px;
}
</style>
