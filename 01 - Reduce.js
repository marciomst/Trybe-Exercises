const numbers = [2, 3, 4, 6, 7, 12, 24];

// Cold Call - Somatório com FOR
// let accumulator = numbers[0];

// for (let i = 1; i < numbers.length; i += 1) {
//     accumulator = accumulator + numbers[i];
// }

// console.log(accumulator);

// Somatório com o Reduce

const sumWithReduce = numbers.reduce((accumulator, currentValue) => {
    console.log(`${accumulator} -------- ${currentValue}`);
    return accumulator + currentValue;
},10);

console.log(sumWithReduce);

