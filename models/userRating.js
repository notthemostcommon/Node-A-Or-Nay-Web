const db = require('../db/config'); 

const Rating = {}; 

// need to find ratings by location and aggregate score
Rating.findById = (id) => {
	return db.query(
	`
		SELECT AVG(rating)
		FROM user_ratings
		WHERE id = $1
		`, 
		[id]
		); 
}; 

// need to add rating
Rating.create = rating => 
	return db.one(
		`
		INSERT INTO user_ratings
		(rating, review, camis, user_id)
		VALUES ($1, $2, $3, $4) RETURNING *
		`,
		[rating.rating, rating.review, rating.location_id]
		); 
}; 

module.exports = Rating; 