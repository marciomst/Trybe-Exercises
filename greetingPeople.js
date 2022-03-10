// Objeto person
const person = {
    name: 'Caique',
    lastName: 'Coelho',
    greet: function(persoName, callback) {
        return callback(persoName);
    },
}

// Função de cumprimento amigável
const lovelyGreet = (personName) => {
    return `Olá, ${personName}!!!!`;
}

// Função de bom dia
const goodMorning = (personName) => {
    return `bom dia, ${personName}!`;
}

// Função de cumprimento de mau humor
const badMoodGreet = (personName) => {
    return `Oi, ${personName}`;
}
console.log(person.greet('Guilherme', lovelyGreet));
