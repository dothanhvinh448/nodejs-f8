const path=require('path')
const express = require('express')
const handlebars=require('express-handlebars')
// import { engine } from 'express-handlebars';
const app = express()
//http logger
const morgan =require('morgan')
const port = 3000

const route=require('./routes')
app.use(express.static(path.join(__dirname,'public')))
// app.use(morgan('combined'))
//template engine
app.engine('hbs',handlebars.engine({extname:'.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/view'));
console.log("name",path.join(__dirname, 'resources/view'))
// routes init
route(app);



app.listen(port,()=>{console.log(`app listening http://localhost:${port}`)})




