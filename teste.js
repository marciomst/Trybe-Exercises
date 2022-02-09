// PARTE 1 - Funções

// Função morningGreeting

// Função sem return

function morningGreeting() {
  console.log('Bom dia!');
}

morningGreeting();

// Função com return

function morningGreeting() {
  return 'Bom dia!'
}

console.log(morningGreeting());
// let retorno = morningGreeting();


// Função com parâmetro

function morningGreeting3(nome) {
  return 'bom dia, ' + nome + '!';
}

console.log(morningGreeting3('Caique'));
console.log(morningGreeting3('Fernanda'));

// Função soma - dois parâmetros

function sum (number1, number2) {
  console.log ('number 1:', number1);
  return number1 + number2;
}

console.log(sum(5,10));

// Bônus - lessThan - else desnecessário

// function lessThan (number1, number2) {
//   if (number1 < number2){
//     return number1;
//   } 
//     return number2;
  
//  }

//  console.log(lessThan(20,1));
 

// PARTE 2 - Objetos

let person = {
  name: 'Lucas',
  birthdate: '29/10/1991',
  eyeColor: 'Castanhos',
  height: '1.80',
  nickname: { name: 'Lucas', author: 'Cairo' },
}

//Dot notation - Atribuindo 

// person.name = 'Caique';

//Dot notation - Acessando

// console.log(person.name);


// Bracket notation - atribuindo

// person['name'] = 'Matheus';

// Bracket notation - Acessando

// console.log(person['name']);


// for in - key 

for (let key in person ) {
  console.log(key);
}


// for in - person[key]
for (let key in person) {
  console.log(person[key]);
}

// Sempre que precisamos acessar as propriedades de um objeto de forma dinâmica, utilizamos a notação por colchetes.
















