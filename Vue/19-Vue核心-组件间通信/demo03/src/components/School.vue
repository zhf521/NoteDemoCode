<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h2>学生姓名：{{ studentName }}</h2>
  </div>
</template>
<script>
import pubsub from 'pubsub-js'
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
    this.pid = pubsub.subscribe('getData', (msgName, data) => {//此处必须要有msgName参数，否则传递的data数据是错误的
      this.studentName = data
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe(pid)
  },
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>