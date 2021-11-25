// const transformToBinary = number => {
// 	let binaryNumber = '';

// 	while (number > 0) {
// 		binaryNumber += number % 2;
// 		number = parseInt(number / 2);
// 	}
// 	return binaryNumber.split('').reverse().join('');
// };

// console.log(transformToBinary(121));

const transformToBinary = number => {
	let binaryNumber = ' ';

	for (i = 0; i < number; i++) {
		 binaryNumber += number % 2;
		number = parseInt(number / 2);
	}

	return binaryNumber.split('').reverse().join('');
};

console.log(transformToBinary(4));
