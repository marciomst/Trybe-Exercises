require('./fetchSimulator');
const { getGitHubUserInfos } = require('./github');

const expected = {
    name: 'Matheus Alexandre',
    company: '@betrybe',
    twitter: undefined,
    bio: 'Web Development Student and \r\n' +
      'Summer Student at Trybe. Front-end: React, HTML, JS e CSS. #openToWork',
    location: 'Brazil',
  };
  
  describe('Testando github API', () => {
   
    it('com usuário \'alexandremhm\', deve retornar os dados desse usuário', async () => {
      expect.assertions(1);
      const response = await getGitHubUserInfos("alexandremhm");
  
      expect(response).toEqual(expected);
    });

    it('deve chamar a função fetch', async () => {
      expect.assertions(1);
      await getGitHubUserInfos("alexandremhm");
      expect(fetch).toHaveBeenCalled();
    });

    it('deve chamar a função fetch com o endpoint correto', async () => {
      expect.assertions(1);
      const user = 'alexandremhm';
      const url = `https://api.github.com/users/${user}`;
      await getGitHubUserInfos(user);
      expect(fetch).toHaveBeenCalledWith(url);
    });

    it('com usuário inexistente, deve retornar um erro \'Usuário inválido\'', async () => {
      try {
        await getGitHubUserInfos('usuario-inexistente');
      } catch (error) {
        expect(error).toEqual(new Error('Usuário inválido'));
      }
    });

  });

