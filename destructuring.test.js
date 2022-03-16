// Principais usos de destructuring (Object / Array):

// Manipulação de informações de uma forma mais simples;

// Organização e melhor interpretação do código;

// Desmembramos o objeto/array em variáveis mais fáceis de serem trabalhadas.

// Principais usos de default destructuring:

// Atribuir um valor padrão a alguma chave / índice que porventura seja undefined.

const richestDuckInTheWorld = {
    name: 'Scrooge McDuck',
    birthplace: 'Glasgow, Scotland',
    city: 'Duckburg',
    jobs: ['Shoe shiner', 'Sailor', 'Cowboy', 'Miner', 'Banker', 'Entrepreneur']
  };

 
    

describe('testa concatenação de dados de um objeto', () => {
test('verifica se é possivel concatenar os dados do objeto richestDuckInTheWorld', () => {
    expect(`${richestDuckInTheWorld.name} from ${richestDuckInTheWorld.birthplace}`).toBe('Scrooge McDuck from Glasgow, Scotland');
});
});