// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

let cote1 = "";
let cote2 = "";
let cote3 = "";
let perimetre = "";
let aire = "";

do {
    cote1 = parseFloat(prompt("Indiquez la taille du premier côté du triangle, différent de 0."));
}
while (isNaN(cote1) || cote1 == 0);

do {
    cote2 = parseFloat(prompt("Indiquez la taille du premier côté du triangle, différent de 0."));
}
while (isNaN(cote2) || cote2 == 0);

do {
    cote3 = parseFloat(prompt("Indiquez la taille du premier côté du triangle, différent de 0."));
}
while (isNaN(cote3) || cote3 == 0);

perimetre = cote1 + cote2 + cote3;
perimetre /= 2 ;

aire = Math.sqrt(perimetre *(perimetre - cote1) * (perimetre - cote2) * (perimetre - cote3));

document.write("Si les côtés font " + cote1 + "cm, " + cote2 + "cm et " + cote3 + "cm alors l'aire est de " + aire.toFixed(2) + "cm².");

// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050

// const JOURS = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'] ;
// const MONTHS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];


document.write("<p>Les 1er Janvier suivants tombent un Dimanche : </p>")

for (let i = 2014; i <= 2050; i++) {
    let date = new Date(i, 0, 1);
    let day = date.getDay();
    
    if (day === 0){
        document.write("<p>" + date.getFullYear() + "</p>")
    }
}