const express = require('express')
const router = express.Router()

const {
  reviewExists,
  validateReviewBody,
} = require('../middleware/reviewsMiddleware')

const books = require('../data/books')

router.get('/', (req, res) => {
  res.json(req.book.reviews)
})

router.post('/', validateReviewBody, (req, res) => {
  const { book, comment } = req
  const review = {
    id: book.reviews.length + 1,
    comment,
  }
  book.reviews = [...book.reviews, review]

  res.status(201).json({
    message: `Created review for book with id = ${book.id}`,
  })
})

router.delete('/:reviewId', reviewExists, (req, res) => {
  const { book, review } = req
  const reviewIndex = book.reviews.indexOf(review)
  book.reviews.splice(reviewIndex, 1)

  res.sendStatus(204)
})

module.exports = router
