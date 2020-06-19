let utilisateur = "";

do {
    utilisateur = parseFloat(prompt("Indiquez le nombre de tables de multiplication que vous souhaitez voir apparaitre, différent de 0."));
}
// si le nopmbre est egal a 0 on gere commnent ?
while (isNaN(utilisateur) || utilisateur == 0);

document.write("<table>");

for (let i = 1; i <= utilisateur; i++) {
    
    for (let j = 1; j <= utilisateur; j++) {
        if (i === j){
            document.write("<td class= same>",  i * j,  "</td>");
        }
        
        else {
            document.write("<td>",  i * j,  "</td>");
        }
    }
    document.write("</tr>");
}


document.write("</table>");

// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7



// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050