<template>
  <div>
    <h2 v-if="loading">Loading...</h2>
    <h2 v-if="errorMsg">{{ errorMsg }}</h2>
    <div v-for="(user, index) in users" :key="index">
      <a :href="user.url">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.name }}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: 'MyList',
  data() {
    return {
      firstView: true,
      loading: false,
      users: null,
      errorMsg: ''
    }
  },
  mounted() {
    this.$bus.$on("updateList", (searchName) => {

      this.firstView = false
      this.loading = true
      this.users = null
      this.errorMsg = ""

      axios.get(`https://api.github.com/search/users?q=${searchName}`).then((response) => {
        console.log('请求成功')
        const result = response.data
        const users = result.items.map((item) => ({
          url: item.html_url,
          avatar_url: item.avatar_url,
          name: item.login
        }))
        this.loading = false
        this.users = users
      })
        .catch((error) => {
          this.loading = false
          this.errorMsg = "请求失败"
          console.log('请求失败')
          console.log(error)
        })
    })
  }
}
</script>