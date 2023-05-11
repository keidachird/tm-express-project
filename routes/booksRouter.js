const express = require('express')
const router = express.Router()

const books = require('../data/books')

router.get('/', (req, res, next) => {
  res.json(books)
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  const book = books.find(book => book.id === +id)
  res.json(book)
})

router.post('/', (req, res, next) => {
  const book = req.body
  books.push(book)
  res.status(201).send(`Created book ${book.title}`)
})

router.put('/:id', (req, res, next) => {
  const { id } = req.params
  const { title } = req.body
  const book = books.find(book => book.id === +id)
  book.title = title
  res.send(`Updated book ${book.title}`)
})

module.exports = router
