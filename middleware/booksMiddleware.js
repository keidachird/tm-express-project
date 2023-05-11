const createError = require('http-errors')

const books = require('../data/books')

const bookExists = (req, res, next) => {
  const { id } = req.params
  const book = books.find(book => book.id === Number(id))

  if (!book) next(createError(404, `Book with id = ${id} does not exist`))

  req.book = book
  next()
}

const validateBookBody = (req, res, next) => {
  const { title } = req.body

  if (!title) next(createError(400, `Title is required`))

  req.title = title
  next()
}

module.exports = {
  bookExists,
  validateBookBody,
}
