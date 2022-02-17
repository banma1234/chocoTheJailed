const dotenv = require("dotenv");
const path = require('path');
dotenv.config({ path: ".env" });

const express = require("express");
const app = express();
const port = process.env.PORT;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/build')))


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// app.get("/", (req, res) => res.send("Hello world!!!!"));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'ctj/build/index.html'));
});

//app.get('*', function(req, res){
//  res.sendFile(path.join(__dirname, 'build/index.html'));
//});

app.listen(port, () => console.log(`listening on port ${port}`));