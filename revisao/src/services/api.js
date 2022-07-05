
export const getAllCharacters = async () => {
  const result = await fetch('https://swapi.co/api/people/');
  const data = await result.json();
  return data.results;
}

export const getCharacters = async (character) => {
  const result = await fetch(`https://swapi.co/api/people/${character}`);
  const data = await result.json();
  return data.results;
}

// export default { getAllCharacters, getCharacters }



// from '../services/api';

// const minhaLib = require('../services/api')
// minhaLib = {
//   default: { getAllCharacters, getCharacters },
//   getAllCharacters,
//   getCharacters
// }

// import qualquernome from '../services/api'; // default
// import { getAllCharacters } from '../services/api'; // default




