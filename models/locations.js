const db = require('../db/config'); 

const Locations = {}; 

Locations.create = location => {
	return db.one(
	`
		INSERT INTO locations 
		(camis, dba)
		VALUES ($1, $2) RETURNING *
		`, 
		[location.camis, location.dba]
		); 
}; 



module.exports = Locations;  
