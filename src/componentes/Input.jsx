

//function Input( props ){
  //mas eu só me importo com type

// function Input( {type} ){

function Input( props ){

  //é um parametro da função
  // console.log(props.type)
  const {type} = props;
  console.log(type)

  return <div>{ JSON.stringify(type) }</div>
}

export default Input;