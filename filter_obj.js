const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
]

//Quem dos simpsons dirige ? 
//Como vc sabe disso ? 
//Como vc chegou até esse pensamento?


const filtrarQuemDirigeComFor = (array) => {
  const naoDirige = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (array[index].isDriver === false) {
      naoDirige.push(array[index])
    }
  }
  return naoDirige;
}
const resultado = filtrarQuemDirigeComFor(users)
// console.log(resultado);

//Com function
function filtrarElementos(elemento) {
  // console.log('Esse é o elemento do array users', elemento);
  const resultado = elemento.isDriver === false;
  return resultado;
}
users.filter(filtrarElementos)

//Com hofs e arrow
const filtrarNoDriver = (array) => {
  console.log(array);
  const resultado =  array.filter((cadaElementoDoArray) => cadaElementoDoArray.isDriver === false)
  return resultado;
};
// console.log(filtrarNoDriver(users));





//MAIS UM EXEMPLO COM FILTER
const cities = [
  { state: 'AM', name: 'Manaus', region: 'N' },
  { state: 'PA', name: 'Belém', region: 'N' },
  { state: 'TO', name: 'Porto Nacional', region: 'N' },
  { state: 'MG', name: 'Nepomuceno', region: 'SE' },
  { state: 'BA', name: 'Cachoeira', region: 'NE' },
  { state: 'PR', name: 'Curitiba', region: 'S' },
  { state: 'SP', name: 'Hortolândia', region: 'SE' },
  { state: 'RN', name: 'Touros', region: 'NE' },
  { state: 'CE', name: 'Jericoacoara', region: 'NE' },
  { state: 'TO', name: 'Três Pedras', region: 'N' },
  { state: 'MG', name: 'João Pinheiro', region: 'SE' }
];

// 2. Encontre todas as cidades do estado de Tocantins (TO)
console.log('As cidades do estado de Tocantins são: ');
function citiesTo(){
  const resultadoCidades = cities.filter((itemDeCities) => itemDeCities.state === 'TO');
  return resultadoCidades;
}
console.log(citiesTo()
);