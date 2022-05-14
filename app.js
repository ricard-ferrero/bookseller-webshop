const tableContent = document.querySelector('#main-table-content');
const cartContent = document.querySelector('#cart-table-content');

const btnSearch = document.querySelector('button.search');
const inputSearch = document.querySelector('input.search');

// Almacenaremos los libros filtrados por su ID (menos memoria)
let listBooksFiltred = [];
let listBooksSearched = [];

let objFilter = {
	author: '',
	year: '',
	minPrice: '0',
	maxPrice: '100',
	cover: '',
	pocketbook: ''
}

// Almacenaremos los libros del CART por si ID
let listCart = [];






// Constructores del MAIN
const pocketBook = function (book) {
	if (book) return 'Pocket';
	else return 'Normal';
};

const typeBook = function (book) {
	if (book=='soft') return 'Soft';
	else return 'Hard';
};

constructMain()

function constructMain() {
	toFilter();
	toSearch();
	const listBooks = mixFilterSearch();
	cleanMain();
	listBooks.forEach(id => {
		const data = getBook(id); // <= esta función sustituye a una QUERY en SQL
		const row = document.createElement('tr');
		row.innerHTML = `
		<td class="title">${data.title}</td>
		<td class="author small">${data.author}</td>
		<td class="small">${data.year}</td>
		<td class="small">${typeBook(data.cover)}cover</td>
		<td class="small">${pocketBook(data.pocketbook)}</td>
		<td class="right-align price">${data.price.toFixed(2)} €</td>
		`;

		const adder = document.createElement('td');
		adder.setAttribute('class', 'button')
		adder.addEventListener('click', () => {addToCart(id)});
		adder.innerHTML = `<img src="./source/black/add.svg">`;


		row.appendChild(adder);
		tableContent.appendChild(row);
	});
};

function cleanMain() {
	while(tableContent.firstChild) tableContent.removeChild(tableContent.firstChild);
}

// Constructores Filter


const formAuthor = document.querySelector('#form-author');
const formYear = document.querySelector('#form-year');
const formCover = document.querySelector('#form-cover');
const formPocketbook = document.querySelector('#form-pocketbook');
const formMinPrice = document.querySelector('#form-min');
const formMaxPrice = document.querySelector('#form-max');
const formReset = document.querySelector('.btn-reset');


	// rellenar formYear
yearsList();
function yearsList() {
	const min = 2000;
	const max = new Date().getFullYear();
	
	for (let i=max; i>=min; i--) {
		const option = document.createElement('option');
		option.value = i;
		option.textContent = i;
		formYear.appendChild(option);
	}
}

function toFilter() {
	const filtring = dataBase.filter(filterAuthor).filter(filterYear).filter(filterCover).filter(filterPocketbook).filter(filterMaxPrice).filter(filterMinPrice);
	
	listBooksFiltred = [];
	filtring.forEach(data => listBooksFiltred.push(data.id));
}
	//--------------
function filterAuthor(book) {
	if (objFilter.author!='') return book.author == objFilter.author
	return book
}

function filterYear(book) {
	if (objFilter.year) return book.year == objFilter.year
	return book
}

function filterCover(book) {
	if (objFilter.cover) return book.cover == objFilter.cover
	return book
}

function filterPocketbook(book) {
	if (objFilter.pocketbook==='') return book
	return objFilter.pocketbook === book.pocketbook
}

function filterMaxPrice(book) {
	return book.price <= parseFloat(objFilter.maxPrice)
}

function filterMinPrice(book) {
	return book.price >= parseFloat(objFilter.minPrice)
}

formAuthor.addEventListener('change', e =>{
	objFilter.author = e.target.value;
	constructMain();
});

formYear.addEventListener('change', e =>{
	objFilter.year = e.target.value;
	constructMain();
});

formCover.addEventListener('change', e =>{
	objFilter.cover = e.target.value;
	constructMain();
});

formPocketbook.addEventListener('change', e =>{
	if (e.target.value=='true') {
		objFilter.pocketbook = true;
	} else if (e.target.value=='false') {
		objFilter.pocketbook = false;
	} else objFilter.pocketbook = '';
	constructMain();
});

formMinPrice.addEventListener('change', e =>{
	objFilter.minPrice = e.target.value;
	constructMain();
});

formMaxPrice.addEventListener('change', e =>{
	objFilter.maxPrice = e.target.value;
	constructMain();
});

formReset.addEventListener('click', e =>{
	objFilter = {
		author: '',
		year: '',
		minPrice: '0',
		maxPrice: '100',
		cover: '',
		pocketbook: ''
	}
	constructMain();
});






// Constructores del CART


const btnRemoveCart = document.querySelector('#btn-remove-cart');
const btnOrder = document.querySelector('#btn-order');
const totalPrice = document.querySelector('#total-price-cart');

btnRemoveCart.addEventListener('click', removeCart);
btnOrder.addEventListener('click', sendOrder);

constructCart();

function removeCart() {
	listCart = [];
	cleanCart();
	refreshResultPriceCart();
}

function sendOrder() {
	if (listCart.length) {
		if (window.confirm('Are you sure to send order?')) {
			window.alert('Order sended!\nThanks for your time :)')
			removeCart();
		}
	}
}

function addToCart(id) {
	listCart.push(id);
	constructCart();
}

function constructCart() {
	cleanCart();
	listCart.forEach((id, index)=> {
		const data = getBook(id) // sustituye a QUERY en SQL
		const row = document.createElement('tr');
		row.innerHTML = `
		<td>${data.title}</td>
		<td class="author">${data.author}</td>
		<td class="right-align price-cart">${data.price.toFixed(2)}</td>
		<td class="left-align">€</td>
		`;

		const remover = document.createElement('td');
		remover.setAttribute('class', 'delete-x');
		remover.textContent = "X";
		remover.addEventListener('click', ()=>removeBookFromCart(index))

		row.appendChild(remover);
		cartContent.appendChild(row);
	});
	refreshResultPriceCart();
}

function cleanCart(){
	while(cartContent.firstChild) cartContent.removeChild(cartContent.firstChild)
}

function removeBookFromCart(index) {
	listCart.splice(index, 1);
	constructCart();
}

function refreshResultPriceCart() {
	const sumNodes = document.querySelectorAll('.price-cart');
	const sumValues = []
	sumNodes.forEach(node=>sumValues.push(parseFloat(node.textContent)))
	const result = sumValues.reduce((a,b)=>a+b,0)
	totalPrice.textContent = result.toFixed(2);
}


// CONSTROCTORES BUSCADOR

inputSearch.setAttribute('onkeypress','if (event.keyCode == 13) constructMain()')

btnSearch.addEventListener('click', constructMain);

function toSearch() {
	listBooksSearched = null
	const keyWords = inputSearch.value.toLowerCase().split(' ').filter(word=>word!='')
	if(!keyWords.length) return
	listBooksSearched = []

	const similitudesArray = keyWords.map(word=>{
		let books = dataBase.filter(book=>{
			const arrayTitle = book.title.toLowerCase().split(' ');
			const arrayAuthor = book.author.toLowerCase().split(' ');
			return arrayTitle.includes(word)||arrayAuthor.includes(word);
		});
		return new Set(books);
	});
	
	let similitudesSet = new Set();
	similitudesArray.forEach(element=>similitudesSet = new Set([...similitudesSet, ...element]))
	similitudesSet.forEach(book=>{
		listBooksSearched.push(book.id);
	});
}

function mixFilterSearch() {
	if (!listBooksSearched) {
		return listBooksFiltred
	};
	const x = listBooksFiltred.filter(element => listBooksSearched.includes(element));
	return x
}