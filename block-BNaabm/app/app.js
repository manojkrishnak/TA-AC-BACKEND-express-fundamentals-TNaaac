const express = require("express");
const app = express();

app.use("/users",function(req, res, next){
    console.log(req.method, req.url)
    next();
})


app.get("/", function(req, res){
    res.send("Welcome");
})

app.listen(4444)