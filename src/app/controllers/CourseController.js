const data = require('../model/Courses');
const { mutipleMongooseToObject }=require('../../util/mongoose')
class CourseController{
  
    //[get]/khoa-hoc/param
    show(req,res){
        
       res.send('course detail:'+req.params.khoahoc)
    }
}
module.exports=new CourseController;