const {sum, summationOf} = require('./script');

describe ('the function sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  it('adds 5.1 + 6.55 to equal 11.65', () => {
    expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
  });
  
  it('adds -5 + -39 to equal -44', () => {
    expect(sum(-5, -39)).toBe(-44);
  });
});

describe ('the function summationOf', () => {
  test('Expects that sommationOf function exists', () => {
    expect(typeof summationOf).toBe('function');
  });
  
  test('summationOf 1 is 1', () => {
    expect(summationOf(1)).toBe(1);
  });
  
  test('summationOf 3 is 6', () => {
    expect(summationOf(3)).toBe(6);
  });
  
  test('summationOf 5 is 15', () => {
    expect(summationOf(5)).toBe(15);
  });

  test('throws an error when no parameter is given', () => {
    expect(()=> {summationOf()}).toThrow();
  });

});

