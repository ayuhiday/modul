const readline = require('readline-sync');


console.info('Program penambahan angka');
const number1 = readline.question('Masukkan angka pertama: ');
const number2 = readline.question('Masukkan angka kedua:  ');

function add(a,b) {
	return a+b;
	}
	const hasil = add(2,3);
	console.log(hasil);