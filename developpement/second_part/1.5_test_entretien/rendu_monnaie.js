'use strict';

// rendre la monnaie sur des billets de 10, de 5 ou des pieces de 2€

let price = 12;
let rest = 0;
let bill10 = 0;
let rendu = [0,0,0];

if (price >= 10) {
    rendu[0] = (price - (price%10))/10;
    rest = price - (rendu[0] * 10) ;
    
    /* if (rest >= 5 && (rest%2) == 0) {
        rendu[1] = rest - ((rest%5))/5;
        rest = price - (rendu[1] * 5);
        
        if (rest != 0) {
            console.log('false');
        }
    }
    
    else if (rest >= 5 && (rest%2 != 0) ) {
        
    }*/
    
    if (rest >= 5) {
        rendu[1] = (rest - (rest%5))/5;
        
        
    }
    
    else if (rest < 5 && rest != 0) {
        rendu[2] = (rest - (rest%2))/2;
        if (rest != 0) {
            console.log('false');
        }
    } 
}



console.log(rendu);