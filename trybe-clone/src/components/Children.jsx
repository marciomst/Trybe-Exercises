/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React from 'react';

function Filho() {
  return <p>Filho tá aqui</p>;
}

class Pai extends React.Component {
  render() {
    console.log(this.props);
    // document.getElementById().innerHTML
    return (
      <div>
        Pai
        {this.props.children}
      </div>
    );
  }
}

class Visualizacao extends React.Component {
  render() {
    return (
      <>
        <Pai nome="Pai">
          <p>antes</p>
          <Filho />
          <p>Aqui tbm</p>
        </Pai>
        <hr />
        <Filho />
      </>
    );
  }
}

export default Visualizacao;
