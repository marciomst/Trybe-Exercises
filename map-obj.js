const states = [
  { short: "PA", name: "Pará" },
  { short: "TO", name: "Tocantins" },
  { short: "AM", name: "Amazonas" },
  { short: "MG", name: "Minas Gerais" },
  { short: "BA", name: "Bahia" },
  { short: "PR", name: "Paraná" },
  { short: "SP", name: "São Paulo" },
  { short: "RN", name: "Rio Grande do Norte" },
  { short: "CE", name: "Ceará" }
];

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
// b) "A cidade de Lavras fica no estado de Minas Gerais"

console.log("Formato:  A cidade de ${nomeDaCidade} fica no estado de ${nomeDoEstado}");

//Digite aqui o que ta acontecendo
// a variavel city, recebe um array que mapeiou a cities e trouxe tal tal 
const city = cities.map((elementoDeCities) => {
  // state faz o find, e o find encontra o primeiro elemento que esta n 
  const state = states.find((elementoDoStates) => elementoDoStates.short === elementoDeCities.state);
  console.log(`A cidade de ${elementoDeCities.name} fica no estado de ${state.name}"`);
})

console.log(city);

// for (let index = 0; index < cities.length; index++) {
// for (let index = 0; index < states.length; index++) {
//   states[index].short === cities[index].state 
// } 
// }
