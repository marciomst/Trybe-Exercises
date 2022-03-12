Analisando estruturas



function funcaoParametro(elemento, index, array) {
    console.log(elemento);
}

const funcaoParametro = () => console.log('teste');



nomeDoArray.nomeDaHOF(() => console.log('teste'))

loopComFOr

const nomeDoArray = [1, 2, 3, 4, 5];

const loopComFor = (array) => {
    for (let index = 0; index < array.length; index += 1) {
        console.log(`O valor do index ${index} é ${array[index]}`);
    }

}

loopComFor(nomeDoArray);

loopComForEach

const nomeDoArray = [1, 2, 3, 4, 5];

const loopComForEach = (numeros) => {
    numeros.forEach((numero, index, array) => {
        console.log(`O valor do index ${index} é ${numero}`);
        console.log(array);
    });
}

loopComForEach(nomeDoArray);


// every
const nomeDoArray = [1, 2, 3, 4, 5];

// const retornoEvery = nomeDoArray.every((elemento)=> elemento % 2 == 0);
// console.log(retornoEvery);


// some

const retornoSome = nomeDoArray.some((elemento) => elemento % 2 == 0);
console.log(retornoSome)

// find

const retornoFind = nomeDoArray.find((elemento) => elemento % 2 == 0);
console.log(retornoFind);

sort

const nomeDoArray = [1, 5, 3, 11, 2];
console.log(nomeDoArray.sort());

const letras = ['a', 'F', 'b', 8, '7', '*'];
console.log('Letras antes do sort:', letras);
const letrasOrdenadas = letras.sort();
console.log('Letras após o sort:', letras);
console.log('letras ordenadas', letrasOrdenadas);
