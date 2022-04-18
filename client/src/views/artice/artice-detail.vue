<template></template>

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