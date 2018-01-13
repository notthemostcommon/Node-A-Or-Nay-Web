\c a_or_nay
DROP TABLE IF EXISTS locations; 

CREATE TABLE IF NOT EXISTS locations (
  id SERIAL PRIMARY KEY,
  camis INTEGER, 
  dba VARCHAR(255), 
  building VARCHAR(255), 
  street VARCHAR(255), 
  boro VARCHAR(255), 
  zipcode INTEGER
);