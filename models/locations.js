const db = require('../db/config'); 

const Locations = {}; 

Locations.create = location => {
	return db.one(
	`
		INSERT INTO locations 
		(camis, dba, building, street, boro, zipcode)
		VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
		`, 
		[location.camis, location.dba, location.building, location.street, location.boro, location.zipcode]
		); 
}; 

Locations.findByCamis = camis => {
	return db.query(
		`
		SELECT * FROM locations
		WHERE camis = $1
		`, [camis]
		); 
}

Locations.findAll = () => {
		return db.query('SELECT * FROM locations'); 
}


module.exports = Locations;  
