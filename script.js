'use strict';
/*
const myParagraph = document.querySelector('#my-paragraph');

myParagraph.addEventListener('click', function(event) { // quand l'évenement est cliqué cette fonction sera appelée

console.log('paragraph clicked');
console.log('event',event);
event.target.style.color = 'red';

})

// EXERCICE 1

const myButton = document.querySelector('#js-click');

myButton.addEventListener('click', function(event) { // quand l'évenement est cliqué cette fonction sera appelée

console.log('button clicked');
console.log('event',event);
event.target.classList.add('btn-success');
event.target.innerText = 'Clicked !';

})


// EXERCICE 2

let isBtnGray = true;

const myBtn = document.querySelector('#js-change-color');
myBtn.addEventListener('click',function(event) {

    if (isBtnGray === true){
        console.log('button clicked');
        console.log('event',event);
        event.target.style.backgroundColor = 'green';
        isBtnGray = false;
    } else {
        console.log('button clicked 2');
        console.log('event',event);
        event.target.style.backgroundColor = 'grey';
        isBtnGray = true;
    }

})

// EXERCICE 3

let isAlertHere = false;
let isCrossHere = false;

const hideAlert = document.querySelector('#js-hide-alert');
const showAlert = document.querySelector('#js-show-alert');
const myAlert = document.querySelector('#js-alert');

showAlert.addEventListener('click',function(event) {

    if (isCrossHere === false && isAlertHere === false){
        console.log('event',event);
        myAlert.style.display = 'contents';
        isAlertHere === true;
        isCrossHere === true;
    } else {
        console.log('event',event);
        myAlert.style.display = 'none';
        isAlertHere === false;
        isCrossHere ===  false;
    }
})

hideAlert.addEventListener('click',function(event) {

    if (isCrossHere === true && isAlertHere === true){
        console.log('event',event);
        myAlert.style.display = 'contents';
        isAlertHere === false;
        isCrossHere === false;
    } else {
        console.log('event',event);
        myAlert.style.display = 'none';
    }
})

// EXERCICE
let isFranceHere = false;
let isSpainHere = false;
let isGermanyHere = false;

const myFrance = document.querySelector('#js-flag-fr');
const mySpain = document.querySelector('#js-flag-es');
const myGermany = document.querySelector('#js-flag-de');
const myCountryName = document.querySelector('#js-iso-greeting');

myFrance.addEventListener('mouseenter',function(event) {

    if (isFranceHere === false){
        isFranceHere === true;
        myCountryName.innerText = 'France';
    } else {
        isFranceHere === false;
    }
})

myFrance.addEventListener('mouseleave',function(event) {

      if (isFranceHere === false){
          isFranceHere === true;
          myCountryName.innerText = '';
      } else {
          isFranceHere === false;
    }
})


mySpain.addEventListener('mouseenter',function(event) {

    if (isSpainHere === false){
        isSpainHere === true;
        myCountryName.innerText = 'Spain';
    } else {
        isSpainHere === false;
    }
})

mySpain.addEventListener('mouseleave',function(event) {

      if (isSpainHere === false){
          isSpainHere === true;
          myCountryName.innerText = '';
      } else {
          isSpainHere === false;
    }
})

myGermany.addEventListener('mouseenter',function(event) {

    if (isGermanyHere === false){
        isGermanyHere === true;
        myCountryName.innerText = 'Germany';
    } else {
        isGermanyHere === false;
    }
})

myGermany.addEventListener('mouseleave',function(event) {

      if (isGermanyHere === false){
          isGermanyHere === true;
          myCountryName.innerText = '';
      } else {
          isGermanyHere === false;
    }
})

// EXERCICE 5
const windowWidth = document.querySelector('#js-window-width');
const windowHeight = document.querySelector('#js-window-height');

window.addEventListener('resize',function(event) {
        windowWidth.innerText = window.innerWidth;
        windowHeight.innerText = window.innerHeight;

})*/

// EXERCICE 6
/*
const myForm = document.querySelector('#js-total-price');
const myProduct = document.querySelector('#js-product');
const myQty = document.querySelector('#js-quantity');
const myPrice = document.querySelector('#js-price');
const myPriceResult = document.querySelector('#js-price-result');

myForm.addEventListener('submit',function(event) {
        event.preventDefault() // éviter le comportement par défaut

        const productName = myProduct.value;
        const productQty = myQty.value;
        const productPrice = myPrice.value;

        const totalPrice = myQty.value * myPrice.value ; // calculer le prix total
        const result = `Vous avez commandé ${myProduct.value} ${myQty.value} fois. Le prix total sera ${totalPrice} €`;
        myPriceResult.style.display = 'contents';
        myPriceResult.innerText = `${result}` ;
})*/

// sélectionner le node canvas
const canvas = document.querySelector('canvas');
// choisir le contexte du canvas
const ctx = canvas.getContext('2d');

// récupérer la position X et Y du pixel
const getCoordinatesInCanvas = (canvasEl, event) => {
  const rect = canvasEl.getBoundingClientRect(); // récupérer la taille de <canvas> et sa position relative par rapport à la zone d'affichage
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(`x: ${x}, y: ${y}`);
}
canvas.addEventListener('click', (event) => {
  getCoordinatesInCanvas(canvas, event);
})
ctx.fillStyle ='#fff'; // définir la couleur de fond qui sera appliquéelse
ctx.strokeStyle = 'red'; // couleur des traits
ctx.beginPath(); // commence la partie du dessin
ctx.arc(200,180,60,0,2 * Math.PI);
ctx.stroke(); //dessine un traits
ctx.fill ();

ctx.beginPath();
ctx.arc(200,360,120,0,2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.fillStyle = 'blue';
ctx.fillRect(165,230,70,20);
ctx.fillRect(211,232,20,90);

ctx.beginPath();
ctx.moveTo(140,300);
ctx.lineTo(40,250);
ctx.stroke();


ctx.fillStyle = '#000'; //changer la couleur de fond
ctx.beginPath ();
ctx.arc(180,175,5,0,2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath ();
ctx.arc(215,175,5,0,2 * Math.PI);
ctx.stroke();
ctx.fill();

//nose
ctx.lineWidth = 1;
ctx.strokeStyle = 'orange';
ctx.fillStyle = 'orange';

ctx.beginPath();
ctx.moveTo(198,186);
ctx.lineTo(130,206);
ctx.lineTo(202,207);
ctx.stroke();
ctx.fill();
