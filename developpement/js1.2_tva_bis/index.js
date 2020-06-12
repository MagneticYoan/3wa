/* Pour indiquer son propre taux de TVA
        let TAUX = parseFloat(prompt("Indiquez le taux de la TVA", "TVA")); 
*/
const TAUX = 20.0;
let tauxHT;
let tva;
let ttc;
let remise

// tant que l'utilisateur n'écris pas un nombre, c'est une boucle
do {
    // pop-up qui demande le montant
    tauxHT = parseFloat( prompt("Indiquez le montant Hors Taxe", "Montant HT") );
}
// tant que tauxHT est NaN, la boucle tourne.
while (isNaN(tauxHT));

    // pour la remise, c'est une question avec une pop-up qui indique ok ou annuler
    remise = confirm ("Voulez-vous une remise ?");
    //verification dans la console que tout fonctionne
    console.log ("question remise ok");
    
    // s'il y a une remise
    if (remise)
    {
        // boucle similaire à la précédente pour vérifier que remise est un nombre
        do {
            remise = parseFloat(prompt("Indiquez le pourcentage de réduction.", "n'indiquez pas le symbole %"));
            console.log(remise)
        }
        while (isNaN(remise));
        // verification que tout va bien dans la console
        console.log(remise);
        
        // calculs de TVA
        const montantRemise = tauxHT * (remise / 100) ; 
        tauxHT -= montantRemise;
        // affichage du montant HT
        // .toFixed(2), ça fait une moyenne, on l'a pas vu encore. 
        document.write("<p>Montant HT après remise : " + tauxHT.toFixed(2) + " euros. </p>" );
        console.log("remise ok");
    }
    // s'il n'y a pas de remise
    else 
    {
        // affichage du montant HT
        document.write("<p>Montant HT : " + tauxHT + " euros.</p>");
        // verification que tout va bien dans la console
        console.log("else ok");
    }
    
    // calculs des taux
    tva = (tauxHT * TAUX) / 100 ;
    ttc = tauxHT + tva ;
    //verification dans la console que tout va bien avec la valeur TTC
    console.log(ttc);
    // affichage montant TTC et TVA. 
    document.write( `<p>Montant TTC : ${ttc.toFixed(2)} euros.</p><p>Montant TVA : ${tva.toFixed(2)} euros.</p>`);
    // verification que tout va bien dans la console.
    console.log ("after else ok");