//create express app
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000
const db = require('./queries.js')
const login = require('./login.js')
const path = require('path')
const { dirname } = require('path')
const exphbs = require('express-handlebars');



app.use(express.json())
app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  console.log("Rendered Homepage")
  res.status(200).render('homepage_view');
})

app.get('/login', function (req, res) {
  console.log("Rendered Login Page")
  res.status(200).render('login_view');
})

//Root endpoint 
app.use(express.static(path.join(__dirname, 'public'))); 
// Route to Login Page
app.post('/login', db.createUser)
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.get('*', function (req, res) {

  res.status(404).render('404_view');
});

//start server 
app.listen(port, () => {
  console.log("server running on port %PORT%".replace("%PORT%", port))
});


