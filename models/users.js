const db = require('../db/config');

const User = {};

User.findByUserName = userName => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE userName = $1
  `, [userName]);
};

User.create = user => {
  return db.one(`
    INSERT INTO users
    (first_name, last_name, userName, password_digest)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `, [user.first_name, user.last_name, user.userName, user.password_digest]);
};

module.exports = User;