import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Tela de pesquisa', () => {
  test('se o título e a imagem de logo são exibidos na tela', () => {
    render(<App />);
    const titulo = screen.getByRole('heading', { level: 3, name: /pesquise um pokemon/i });
    expect(titulo).toBeInTheDocument();

    const logo = screen.getByRole('img', { name: /logo/i });
    expect(logo).toBeInTheDocument();
  });

  test('se exibe na tela o botão pesquisar e o input de texto', () => {
    render(<App />);
    const botao = screen.getByRole('button', { name: /pesquisar/i });
    expect(botao).toBeInTheDocument();

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('deve digitar no campo de pesquisa', () => {
    render(<App />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveTextContent('');
    userEvent.type(input, 'charmander');
    expect(input).toHaveValue('charmander');
  });

  it('deve exibir o cartão do pokemon quando clicar no botão de pesquisa', async () => {
    const mockDoMoises = {cards: [{name: 'MockZés', types: ['Divisor', 'Água'], imageUrl: 'https://avatars.githubusercontent.com/u/69821675?v=4'}]}
    
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockDoMoises)
    });
    
    // global.fetch = jest.fn().mockResolvedValue({
    //   json: jest.fn().mockResolvedValue(mockDoMoises)
    // });

    // global.fetch = jest.fn(async function() {
    //   return {json: async function() {
    //     return mockDoMoises
    //     }}
    //   }
    // );

    // global.fetch = async function() {
    //   return {json: async function() {
    //     return mockDoMoises
    //   }}
    // }
    

    render(<App />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'charmander');

    const botao = screen.getByRole('button', { name: /pesquisar/i });
    userEvent.click(botao);

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledTimes(1);

    const tituloDoPokemon = await screen.findByRole('heading', { level: 3, name: /mockzés/i });
    expect(tituloDoPokemon).toBeInTheDocument();

    jest.restoreAllMocks();
  });

  it('deve manter o valor original de fetch', () => {
    console.log(global.fetch);
  });
});
