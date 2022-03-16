const epic = ['A', 'long', 'time', 'ago,', 'in a', 'galaxy', 'far far', 'away...'];

// Concatene o array de string epic em uma única string.

const phrase = epic.reduce( (accumulator, currentValue) => {
    console.log(accumulator);
    return `${accumulator} ${currentValue}`;
}, 'phrase:');

console.log(phrase);

