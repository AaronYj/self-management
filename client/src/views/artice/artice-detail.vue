<template>
  <div class="artice-detail">
    <div class="artice-title">
      <span class="title">{{ title }}</span>
      <hr />
    </div>
    <div id="content"></div>
  </div>
</template>

<script>
import { marked } from "marked";
export default {
  name: "artice-detail",
  data() {
    return {
      title: "",
    };
  },
  mounted() {
    const articeDetail = this.$route.params;
    this.title = articeDetail.title;
    document.getElementById('content').innerHTML = marked.parse(articeDetail.value)
  },
};
</script>

<style lang="less" scoped>
.artice-detail {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgb(204 197 185 / 50%);
  .artice-title {
    line-height: 40px;
    font-size: 24px;
    padding: 20px 200px 20px 200px;
    text-align: center;
    .title {
      font-weight: 700;
      color: #333;
    }
    hr {
      margin-top: 15px;
      border: 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
  #content {
    padding: 40px 100px 50px 100px;
    box-sizing: border-box;
  }
}
</style>