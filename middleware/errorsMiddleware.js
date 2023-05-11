const errorsMiddleware = (err, req, res, next) => {
  res.status(err.status).json(err)
}

module.exports = errorsMiddleware
