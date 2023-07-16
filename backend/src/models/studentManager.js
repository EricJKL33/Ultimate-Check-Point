const AbstractManager = require("./AbstractManager");

class StudentManager extends AbstractManager {
  constructor() {
    super({ table: "student" });
  }

  insert(student) {
    const { name, email } = student; // Assuming the request payload has 'name' and 'email' properties

    return this.database.query(
      `INSERT INTO ${this.table} (Name, Email) VALUES (?, ?)`,
      [name, email]
    );
  }

  update(student) {
    return this.database.query(
      `update ${this.table} set Name = ?, Email = ? where id = ?`,
      [student.Name, student.Email, student.id]
    );
  }
}

module.exports = StudentManager;
