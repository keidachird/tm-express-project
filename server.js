const express = require('express')

const booksRouter = require('./routes/booksRouter')

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/books', booksRouter)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
