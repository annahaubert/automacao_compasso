const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const Calculator = require('../src/calculator.js')

describe('The Calculator', () => {
  
    before(() => {
        calculator = new Calculator
    });

    it('Should sum two positive integers', () => {
      expect(calculator.sum(2, 3)).to.equal(5);
    });

    it("Deve somar um negativo e um positivo", () => {
      expect(calculator.sum(-2, 3)).to.equal(1);
    });

    it("Deve somar 49 com 50 e retornar 99", () => {
      expect(calculator.sum(49, 50)).to.equal(99);
      expect(calculator.sum(49, 50)).to.be.a("number");
      expect(calculator.sum(49, 50)).to.not.equal(98);
      expect(calculator.sum(49, 50)).to.not.be.null;
      expect(calculator.sum(49, 50)).is.not.string;
      chai.assert.isNotString(calculator.sum(49, 50));
    });

    it("Deve subtrair dois números inteiros", () => {
      expect(calculator.sub(5, 5)).to.equal(0);
      expect(calculator.sub(5, 5)).to.not.equal(1);
    });

    it("Deve multiplicar 5 com 10 e retornar 50", () => {
      expect(calculator.mult(5, 10)).to.equal(50);
      expect(calculator.mult(5, 10)).is.not.string;
      expect(calculator.mult(5, 10)).to.be.a("number");
    })

    it("Deve dividir 4 com 2 e retornar 2", () => {
      expect(calculator.div(4, 2)).to.equal(2);
      expect(calculator.div(4, 2)).to.not.be.null;
      expect(calculator.div(4, 2)).to.not.equal(1);
    })
});
