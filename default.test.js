const response = {
  name: 'Bruce Wayne',
  superheroName: 'Batman',
  nickname: 'The Caped Crusader',
  powers: 'Determination and money'
};

// Atribua a um objeto valores passados por parâmetro!


// solução 1
// const createSuperhero = (name, superheroName, nickname, powers) => {
//   return {
//     name,
//     superheroName,
//     nickname,
//     powers
//   };
// };

// Solução 2 

// const createSuperhero = (...superheroData) => {
//   let [name, superheroName, nickname, powers] = superheroData;
//   return { name, superheroName, nickname, powers };
// };

describe('testa a função createSuperhero', () => {
  test('cria o superhero Bruce Wayne', () => {
    expect(createSuperhero('Bruce Wayne', 'Batman', 'The Caped Crusader', 'Determination and money')).toEqual(response);
  });
});