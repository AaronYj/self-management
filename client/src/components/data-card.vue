<template>
  <div class="data-card">
    <div class="card-body">
      <div class="card-status">
        <div class="card-content">
          <Icon type="ios-bookmarks"></Icon>
          <div class="card-number">
            <p class="cate-category">文章总数</p>
            <span>225</span>
          </div>
        </div>
        <div class="card-footer">
          <hr />
          <div class="footer-stats">
            <Icon type="ios-eye" class="icon"></Icon>
            <span>首页展示文章数：64</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'data-card'
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
        margin-bottom: 16px;
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
      .card-footer {
        padding: 0;
        line-height: 30px;
        hr {
          margin-top: 5px;
          margin-bottom: 5px;
          border: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
        .footer-stats {
          color: #9a9a9a;
          font-weight: 400;
          font-size: 14px;
          .icon {
            margin-left: 5px;
            margin-right: 15px;
            position: relative;
            top: 0;
            color: #66615b;
          }
        }
      }
    }
  }
}
</style>