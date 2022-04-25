const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 设计文章的表模型
const BlogSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  value: {
    type: String,
    require: true
  },
  pv: {
    type: Number,
    default: 0
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

BlogSchema.pre('save', function(next) { // 监听文章是否保存
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  } else {
    this.meta.updateAt = Date.now()
  }
  next()
})

module.exports = mongoose.model('blog', BlogSchema)