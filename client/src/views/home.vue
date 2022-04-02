<template>
  <div class="home">
    <div class="home-top">
      <data-card v-for="(item, index) in 5" :key="index"></data-card>
    </div>
    <div class="home-middle">
      <chart-card></chart-card>
    </div>
    <div class="home-bottom">
      <div class="home-bottom-left">
        <date-card></date-card>
      </div>
      <div class="home-bottom-right">
        <operation-log-card></operation-log-card>
      </div>
    </div>
  </div>
</template>

<script>
import dataCard from '../components/card/data-card.vue'
import chartCard from '../components/card/chart-card.vue'
import dateCard from '../components/card/date-card.vue'
import operationLogCard from '../components/card/operation-log-card.vue'
export default {
  name: 'home',
  components: {
    [dataCard.name]: dataCard,
    [chartCard.name]: chartCard,
    [dateCard.name]: dateCard,
    [operationLogCard.name]: operationLogCard
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
  .home-middle {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 465px;
  }
  .home-bottom {
    display: flex;
    margin-top: 20px;
    .home-bottom-left {
      display: block;
      box-sizing: border-box;
      width: 50%;
      padding-right: 8px;
      height: 720px;
    }
    .home-bottom-right {
      padding-left: 8px;
      display: block;
      box-sizing: border-box;
      width: 50%;
      height: 720px;
    }
  }
}
</style>