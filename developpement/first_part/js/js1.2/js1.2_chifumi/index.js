let player = prompt("Pierre, feuille, ciseaux ?", "pierre").toLowerCase();
// let ia = Math.random()

/* do {
    player = prompt("Pierre, feuille, ciseaux ?", "pierre");
    player.toLowerCase();
}
while (player != "pierre" || player != "ciseaux" || player !="feuille")
*/
// const choices = ['pierre', 'feuille', 'ciseaux'];
const index = Math.floor(Math.random() * 3);

const choix = ['feuille', 'pierre', 'ciseaux'];

let ia = choix[index];


/* if (ia < 1/3) {
    ia = "pierre";
}

else if (ia < 2/3 ) {
    ia = "feuille";
}

else {
    ia = "ciseaux";
} */

if (player === ia) {
    document.write("<p>Vous avez joué " + player + " et l'ordinateur a joué " + ia + ". </p><p>C'est donc une égalité.</p>")
}

else {
    if (player === "pierre") {
        if (ia === "feuille") {
            document.write("<p>Vous avez joué " + player + " et l'ordinateur a joué " + ia + ". </p><p>C'est donc une victoire pour l'ordinateur.</p>");
        }
    
        else if (ia === "ciseaux") { 
            document.write("<p>Vous avez joué " + player + " et l'ordinateur a joué " + ia + ". </p><p>C'est donc une victoire pour vous.</p>");
        }
            
        else { 
            console.log("player =/= de pierre")
        }
    }

    else if (player === "feuille") {
        if (ia === "pierre") {
            document.write("<p>Vous avez joué " + player + " et l'ordinateur a joué " + ia + ". </p><p>C'est donc une victoire pour vous.</p>");
        }
        else if (ia === "ciseaux") {
            document.write("<p>Vous avez joué " + player + " et l'ordinateur a joué " + ia + ". </p><p>C'est donc une victoire pour l'ordinateur.</p>");
        }
            
        else {
        console.log("player =/= feuille");
        }
}


    else {
        if (ia === "feuille") { 
            document.write("<p>Vous avez joué " + player + " et l'ordinateur a joué " + ia + ". </p><p>C'est donc une victoire pour vous.</p>");
        }

       else if (ia === "pierre") { 
            document.write("<p>Vous avez joué " + player + " et l'ordinateur a joué " + ia + ". </p><p>C'est donc une victoire pour l'ordinateur.</p>");
        }
            
        else { 
            console.log("player =/= ciseaux");
        }
    }
}
