const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"))

app.get("/", function(req, res){
    res.send("Welcome");
})

app.post("/json", function(req, res){
    console.log(req.body);
    res.send(req.body)
})

app.post("/contact", function(req, res){
    console.log(req.body);
    res.send(req.body)
})

app.get("/info", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.listen(4444, () => console.log("4444 it is "));