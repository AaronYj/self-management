<template>
  <div class="layout" :class="{ 'layout-hide-text': spanLeft < 5 }">
    <div class="layout-header">
      <div class="layout-logo"><span>Aaron's System</span></div>
      <div class="layout-header-right">
        <a href="/layout">
          <Icon
            @mouseover.native="toBlue('1')"
            @mouseleave.native="back"
            :class="[isActive === '1' ? 'active' : '']"
            type="ios-home-outline"
          ></Icon>
        </a>
        <Dropdown>
          <a href="javascript:void(0)">
            <Icon
              @mouseover.native="toBlue('2')"
              @mouseleave.native="back"
              :class="[isActive === '2' ? 'active' : '']"
              type="ios-person-outline"
            ></Icon>
          </a>
          <Dropdown-menu slot="list" events-enabled>
            <Dropdown-item disabled>{{ user }}</Dropdown-item>
            <Dropdown-item>个人中心</Dropdown-item>
            <Dropdown-item @click.native="logout">退出登录</Dropdown-item>
          </Dropdown-menu>
        </Dropdown>
      </div>
    </div>
    <Row type="flex">
      <i-col span="5" class="layout-menu-left">
        <Menu :active-name="defaultActive" width="auto" :open-names="['1']">
          <Menu-item name="layout" to="/layout" class="first-menu"
            ><Icon type="ios-apps"></Icon>概览</Menu-item
          >
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon
              ><span class="ivu-text">文章管理</span>
            </template>
            <Menu-item name="articeAdmin" to="/articeAdmin">文章目录</Menu-item>
            <Menu-item name="addArtice" to="/addArtice">写文章</Menu-item>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-navigate"></Icon
              ><span class="ivu-text">学习进度管理</span>
            </template>
            <Menu-item name="articeAdmin" to="/articeAdmin">目录</Menu-item>
            <Menu-item name="addArtice" to="/addArtice">写文章</Menu-item>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-navigate"></Icon
              ><span class="ivu-text">日程管理</span>
            </template>
            <Menu-item name="schedule" to="/schedule">日程表</Menu-item>
          </Submenu>
        </Menu>
      </i-col>
      <i-col :span="spanRight" class="layout-main">
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb-item :to="{ path: '/layout' }">首页</Breadcrumb-item>
            <Breadcrumb-item
              v-for="(item, index) in $route.meta"
              :key="index"
              >{{ item }}</Breadcrumb-item
            >
          </Breadcrumb>
        </div>
        <div class="layout-content">
          <div class="layout-content-main">
            <router-view></router-view>
          </div>
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
import Cookies from "js-cookie"; // Cookie
export default {
  data() {
    return {
      value: "",
      isActive: "",
      spanLeft: 5,
      spanRight: 19,
      user: "",
    };
  },
  mounted() {
    if (!Cookies.get("user")) {
      this.$message({
        type: "error",
        message: "请先登录！！！",
      });
      this.$router.push("/");
    } else {
      this.user = localStorage.getItem("userName");
    }
  },
  computed: {
    iconSize() {
      return this.spanLeft === 5 ? 14 : 24;
    },
    defaultActive: function () {
      return this.$route.path.replace("/", "");
    },
  },
  methods: {
    logout() {
      Cookies.remove("user");
      localStorage.removeItem("userName");
      this.$message({
        type: "success",
        message: "成功退出登录！！！",
      });
      this.$router.push("/");
    },
    toggleClick() {
      if (this.spanLeft === 5) {
        this.spanLeft = 2;
        this.spanRight = 22;
      } else {
        this.spanLeft = 5;
        this.spanRight = 19;
      }
    },
    toBlue(str) {
      this.isActive = str;
    },
    back() {
      this.isActive = "0";
    },
  },
};
</script>
<style scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  height: 100vh;
}
.layout-main {
  overflow: auto;
  scroll-behavior: smooth;
  transition: top 0.3s ease-in-out;
  position: absolute;
  top: 50px;
  bottom: 0;
  right: 0;
}

.ivu-row-flex {
  height: 100%;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.layout-content {
  min-height: 200px;
  margin: 15px;
  border-radius: 4px;
}
.layout-content-main {
  padding: 10px;
}
.layout-menu-left {
  background: #1b2032;
}
.ivu-menu {
  background: #1b2032;
  color: #fff;
  font-size: 13px;
}
.ivu-menu-item {
  color: #fff;
  font-size: 13px;
}

.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
  color: #3370ff !important;
  background: #29304b;
  z-index: 2;
}
.layout-header {
  background-color: #1b2032;
  box-sizing: border-box;
  height: 50px;
  width: 100%;
}
.layout-logo {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  color: #ffffff;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 0px;
  left: 40px;
}
.layout-header-right {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  float: right;
  margin-right: 30px;
}
.layout-header-right .ivu-icon {
  display: block;
  height: 100%;
  line-height: 50px;
  width: 50px;
  color: #ffffff;
  font-size: 30px;
  text-align: center;
}
.ivu-dropdown-item {
  font-size: 12px !important;
}
.active {
  background-color: #29304b;
  color: #3370ff !important;
}
.ivinput {
  margin-right: 50px;
}
.layout-ceiling-main a {
  color: #9ba7b5;
}
.layout-hide-text .layout-text {
  display: none;
}
.ivu-col {
  transition: width 0.2s ease-in-out;
}
.ivu-col-span-5 {
  width: 17%;
}
.ivu-col-span-19 {
  width: 83%;
}
</style>