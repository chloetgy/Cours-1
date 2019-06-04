'use strict';

/*let myArr = [1, 2, 3];

let result = 0;

myArr.forEach(function(element) {
let res = 0;
debugger;
result = result + element;
})*/

/* EXERCICE 1*/

let dividedNumbers = [] ;
let numbers = [0, 1, 2, 3, 4, 5];
let result = [0];

numbers.forEach(function(elem) {
result = elem / 2 ;
dividedNumbers.push(result);
})

console.log(dividedNumbers);

/* EXERCICE 2*/

let myTab = [1, -2, 3, 4, -9, 6];
let myTabPlus = [] ;

myTab.forEach(function(elem) {
  if (elem > 0) {
  myTabPlus.push(elem);
  }
})
console.log(myTabPlus);

/* EXERCICE 3*/

let myCelcius = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myFinalResult = [0];
let myFahrenheit = [];

myCelcius.forEach(function(elem) {
  myFinalResult = (elem * 9/5) + 32;
  myFahrenheit.push(myFinalResult);
})
console.log(myFahrenheit);

/* OBJECTS
let user = {
  username: 'Sasha',
  type: 'Human',
  age: 23,
  friend: {
    name: 'Claire'
  }
}

// Propriété : Username
// Clef de propriété : 'username' (toujours une chaine de caractères)
// Valeur de propriété : 'Sasha'

console.log(user.username) // Sasha
const objKey = 'type'
console.log(user[objKey]); // Human
console.log(user['type']); // Human */

/* EXERCICE 1 */

let user = {
  id : 3654,
  name : 'TANGUY Chloe',
  car : {
    id: 'AA-356-AA',
    brand : 'Peugeot',
    color: 'Red',
  }
}
console.log(user.id);
console.log(user.car.id);
console.log(user.car.color);

/* EXERCICE 2 */

let musician = {
  firstname : 'Hans Florian',
  lastname : 'Zimmer',
  surname : 'Hans Zimmer',
  albums : [
  {
  title: 'Spirit: Stallion of the Cimarron',
  year: 2002,
  numberSongs: '8',
  trackListing: ['Here I Am', 'I Will Always Return', 'This Is Where I Belong', 'Run Free', 'Homeland (Main Title)', 'Rain', 'Nothing I have Ever Known', 'I Will Always Return (Finale)'],
  },
  {
  title: 'Inception',
  year: 2010,
  numberSongs: '12',
  trackListing: ['Half Remembered Dream', 'We Built Our Own World', 'Dream Is Collapsing', 'Radical Notion', 'Old Souls', '528491', 'Mombasa', 'One Simple Idea', 'Dream Within A Dream', 'Waiting For A Train', 'Paradox', 'Time'],
  }
]
}

console.log('Prénom du musicien :', musician.firstname);
console.log('Titre du premier album :',musician.albums[0].title);
console.log('Cinquième chanson de la Track List de Inception :',musician.albums[1].trackListing[4]);


/* EXERCICE 3 */

let cat = {
  name : 'Cookie',
  favoritePlaces: ['Random box', 'Laps', 'Christmas tree'],
  petMyCat: function () {
    console.log('Mrrr',petMyCat);
  }
}

console.log('Premier endroit préféré :',cat.favoritePlaces[0]);

/* EXERCICE 4 */

const myPets = [
    {
      pet: 'cat',
      name: 'Cookie',
      occupation: 'sleeping all day',
      says: () => { 'Miaou!' }
    },
    {
      pet: 'dog',
      name: 'Toffee',
      occupation: 'walking in the park',
      says: () => { 'Wouf!' }
    },
    {
      pet: 'parrot',
      name: 'Kesha',
      occupation: 'mocking other pets',
      says: () => { 'Hehe, that was fun!' }
    }
  ]

  myPets.forEach(function(pet) {
    console.log(`My pet ${pet.pet} named ${pet.name} loves ${pet.occupation} and keeps saying ${pet.says()}`);
  })

/*DOM*/

console.log(window);

  // par le nom de la balise (liste de nodes/noeuds)
  document.getElementsByTagName('p');
  document.querySelectorAll('p');

  // par le nom de classe (liste)
  document.getElementsByClassName('my-class');
  document.querySelectorAll('.my-class');

  // par id (node)
  document.getElementById('my-id');
  document.querySelector('#my-id');

  let myBody = document.getElementsByTagName('body');

  console.log('myBody',myBody);

  /*EXERCICE 1: TROUVER UNE NODE*/

  const myParagraphs = document.getElementsByTagName('p');
  console.log('Paragraphes',myParagraphs);
  document.querySelectorAll('p');

  const myDiv = document.getElementsByClassName('circle');
  console.log('Divisions',myDiv);
  document.querySelectorAll('.circle');

  const myBlueDiv = document.getElementById('middle-circle');
  console.log('Paragraphes',myBlueDiv);
  document.querySelector('#middle-circle');

  const myParagraphSpan = document.getElementsByTagName('p.span');
  console.log(myParagraphSpan);
  document.querySelectorAll('p.span');
