
class NewController{
    //[get]/news
    index(req,res){
        res.render('news')
    }
    //[get]/new:slug
    show(req,res){
        res.send('New detail!!!!')
    }
}
module.exports=new NewController;