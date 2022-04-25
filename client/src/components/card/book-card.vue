<template>
  <div class="bookCard">
    <div class="header">
      <span class="title" @click="detail(book._id)">{{ book.title }}</span>
    </div>
    <div class="bookData">
      <span class="submit"> 发布时间：{{ book.meta.createAt }} </span>

      <Dropdown trigger="click" placement="bottom-end">
        <a href="javascript:void(0)">
          <Icon type="ios-more" size="24" color="#909090" />
        </a>
        <DropdownMenu slot="list">
          <DropdownItem @click.native="edit" name="edit">编辑</DropdownItem>
          <DropdownItem @click.native="modal = true" name="deleted"
            >删除</DropdownItem
          >
        </DropdownMenu>
      </Dropdown>
      <Modal v-model="modal" width="360">
        <p slot="header" style="color: #f60; text-align: center">
          <Icon type="ios-information-circle"></Icon>
          <span>删除确认</span>
        </p>
        <div style="text-align: center">
          <p>此文章删除后，相关数据将全部丢失。</p>
          <p>是否继续删除？</p>
        </div>
        <div slot="footer">
          <Button
            type="error"
            size="large"
            long
            :loading="modal_loading"
            @click="delArtice"
            >确定删除</Button
          >
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import { detail } from "@/api/service/articeList.js";
import { deleted } from "@/api/service/articeList.js";
import { toEdit } from "@/api/service/articeList.js";
export default {
  name: "book-card",
  props: {
    book: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      modal: false,
      modal_loading: false,
    };
  },
  methods: {
    async edit() {
      let Id = this.book._id;
      const { data } = await toEdit(Id);
      this.$router.push({
        name: "addArtice",
        params: data,
      });
    },
    async delArtice() {
      this.modal_loading = true;
      let id = this.book._id;
      const { data } = await deleted(id);
      setTimeout(() => {
        this.modal_loading = false;
        this.modal2 = false;
        this.$message({
          type: "success",
          message: data.message,
        });
      }, 2000);
      this.$router.go(0);
    },
    async detail(Id) {
      // 点击跳转对应_id的页面，并在页面获取id，发送请求
      const { data } = await detail(Id);
      if (data.status === 200) {
        this.$router.push({
          name: "detail",
          params: data.data,
        });
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
.bookCard {
  height: 100px;
  padding: 15px 5px;
  box-sizing: border-box;

  .header {
    .title {
      font-weight: 700;
      color: #333;
      line-height: 2;
      font-size: 16px;
    }
  }
  .bookData {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    color: #909090;
    margin-top: 10px;
    .ivu-dropdown-menu {
      min-width: 55px;
    }
  }
}
</style>