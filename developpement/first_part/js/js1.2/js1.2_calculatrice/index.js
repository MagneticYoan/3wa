let chiffre1 ;
let operateur ;
let chiffre2 ;
let resultat ;

do {
    chiffre1 = parseFloat(prompt("Indiquez votre premier nombre"));
}
while (isNaN(chiffre1));

operateur = prompt("Quel type d'opération voulez-vous effectuer ?", "+ ou - ou / ou * ou ^");

do {
    chiffre2 = parseFloat(prompt("Indiquez votre deuxième nombre"));
}
while (isNaN(chiffre2) );


if(operateur === '/' && chiffre2 === 0) {
    // 
    do {
        alert("La division par 0 est impossible");
        chiffre2 = parseFloat(prompt("Indiquez votre deuxième nombre"));
    }
    while (isNaN(chiffre2) );
}

/* do {
    if (chiffre2 == 0) {
        alert("La division par 0 est impossible")
        do {
            chiffre1 = parseFloat(prompt("Indiquez votre premier nombre"));
            }
        while (isNaN(chiffre1));
        
        operateur = prompt("Quel type d'opération voulez-vous effectuer ?", "+ ou - ou / ou * ou ^");
        
        do {
            chiffre2 = parseFloat(prompt("Indiquez votre deuxième nombre"));
        }
        while (isNaN(chiffre2) );
    }
}
while (operateur == "/") */

switch(operateur) {
    case "+" :
        resultat = chiffre1 + chiffre2;
        document.write("Le résultat de l'opération "+ chiffre1 + " + " + chiffre2 + " est " + resultat +".");
        break;
        
    case "-" : 
        resultat = chiffre1 - chiffre2;
        document.write("Le résultat de l'opération "+ chiffre1 + " - " + chiffre2 + " est " + resultat +".");
        break;
        
    case "*" : 
        resultat = chiffre1 * chiffre2;
        document.write("Le résultat de l'opération "+ chiffre1 + " * " + chiffre2 + " est " + resultat +".");
        break;
        
    case "/" :
        resultat = chiffre1 / chiffre2;
        document.write("Le résultat de l'opération "+ chiffre1 + " / " + chiffre2 + " est " + resultat +".");
        break;
        
    case "^" :
        // resultat = Math.pow(chiffre1, chiffre2); // **
        resultat = chiffre1 ** chiffre2;
        document.write("Le résultat de l'opération "+ chiffre1 + " ^ " + chiffre2 + " est " + resultat +".");
        break;
    
    default : 
        document.write("Essayez encore et indiquez un des opérateurs possibles.")
}
