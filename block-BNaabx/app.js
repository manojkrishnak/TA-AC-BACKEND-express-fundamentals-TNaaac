const express = require("express");
const qs = require("querystring");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(function (req, res, next) {
  console.log(`${req.method}    ${req.url}    ${new Date()}`);
  next();
});

app.use(function (req, res, next) {
  console.log("base  ", req.baseUrl);
  console.log("path  ", req.path);
  let ext = path.extname(req.url);
  let folder;
  let contentType;
  if (ext !== ".html" && req.url !== "/") {
    if (
      req.path.match(/(images|image)/) &&
      req.path.match(/(images|image)/)[0] === "images"
    ) {
      folder = "images";
      contentType = "image";
      return;
    } else if (req.path.match(/stylesheet/)[0] === "stylesheet") {
      folder = "stylesheet";
      contentType = "text";
      return;
    } else if (req.path.match(/js/)[0] === "js") {
      folder = "js";
      contentType = "text";
      return;
    }
    console.log("dir ", __dirname);
    console.log("patyh", path.basename(req.baseUrl));
    console.log(
      path.join(__dirname, "/public/", folder, "/", path.basename(req.baseUrl))
    );
  }
  res.setHeader("Content-Type", `${contentType}/${ext}`);
  fs.createReadStream(
    path.join(__dirname, "/public/",  "images/", path.basename(req.baseUrl))
  ).pipe(res);
  next();
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(4444, () => console.log("$4444"));
