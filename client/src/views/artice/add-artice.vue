<template>
  <div class="add-artice">
    <div class="artice-header">
      <div class="header-left">
        <input type="text" v-model="title" placeholder="输入文章标题..."/>
      </div>
      <div class="header-right">
        <span class="margin">文章将自动保存至草稿箱</span>
        <Button class="margin">草稿箱</Button>
        <Button type="primary" class="margin">发布</Button>
      </div>
    </div>
    <div class="artice-body">
      <mavon-editor v-model="value" class="input"></mavon-editor>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-artice",
  data() {
    return {
      // markdown文本框中的所有内容都会返回一个string，直接将其传入数据库保存即可
      value: "",
      title: ''
    };
  },
};
</script>

<style lang="less" scoped>
.ivu-input {
  border: 0;
}
.add-artice {
  height: 700px;
  .artice-header {
    height: 10%;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0 2px 2px rgb(204 197 185 / 50%);
    background-color: #ffffff;
    color: #252422;
    margin-bottom: 5px;
    display: flex;
    padding: 0 27px;
    justify-content: space-between;
    .header-left {
      height: 100%;
      input {
        height: 100%;
        font-size: 24px;
        font-weight: 500;
        color: #1d2129;
        padding: 0;
        border: 0;
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      span {
        font-size: 12px;
        color: #c9cdd4;
      }
      .margin {
        margin-left: 8px;
        margin-right: 8px;
      }
    }
  }
  .artice-body {
    height: 90%;
    .input {
      width: 100%;
      height: 100%;
    }
  }
}
</style>