<template>
  <div class="app">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    School, Student
  }
}
</script>
<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>