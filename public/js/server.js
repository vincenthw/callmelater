//const path = require('path');
// const fileupload = require('express-fileupload');

//create express app
const express = require('express'); 
const sqlite3 = require('sqlite3')

var app = express();

//server port
var HTTP_PORT = 8000

//start server 
app.listen(HTTP_PORT, () => {
  console.log("server running on port %PORT%".replace(%PORT%, HTTP_PORT))
});

//Root endpoint 
app.get("/", (req, res, next) => {
  res.json({"message":"OK"})
});


//default for any other request 
app.use((req, res) => {
  res.status(404);
})

