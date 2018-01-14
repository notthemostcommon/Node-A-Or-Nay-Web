const db = require('../db/config'); 

const Help = {}; 

Help.findAll = location => {
	return db.query('SELECT * FROM help'); 
}

	

module.exports = Help; 