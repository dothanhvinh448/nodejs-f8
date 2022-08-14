module.exports={
    mutipleMongooseToObject: function(mongoose){
        return mongoose.map(mongoose=>mongoose.toObject())//nếu để =>{}//thì ở trong phải return
    },
    mongooseToObject:function(mongoose){
        return mongoose?mongoose.toObject():mongoose//if ma co mongoose thi return mongoose.toObject() else mongoose
    }
}