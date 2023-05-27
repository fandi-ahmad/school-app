const router = require("express").Router()
const studentsRouter = require('./studentsRouter')

router.use('/api/v1', studentsRouter)

module.exports = router