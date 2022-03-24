const github = require('./github')
const {getGitHubUserInfos} = github


describe('quando getGitHubUserInfos é executada ',() => {
	test('deve retornar um objeto contendo name, company, twitter, bio e location', async () => {

		expect.assertions(2);

		const expectResult = { name: 'Matheus Alexandre',
		company: '@betrybe',
		twitter: null,
		bio:
		 'Web Development Student and \r\nSummer Student at Trybe. Front-end: React, HTML, JS e CSS. #openToWork',
		location: 'Brazil' } 
		const repositoryInfo = await getGitHubUserInfos('alexandremhm');
		expect(repositoryInfo).toEqual(expectResult);
		expect(repositoryInfo.name).toBe('Matheus Alexandre')
	})
})