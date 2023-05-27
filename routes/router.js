const { findAllStudent, getStudentById, createStudent, updateStudent } = require("../controllers/studentController")

const router = require("express").Router()

router.get('/students', findAllStudent)
router.get('/students/:id', getStudentById)
router.post('/students', createStudent)
router.patch('/students/:id', updateStudent)

module.exports = router