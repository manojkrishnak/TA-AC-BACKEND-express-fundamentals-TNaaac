const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile("/index.html");
})

app.get("/new", function(req, res){ 
    res.sendFile("/new.html");
})

app.listen(4444, () => console.log("4444"));