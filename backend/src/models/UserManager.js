const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findUserByEmail(user) {
    if (!user) {
      throw new Error("email is required");
    }
    return this.database.query(`select * from ${this.table} where email = ?`, [
      user,
    ]);
  }

  verifyPassword(user) {
    if (!user) {
      throw new Error("user is required");
    }
    return this.database.query(
      `select * from ${this.table} where password = ?`,
      [user.password]
    );
  }
}

module.exports = userManager;
