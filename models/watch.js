const db = require('../db/config'); 

const Watch = {}; 

// find watched items by user with user_id
Watch.findByUser = (id) => {
	return db.query(`SELECT * FROM watch WHERE id = $1`, [id])
}; 

// add watched item by user 
Watch.create = watch => {
	return db.one(
	`
		INSERT INTO watch
		(location_id, user_id)
		VALUES ($1, $2) RETURNING *
		`,
		[watch.location_id, watch.user_id]
		); 
}; 

// delete watched item by user 
Watch.destroy = id => {
	return db.none(
		`
		DELETE FROM watch
		WHERE id = $1
		`, 
		[id]
		); 
}; 

module.exports = Watch; 
