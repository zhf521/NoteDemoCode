<template>
  <ul>
    <li v-for="message in messages" :key="message.id">
      <a href="#">{{ message.title }}</a>
    </li>
  </ul>
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