const express = require('express')
const router = express.Router()

const {
  bookExists,
  validateBookBody,
} = require('../middleware/booksMiddleware')
const reviewsRouter = require('./reviewsRouter')

const books = require('../data/books')

router.get('/', (req, res) => {
  res.json(books)
})

router.get('/:bookId', bookExists, (req, res) => {
  res.json(req.book)
})

router.post('/', validateBookBody, (req, res) => {
  const { title } = req
  const book = {
    id: books.length + 1,
    title,
    reviews: [],
  }
  books.push(book)

  res.status(201).json({
    message: `Created book with id = ${book.id}`,
  })
})

router.patch('/:bookId', validateBookBody, bookExists, (req, res) => {
  const { title, book } = req
  book.title = title

  res.json({ message: `Updated book with id = ${book.id}` })
})

router.use('/:bookId/reviews', bookExists, reviewsRouter)

module.exports = router
