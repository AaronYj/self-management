var router = require('koa-router')();




module.exports = (app) => {
    //login
    router.post('/login', require('./user').login)
    app
    .use(router.routes())
    .use(router.allowedMethods())


    app.use(async (ctx, next) => {
        await ctx.render('404', {
         title: 'page not find'
        })
    })
}