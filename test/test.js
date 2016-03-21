/* global describe, it */
var assert = require('assert')
var UserError = require('../index.js')

describe('Instance object', function () {
  it('should instance without error', function () {
    assert(new UserError())
  })

  it('should be instanceof UserError', function () {
    var err = new UserError()
    assert(err instanceof UserError)
  })

  it('should be instanceof Error', function () {
    var err = new UserError()
    assert(err instanceof Error)
  })
})

describe('Instance object', function () {
  it('should have message property', function () {
    var err = new UserError('Testing error', 'ETEST')
    assert(err.message === 'Testing error')
  })

  it('should have code property', function () {
    var err = new UserError('Testing error', 'ETEST')
    assert(err.code === 'ETEST')
  })

  it('should have stack property', function () {
    var err = new UserError('Testing error', 'ETEST')
    assert(err.stack !== undefined)
  })
})
