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

Rating.findById = id => {
	return db.oneOrNone(
		`
		SELECT * FROM user_ratings
		WHERE id = $1
		`,
		[id]
		); 
}

Rating.update = (user_ratings, id) => {
  return db.none(
    `
      UPDATE user_ratings SET
      rating = $1,
      review = $2
      WHERE id = $3
    `,
    [user_ratings.rating, user_ratings.review, id]
  );
};
Rating.join = (user_id) => {
	return db.query(
	`
		SELECT DISTINCT user_ratings.*, locations.dba
		FROM user_ratings
		INNER JOIN locations
		ON user_ratings.camis=locations.camis 
		WHERE user_id = $1
		`, 
		[user_id]
		); 
}; 

Rating.findForEdit = (id) => {
	return db.oneOrNone(
		`
		SELECT user_ratings.*, locations.dba
		FROM locations 
		INNER JOIN user_ratings
		ON user_ratings.camis=locations.camis 
		WHERE id = $1
		`, 
		[id]
		); 
}
module.exports = Rating; 