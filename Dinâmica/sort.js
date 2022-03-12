const estudantes = [
    {
      nome: 'Joel',
      Projeto: 'Trybewarts',
      status: 98,
    },
    {
      nome: 'Mica',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Hugonardo',
      Projeto: 'Trybewarts',
      status: 97,
    },
    {
      nome: 'Aninha',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Joicy',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Ronald',
      Projeto: 'Trybewarts',
      status: 75,
    },
  ];
  
  // 1 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados em ordem alfabetica.
  
  // escreva sua função aqui.

  // Demonstrando comparação do sort

  // const ordenaArrayNome = (array) => {
  //   const arrayOrdenadoNome = array.sort((a,b) => {
  //     console.log(a.nome,b.nome);// explicar aqui
  //     if (a.nome > b.nome) {
  //       return 1;
  //     }
  //     if (a.nome < b.nome) {
  //       return -1;
  //     }
  //     return 0;
  //   });
  //   return arrayOrdenadoNome;
  // }

  // console.log(ordenaArrayNome(estudantes));
  

  
  // 2 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados por status.
  
  // escreva sua função aqui.

  
const arrayOrdenadoStatus = estudantes.sort((a,b) => a.status - b.status);
  
console.log(arrayOrdenadoStatus);