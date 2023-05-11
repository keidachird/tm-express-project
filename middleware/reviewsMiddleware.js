const createError = require('http-errors')

const reviewExists = (req, res, next) => {
  const { reviewId } = req.params
  const { book } = req
  const review = book.reviews.find(review => review.id === +reviewId)

  if (!review)
    next(createError(404, `Review with id = ${reviewId} does not exist`))

  req.review = review
  next()
}

const validateReviewBody = (req, res, next) => {
  const { comment } = req.body

  if (!comment) next(createError(400, `Comment is required`))

  req.comment = comment
  next()
}

module.exports = { reviewExists, validateReviewBody }
