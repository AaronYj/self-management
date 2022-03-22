const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 设计用户的模型
const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    }
  }
})

// 通过 mongoose.model 往 mongoodb数据库里面映射出一张User表
module.exports = mongoose.model('User', UserSchema)