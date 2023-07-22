const AbstractManager = require("./AbstractManager");

class StudentManager extends AbstractManager {
  constructor() {
    super({ table: "student" });
  }

  insert(student) {
    const { firstname, lastname, email } = student; // Assuming the request payload has 'name' and 'email' properties

    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email) VALUES (?, ?, ?)`,
      [firstname, lastname, email]
    );
  }

  update(student) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ? where id = ?`,
      [student.firstname, student.lastname, student.email, student.id]
    );
  }
}

module.exports = StudentManager;
