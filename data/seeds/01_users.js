const bcrypt = require("bcryptjs");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      const password = "password";
      const hash = [];

      hash[0] = bcrypt.hashSync(password, 8);
      hash[1] = bcrypt.hashSync(password, 8);
      hash[2] = bcrypt.hashSync(password, 8);

      return knex('users').insert([
        {username: 'emilyelizabeth', password: hash[0]},
        {username: 'graciepaige', password: hash[1]},
        {username: 'eliseaddison', password: hash[2]},
      ]);
    });
};
