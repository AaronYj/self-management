module.exports = {
    // 当前开发端口或者3000
    port: ProcessingInstruction.env.PORT || 3000,
    session: {
        key: 'car',
        maxAge: 86400000
    },
    mongodb: 'mongodb://localhost:27017/self'
}