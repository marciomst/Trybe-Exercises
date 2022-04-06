/* eslint-disable react/require-render-return */
import React from 'react'
import PropTypes from 'prop-types';

class Cabeca extends React.Component{

  constructor(props){ // iniciador
    super(props)
  }

  render(){

    return (<div>
    <hr/>
    {this.props.olhos && this.props.olhos.map( (olho) => {
      return <p key={olho}>{olho}</p>
    } )}
    Nariz e Boca
    <hr/>
    </div>)
  }
}

Cabeca.propTypes = {
  olhos: PropTypes.arrayOf(PropTypes.string)
};

export default Cabeca;
