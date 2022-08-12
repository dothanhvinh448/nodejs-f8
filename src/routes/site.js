var express =require('express')
var router=express.Router()

const sitetController=require('../app/controllers/SiteController')

router.use('/search',sitetController.search)
router.use('/',sitetController.index)

module.exports=router