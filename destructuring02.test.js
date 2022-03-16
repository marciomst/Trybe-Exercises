const lion = {
  name: 'Panthera leo',
  commonName: 'Lion',
  weightRange: {
    min: 186.55,
    max: 225,
    measurementUnit:'kg'
  }
};

const blueWhale = {
  name: 'Balaenoptera musculus',
  commonName: 'Blue whale',
  weightRange: {
    min: 45,
    max: 173,
    measurementUnit: 't'
  }
};

const polarBear = {
  name: 'Ursus maritimus',
  commonName: 'Polar Bear',
  weightRange: {
    min: 350,
    max: 700
  }
};

//Faça uma função que receba um objeto representando um animal e retorne sua massa.


  //Lion (Panthera leo) weighs around 186.55-225 kg
  //commonName (name) weighs around weightRange.min-weightRange.max measurementUnit

describe('testa concatenação de dados de um objeto', () => {
  test('verifica se é possivel concatenar os dados dos objetos lion, blueWhale, polarBear', () => {
    expect(animalDescription(lion)).toBe('Lion (Panthera leo) weighs around 186.55-225 kg');
    expect(animalDescription(blueWhale)).toBe('Blue whale (Balaenoptera musculus) weighs around 45-173 t');
    expect(animalDescription(polarBear)).toBe('Polar Bear (Ursus maritimus) weighs around 350-700 kg');
  });
});