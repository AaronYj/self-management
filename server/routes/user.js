const UserModel  = require('../model/user.js')
const bcrypt = require('bcryptjs')

module.exports = {
  // 登录
  async login (ctx, next) {
    const { username, password } = ctx.request.body
    const user = await UserModel.findOne({ username })
    if (user && await bcrypt.compare(password, user.password)) {
      ctx.body = {
        status: 200,
        message: '登录成功！',
        data: user
      }
    } else if (!user) {
      // 账号不存在，自动注册并登录的情况
      // 生成salt
      const salt = bcrypt.genSaltSync(10)
      let { username, password } = ctx.request.body
      password = await bcrypt.hash(password, salt)

      const user = {
        username,
        password
      }
      // 存储到数据库
      const result = await UserModel.create(user)
      ctx.body = {
        status: 200,
        message: '已自动注册并登录成功！',
        data:result
      }
    }
    else {
      // 密码错误
      ctx.body = {
        status: 403,
        message: '用户名或密码错误, 请重试！！！'
      }
    }
  }
}