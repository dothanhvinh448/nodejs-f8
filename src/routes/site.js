var express =require('express')
var router=express.Router()

const sitetController=require('../app/controllers/SiteController')

router.get('/search',sitetController.search)
router.get('/',sitetController.index)

module.exports=router