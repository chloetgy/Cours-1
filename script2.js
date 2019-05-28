'use strict';

/* 
if (condition) {
	// si c'est vrai 
}
else {
	// si c'est faux
}
*/

let myVariable = 1;

if (myVariable > 5){
	console.log('Vrai');
} else if (4 < 6){
	console.log('4 < 6 est vrai ');
} else {
	console.log('Faux');
}


let myVar = 20;
if (myVar/2 >= 10 || myVar/2 <= 15){
	console.log('Yes');
}  else {
	console.log('No');
}

let Number1 = 20;
let Number2 = 30;
if (Number1 > Number2){
console.log(`The greater number of ${Number1} and ${Number2} is ${Number1}`);
}  else {
console.log(`The greater number of ${Number1} and ${Number2} is ${Number2}`);
}

let Note = 72;
if (Note >= 90){
	console.log('A')
} else if (Note >= 80 && Note < 90) {
	console.log('B')
} else if (Note >= 70 && Note < 80){
	console.log('C')
} else if (Note >= 60 && Note < 70){
	console.log('D')
} else if (Note <= 60) {
	console.log ('F')
}

let myNum = 8; // variable globale

// déclarer une fonction
function myFunction () {
	let myVar = 1; // variable locale
	console.log('myVar is ' + myVar);
}

//nouvelle façon de déclarer une fonction 
const myFunc = () => {
	let myVar = 1; // variable locale
	console.log('myVar is '+ myVar);
}

// num 1, num 2 - les arguments de la fonction
function sumTwoNum(num1, num2){
	console.log(num1);
	console.log(num2);
	const result = num1 + num2;
	console.log('result', result); 
	return result; // affichage de la valeur finale
} 


let a = sumTwoNum(2,5);
console.log(sumTwoNum(2,5));
console.log('a',a);


//planMyTrip
function planMyTrip(City1, City2, City3, City4){
	const result = 'I want to visit ' + City1 + City2 + City3 + City4;
	return result; 
} 

console.log(planMyTrip('Paris ', 'Berlin ', 'New York ', 'London '));


//calculateDogAge
function calculateDogAge(dogAge){
	const humanAge = dogAge * 7;
	const result = 'This dog is ' + humanAge + ' years old';
	return result; 
} 

console.log(calculateDogAge(3));
console.log(calculateDogAge(5));
console.log(calculateDogAge(1));

//calculateSupply Age, snackName, numberSnackPerDay
function calculateSupply(myAge, snackName, numberSnackPerDay){
	let myFinalAge = 83;
	const numberYears = myFinalAge - myAge;
	const numberSnackTotal =  numberYears * 365 * numberSnackPerDay;
	const result = 'You will need ' + numberSnackTotal + ' ' + snackName + 'to last you until the ripe old age of ' + myFinalAge;
	return result; 
} 

console.log(calculateSupply(18, 'Cookies ', 3));
console.log(calculateSupply(18, 'Sushis ', 2));
console.log(calculateSupply(18, 'Chocolate bars ', 5));