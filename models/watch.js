const db = require('../db/config'); 

const Watch = {}; 

// find watched items by user with user_id
Watch.findByUser = (user_id) => {
	return db.query(`SELECT * FROM watch WHERE user_id = $1`, [user_id])
}; 

// add watched item by user 
Watch.create = watch => {
	return db.one(
	`
		INSERT INTO watch
		(user_id, location_id)
		VALUES ($1, $2) RETURNING *
		`,
		[watch.user_id, watch.location_id]
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


Watch.join = (user_id) => {
	return db.query(
	`
		SELECT watch.*, locations.* 
		FROM watch 
		INNER JOIN locations 
		ON watch.location_id=locations.camis 
		WHERE user_id = $1
		`, 
		[user_id]
		); 
}; 

module.exports = Watch; 
