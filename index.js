const express = require("express");
const { default: mongoose } = require("mongoose");
const path = require("path");
const ejs = require('ejs')
const cookieParser = require('cokkie-parser')
mongoose.connect("").then((e) =>console.log("MOngo Db Connected"));
const blog = require('./models/blog')
const userRouter = require('./router/user')
const blogRouter = require('./router/blog')

const {checkForAuthentication, checkForAuthenticationCokkie} = require('./middlewares/authentication')


const app = express();
const PORT = 8000;
app.set("view engine" ,"ejs");
app.set("views",path.resolve("./views"));

app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(checkForAuthenticationCokkie("token"))
app.use(express.static(path.resolve('./public')))
app.get('/',async(req,res)=>{
     const allBlogs = await Blog.find({});
     return res.render('home',{
          user : req.user,
          blogs : allBlogs
     });
})

app.use('./user',userRouter)
app.use('./blog',blogRouter);
app.listen(PORT ,()=>console.log(`Server Started on ${PORT}`));
