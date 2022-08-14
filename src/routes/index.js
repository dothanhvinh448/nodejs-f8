const newRouter = require('./news')
const coursesRouter =require('./courses')
const siteRouter = require('./site')
function route(app) {
    app.use('/news', newRouter)//cap cha
    app.use('/khoa-hoc', coursesRouter)//'khoa-hoc' url trên trình duyệt if có lao vào coursesRouter
    app.use('/', siteRouter)//cap cha news va site  cap con
}
module.exports = route;