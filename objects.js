const quadrinho1 = {
    collection: 'Tio Patinhas',
    title: 'O Tesouro dos Dez Avatares',
};

// Acessar os valores - notações

// console.log(quadrinho1.collection);
// console.log(quadrinho1['collection']);

// Acrescentar uma nova entrada

// quadrinho1.author = 'Don Rosa';
quadrinho1['author'] = 'Don Rosa';
// console.table(quadrinho1);

// Object.keys - Chaves

const array = Object.keys(quadrinho1);
// console.log(array);



// Object.keys - Abrir a mente

array.push('Teste');
// console.log(array);
// console.log(array.includes('title'));
// console.log(array.includes('ano'));


// Object.values - Valores

const valores = Object.values(quadrinho1);
// console.log(valores);

// Object.entries - Entradas

const entradas = Object.entries(quadrinho1);
// console.table(entradas);

// Matriz?

// console.log(entradas[0]);
// console.log(entradas[0][0]);
// console.log(entradas[2][0]);

// Object.assign - Copia de objetos diferentes - quadrinho2 e authorObject

const quadrinho2 = {
  collection: 'Sherlock Holmes',
  title: 'O cão dos Baskervilles'
};

const authorObject = {author: 'Sir Doyle'}

console.table(Object.assign(quadrinho2, authorObject));
// console.log(authorObject);


// Object.assign - Clonar objetos
const clone = Object.assign({}, quadrinho2);
console.table(clone);
console.table(quadrinho2);

// Object.assign -Alterar os objetos clonados

quadrinho2['year'] = '1998';
clone['year'] = '1990';
console.table(clone);
console.table(quadrinho2);

// Object.assign -Copiar objetos com a mesma chave

const quadrinho3 = Object.assign(quadrinho2,clone);
console.table(quadrinho3);


// Atenção!!!! O primeiro parâmetro é sempre alterado e a referência continua a mesma!

console.table(quadrinho2);
quadrinho3['novo'] = 'referência';
console.table(quadrinho2);