
function desenhaCabeça(){
  console.log('Cabeça humana')
}

function desenhaTronco(){
  //especialização
  //isolamento
  console.log('Tronco')
}


function desenharPessoa(){
  //reutilização
  desenhaCabeça()
  desenhaTronco()
}


desenharPessoa();
