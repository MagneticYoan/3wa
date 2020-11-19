'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/



/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/



/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/


// determiner l'intervale avec setInterval
// lancer le timer avec un clic
// faire une boucle pour
// afficher les secondes
// a 0, arrêter le timer

//variables pour chrono
const firingBtn = document.getElementById('firing-button');
const zonoChrono = document.querySelector('span');
let launchTime = 5;

//variables pour changement image
const imageRocket = document.getElementById('rocket');

const img1 = './images/rocket1.png';
const img2 = './images/rocket2.gif';
const img3 = './images/rocket3.gif';

firingBtn.addEventListener('click', timer);



//fonction pour changer d'image
function changeImage (img) {
        imageRocket.src = img;
        console.log('changement image');
}

//fonction compte à rebours
function timer () {
    changeImage(img2);
    let interval = setInterval(function () {
        //décompte des secondes
        launchTime--;
        console.log(launchTime);
        
        
        //si on arrive à 0:
        if (launchTime === 0) {
            clearInterval(interval);
            launch();
        }
        
        zonoChrono.innerText = launchTime;
    }, 1000)
}

// fonction décollage (animation sur le CSS)
function launch () {
    changeImage(img3);
    imageRocket.setAttribute('class', 'tookOff');
}




// programme étoiles
const sizes = ['tiny', 'normal', 'big'];
const nbrStars = 150

function createStars (number) {
    for (let i=0; i < number; i++){
        // on "choisit" la taille au hasard
        let whatSize = randomNumber(0,2);
        // on place dans le main
        
        let div = document.createElement('div');
        let star = document.querySelector('main').appendChild(div);
        
        star.classList.add('star');
        star.classList.add(sizes[whatSize]);
        
        // on déclare la position
        
        placeStars(star);
        }
    }


function placeStars(element) {
    // window.innerHeight : hauteur de la fenetre
    // window.innerWidth : largeur de la fenetre
    
    element.style.top = `${randomNumber(0, window.innerHeight)}px`;
    element.style.left = `${randomNumber(0, window.innerWidth)}px`;
}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

document.addEventListener('DOMContentLoaded', createStars(nbrStars));