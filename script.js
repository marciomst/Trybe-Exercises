// 1 - Onde eu quero adicionar esse elemento?
// Esse elemento existe no meu JS?

// let container = document.getElementById('first');


// // 2 - Como criar um elemento HTML?

// let newDiv = document.createElement('div');

// // 3 - Como adicionar classes a esse elemento?

// newDiv.className = 'red circle small';


// // 4 - Como adicionar o elemento ao arquivo HTML?

// container.appendChild(newDiv);

// criação do elemento
// let newDiv2 = document.createElement('div');
// newDiv2.className = 'red circle small';

// adicionando o elemento
// container.appendChild(newDiv2);

let container = document.getElementById('first');

function createDivElement (classes) {
  let newDiv = document.createElement('div');
  newDiv.className = classes;
  return newDiv;
} 

// container.appendChild(createDivElement('red small circle'));
// container.appendChild(createDivElement('green medium square'));
// container.appendChild(createDivElement('yellow small square'))

function addElement(parent, child) {
  parent.appendChild(child);
}


addElement(container,createDivElement('yellow small circle'));
addElement(container,createDivElement('red small circle'));
addElement(container,createDivElement('green small circle'));
addElement(container,createDivElement('yellow small square'));


// Bônus

// let classes = ['yellow circle small', 'green square small', 'red circle small'];

// for (let classe of classes) {
//   let element = createDivElement(classe);
//   addElement(container, element);
// }

