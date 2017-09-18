'use strict';
var memory, price, color, img;
do {
	memory = +prompt('Выберите объем памяти телефона:', '16, 32 или 64 Гб');
} while (memory !== 16 && memory !== 32 && memory !== 64 && memory !== 0);
switch (memory) {
	case 16:
		price = 500;
		break;
	case 32:
		price = 600;
		break;
	case 64:
		price = 700;
		break;
	case 0:
		break;
}
if (memory !== 0) {
	do {
		color = prompt('Выберите цвет (красный на 100 EUR дороже):', 'красный, черный, золотой');
	} while (color !== 'красный' && color !== 'черный' && color !== 'золотой' && color !== null);
	switch (color) {
		case 'черный':
			img = 'black';
			break;
		case 'красный':
			img = 'red';
			price = price + 100;
			break;
		case 'золотой':
			img = 'gold';
			break;
		case null:
			break;
	}
}
if (memory == 0 || color == null) {
	document.write('<h1>Ну и зачем надо было сюда заходить...</h1>')
} else {
	document.write('<h1>Вы выбрали телефон:</h1>' + 'Объем памяти: <b>' + memory + ' Гб</b></br>' + 'Цвет: <b>' + color + '</b></br>' + 'Цена телефона: <b>' + price + ' EUR</b></br></br>');
	document.write('<img src="' + img + '.png"></br>');
}
// console.log('memory: ' + memory);
// console.log('color: ' + color);
// console.log('price: ' + price);
