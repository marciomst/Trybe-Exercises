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
  
  // 1 - Aqui na Trybe estamos criando um bot que vai dar os parabéns para as pessoas que entregaram 100% dos projetos, esse bot deve imprimir uma msg do tipo: "Olá pessoa, parabéns por ter finalizado 100% do nomeDoPorjeto", para cada pessoa.
  
  // escreva sua função aqui.

  const mandaParabens = (arry) => {
    arry.forEach((item) => {
      if(item.status === 100) {
        console.log(`Olá ${item.nome}, parabéns por ter finalizado 100% do ${item.projeto}`)
      }
    })
  }
  
  mandaParabens(estudantes)
  
  // 2 - Depois de algumas ações focadas nas pessoas que ainda não tinham entregue o projeto conseguimos ter 100% de aprovação! As pessoas que ainda não tinham entregue conseguiram os 80% e precisamos atualizar nossos dados e imprimir o novo resultado.
  
  // escreva sua função aqui.

  const atualizaDados = (array) => {
    array.forEach((item) => {
      if (item.status < 80) {
        item.status = 80
      }
    })
    console.log(array)
  }
  
  atualizaDados(estudantes)