console.log("INIT DB SCRIPT STARTED");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db_path = path.join(__dirname, "students.db");

const db = new sqlite3.Database(db_path, (error) => {
  if (error) {
    console.error("Error connecting to SQLite database:", error.message);
    return;
  }
  console.log("Connected to SQLite database");
});

db.serialize(() => {

  
  const create_table_query = `
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      major TEXT NOT NULL,
      semester INTEGER NOT NULL,
      gpa REAL,
      enrollment_date TEXT NOT NULL,
      is_active INTEGER DEFAULT 1
    )
  `;

  db.run(create_table_query, (error) => {
    if (error) {
      console.error("Error creating students table:", error.message);
      return;
    }
    console.log("Students table created or already exists");
  });

  
  const insert_students_query = `
    INSERT OR IGNORE INTO students
    (first_name, last_name, email, major, semester, gpa, enrollment_date, is_active)
    VALUES
    ('Jane', 'Doe', 'jane.doe@ugmail.com', 'application development II', 5, 3.8, '1999-08-15', 1),
    ('Ellen', 'Joe', 'Ellenzzz@hotmail.com', 'physics', 3, 2, '2001-12-12', 1),
    ('Walter', 'White', 'Heisenberg@gmail.com', 'edumatica', 8, 5, '2010-07-24', 1),
    ('Ana', 'Blanco', 'anablanco@hotmail.com', 'Psychology', 3, 3.5, '2023-02-20', 1),
    ('Jesse', 'Pinkman', 'jesseboy@gmail.com', 'management', 2, 1, '2024-05-05', 1),
    ('Jon', 'Snow', 'jonsnow@gmail.com', 'Law', 7, 3, '2016-09-10', 1),
    ('Snow', 'White', 'snowwhite12@gmail.com', 'Computer Science', 8, 5, '2024-03-01', 1),
    ('Oguri', 'Cap', 'ogurin@hotmail.com', 'Architecture', 1, 1, '2001-01-01', 1),
    ('Ramon', 'Tovar', 'theramon@gmail.com', 'Engineering', 5, 5, '2007-06-30', 1),
    ('Laura', 'Boso', 'lauratuestas@hotmail.com', 'Economics', 9, 5, '2022-08-30', 1)
  `;

  db.run(insert_students_query, (error) => {
    if (error) {
      console.error("Error inserting students:", error.message);
      return;
    }
    console.log("Sample students inserted successfully");
  });

});


db.close((error) => {
  if (error) {
    console.error("Error closing database:", error.message);
    return;
  }
  console.log("Database connection closed");
});
