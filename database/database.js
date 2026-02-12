const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const database_path = path.join(__dirname, "students.db");

const db = new sqlite3.Database(database_path, (error) => {
  if (error) {
    console.error("Database connection error:", error.message);
  } else {
    console.log("Connected to SQLite database");
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    major TEXT NOT NULL,
    semester INTEGER NOT NULL,
    gpa REAL,
    enrollment_date TEXT,
    is_active INTEGER DEFAULT 1
  )
`);

module.exports = db;