const express = require("express");
const morgan =  require("morgan");
const app = express();

app.use(morgan("dev"));
app.use("/admin", function(req, res, next){
    console.log(">>",req.baseUrl)
    if(req.baseUrl === "/admin"){
        return next("Unauthorized");
    }
    next();
})

app.get("/", function(req, res){
    res.send("Hello");
})

app.get("/about", function(req, res){
    res.send("You are on about Page");
})

app.use(function(req, res, next){
    res.send("Page not found");
})

app.use(function(err, req, res, next){
    res.send(err);
})

app.listen(4444, () => console.log("4444"))