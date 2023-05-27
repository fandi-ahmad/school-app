const { Student } = require('../models/')

const findAllStudent = async (req, res) => {
    try {
        const data = await Student.findAll()
        const result = {
            status: 'ok',
            data: data
        }
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

const getStudentById = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Student.findByPk(id)
        if (data === undefined || data === null) {
            return res.status(404).json({ 
                status: 'failed',
                message: 'data not found'
            })
        }
        const result = {
            status: 'ok',
            data: data
        }
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

const createStudent = async (req, res) => {
    try {
        const { name, theClass } = req.body
        const newStudent = await Student.create({
            name: name,
            class: theClass
        })
        res.status(201).json({
            status: 'ok',
            data: {
                id: newStudent.id,
                name: newStudent.name,
                class: newStudent.class,
                createdAt: newStudent.createdAt,
                updatedAt: newStudent.updatedAt
            }
        })
    } catch (error) {
        console.log(error, '<--- error create student')
    }
}

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params
        const { name, theClass } = req.body
        const student = await Student.findByPk(id)

        if (!student) {
            return res.status(404).json({
                status: 'failed',
                message: 'data is not found'
            })
        }

        student.name = name
        student.class = theClass
        student.save()      // save data to db

        res.json({
            status: 'ok',
            data: {
                id: student.id,
                name: student.name,
                class: student.class,
                createdAt: student.createdAt,
                updatedAt: student.updatedAt
            }
        })
        
    } catch (error) {
        console.log(error, '<-- error update student')
    }
}



module.exports = { findAllStudent, getStudentById, createStudent, updateStudent }