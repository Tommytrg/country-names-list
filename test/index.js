/* eslint-env mocha */

const arrayGenerator = require('..')

const should = require('should')

describe('Array generator', function () {
  const array = arrayGenerator(5, 1, 6)
  it('should generate an array with size 5 and no repeted values', function () {
    should(array).be.an.Array()
    should(array.length).be.equal(5)
    for (let i = 1; i < array.length; i += 1) {
      let length = array.filter(num => num !== array[i]).length
      should(length).be.equal(array.length - 1)
    }
  })
})
