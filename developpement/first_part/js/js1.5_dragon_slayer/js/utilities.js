'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/

// Pour représenter un lancer de dés, nous noterons nDx, où n est le nombre de dés à lancer, x le nombre de faces de chacun des dés. 
// Par exemple 2D6 représente un lancer de 2 dés à 6 faces.

let difficulte = '';
function choisirDifficulte() {
    
    difficulte = prompt('Entrez le niveau de difficulte ');
    const nbrFaces = 10;
    let nbrDesDragons = 0;
    let nbrDesJoueur = 0;

    if(difficulte === 'facile') {  
        nbrDesDragons = 5;
        nbrDesJoueur = 10
    } else if(difficulte === 'normal') {
        nbrDesDragons = 10;
        nbrDesJoueur = 10;
    } else if(difficulte === 'difficile') {
        nbrDesDragons = 10;
        nbrDesJoueur = 7;
    } else {
    console.error('Erreur.');
    }
    
    dragon.pointDeVie += lancerDeDes(nbrDesDragons, nbrFaces);
    player.pointDeVie += lancerDeDes(nbrDesJoueur, nbrFaces);

}



function lancerDeDes(nbrDes, nbrFaces) {
    let resultat = 0;
    let min = 1;
    
    for(let i = 0; i < nbrDes; i++) {
        resultat += parseInt(getNumberBetween(min, nbrFaces));
    }
    
    return resultat;
}

// Generer un nombre en min et max
function getNumberBetween(min, max) {
    return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
}

// 	Calcul de l'initiative : chaque personnage lance 10Des a 6 faces. 

function determineIni () {
    
    do {
        dragon.initiative = lancerDeDes(10, 6);
        player.initiative = lancerDeDes(10, 6);
    }
    while(player.initiative===dragon.initiative)

}

// Calcul de l'attaque

function attaque() {
    dragon.attaque = 0;
    player.attaque = 0;
    let pourcentageMaj = 0;
    
    
    if  (difficulte === 'facile') {
        pourcentageMaj = lancerDeDes(2,6);
    }
    
    else if (difficulte === 'normal') {
        pourcentageMaj = 100
    }
    
    else {
        pourcentageMaj = lancerDeDes(1,6)
    }
    
        dragon.attaque = parseInt(lancerDeDes(3,6)) * pourcentageMaj / 100;
        player.attaque = parseInt(lancerDeDes(3,6)) * pourcentageMaj / 100;
    
}

function playerAttaque() {
    document.getElementById('theGame').innerHTML += '<p>Vous attaquez !</p>';
    attaque();
    dragon.pointDeVie -= player.attaque;
    document.getElementById('vieDragon').innerHTML = `${dragon.pointDeVie} PV`;
    document.getElementById('theGame').innerHTML += `<p>Le dragon perd ${player.attaque} PV !</p>`;
}

function dragonAttaque () {
    document.getElementById('theGame').innerHTML += '<p>Le dragon attaque !</p>';
    attaque();
    player.pointDeVie -= dragon.attaque;
    document.getElementById('viePlayer').innerHTML = `${player.pointDeVie} PV`;
    document.getElementById('theGame').innerHTML += `<p>Vous perdez ${dragon.attaque} PV !</p>`;
 
}