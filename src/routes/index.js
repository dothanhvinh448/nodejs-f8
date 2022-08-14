const newRouter = require('./news')
const siteRouter = require('./site')
function route(app) {
    app.use('/news', newRouter)//cap cha
    app.use('/', siteRouter)//cap cha news va site  cap con
}
module.exports = route;