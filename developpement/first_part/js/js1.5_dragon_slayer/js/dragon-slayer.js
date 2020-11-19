'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/

const player = {
    name : 'player',
    pointDeVie : 100,
    initiative : 0,
    attaque : 0
}

const dragon = {
    name : 'dragon',
    pointDeVie : 100,
    initiative : 0,
    attaque : 0
}


/* dragon.pointDeVie += lancerDeDes(5, 10);
console.log(dragon.pointDeVie);

player.pointDeVie += lancerDeDes(10, 10);
console.log(player.pointDeVie); */



/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/

console.log('ça se charge 2');
choisirDifficulte();
document.getElementById('viePlayer').innerHTML = `${player.pointDeVie.toFixed(0)} PV`;
document.getElementById('vieDragon').innerHTML = `${dragon.pointDeVie.toFixed(0)} PV`;


let i = 1;
while(player.pointDeVie >= 0 && dragon.pointDeVie >= 0) {
    document.getElementById('theGame').innerHTML += `<h2>Tour ${i} </h2>`;
     i++;
    determineIni();
    
        if (player.initiative > dragon.initiative) {
            playerAttaque();
            if (dragon.pointDeVie > 0) {
                dragonAttaque();
            }
        }

        else {
            dragonAttaque();
        
            if (player.pointDeVie > 0) {
                playerAttaque();
            }
        }
    
    console.log(`Vos points de vie sont de ${player.pointDeVie.toFixed(0)} et ceux du dragon sont de ${dragon.pointDeVie.toFixed(0)}.`);
 
}

if (player.pointDeVie <= 0) {
    document.getElementById('footerWait').innerHTML = `<GAME OVER : Le dragon vous a carbonisé !`;
}

else if (dragon.pointDeVie <= 0) {
    document.getElementById('footerWait').innerHTML = `GAME OVER : Vous avez terassé le dragon !`;
}



/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
