<template>
  <div class="artice-admin">
    <div class="admin-header">
      <span>所有文章（{{ allArticeCount }}）</span>
    </div>
    <div class="admin-content">
      <div v-for="(item, index) in list" :key="index">
        <hr />
        <book-card :book="item"></book-card>
      </div>
    </div>
  </div>
</template>

<script>
import bookCard from "../../components/card/book-card.vue";
import Cookies from "js-cookie"; // Cookie
import { getArticeList } from "@/api/service/articeList.js";
export default {
  data() {
    return {
      allArticeCount: 0,
      list: [],
    };
  },
  components: {
    [bookCard.name]: bookCard,
  },
  mounted() {
    if (!Cookies.get("user")) {
      this.$message({
        type: "error",
        message: "请先登录！！！",
      });
      this.$router.push("/");
    }
    this.getList();
  },
  methods: {
    async getList() {
      const { data } = await getArticeList();
      if (data.status === 200) {
        this.list = data.data;
        this.allArticeCount = data.data.length;
      } else {
        this.$message({
          type: "error",
          message: data.message,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.artice-admin {
  background-color: #fff;
  height: 635px;
  overflow: auto;
  .admin-header {
    height: 50px;
    padding: 15px;
    line-height: 20px;
    font-size: 13px;
    color: #007fff;
    span {
      font-weight: 700;
    }
  }
  .admin-content {
    // overflow: auto;
    padding: 0 15px 15px 15px;
    box-sizing: border-box;
    hr {
      margin-top: 5px;
      margin-bottom: 5px;
      border: 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
}
</style>