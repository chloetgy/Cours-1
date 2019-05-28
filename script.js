'use strict';

/* Arrays (Tableaux)*/

let username1 = "Jeremy";
let username2 = "Toto";
let username3 = "Gio";

let usernames = ["Jeremy", "Toto", "Gio"];
console.log('usernames', usernames);

usernames[0] // premier élément
usernames[1] // deuxième élément
usernames[2] // troisième élément

let usernamesLength = usernames.length // 3
usernames [usernamesLength] // undefined
usernames [usernames.length - 1] // troisième élément

let websites = ["LinkedIn", "Behance", "Facebook"];
console.log('websites', websites);

let websitesLength = websites.length // 3
console.log('First website', websites[0])
console.log('Second website', websites[1])
console.log('Last website', websites [websites.length - 1])
console.log('List length', websites.length)

let myArray = [[1, 2, 3], null, undefined, 2, [4,2,3]];
console.log('Premier élément du premier élément', myArray[0][0]);

/* EXERCICE: Création d'un tableau qui contient 3 tableaux.*/

let myTable = [[1,2,3], [4,5,6], [7,8,9]];
console.log('Deuxième élément du premier élément', myTable [0][1])
console.log('Dernier élément du dernier élément', myTable [myTable.length - 1] [myTable.length - 1])

/*shift, unshift, push, pop, concat*/

const myArr = ['Hello', 'Bonjour', 'Hola'];
console.log(myArr);

// push (ajouter un élément à la fin)
myArr.push('Hallo');
console.log('après le push', myArr)

// unshift (ajouter un élément au début du tableau)
myArr.unshift('Nihao');
console.log('après le unshift',myArr);

// pop (supprimer le dernier élément)
myArr.pop(); //ne prend jamais de paramètres
// shift (supprimer le premier élément)
myArr.shift(); //ne prend jamais de paramètres
console.log('RESULT: myArr',myArr);

/* Ajouter/supprimer les éléments du tableau*/

const myNumbers = [1, 2, 3, 4, 5, 6, 7];
console.log(myNumbers);
myNumbers.shift();
console.log('Supprimez le premier élément du tableau',myNumbers);
myNumbers.pop();
console.log('Supprimez le dernier élément du tableau',myNumbers);
myNumbers.unshift(10);
console.log('Ajoutez 10 au début',myNumbers);
myNumbers.push(100);
console.log('Ajouter 100 à la fin', myNumbers);

// concat (fusionner des tableaux)
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let result = arr1.concat(arr2);
console.log('concat result', result);

/* EXERCICE: Fusionner plusieurs tableaux dans un seul */
let table1 = [1, 2, 3];
let table2 = [4, 5, 6];
let table3 = [7, 8, 9, 10];
let table4 = [11, 12, 13, 14];
let resultTable = table1.concat(table2).concat(table3).concat(table4);
console.log('concat result Table', resultTable)

/* split transforme string en tableau */
let myString = 'Bonjour!';
// console.log(myString.split()) // ['B', 'o', ...]
let myArr3 = myString.split(''); // mettre guillemets vides pour séparer chaque caractère
// reverse (inverser un tableau)
let reversedArr = myArr3.reverse();
console.log('reversedArr', reversedArr);
// join (transformer un tableau en une chaine de caractères)
let res = reversedArr.join('');
console.log('res',res);

/* EXERCICE: Transformation du Tableau */
// enchainer les méthodes : reversedArr.reverse().join()
let welcomeMessage = 'Hello World';
let resultat = welcomeMessage.split('').reverse().join('');
console.log('resultat', resultat);

// parcourir (donner toutes les valeurs) un tableau
// map ou forEach (même chose)
let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myNum.forEach((elem) => {
  console.log('my array element', elem);
})

/*EXERCICE 1: Parcourir un tableau*/

let myMessage = ['What', 'A', 'Wonderful', 'World'];
myMessage.forEach((elem) => {
  console.log('my message is', elem)
})

/*EXERCICE 2*/
let myTest2 = '';
let myTest = ['Hello ', 'World ', 'I ', 'am ', 'John ', 'Doe '];
myTest.forEach((elem) => { // intérieur de la boucle // elem est une variable dynamique
  myTest2 += elem;
})
console.log(myTest2);

/*EXERCICE 3*/
let mySum = '';
let myExercice = [0, 1, 2, 3, 4, 5];
myExercice.forEach((elem) => {
mySum =+ elem;
})
console.log(mySum);
