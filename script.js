// Definição de um algoritmo


// Soma de dois números 

// Entrada - Dois números 

// Processamento - Adição

// Saída - Resultado da adição


// Problema

// Uma padaria acaba de juntar um dinheirinho a mais e quer comprar um robô para otimizar uma tarefa, para isso, contrataram você, pessoa estudante da Trybe para poder ajudar a criar esse algoritmo. Bora ?

// Pensando que temos um banco de dados e que a senha validada tem que ser  ‘1234’ e exibirá a mensagem “Acesso permitido” e caso contrário “Acesso negado”

// Atenção: O sistema deve verificar usuário e senha;


// PE - Entender o problema


// Entrada

// Usuário e senha

// Processamento 

// Validar/ verificar o usuário e senha

// Saída

// Acesso permitido ou acesso negado 




// Resolução do problema


// Entrada

let userName = 'mary';
let senha = '1234';
let acess = false;


// Processamento e saída

if (userName === 'mary' && senha === '1234') {
    console.log('Acesso permitido');
    acess = true;
} else {
    console.log('Acesso negado');
    acess = false;
}


// Operador lógico 

// E - AND

// (V) EMAIL - (V) SENHA - (V)
// (V) EMAIL - (F) SENHA - (F)
// (F) EMAIL - (V) SENHA - (F)
// (F) EMAIL - (F) SENHA - (F)

// Análise de trecho de código 


if(acess === true){
    console.log("Olá, " +userName);
    for(let index = 0; index <= 10; index += 1){
      if(index === 0){
        console.log("Não existe nenhum pão na sacola :(");
      } else if(index === 1){
        console.log("Existe " + index + " pão na sacola");
      } else {
        console.log("Existe " + index + " pães na sacola");
      }
    }
    console.log("Você acaba de adquirir todos os pães, obrigada e volte sempre :)");
}

// Problema 2 

// Criar x-queijão
// Ingredientes do Xtudão: Pão, 10 pedaços de queijos, Pão, 10 pedaços de queijo e fecha com pão de fechamento.

for (let index = 0; index < 2; index+=1 ) {
    console.log('Adiciona pao');
    for (let index2 = 0; index2<10; index2+=1) {
        console.log('Adiciona queijo');
    }
}
console.log("Adiciona o pão diferentão");



// Análise de código - Pessoa alérgica a bacon

let xTrybe = ["pão", "queijo", "bacon", "alface", "ketchup", "pão"];

for(let index = 0; index < xTrybe.length; index += 1) {  
  if(xTrybe[index] === 'bacon'){
    let indice = xTrybe.indexOf('bacon');
    xTrybe.splice(indice,1)
  
   }
}

console.log(xTrybe);

