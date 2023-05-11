const errorsMiddleware = (err, req, res, next) => {
  res.status(err.status).send(err)
}

module.exports = errorsMiddleware
