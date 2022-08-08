// const Constants = require('./constants')


// console.log(Constants.keys);
// console.log(Constants);

const Constants = {
    DB_PASSWORD: 'FR@nk3rThaD0g!!',
    DB_USER: 'me',
    HOST: 'localhost',
    DB: 'api',
    PORT: 5432
}


const Pool = require('pg').Pool
const pool = new Pool({
	user: Constants.DB_USER,
	host: Constants.HOST,
	database: Constants.DB,
	password: Constants.DB_PASSWORD,
	port: Constants.PORT,
})

const getUsers = (req, res) => {
	pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
		if(error){
			throw(error)
		}
		res.status(200).json(results.rows)
	})
}

const getUserById = (request, response) => {
	console.log(request.body.id)
	const id = parseInt(request.body.id)

	pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
		if(error){
			throw(error)
		}
		response.status(200).json(results.rows)
	})

} 

const createUser = (request, response) => {
	console.log(request.body)
	let username = request.body.username;
	let password = request.body.password;
	// const {username, password} = request.body 
	pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, password], (error, results) =>{
		if(error) {
			throw error
		}
		response.status(201).send(`User added with ID: ${results.rows[0].id} Username: ${username} and Password: ${password}`)
	})
}

const updateUser = (request, response) => {
  const id = parseInt(request.body.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.body.id)
  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

// const loginUser = (request, response) => {

// }


module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser, 
  deleteUser,
}




