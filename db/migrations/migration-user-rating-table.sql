\c a_or_nay

CREATE TABLE IF NOT EXISTS user_ratings (
  id SERIAL PRIMARY KEY,
  rating INTEGER, 
  review TEXT, 
  camis INTEGER, 
  user_id INTEGER
);