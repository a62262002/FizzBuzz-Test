var should = chai.should()
describe('function fizzBuzz', function () {
  it('input number can be divisible by 3', function () {
    var result = fizzBuzz(12)
    result.should.be.equal('Fizz')
  })
  it('input number can be divisible by 5', function () {
    var result = fizzBuzz(10)
    result.should.be.equal('Buzz')
  })
  it('input number can be divisible by 3 & 5', function () {
    var result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })
  it(`input number can't be disible by 3 & 5`, function () {
    var result = fizzBuzz('13')
    result.should.be.equal('13')
  })
})