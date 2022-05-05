import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { Loading } from './components';

describe('bloco de teste', () => {
  it('deveria resolver um problema', async () => {
    render(<App />);
    const carregando = screen.getByText(/carregando/i);
    expect(carregando).toBeInTheDocument();

    await waitForElementToBeRemoved(carregando);
    
    const titulo = screen.getByText('Kingsglaive');
    expect(titulo).toBeInTheDocument();
  });

  test('se um problema vai ser resolvido', async () => {
    const { debug } = render(<App />);
    // console.log(retornoDoRender)
    const carregando = screen.getByText(/carregando/i);
    expect(carregando).toBeInTheDocument();
    await waitForElementToBeRemoved(carregando);
    const links = screen.getAllByText(/ver detalhes/i);
    expect(links[0]).toBeInTheDocument();

    const link = screen.getByTestId('KingsglaiveDetails');
    expect(link).toBeInTheDocument();
    // userEvent.setup();
    userEvent.click(link);
    // debug();

    const subtituloDoFilme = await screen.findByText('Subtitle: Final Fantasy XV');
    expect(subtituloDoFilme).toBeInTheDocument();

    const subtituloDoFilmeErrado = screen.queryByText('Subtitle: Spirits Within');
    expect(subtituloDoFilmeErrado).not.toBeInTheDocument();
  });

  test('testando loading', () => {
    render(<Loading />);
    expect(screen.getByText(/carregando/i)).toBeInTheDocument();
  });
});
