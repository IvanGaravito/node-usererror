/**
* @module node-usererror
* @example
* ``` js
* var UserError = require('node-usererror')
* // ...
* throw new UserError('My own error', 'EOWN')
* ```
*/
module.exports = UserError

/**
 * @class UserError
 * @extends Error
 * @param {string} message - The error message
 * @param {any} code - The error code you want to use for this error
 */
function UserError (message, code) {
  Error.captureStackTrace(this, UserError)
  this.code = code
  this.message = message
}
require('util').inherits(UserError, Error)

/**
 * @external Error
 * @see https://nodejs.org/dist/latest-v4.x/docs/api/errors.html
 */
