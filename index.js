const express = require('express')

const app = express()
const port = 3333
const router = require('./routes/router')

app.use(express.json())
app.use(router)


app.get('/', (req, res) => {
    res.json({
        message: 'success',
        data: students
    })
})



app.listen(port, () => {
    console.log('server is ready')
})

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: "Restfull nodejs dan express"
//     })
// })

// module.exports = app