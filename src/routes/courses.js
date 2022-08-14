var express = require('express')
var router = express.Router()

const courseController = require('../app/controllers/CourseController')

router.get('/:khoahoc', courseController.show)


module.exports = router