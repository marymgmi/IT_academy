const Calculator = require('../mycalculator');
const { cases } = require('jasmine-parameterized');

describe("Class mycalculator", function () {

  let calculator;

  beforeEach(async () => {
    calculator = new Calculator();
  });


  describe('Check add function result', function () {
    it('should sum two numbers: positive flow', async () => {
      const actResAfterSum = calculator.add(1, 2);
      const expecResAfterSum = 3;
      expect(actResAfterSum).toEqual(expecResAfterSum);
    })

    describe('Check add function with one argument', function () {
      it('should return a number', async () => {
        const actRes = calculator.add(1);
        const expecRes = 1;
        expect(actRes).toEqual(expecRes);
      });

    });

    cases([
      [1, 2, 3],
      [3, 7, 10],
      [8, 7, 15]
    ]).it(`should correctly sum relevant numbers`, async ([str, str2, equal]) => {
      const res = calculator.add(str, str2);
      expect(res).toEqual(equal);
    });

    it('Check add function result: negative', async () => {
      const actResAfterSum = calculator.add(1, 2);
      const expecResAfterSumForFail = 4;
      expect(actResAfterSum).toEqual(expecResAfterSumForFail);
    })



  });

  describe('Check multiply function result', function () {
    it('should multiply two numbers: positive flow', async () => {
      const actResAfterMultiply = calculator.multiply(5, 2);
      const expecResAfterMultiply = 10;
      expect(actResAfterMultiply).toEqual(expecResAfterMultiply);
    })

  });

  describe('Check multiply function result: negative scenario', function () {
    it('should multiply two numbers: negative flow', async () => {
      const actResAfterMultiply = calculator.multiply(5, 2);
      const expeсResAfterMultiply = 17;
      expect(actResAfterMultiply).toEqual(expeсResAfterMultiply);
    })

  });

  describe('Check subtraction function result: positive scenario', function () {
    it('should subtract two numbers: positive flow', async () => {
      const actResAfterSubtract = calculator.subtraction(5, 2);
      const expeсResAfterSubtract = 3;
      expect(actResAfterSubtract).toEqual(expeсResAfterSubtract);
    })

  });

  describe('Check subtraction function result: negative scenario', function () {
    it('should subtract two numbers: negative flow', async () => {
      const actResAfterSubtract = calculator.subtraction(5, 2);
      const expeсResAfterSubtractForFail = 1;
      expect(actResAfterSubtract).toEqual(expeсResAfterSubtractForFail);
    })

  });

  describe('Check divide function result: positive scenario', function () {
    it('should divide two numbers: positive flow', async () => {
      const actResAfterDivide = calculator.divide(10, 2);
      const expeсResAfterDivide = 5;
      expect(actResAfterDivide).toEqual(expeсResAfterDivide);
    })

  });

  describe('Check divide function result: negative scenario', function () {
    it('should divide two numbers: negative flow', async () => {
      const actResAfterDivide = calculator.divide(10, 2);
      const expeсResAfterDivideForFail = 4;
      expect(actResAfterDivide).toEqual(expeсResAfterDivideForFail);
    })

  });

  describe('Check exponentiation function result: positive scenario', function () {
    it('should exponent two numbers: positive flow', async () => {
      const actResAfterExponentation = calculator.exponentiation(5, 3);
      const expeсResAfterExponentation = 25;
      expect(actResAfterExponentation).toEqual(expeсResAfterExponentation);
    })

  });

  describe('Check exponentiation function result: negative scenario', function () {
    it('should exponent two numbers: negative flow', async () => {
      const actResAfterExponentation = calculator.exponentiation(5, 3);
      const expeсResAfterExponentationForFail = 25;
      expect(actResAfterExponentation).toEqual(expeсResAfterExponentationForFail);

    });

  });
});

