import React from 'react';

export const surveyContent = [
	{
		title: 'Estate Administration',
		questions: [
			'Have you recently lost someone?',
			'Has anyone filed anything with the surrogates courts?',
			'Are you seeking to be the estate administrator?',
			'Will some object to you becoming the administrator?',
			'Are you seeking to challenge the person seeking to be the estate aministrator?',
			'Is there a will?',
			'Are there other beneficiaries?',
			'Do you know what assets the decedent owned?',
		],
	},
	{
		title: 'Estate Planning',
		questions: [
			"Are you looking to plan your estate or someone else's?",
			'Have you ever planned your estate?',
			'Do you have a will?',
			'Do you have any trusts?',
			'Are you a beneficiary under any trust?',
			'Are you married?',
			'Do you have any children?',
		],
		subQuestion: 'What assets do you own?',
		subQuestions: [
			'-Real Estate',
			'-Business',
			'-Life insurance on yourself or someone else',
			'-Retirement accounts',
		],
		subQuestionTwo: '9. Financial Accounts?',
		subQuestionsTwo: ["-Checking, Savings C/D's", '-Brokerage accounts', '-Stocks', '-Bonds', '-Mutual Funds'],
		subQuestionThree: '10. Collectables?',
		subQuestionsThree: ['-Antiques', '-Coins', '-Stamps', '-Paintings', '-Other'],
		subQuestionFour: '11. Weapons?',
		subQuestionsFour: ['-Pistols', '-Rifles', '-Ammunition', '-Other'],
	},
	{
		title: 'Real Estate',
		questions: ['Are you looking to buy a home?', 'Have you made an offer on a property?'],
		subQuestion: '3. Are you looking to sell a home?',
		subQuestions: ['-Have you listed your property?'],
		subQuestionTwo: '4. Are you looking to buy commercial property?',
		subQuestionsTwo: ['-Have you made an offer?', '-Have you seen any preliminary documents?'],
		subQuestionThree: '5. Are you a landlord?',
		subQuestionsThree: [
			'-Are you in need of a lease for commercial tenant?',
			'-With a non-paying tenant?',
			'-With a breaching tenant?',
		],
		subQuestionFour: '6. Are you or the other party in breach of a lease?',
	},
	{
		title: 'Rental Property Management',
		questions: [
			'Do you have property you want to rent out?',
			'Do you need someone to manage your property?',
			'Are you an absentee landlord in need of someone to oversee your property?',
		],
	},
];
