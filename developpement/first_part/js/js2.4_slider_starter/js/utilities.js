'use strict';

/**
 * Génère un entier aléatoire entre 2 bornes
 * @param min - Borne minimale
 * @param max - Borne maximale
 * @returns {number} - L'entier aléatoire
 */
function getRandomInteger(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let images = [
    {
        src: 'img/slides/1.jpg',
        caption: 'legende associée'
    },
    {
        src: 'img/slides/2.jpg',
        caption: 'legende associée 2'
    },
    {
        src: 'img/slides/3.jpg',
        caption: 'legende associée 3'
    },
    {
        src: 'img/slides/4.jpg',
        caption: 'legende associée 4'
    },
    {
        src: 'img/slides/5.jpg',
        caption: 'legende associée 5'
    },
    {
        src: 'img/slides/6.jpg',
        caption: 'legende associée 6'
    },
];


let imageMini = [
    "imageMini1", "imageMini2", "imageMini3", "imageMini4", "imageMini5", "imageMini6"
]



// changer l'image en fonction de l'index de images

let imageActive = document.getElementById("imageAffichee");
let indexActuel = 0;
let indexMax = images.length;
let buttonNext = document.getElementById("next");
let buttonPrev = document.getElementById("prev");
let buttonPlay = document.getElementById("playAuto");
let buttonRandom = document.getElementById("playRandom");
let interval = "";

//for (let i = 0; i <= indexMax; i++) {
//    console.log(i);
//    document.getElementById("miniImageMenuListe").innerHTML += `<li><img src="${images[i].src}" id="${imageMini[i]} alt=""></li>`;
//}


function changeImage(number) {
    imageActive.setAttribute("src", images[number].src);
    document.querySelector("figcaption").innerText = images[number].caption;
}

function changeIndexPlus() {
    indexActuel++;
    if (indexActuel > (indexMax - 1)) {
        indexActuel = 0;
    }
}

function randomImage() {
    indexActuel = getRandomInteger(0, (indexMax-1));
}

function changeIndexMinus() {
    indexActuel--;
    if (indexActuel < 0) {
        indexActuel = indexMax;
    }
}

function stopSlider() {
    if (interval != '') {
        clearInterval(interval);
        interval = ''
    }
}



function creeUnDot(index) {
    const dot = document.createElement('li');

    dot.classList.add('dot');

    // assigner l'index au data-index des lis

    // ajouter un data-index aux lis et lui assigner l'index comme valeur

    // => la recherche a faire:  set custom attribute JS

    dot.setAttribute('data-index', index);

    //dot.setAttribute('background-image', src="images[index].src")

    document.querySelector('#dots').appendChild(dot);
}


function listeDeDots() {
    for(let i = 0; i <= images.length - 1 ; i++) {
        creeUnDot(i);
    }
}
// change index (new function) en fonction de l'ID de l'image cliquée
// element.id
// changeImage(indexActuel)




// DEBUG : quand on fait random + play, le stop ne fonctionne que pour un