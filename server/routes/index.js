var router = require('koa-router')();




module.exports = (app) => {
    //登录模块
    router.post('/login', require('./user').login)

    // 文章管理模块
    router.get('/blog', require('./blog').index)
    router.post('/blog/new', require('./blog').create)
    router.get('/blog/:id', require('./blog').show)
    router.get('/blog/:id/edit', require('./blog').edit)
    router.post('/blog/:id/edit', require('./blog').edit)
    router.get('/blog/:id/delete', require('./blog').delete)
  
    app
    .use(router.routes())
    .use(router.allowedMethods())


    app.use(async (ctx, next) => {
        await ctx.render('404', {
         title: 'page not find'
        })
    })
}