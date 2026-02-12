const express = require("express");
const router = express.Router();

const {
  get_all_students,
  get_student_by_id,
  create_student,
  update_student,
  partial_update_student,
  delete_student
} = require("../controllers/students_controller");


router.get("/students", get_all_students);
router.get("/students/:id", get_student_by_id);
router.post("/students", create_student);
router.put("/students/:id", update_student);
router.patch("/students/:id", partial_update_student);
router.delete("/students/:id", delete_student);

module.exports = router;