const numbers = [2, 3, 4, 6, 7, 12, 24];

//1 - Somar os números pares do array com reduce 

// Como eu sei que um número é par?

// number % 2 === 0

// Eu poderia separar os números pares primeiro?

// const evenNumbers = numbers.filter((number) => {
//     return number % 2 === 0;
// })

// console.log('filter:', evenNumbers);

// Consigo usar reduce? O que o reduce retorna?

// const evenNumbersSum = evenNumbers.reduce( (accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

// console.log('reduce', evenNumbersSum);
// Refatorando

// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// console.log(evenNumbers);

// const evenNumbersSum = numbers.filter((number) => number % 2 === 0).reduce( (accumulator, currentValue) => accumulator + currentValue);

// console.log(evenNumbersSum);

// Identando

const evenNumbersSum = numbers
    .filter((number) => number % 2 === 0)
    .reduce( (accumulator, currentValue) => accumulator + currentValue);


console.log(evenNumbersSum);