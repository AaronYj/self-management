const BlogModel = require('../model/Blog.js')

module.exports = {
  // 从数据库取文章数据
  async index(ctx, next) {
    const articeList = await BlogModel.find({})
    if (articeList) {
      ctx.body = {
        status: 200,
        data: articeList
      }
    } else {
      ctx.body = {
        status: 500,
        message: '文章列表请求错误！'
      }
    }
  },
  async create(ctx, next) {
    const {
      title,
      value
    } = ctx.request.body
    let errMsg = ''
    if (title === '') {
      errMsg = '标题不能为空'
    } else if (value === '') {
      errMsg = '内容不能为空'
    }
    if (errMsg) {
      ctx.body = {
        status: 404,
        message: errMsg,
      }
    } else { // 写入数据库
      const post = ctx.request.body
      const res = await BlogModel.create(post)
      // console.log(res);
      ctx.body = {
        status: 200,
        message: '发布成功！！！',
        result: res
      }
    }
  },

  async show(ctx, next) {
    let postId = ctx.params.id
    if (!postId.length === 24) {
      ctx.body = {
        status: 404,
        message: '该文章不存在或者已被删除'
      }
    }
    //查找文章数据且将关联的表数据一并取到
    const post = await BlogModel.findById(postId)
    if (!post) {
      ctx.body = {
        status: 404,
        message: '该文章不存在或者已被删除'
      }
    } else {
      ctx.body = {
        status: 200,
        data: post
      }
    }

  },
  // 编辑文章
  async edit(ctx, next) {
    if (ctx.method === 'GET') {
      const postId = ctx.params.id
      if (postId.length !== 24) {
        ctx.throw(404, '此文章不存在或已被删除')
      }
      const post = await BlogModel.findById(postId)
      ctx.body = post
    } else {
      const {
        _id,
        title,
        value
      } = ctx.request.body
      let errMsg = ''
      if (title === '') {
        errMsg = '标题不能为空'
      } else if (value === '') {
        errMsg = '内容不能为空'
      }
      if (errMsg) {
        ctx.body = {
          status: 404,
          message: errMsg,
        }
      }
      await BlogModel.findByIdAndUpdate(_id, {
        title,
        value
      })
      ctx.body = {
        status: 200,
        message: '文章更新成功！！！',
      }
    }
  },

  // 删除文章
  async delete(ctx, next) {
    const cid = ctx.params.id
    if (cid.length !== 24) {
      ctx.body = {
        status: 404,
        message: '文章不存在',
      }
    }
    const category = await BlogModel.findById(cid)
    if (!category) {
      ctx.body = {
        status: 404,
        message: '文章不存在',
      }
    }
    // 移除分类
    await BlogModel.findByIdAndRemove(cid)
    ctx.body = {
      status: 200,
      message: '文章删除成功',
    }
  }
}