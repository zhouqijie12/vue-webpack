<template>
  <div class="a">
    <span @click.stop="changColor($event)">【动态组件0】</span>
    <ul>
      <slot name="aa" v-for="item in book" :abc="item.name"
        >朝秦暮楚朝秦暮楚
      </slot>
    </ul>
    <B></B>
  </div>
</template>

<script>
import B from "@/components/b";

export default {
  data() {
    return {
      book: this.books
    };
  },
  props: {
    books: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    B
  },
  mounted() {
    console.log("AAAAAAA");
    console.log("abc");
  },
  methods: {
    changColor(e) {
      e.target.style.background = "red";
      console.log(this, e);
    }
  }
};
</script>

<style>
</style>
