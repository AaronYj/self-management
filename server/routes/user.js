const UserModel  = require('../model/user.js')

module.exports = {
  // 登录
  async login (ctx, next) {
    const {username, password} = ctx.request.body
    const user = await UserModel.findOne({name})
    // 这里直接写注册功能的逻辑
  }
}