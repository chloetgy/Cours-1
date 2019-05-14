'use strict';

let myVariable = 'Hello'; // déclarer une variable
console.log(myVariable); 
myVariable = 'Bye';
console.log(myVariable); 

const myConst = 'Hello'; // déclarer une constante
// myConst = 'Bye'; // ERROR

/* Test
Test */

let userAge = 29; // null
console.log ('userAge', userAge);

undefined // non-definie
null // non-existant
'Hello' // chaine de caractères
3.14 // nombre
true // boolean


const piValue = '3.14';

let menuList = 5;
console.log ('menuList', menuList)

const earthMass = '5,972 × 10**24 kg';

let year = 2019 ;
console.log ('year', year)

const policeNumber = '17';

let userWeight = 65;
console.log ('userWeight', userWeight);

/* Opérateurs JavaScript 
+ (addition)
- (soustraction)
* (multiplication)
/ (division)
** (puissance)
*/

/*let sum = 3 + 4;
sum = sum + 5; //12
sum+= 5; // 12*/

let sum = 10 + 32 ;
sum += 8 ;

let sub = 10 - 5 ;
sub -= 5;

let mul = 5*7 ;
mul *=2 ;

let division = 10 / 2 ;
division /= 2 ;

let variableSum = 5 ;
variableSum++;

let variableSub = 5 ;
variableSub--; //variableSub + variableSub - 1

let string1 = 'Hello';
let string2 = 'Bye';
console.log(string1 + 'blabla' + string2);
console.log(`${string1} blabla ${string2}`);

/* Opérateurs de comparaison
>= (supérieur ou égal)
< (inférieur)
<= (inférieur ou égal)
== (égal: suelement la valeur)
=== (égal: valeur et type)
! (n'est pas égal)
|| (ou)
&& (et)
*/

let num1 = 5;
let num2 = 7;
console.log(num1 > num2); // false
console.log(num1 < num2); // true
console.log(10 >= 10); //true
console.log(5 === 5); //true
console.log(5 === '5'); //false
console.log(5 == '5'); //true
console.log(5 !== '5'); //false

console.log (5 > 3 || 7 > 10); //true
console.log(5 > 3 && 7 > 10); //false


console.log(2 > 1);
console.log(2 < 1);
console.log(20 >= 10);
console.log(10 >= 10);
console.log(4 !== 6);
console.log('2' === 2);
console.log(0 == '0');
console.log(4 !== 6);
console.log('hello' === 'hello');
console.log('hello' == 'Hello');
console.log(5 > 0 || 5 < 10);
console.log(10 > 5 && 10 <= 10);




