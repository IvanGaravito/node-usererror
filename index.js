var UserError = module.exports = function UserError (message, code) {
  Error.captureStackTrace(this, UserError)
  this.code = code
  this.message = message
}
require('util').inherits(UserError, Error)
