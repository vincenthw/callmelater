# callmelater
Building a blog to write about bike adventures


# how to set up a dev environment and run 
WIP


# NPM 
make sure NPM is installed on your system then run `npm install` in the project directory

# postgres 
Set up a local db called api using postgres. Follow these instructions: https://www.codementor.io/@engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb to get up and runnining with postgres, then create a DB with the relations: 

create table called users: 

CREATE TABLE users (
id serial PRIMARY KEY, 
username VARCHAR(30),
password VARCHAR(30)
);

make a file called constants.js in the blog directory like the following: 
`const Constants = {
    DB_PASSWORD: 'ex!!',
    DB_USER: 'ample',
    HOST: 'localhost',
    DB: 'api',
    PORT: 5432
}


module.exports = {
    Constants
}`

make sure DB_PASSWORD and DB_USER match with a user and password for your Postgres 