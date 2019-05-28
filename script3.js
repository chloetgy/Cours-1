'use strict';


function useSortingHat(myCharacter) { // fonction qui permet de choisir la maison en fonction du personnage choisi

  if (myCharacter == 'Luna Lovegood') { 
    let myCharacterHouse = 'Ravenclaw'; // constante locale
    const result = myCharacter + ' goes to ' + myCharacterHouse ;
    return result; 

  } else if (myCharacter == 'Draco Malfoy') {
    let myCharacterHouse = 'Ravenclaw'; // variable locale
    const result = myCharacter + ' goes to ' + myCharacterHouse ;
    return result; 

 }  else if (myCharacter == 'Harry Potter'){
    let myCharacterHouse = 'Gryffindor'; // variable locale
    const result = myCharacter + ' goes to ' + myCharacterHouse ;
    return result; 

  } else {
    let myCharacterHouse = 'Gryffindor'; // variable locale
    const result = myCharacter + ' goes to ' + myCharacterHouse ;
    return result; 
  } 

} 

console.log(useSortingHat('Luna Lovegood')); // affiche la maison d'après le personnage choisi



function checkMyGringottsAccount (myAccount) {

  const myMoney = myAccount * 100;

  if (myMoney >= 0 && myMoney <= 30) {
  console.log('Hello Weasley');
}  else if (myMoney > 30 && myMoney <= 75) {
  console.log('Hey, that is cool');
  } else {
  console.log('You are reach!');
  }

}

console.log(checkMyGringottsAccount(2310));
