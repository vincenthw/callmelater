//create express app
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries.js')

app.use(express.json())
app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//Root endpoint 
app.get("/", (req, res) => {
  res.json({info: 'Node.js, Express, and Postgres API'});
});

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

//start server 
app.listen(port, () => {
  console.log("server running on port %PORT%".replace("%PORT%", port))
});