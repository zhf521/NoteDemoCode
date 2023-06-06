<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <router-link replace :to="{ name: 'xinwen' }">News</router-link>
      <br>
      <router-link replace to="/home/message">Message</router-link>
      <div>
        <keep-alive include="News">
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>