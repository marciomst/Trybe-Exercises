

// Refatorando o código

// 1 - Criar uma função para gerar UM número aleatório

function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 60) + 1;
  return randomNumber;
}

// console.log(generateRandomNumber());

// 2 - Gerar um jogo (Sortear os 6 números)

function generateGame() {  
  let megaSenaGame = [];
  for (let index = 0; index < 6; index +=1) {
    // megaSenaGame[index] = generateRandomNumber();
    megaSenaGame.push(generateRandomNumber());
  }
  return megaSenaGame;
}

// console.log(generateGame());


// 3 - Verificar o número de acertos - Comparar o jogo com o resultado da mega sena


function checkNumberOfHits(person, megaSenaGame) {
  let numberOfHits = 0;

  for (let index = 0; index < person.length; index +=1) {
    // console.log('Jogo do Isaac', person[index]);
    for (let index2 = 0; index2 < megaSenaGame.length; index2 +=1) {
      // console.log('Jogo MegaSena', megaSenaGame[index2]);
      if (person[index] === megaSenaGame[index2]) {
        numberOfHits = numberOfHits + 1;
        // console.log('Acertou!');
      }
    }
  }
  return numberOfHits;
}






// 4 - Jogo do Isaac e Chamar a função de sorteio

let isaacJogo = [10, 12, 16, 40, 51, 57];
let megaSena = generateGame();

// 5 - Saída - Jogo do Isaac, Jogo da MegaSena e Números de acertos
console.log('Jogo da Pessoa: ',isaacJogo);
console.log('JOgo da Megasena: ',megaSena);
console.log('Número de acertos:', checkNumberOfHits(isaacJogo, megaSena));

// Código da aula 4.2 


// Jogo da pessoa estudante

let isaacJogo = [10, 12, 16, 40, 51, 57];

// Criando o jogo sorteado 

let number1 = Math.floor(Math.random() * 60) + 1;
let number2 = Math.floor(Math.random() * 60) + 1;
let number3 = Math.floor(Math.random() * 60) + 1;
let number4 = Math.floor(Math.random() * 60) + 1;
let number5 = Math.floor(Math.random() * 60) + 1;
let number6 = Math.floor(Math.random() * 60) + 1;

let megaSenaJogo = [number1, number2, number3, number4, number5, number6];

// Visualizar os dois arrays

// console.log(megaSenaJogo);
// console.log(isaacJogo);

// Compara os jogos

let acertos = 0;

for (let index = 0; index < isaacJogo.length; index +=1) {
  console.log('Jogo do Isaac', isaacJogo[index]);
  for (let index2 = 0; index2 < megaSenaJogo.length; index2 +=1) {
    console.log('Jogo MegaSena', megaSenaJogo[index2]);
    if (isaacJogo[index] === megaSenaJogo[index2]) {
      acertos = acertos + 1;
      console.log('Acertou!');
    }
  }
}



console.log('Jogo do Isaac: ', isaacJogo );
console.log('Jogo da Megasena: ', megaSenaJogo);
console.log('Quantidade de acertos:', acertos);

// Sorteio - Número aleatório 

// console.log(Math.random());





