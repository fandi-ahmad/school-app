const { findAllStudent, getStudentById, createStudent } = require("../controllers/studentController")

const router = require("express").Router()

router.get('/students', findAllStudent)
router.get('/students/:id', getStudentById)
router.post('/students', createStudent)

module.exports = router