const data = require('../model/Courses');
const { mutipleMongooseToObject }=require('../../util/mongoose')
class SiteController{
    //[get]/
    index(req,res,next){
        // res.render('home')
        // Course.find({}, function (err, courses) {
        //     if(!err) {
        //         res.json(courses);
        //     }else{
        //         res.status(400).json({err:'Error!!'})
        //     }
           
        //   });
        data.find({})
        // .then(Courses=>res.json(Courses))
        .then(Courses=>{//promise
            // Courses=Courses.map(Courses=>Courses.toObject())
            res.render('home',{
                Courses:mutipleMongooseToObject(Courses)
            })
        })
        .catch(next)
    }
    //[get]/search
    search(req,res){
       res.render('search')
    }
}
module.exports=new SiteController;