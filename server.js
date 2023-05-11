const express = require('express')

const errorsMiddleware = require('./middleware/errorsMiddleware')

const booksRouter = require('./routes/booksRouter')

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/books', booksRouter)

app.use(errorsMiddleware)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
