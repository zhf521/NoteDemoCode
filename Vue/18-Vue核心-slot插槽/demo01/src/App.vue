<template>
  <div class="container">
    <Category title="美食">
      <img
        src="https://th.bing.com/th/id/R.61124cb94372f970f23008fcfbf7373a?rik=evdzDUm5XRN1kw&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20190714%2fd9047f685b61469e942ba1a1588f71e6.jpeg&ehk=i%2bBUrdSzG3ZPjDf%2bA3YLsz5oAW9x2a%2b6uV%2bFpUZRnFs%3d&risl=&pid=ImgRaw&r=0"
        alt="">
    </Category>

    <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>

    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
export default {
  name: 'App',
  components: {
    Category
  },
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《哈哈哈》']
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
