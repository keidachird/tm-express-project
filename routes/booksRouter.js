const express = require('express')
const router = express.Router()

const {
  bookExists,
  validateBookBody,
} = require('../middleware/booksMiddleware')

const books = require('../data/books')

router.get('/', (req, res, next) => {
  res.json(books)
})

router.get('/:id', bookExists, (req, res, next) => {
  res.json(req.book)
})

router.post('/', validateBookBody, (req, res, next) => {
  const { title } = req.body
  const book = {
    id: books.length + 1,
    title,
    reviews: [],
  }
  books.push(book)

  res.status(201).json({
    message: `Created book with id = "${book.id}"`,
  })
})

router.patch('/:id', validateBookBody, bookExists, (req, res, next) => {
  const { title, book } = req
  book.title = title

  res.json({ message: `Updated book with id = ${book.id}` })
})

module.exports = router
