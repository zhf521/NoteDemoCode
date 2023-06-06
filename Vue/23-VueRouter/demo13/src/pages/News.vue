<template>
  <ul>
    <li :style="{ opacity }">欢迎学习Vue</li>
    <li v-for="(news, index) in newsArr" :key="index">{{ news }} <input type="text"> </li>
  </ul>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      newsArr: ["news001", "news002", "news003", "news004"],
      opacity: 1,
    }
  },
  activated() {
    console.log('News组件被激活了')
    this.timer = setInterval(() => {
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  },
  deactivated() {
    console.log('News组件失活了')
    clearInterval(this.timer)
  }
}
</script>