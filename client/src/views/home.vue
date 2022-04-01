<template>
  <div class="home">
    <div class="home-top">
      <data-card v-for="(item, index) in 5" :key="index"></data-card>
    </div>
    <div class="home-middle"></div>
    <div class="home-bottom"></div>
  </div>
</template>

<script>
import dataCard from '../components/data-card.vue'
export default {
  name: 'home',
  components: {
    [dataCard.name]: dataCard
  },
  data () {
    return {

    }
  },
}
</script>

<style lang="less" scoped>
.home {
  // width: 100%;
  .home-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>