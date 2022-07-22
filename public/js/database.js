var sqlite3 = require('sqlite3').verbose();
var md5 = require('md5');

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
	if(err) {
		//can't open DB 
		console.error(err.message)
		throw err
	} else {
		console.log('Connected to the SQLite database.')
		db.run(`CREATE TABLE blogpost (
			id INTEGER PRIMARY KEY, 
		    blog_name TEXT DEFAULT "", 
		    blog_date TEXT DEFAULT "", 
		    blog_contents TEXT DEFAULT "", 
		    // blog_media BLOB DEFAULT "", 
		    author TEXT
			)`, 
		(err) => {
			if(err) {
				//table already created
				console.log("table already created");
			} else {
				//table just created 
				console.log("inserting to ta");
				var insert = 'INSERT INTO blogpost (id, blog_name, blog_date, blog_contents, blog_media, author) VALUES(?,?,?,?,?,?)'
				db.run(insert, [0, "Hello World","2022-7-21 11:19:00","welcome to the blog", "Vince H"])
			}
		});
	}
});

module.export = db