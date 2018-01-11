\c a_or_nay
DROP TABLE IF EXISTS users; 

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL, 
  last_name VARCHAR(255) NOT NULL, 
  userName VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL
);