const point = [1.0, 2.2, -6.6];
const otherPoint = [0.1, 3.5, -99.6];

const printPointCoordinates = (x, y, z) =>
  `Point coordinates are x = ${x}, y = ${y} and z = ${z}`;


  
describe('testa a função printPointCoordinates', () => {
  test('inserindo coordenadas é impressa a frase contendo as coordenadas inseridas', () => {
    expect(printPointCoordinates(...point)).toBe('Point coordinates are x = 1, y = 2.2 and z = -6.6');
    expect(printPointCoordinates(...otherPoint)).toBe('Point coordinates are x = 0.1, y = 3.5 and z = -99.6');
  });
});