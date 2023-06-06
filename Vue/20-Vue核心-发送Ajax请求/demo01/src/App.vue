<template>
  <div>
    <MySearch></MySearch>
    <MyList></MyList>
  </div>
</template>

<script>
import MyList from './components/MyList'
import MySearch from './components/MySearch'

export default {
  name: 'App',
  components: {
    MyList, MySearch
  }
}
</script>

