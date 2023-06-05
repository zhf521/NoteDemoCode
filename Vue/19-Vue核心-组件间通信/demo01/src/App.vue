<template>
  <div>
    <h1>{{ msg }}学生的姓名是：{{ studentName }}</h1>
    <Student @getName="getStudentName"></Student>
  </div>
</template>

<script>
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    Student
  },
  data() {
    return {
      msg: '你好啊！',
      studentName: '',
    }
  },
  methods: {
    getStudentName(name) {
      this.studentName = name
    }
  }
}
</script>
