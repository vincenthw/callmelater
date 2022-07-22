//const path = require('path');
// const fileupload = require('express-fileupload');

//create express app
const express = require('express'); 

var db = require("./js/database.js");
var app = express();

//server port
var HTTP_PORT = 8000

//start server 
app.listen(HTTP_PORT, () => {
  console.log("server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

//Root endpoint 
app.get("/", (req, res, next) => {
  res.json({"message":"OK"})
});


//get all blogposts from the DB
app.get("/api/blogpost", (req, res, next) => {
  var sql = "select * from blogpost";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if(err) {
      res.status(400).json({"error":err.message});
      return;
    } else{
      res.status(200).json(rows);
    }
  });

});


//default for any other request 
app.use((req, res) => {
  res.status(404);
})

