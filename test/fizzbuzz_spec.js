var should = chai.should()

describe('fizzBuzz function',function () {
    it('should return Fizz if input is divisible by 3', function(){
        var result = fizzBuzz(9)
        result.should.be.deep.equal('Fizz')
      });
      it('should return Buzz if input is divisible by 5', function(){
        var result = fizzBuzz(5)
        result.should.be.deep.equal('Buzz')
      });
      it('should return FizzBuzz if input is divisible by 3 and 5', function(){
        var result = fizzBuzz(15)
        result.should.be.deep.equal('FizzBuzz')
      });
      it('should return the number if input is not divisible by 3 or 5', function(){
        var result = fizzBuzz(22)
        result.should.be.deep.equal(22)
      });
    
})
