'use strict';

/* Sélectionnez tous les paragraphes,
Sélectionnez  tous les divs par le nom de class
Sélectionnez le div bleu
Sélectionnez les spans qui se trouvent dans les paragraphes

const paragraphs = document.getElementsByTagName('p') // liste de nodes
console.log(paragraphs);

// Modifier le texte dans un node
paragraphs[0].innerText = 'Hello World';

const paragraphs2 = document.querySelectorAll('p');
console.log(paragraphs2);

// Modifier la structure html
paragraphs2[1].innerHTML = '<strong>Hello you !</strong>'

// Sélectionner tous les divs par le nom de class
const circles = document.getElementsByClassName('circle')
const circles2 = document.querySelectorAll('.circle')

circles[0].style.backgroundColor = 'red';

// Sélectionner le cercle du milieu
const myDiv = document.getElementById('middle-circle');
const myDiv2 = document.querySelector('#middle-circle');
console.log('myDiv2',myDiv2)

// Modifier la class
myDiv2.classList.remove('circle'); //supprimer la class
myDiv.classList.add('square'); //ajouter une class

let musician = {
  firstname : ' Hans Florian',
  lastname : 'Zimmer',
  nickname : 'Hans Zimmer',
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

const musicianPseudo = document.querySelector('#js-artist');
musicianPseudo.style.color = 'blue';
musicianPseudo.innerHTML = (`${musician.lastname.concat(musician.firstname)}`);
console.log('musicianPseudo',musicianPseudo);

const musicianRealName = document.querySelector('#js-artist-real-name');
musicianRealName.innerHTML = musician.nickname;
console.log('musicianRealName',musicianRealName);

const musicianAlbumTitle = document.querySelector('.js-album-title');
musicianAlbumTitle.innerHTML = musician.albums[0].title;
console.log('musicianAlbumTitle',musicianAlbumTitle);

const musicianYear = document.querySelector('#js-release-date span');
musicianYear.innerHTML = musician.albums[0].year;
console.log('musicianYear',musicianYear);

const musicianNumberSongs = document.querySelector('#js-songs-count');
musicianNumberSongs.innerHTML = musician.albums[0].numberSongs;
console.log('musicianNumberSongs',musicianNumberSongs);

const musicianFavoriteSong = document.querySelector('.js-favourite-song');
musicianFavoriteSong.innerHTML = musician.albums[0].trackListing[2];
console.log('musicianFavoriteSong',musicianFavoriteSong);
musicianFavoriteSong.style.fontWeight = 'bold';

const musicianFamousSong= document.querySelector('#js-famous-song');
musicianFamousSong.innerHTML = musician.albums[0].trackListing[3];
console.log('musicianFamousSong',musicianFamousSong);
musicianFamousSong.style.fontWeight = 'bold';

const musicianLongestSong= document.querySelector('#js-longest-song');
musicianLongestSong.innerHTML = musician.albums[0].trackListing[6];
console.log('musicianLongestSong',musicianLongestSong);
musicianLongestSong.style.fontWeight = 'bold';

EXERCICE 2*/

const mainPageTitle = document.getElementById('page-title');
mainPageTitle.innerText = 'Cats are awesome';
mainPageTitle.style.textDecoration = 'underline';

const myParagraph = document.querySelector('#page-subtitle');
myParagraph.innerHTML = 'Domestic cats, no matter their breed, are <strong>all members of one species.</strong>';
myParagraph.style.color = 'grey';

const paragraphs = document.getElementsByClassName('page-text');
paragraphs[1].innerHTML = 'Plentiful rodents probably drew wild felines to human communities.';

const myHighlight = document.querySelectorAll('.text-highlight');
myHighlight.forEach(function(elem) {
elem.classList.remove('text-highlight');
})

const myImage = document.getElementsByTagName('img');
myImage[0].style.filter = 'grayscale(100%)';
myImage[3].style.filter = 'grayscale(100%)';

// Créer un node
const myParagraphe = document.createElement ('p');
myParagraphe.innerText = 'Hello';
document.querySelector('body').appendChild(myParagraphe)

/* EXERCICE 3*/
const myDivision = document.createElement ('p');
myDivision.innerText = 'Hello';
document.querySelector('body').appendChild(myParagraphe)
