//FILTER
const fruits = ['🟠', '🍎', '🟠', '🍌', '🍎', '🟠', '🍎', '🟠', '🍌']
const laranjas = fruits.filter((fruta) => {
  return fruta === '🟠';
})
const sucoDeLaranja = laranjas.map((laranja) => '🥃');

console.log(fruits);
console.log(laranjas);
console.log(sucoDeLaranja);