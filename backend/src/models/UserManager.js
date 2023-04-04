const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (pseudo, email, password) values (?, ?, ?)`,
      [user.pseudo, user.email, user.password]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set pseudo = ?, email = ?, hashed_password  where id = ?`,
      [user.pseudo, user.email, user.password, user.id]
    );
  }

  findByEmail(email) {
    return this.database.query(
      `select email, password from ${this.table} where email = ?`,
      [email]
    );
  }
}

module.exports = UserManager;
