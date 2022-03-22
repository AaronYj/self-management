var router = require('koa-router')();

//login
router.post('/login', require('./user').login)


module.exports = router