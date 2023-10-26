const ApiError = require('../exceptions/ApiError');

module.exports = function (err, req, res, next) {
  console.log('4444444444', err);
  if (err instanceof ApiError) {
    return res.status(err.status).json({ status: err.status, message: err.message, errors: err.errors })
  }
  return res.status(500).json({ message: 'Something went wrong' });
}