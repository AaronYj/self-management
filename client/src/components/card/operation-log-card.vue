<template>
  <div class="operation-log-card">
    <div class="card-header">
      <span>流水账</span>
      <hr />
    </div>

    <div class="card-body">
      <Timeline>
        <TimelineItem
          pending
          color="green"
          v-for="(item, index) in 15"
          :key="index"
        >
        2022.4.7 提交了离职申请，欠我的期望低级趣味地区片刻情况为皮卡丘稳婆看破3额度回去我都i京东i家哦狙
        </TimelineItem>
      </Timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: 'operation-log-card'
}
</script>

<style lang="less" scoped>
.operation-log-card {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 2px 2px rgb(204 197 185 / 50%);
  background-color: #ffffff;
  color: #252422;
  margin-bottom: 20px;
  // position: relative;
  z-index: 1;
  border: none;
  .card-header {
    padding: 20px 20px 0;
    border-bottom: 0;
    span {
      font-size: 23px;
      font-weight: 500;
    }
    hr {
      margin-top: 5px;
      margin-bottom: 5px;
      border: 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
  .card-body {
    width: 100%;
    height: 600px;
    overflow: hidden;
    padding: 30px 25px 10px 50px;
  }
}
</style>