const UserModel  = require('../model/user.js')
const bcrypt = require('bcryptjs')

module.exports = {
  // 登录
  async login (ctx, next) {
    const { username, password } = ctx.request.body
    const user = await UserModel.findOne({ username })
    ctx.body = user
    // if (user && password === user.password) {
    //   ctx.body = {
    //     message: '登录成功！',
    //     data: user
    //   }
    // } else if (user && password !== user.password) {
    //   // 密码错误
    //   ctx.body = {
    //     message: '用户名或密码错误！'
    //   }
    // } else {
    //   // 账号不存在，自动注册并登录的情况
    //   // 生成salt
    //   const salt = bcrypt.genSaltSync(10)
    //   let { username, password } = ctx.request.body
    //   password = await bcrypt.hash(password, salt)

    //   const user = {
    //     username,
    //     password
    //   }
    //   // 存储到数据库
    //   const result = await UserModel.create(user)
    //   ctx.body = {
    //     message: '已自动注册并登录成功！',
    //     data:result
    //   }
    // }
  }
}