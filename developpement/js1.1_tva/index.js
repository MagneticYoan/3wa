let TAUX = parseFloat(prompt("Indiquez le taux de la TVA", "TVA"));
let HT = parseFloat( prompt("Indiquez le montant Hors Tax", "Montant HT") );
let TVA = (HT * TAUX) / 100;
let TTC = HT + TVA;

// arrondi des prix
TTC = Math.round(TTC * 100) / 100 ;
TVA = Math.round(TVA * 100) / 100 ;

// au cas où ce n'est pas un nombre
if ( isNaN(HT))
{
    document.write("Ce n'est pas un nombre valide.");
}

// Si c'est bien un nombre
else
{
    document.write("Pour"," ", HT," ", "euros hors taxes, le prix TTC est" + " " + TTC + " " + "euros, dont ", TVA, " ", "euros de TVA." );
}