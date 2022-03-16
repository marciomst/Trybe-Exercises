// Faça uma função que obtenha seis dados de data-hora (ano, mês, dia, hora, minuto, segundo) e retorne os dados de ano, mês e dia formatados.


function formatDate(year, month, day, hour, minute, second) {
    return `${day}/${month}/${year}`;
} 


const dateInfo = ['1981', '7', '31', '22', '47', '12'];


describe('testa a função formatDate', () => {
    test('ao inserir os dados de uma data válida retorna a data formatada em DD/MM/YYYY', () => {
        const teste = formatDate('1981', '7', '31', '22', '47', '12');
       expect(teste).toBe('31/7/1981');
    });
  });

