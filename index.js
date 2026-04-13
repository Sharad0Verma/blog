const express = require("express");
const { default: mongoose } = require("mongoose");
const path = require("path");

const app = express();
const PORT = 8000;
mongoose.connect("").then((e) =>console.log("MOngo Db Connected"));
app.set("view engine" ,"ejs");
app.set("views",path.resolve("./views"));

app.use(express.urlencoded({extended:false}))
app.get('/',(req,res)=>{
     return res.render('home');
})
app.listen(PORT ,()=>console.log(`Server Started on ${PORT}`));
