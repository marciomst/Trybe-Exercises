////console.log()


// const sumAll = (...operands) => {
//   let sum = 0;
//   operands.forEach(operand => {
//     sum += operand;
//   });

//   return sum;
// };


// const sumAll = (...operands) => operands.reduce((a, b) => a + b, 0);


describe('testa a função sumAll', () => {
  test('inserindo um ou mais números retorna a soma de todos eles', () => {
    expect(sumAll(1, 2)).toBe(3);
    expect(sumAll(1, 2, 3)).toBe(6);
    expect(sumAll(1, 2, 3, 4, 5)).toBe(15);
  });
});