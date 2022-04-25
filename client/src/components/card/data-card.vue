<template>
  <div class="data-card">
    <div class="card-body">
      <div class="card-status">
        <div class="card-content">
          <Icon type="ios-bookmarks"></Icon>
          <div class="card-number">
            <p class="cate-category">{{ cardData.title }}</p>
            <span>{{ cardData.titleCount }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'data-card',
  props: {
    cardData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="less" scoped>
.data-card {
  width: 19%;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 2px rgb(204 197 185 / 50%);
  background-color: #ffffff;
  color: #252422;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  border: none;
  .card-body {
    padding: 15px 15px 10px 15px;
    .card-status {
      .card-content {
        display: flex;
        margin-bottom: 10px;
        // position: relative;
        margin-left: 0;
        margin-right: 0;
        height: auto;
        zoom: 1;
        .ivu-icon {
          display: block;
          width: 40%;
          height: 84px;
          line-height: 84px;
          text-align: center;
          font-size: 42px;
          flex: 0 0 auto;
        }
        .card-number {
          width: 60%;
          font-size: 28px;
          text-align: right;
          p {
            color: #9a9a9a;
            font-size: 16px;
            line-height: 1.4em;
          }
        }
      }
    }
  }
}
</style>