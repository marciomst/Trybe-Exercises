const players = [
  { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
  { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
  { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
];
  
// Reduza o array acima em um objeto conforme o exemplo abaixo

// {
// 	'Adriano Imperador': 'didico@futebol.br',
// 	'Ronaldinho Gaúcho': 'bruxo@futebol.br',
// 	'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
// 	'Marta Vieira da Silva': 'rainhamarta@futebol.br',
// } 

// Como inserir uma entrada num objeto?

// player['Caique Coelho'] = 'caique@futebol.br';

// console.log(player);


// Atenção para o tipo do retorno! ( obj ou array?)

// Solução com reduce

const playerObj = players.reduce((accumulator, currentValue) => {
  accumulator[currentValue.fullName] = currentValue.email;
  return accumulator;
}, {});

console.log(playerObj);









