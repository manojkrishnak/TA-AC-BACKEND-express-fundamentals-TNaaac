const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.send("Helloo Manoj!!");
})



app.listen(4444, () => console.log("running on 4444"))