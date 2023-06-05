<template>
  <div class="container">
    <Category title="美食">
      <img slot="center"
        src="https://th.bing.com/th/id/R.61124cb94372f970f23008fcfbf7373a?rik=evdzDUm5XRN1kw&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20190714%2fd9047f685b61469e942ba1a1588f71e6.jpeg&ehk=i%2bBUrdSzG3ZPjDf%2bA3YLsz5oAW9x2a%2b6uV%2bFpUZRnFs%3d&risl=&pid=ImgRaw&r=0"
        alt="">
      <a slot="footer" href="http://www.atguigu.com">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.atguigu.com">单机游戏</a>
        <a href="http://www.atguigu.com">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.atguigu.com">经典</a>
          <a href="http://www.atguigu.com">热门</a>
          <a href="http://www.atguigu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'

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
.container,
.foot {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>
