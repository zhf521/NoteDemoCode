<template>
  <div>
    <label>
      <span v-show="!showInput">{{ msg }}</span>
      <input type="text" v-show="showInput" :value="msg" ref="editMsg" @blur="handleBlur($event)">
    </label>
    <br>
    <br>
    <button @click="edit">编辑</button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      showInput: false,
      msg: '你好',
    }
  },
  methods: {
    edit() {
      this.showInput = true
      this.$nextTick(function () {
        this.$refs.editMsg.focus()
      })
    },
    handleBlur(e) {
      this.showInput = false
      this.msg = e.target.value
      console.log(e.target.value)
    }
  }
}
</script>