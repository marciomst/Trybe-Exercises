// Função de soma
const sum = (number1, number2) => {
    return number1 + number2;
}

// Função de subtração
const sub = (number1, number2) => {
    return number1 - number2;
}

// Função calculate()
const calculate = (callback, value1, value2) => {
    const result = callback(value1, value2);
    return result;
}

console.log(calculate(sum, 3, 5));