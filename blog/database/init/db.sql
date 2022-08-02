/* create & init site content */

-- ITEMS -- 

CREATE TABLE IF NOT EXISTS blogposts (
    id INTEGER PRIMARY KEY, 
    blog_name TEXT DEFAULT "", 
    blog_date REAL DEFAULT "", 
    blog_contents TEXT DEFAULT "", 
    blod_media BLOB DEFAULT "", 
    author TEXT
); 

CREATE TABLE IF NOT EXISTS authors (
    name TEXT PRIMARY KEY, 
    bio TEXT DEFAULT ""
);
