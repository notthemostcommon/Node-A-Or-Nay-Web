const db = require('../db/config'); 

const Rating = {}; 

// need to find ratings by location and aggregate score
Rating.average = rating => {
	return db.query(
	`
		SELECT AVG(rating)
		FROM user_ratings
		WHERE camis = $1
		`, 
		); 
}; 

// need to add rating
Rating.create = rating => {
	return db.one(
		`
		INSERT INTO user_ratings
		(rating, review, camis, user_id)
		VALUES ($1, $2, $3, $4) RETURNING *
		`,
		[rating.rating, rating.review, rating.camis, rating.user_id]
		); 
}; 

Rating.findAllByUser = user_id => {
	return db.query(
		`
		SELECT * FROM user_ratings
		WHERE user_id = $1
		`,
		[user_id]
		); 
}

Rating.join = (user_id) => {
	return db.query(
	`
		SELECT userRating.*, locations.* 
		FROM userRating 
		INNER JOIN locations 
		ON userRating.camis=locations.camis 
		WHERE user_id = $1
		`, 
		[user_id]
		); 
}; 
module.exports = Rating; 