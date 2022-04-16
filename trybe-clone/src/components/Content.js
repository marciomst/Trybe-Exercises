/* eslint-disable react/no-unused-state */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Agenda from '../pages/Agenda';
import AulaAoVivo from '../pages/AulaAoVivo';
import Projetos from '../pages/Projetos';

export default class Content extends React.Component {
  render() {
    // switch( minhaRota ){
    //   case '/agenda':
    //     renderAgenda();
    //     break;
    //   case '/projetos':
    //     renderProjetos();
    //     break;
    // }

    // Route 3 formas
    // com children
    return (
      <main className="Content">
        <Switch>
          <Route path="/agenda">
            <Agenda />
          </Route>

          <Route path="/projetos" component={ Projetos } />

          <Route
            path="/aula-ao-vivo/:id"
            render={ (props) => <AulaAoVivo { ...props } /> }
          />

          <Route path="/">
            <hr />
            Entrei aqui
          </Route>
        </Switch>
      </main>
    );
  }
}
