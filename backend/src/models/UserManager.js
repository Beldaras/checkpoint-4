const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (pseudo, email, hashed_password) values (?, ?, ?)`,
      [user.pseudo, user.email, user.hashed_password]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set pseudo = ?, email = ?, hashed_password  where id = ?`,
      [user.pseudo, user.email, user.hashed_password, user.id]
    );
  }

  login(email) {
    return this.database.query(
      `select mail, hashed_password, roles from ${this.table} where email = ?`,
      [email]
    );
  }
}

module.exports = UserManager;
