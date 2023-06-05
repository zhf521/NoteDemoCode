<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生姓名给School组件</button>
  </div>
</template>
<script>
export default {
  name: "Student",
  data() {
    return {
      name: '张三',
      sex: '男',
      number: 0,
    }
  },
  methods: {
    sendStudentName() {
      this.$bus.$emit('getData', this.name)
    }
  }
}
</script>