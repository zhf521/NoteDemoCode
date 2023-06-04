<template>
  <div>
    <Student name="李四" sex="女" :age="18"></Student>
    <Student name="王五" sex="男" :age="20"></Student>
  </div>
</template>

<script>
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    Student
  }
}
</script>
