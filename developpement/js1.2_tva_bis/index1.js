/* Pour indiquer son propre taux de TVA
        let TAUX = parseFloat(prompt("Indiquez le taux de la TVA", "TVA")); 
*/
const TAUX = 20.0;
let ht = parseFloat( prompt("Indiquez le montant Hors Tax", "Montant HT") );
let tva;
let ttc;

/*  */

// au cas où ce n'est pas un nombre
if ( isNaN(ht) )
{
    document.write("Ce n'est pas un nombre valide.");
}
// Si c'est bien un nombre
else
{
    const remise = confirm ("Voulez-vous une remise ?");
    console.log ("question remise ok")
    
    // s'il y a une remise
    if (remise)
    {
        const remise = parseFloat(prompt("Indiquez le pourcentage de réduction.", "n'indiquez pas le symbole %"));
        const montantRemise = ht * (remise / 100) ; 
        ht -= montantRemise;
        document.write("<p>Montant HT après remise : " + ht.toFixed(2) + " euros. </p>" );
        console.log("remise ok");
    }
    
    else 
    {
        document.write("<p>Montant HT : " + ht + " euros.</p>");
        console.log("else ok");
    }
    
    // taux + arrondis
    
    tva = (ht * TAUX) / 100 ;
    //tva = tva.toFixed(2);
    ttc = ht + tva ;
    //ttc = ttc.toFixed(2);
    console.log(ttc);
    document.write( `<p>Montant TTC : ${ttc.toFixed(2)} euros.</p><p>Montant TVA : ${tva.toFixed(2)} euros.</p>`);
    console.log ("after else ok");
}