<template>
  <div>
    <Banner></Banner>
    <!-- 原始html中我们使用a标签实现页面的跳转 -->
    <!-- <a href="./about.html">About</a> -->
    <!-- <a href="./home.html">Home</a> -->
    <!-- Vue中借助router-link标签实现路由的切换 -->
    <router-link to="/about">About</router-link>
    <br>
    <router-link to="/home">Home</router-link>
    <!-- 指定组件的呈现位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'

export default {
  name: 'App',
  components: {
    Banner
  }
}
</script>
