<template>
  <div>
    <h2>当前求和为：{{ $store.state.sum }}</h2>
    <h3>当前求和放大10倍为:{{ $store.getters.bigSum }}</h3>
    <select v-model.number="n">
      <!-- 这里的.number是指令修饰符，将输入的数据转换为数字 -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数时再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>
<script>
export default {
  name: 'Count',
  data() {
    return {
      n: 1,//用户选择的数字
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('jia', this.n)
    },
    decrement() {
      this.$store.dispatch('jian', this.n)
    },
    incrementOdd() {
      this.$store.dispatch('jiaOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('jiaWait', this.n)
    },
  },
}
</script>