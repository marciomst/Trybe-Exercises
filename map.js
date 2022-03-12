/* COM HOF MAP()
  - Não modifica o array original
  - Itera todos os itens do array (possbilitando mudar o conteudo de cada item)
  - Constrói um novo array com base(do mesmo tamanho do original) no conteudo de retorno de cada chamada. (Voce pode retornar qualquer coisa)
  - template: const resultadoMap = array.map(() => )
*/

const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },

];

//Filtrar só os nomes saída: [ 'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie' ]
// SIMULAÇÃO MANUAL

// function usersComFor() {
//   const firstName = [];
//   for (let index = 0; index < users.length; index += 1) {
//     firstName.push(users[index].firstName)
//   }

//   return firstName;
// }
// console.log(usersComFor());
//COM MAP
// 
// const resultadoMap = users.map((elemento) => {
//   // console.log(elemento, 'elemento map');
//   return elemento.firstName
// })





// console.log(resultadoMap);

//Exemplo 2
const cities = [
  { state: "AM", name: "Manaus", region: "N" },
  { state: "PA", name: "Belém", region: "N" },
  { state: "TO", name: "Porto Nacional", region: "N" },
  { state: "MG", name: "Lavras", region: "SE" },
  { state: "BA", name: "Feira de Santana", region: "NE" },
  { state: "PR", name: "Cascavel", region: "S" },
  { state: "SP", name: "Presidente Prudente", region: "SE" },
  { state: "RN", name: "Touros", region: "NE" },
  { state: "CE", name: "Jericoacoara", region: "NE" }
];

// 1. Transforme (Mapeie) o array de objetos cities em um array de strings com o seguinte formato:
// [
//   'Manaus - AM',
//   'Belém - PA',
//   'Porto Nacional - TO',
//   'Lavras - MG',
//   'Feira de Santana - BA',
//   'Cascavel - PR',
//   'Presidente Prudente - SP',
//   'Touros - RN',
//   'Jericoacoara - CE'
// ]

//Essa funcao recebe como parametro um array
function cityAndState(cities) {
  // a variavel resultado, agora recebe do map 
  const resultado = cities.map((elementoDoArray) => `${elementoDoArray.name} - ${elementoDoArray.state}`)
  return resultado;
}
console.log(cityAndState(cities));