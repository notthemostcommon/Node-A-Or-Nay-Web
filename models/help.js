const db = require('../db/config'); 

const Help = {}; 

Help.findAll = location => {
	return db.query('SELECT * FROM movies'); 
}

	

module.exports = Locations; 