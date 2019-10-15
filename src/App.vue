<template>
  <div id="app">
    <div class="nav">
      <ul>
        <li>
          <router-link :to="index" exact tag="a">home</router-link>
        </li>
        <li>
          <router-link :to="{path: '/about', query: {test:'test123'} }" active-class="active">about</router-link>
        </li>
        <li>
          <router-link to="/document">document</router-link>
        </li>
        <li>
          <router-link to="/user">user</router-link>
        </li>
        <li>
          <router-link to="/vuex">vuex</router-link>
        </li>
        <li>
          <router-link to="/elementui">elementui</router-link>
        </li>
        <li>
          <router-link to="/iview">iview</router-link>
        </li>
      </ul>
    </div>
    <img src="./assets/logo.png">

    <transition :name="names">
      <router-view class="centera"></router-view>
    </transition>
  </div>
</template>

<script>
//event="mouseover"
export default {
  name: "app",
  data() {
    return {
      index: "/",
      names: "left"
    };
  },
  watch: {
    $route(to, from) {
      //console.log(to,from)
      if (to.meta.index < from.meta.index) {
        this.names = "right";
      } else {
        this.names = "left";
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* .v-enter{
  opacity:0;
}
.v-enter-to{
  opacity:1;
}
.v-enter-active{
  transition: 1s;
}

.v-leave{
  opacity:1;
}
.v-leave-to{
  opacity:0;
}
.v-leave-active{
  transition: 1s;
} */

.left-enter {
  transform: translateX(100%);
}
.left-enter-to {
  transform: translateX(0);
}
.left-leave {
  transform: translateX(0);
}
.left-leave-to {
  transform: translateX(-100%);
}

.right-enter {
  transform: translateX(-100%);
}

.right-enter-to {
  transform: translateX(0);
}
.right-leave {
  transform: translateX(0);
}
.right-leave-to {
  transform: translateX(100%);
}

.left-enter-active,
.left-leave-active {
  transition: 0.5s;
}

.right-enter-active,
.right-leave-active {
  transition: 0.5s;
}
</style>
