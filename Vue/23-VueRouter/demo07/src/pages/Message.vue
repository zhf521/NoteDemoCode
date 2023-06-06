<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <router-link :to="{
          name:'xiangqing',
          query:{
            id:message.id,
            title:message.title
          }
        }">{{ message.title
        }}</router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    //模拟Ajax请求从后台获取数据
    setTimeout(() => {
      const messages = [
        {
          id: 1,
          title: "message001",
        },
        {
          id: 2,
          title: "message002",
        },
        {
          id: 3,
          title: "message003",
        },
      ]
      this.messages = messages;
    }, 1000)
  },
}
</script>