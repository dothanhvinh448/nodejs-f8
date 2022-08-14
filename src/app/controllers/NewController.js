
class NewController{
    //[get]/news function callback
    index(req,res){
        res.render('news')
    }
    //[get]/new:slug
    show(req,res){
        res.send('New detail!!!!')
    }
}
module.exports=new NewController;