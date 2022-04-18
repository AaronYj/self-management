<template>
  <div class="artice-admin">这是文章目录页面的内容区域</div>
</template>

<script>
export default {
  mounted() {
    if (!Cookies.get("user")) {
      this.$message({
        type: "error",
        message: "请先登录！！！",
      });
      this.$router.push("/");
    }
  },
};
</script>

<style>
</style>