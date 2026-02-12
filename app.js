const express = require("express");
const students_routes = require("./routes/students_routes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", students_routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});