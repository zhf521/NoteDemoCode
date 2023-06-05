<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h2>学生姓名：{{ studentName }}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: 'QFNU',
      address: '曲阜',
      studentName: '',
    }
  },
  mounted() {
    this.$bus.$on('getData', (data) => {
      console.log('我是School组件,收到了数据', data)
      this.studentName = data
    })
  },
  beforeDestroy() {
    this.$bus.$off('getData')
  },
}
</script>
<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>