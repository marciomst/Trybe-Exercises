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

// Percorrer os elementos separadamente

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

console.log(acertos);



// Sorteio - Número aleatório 

// console.log(Math.random());





