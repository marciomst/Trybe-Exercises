/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import renderWithRouter from './helpers/renderWithRouter';
import renderWithRedux from './helpers/renderWithRedux';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import rootReducer from '../store/reducers';
import App from '../App';

describe('Cadastro de clientes', () => {
  it('Verifica se renderiza a pagina principal', () => {
    renderWithRouter(
      <App />,
    );
    const title = screen.getByRole('heading', {
      name: /cadastro de clientes/i,
    });
    const linkToLogin = screen.getByRole('link', {
      name: /faça seu login/i,
    });

    expect(title).toBeInTheDocument();
    expect(linkToLogin).toBeInTheDocument();
  });

  it('Verifica a renderização da pagina de customers', () => {
    const initialState = {
      customers: [],
      login: {
        name: 'brunao',
        email: 'brunao123',
      },
    };

    const { history } = renderWithRouterAndRedux(<App />, { initialState });
    history.push('/customers');
    const title = screen.getByText(/nenhum cliente cadastrado/i);
    expect(title).toBeInTheDocument();
  });

  it('Verifica se é possivel excluir um cliente', () => {
    const initialState = {
      customers: [{
        name: 'wolf',
        age: 18,
        email: 'wolf@cavalheiro',
      }],
      login: {
        email: 'murillo@wolf',
        password: '123',
      },
    };

    const { history } = renderWithRouter(
      renderWithRedux(<App />, initialState),
    );

    history.push('/customers');
    const btn = screen.getByRole('button', {
      name: /excluir/i,
    });

    userEvent.click(btn);

    const message = screen.getByText(/nenhum cliente cadastrado/i);
    expect(message).toBeInTheDocument();
  });
});
