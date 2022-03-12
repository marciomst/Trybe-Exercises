// COM HOF FILTER
// Devolve um novo array com todos os itens que retornaram TRUE
// Retornar números que sejam impares, a saida deve ser [1,3,5]
//Como fazemos normalmente ?

//Com for

const numbers = [1, 2, 3, 4, 5];

const filtrarNumerosImparesComFor = (array) => {
  const numerosImpares = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 1) {
      numerosImpares.push(array[index])
    }
  }
  return numerosImpares;
}

// console.log(filtrarNumerosImparesComFor(numbers));
//Com filter

//com hof
// const filtrarNumerosImpares = (array) => array.filter((itemDoArray) => console.log(itemDoArray))

// com function
function filtrarNumerosImpares(array) {
  const resultado = array.filter((itemDoArray) => itemDoArray % 2 === 1);
  return resultado;
}

console.log('Filtrado com filter:', filtrarNumerosImpares(numbers));