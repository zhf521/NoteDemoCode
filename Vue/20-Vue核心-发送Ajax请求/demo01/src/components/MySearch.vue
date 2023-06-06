<template>
  <div>
    <h1>Search Github Users</h1>
    <input type="text" placeholder="enter the name you search" v-model="searchName">
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  name: 'MySearch',
  data() {
    return {
      searchName: "",
    }
  },
  methods: {
    search() {
      const searchName = this.searchName.trim()
      if (searchName) {
        this.$bus.$emit('updateList', searchName)
      }
    }
  }
}
</script>