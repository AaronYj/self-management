<template>
  <div class="add-artice">
    <div class="artice-header">
      <div class="header-left">
        <input type="text" v-model="title" placeholder="输入文章标题..." />
      </div>
      <div class="header-right">
        <Button type="primary" class="margin" @click="submit">发布</Button>
      </div>
    </div>
    <div class="artice-body">
      <mavon-editor v-model="value" class="input"></mavon-editor>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie"; // Cookie
import { create } from "@/api/service/articeList.js";
import { editSubmit } from "@/api/service/articeList.js";
export default {
  name: "add-artice",
  data() {
    return {
      // markdown文本框中的所有内容都会返回一个string，直接将其传入数据库保存即可
      Id: "0",
      value: "",
      title: "",
    };
  },
  mounted() {
    if (!Cookies.get("user")) {
      this.$message({
        type: "error",
        message: "请先登录！！！",
      });
      this.$router.push("/");
    }
    if (this.$route.params) {
      this.title = this.$route.params.title;
      this.value = this.$route.params.value;
      if(this.$route.params._id) {
        this.Id = this.$route.params._id
      }
    }
  },
  methods: {
    async submit() {
      if (this.Id.length !== 24) {
        const { data } = await create({ title: this.title, value: this.value });
        console.log('发布', data.result)
        if (data.status === 200) {
          this.$message({
            type: "success",
            message: data.message,
          });
          this.$router.push({
            name: 'detail',
            params: data.result
          });
        } else {
          this.$message({
            type: "error",
            message: data.message,
          });
        }
      } else {
        const { data } = await editSubmit({
          _id: this.Id,
          title: this.title,
          value: this.value,
        });
        console.log('更新', data.result)
        if (data.status === 200) {
          this.$message({
            type: "success",
            message: data.message,
          });
          this.$router.push('articeAdmin');
        } else {
          this.$message({
            type: "error",
            message: data.message,
          });
        }
      }
    },
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
    margin-bottom: 8px;
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
        width: 650px;
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
    }
  }
  .artice-body {
    height: 780px;
    .input {
      width: 100%;
      height: 100%;
    }
  }
}
</style>