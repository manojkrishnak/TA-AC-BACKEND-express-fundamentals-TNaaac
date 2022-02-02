const express = require("express");
const cookieParse = require("cookie-parser");
const morgan = require("morgan");
const app = express();

const logger = morgan();

app.use("/about", cookieParse());
app.use(function(req, res, next){
    console.log(req)
    next()
})

app.get("/", function(req, res){
    res.send("Welcome to Home");
})

app.get("/about", function(req, res){
    res.cookie("name", "manoj").send("Welcome");

})

app.listen(4444, () => console.log("4444 it is"));