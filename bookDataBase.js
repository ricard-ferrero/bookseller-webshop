/*
	LIBROS
	id
	título
	autor
	año
	precio
	tapa
	de bolsillo
*/

const dataBase = [
	{
	id: 1,
	title: "Learning Maths",
	author: "Richard Ferdman",
	year: 2008,
	price: 19.50,
	cover: "soft",
	pocketbook: true
	},
	{
	id: 2,
	title: "Learning Maths",
	author: "Richard Ferdman",
	year: 2008,
	price: 30.00,
	cover: "hard",
	pocketbook: false
	},
	{
	id: 3,
	title: "How to code faster",
	author: "Elysa Simpson",
	year: 2002,
	price: 25.99,
	cover: "hard",
	pocketbook: false
	},
	{
	id: 4,
	title: "How to code faster",
	author: "Elysa Simpson",
	year: 2002,
	price: 32.89,
	cover: "hard",
	pocketbook: true
	},
	{
	id: 5,
	title: "Remember everything",
	author: "Nicolas Biden",
	year: 2015,
	price: 15.50,
	cover: "soft",
	pocketbook: false
	},
	{
	id: 6,
	title: "Remember everything",
	author: "Nicolas Biden",
	year: 2015,
	price: 15.50,
	cover: "hard",
	pocketbook: false
	},
	{
	id: 7,
	title: "Remember everything",
	author: "Nicolas Biden",
	year: 2015,
	price: 15.50,
	cover: "soft",
	pocketbook: true
	},
	{
	id: 8,
	title: "History of Internet",
	author: "Richard Ferdman",
	year: 2019,
	price: 35.00,
	cover: "hard",
	pocketbook: false
	},
	{
	id: 9,
	title: "Reconstruction of Rome",
	author: "Elysa Simpson",
	year: 2022,
	price: 55.90,
	cover: "soft",
	pocketbook: false
	},
	{
	id: 10,
	title: "Reconstruction of Rome",
	author: "Elysa Simpson",
	year: 2022,
	price: 60.90,
	cover: "soft",
	pocketbook: true
	},
	{
	id: 11,
	title: "Became rich",
	author: "Nicolas Biden",
	year: 2000,
	price: 16.00,
	cover: "hard",
	pocketbook: false
	},
	{
	id: 12,
	title: "Became rich",
	author: "Nicolas Biden",
	year: 2000,
	price: 14.00,
	cover: "soft",
	pocketbook: false
	},{
	id: 13,
	title: "Became rich",
	author: "Nicolas Biden",
	year: 2000,
	price: 16.00,
	cover: "soft",
	pocketbook: true
	},
	{
	id: 14,
	title: "Fibonacci in Python",
	author: "Bill Jobs",
	year: 2008,
	price: 33.99,
	cover: "hard",
	pocketbook: false
	},
	{
	id: 15,
	title: "Fibonacci in Python",
	author: "Bill Jobs",
	year: 2008,
	price: 39.99,
	cover: "hard",
	pocketbook: true
	},
	{
	id: 16,
	title: "Fibonacci in Python",
	author: "Bill Jobs",
	year: 2008,
	price: 30.00,
	cover: "soft",
	pocketbook: false
	},
	{
	id: 17,
	title: "Fibonacci in Python",
	author: "Bill Jobs",
	year: 2008,
	price: 33.99,
	cover: "soft",
	pocketbook: true
	},
	{
	id: 18,
	title: "Custome your PC",
	author: "Steve Gates",
	year: 2012,
	price: 11.50,
	cover: "soft",
	pocketbook: true
	},
	{
	id: 19,
	title: "Raspberry Pi for noobs",
	author: "Steve Gates",
	year: 2020,
	price: 21.50,
	cover: "soft",
	pocketbook: false
	},
	{
	id: 20,
	title: "Raspberry Pi for noobs",
	author: "Steve Gates",
	year: 2020,
	price: 29.50,
	cover: "hard",
	pocketbook: true
	},
	{
	id: 21,
	title: "Linux is cool",
	author: "Elysa Simpson",
	year: 2006,
	price: 40.00,
	cover: "hard",
	pocketbook: false
	},
	{
	id: 22,
	title: "Linux is cool",
	author: "Elysa Simpson",
	year: 2006,
	price: 36.00,
	cover: "soft",
	pocketbook: false
	},
	{
	id: 23,
	title: "Use data bases",
	author: "Bill Jobs",
	year: 2014,
	price: 65.00,
	cover: "hard",
	pocketbook: false
	},
	{
	id: 24,
	title: "Use data bases",
	author: "Bill Jobs",
	year: 2014,
	price: 60.00,
	cover: "soft",
	pocketbook: false
	},
	{
	id: 25,
	title: "History of Linux",
	author: "Nicolas Biden",
	year: 2002,
	price: 30.50,
	cover: "soft",
	pocketbook: true
	},
	{
	id: 26,
	title: "Start your app",
	author: "Richard Ferdman",
	year: 2022,
	price: 21.50,
	cover: "soft",
	pocketbook: true
	},
	{
	id: 27,
	title: "Start your app",
	author: "Richard Ferdman",
	year: 2022,
	price: 27.50,
	cover: "hard",
	pocketbook: true
	}
]

//La siguiente función sustituye a una QUERY en SQL
function getBook(queryId) {
	return dataBase[queryId-1];
}