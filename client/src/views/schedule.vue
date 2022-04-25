<template>
  <div class="schedule">
    <date-card></date-card>
  </div>
</template>

<script>
import dateCard from "../components/card/date-card.vue";
export default {
  name: "schedule",
  components: {
    [dateCard.name]: dateCard,
  },
};
</script>

<style lang="less" scoped>
.schedule {
    width: 100%;
    height: 1000px;
}
</style>