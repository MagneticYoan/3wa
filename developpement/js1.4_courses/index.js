// JS1.4 - Liste de Courses
// Enoncé

// Gérer une liste de courses en affichant les informations dans la console du navigateur web.


//La liste de courses est stockée dans une seule variable.
let listeDeCourses = ['sopalin', 'oranges', 'citrons', 'savon', 'eau de javel', 'du virus en promo'];

//         Ajouter un produit par son nom

function ajouterUnProduitALaListe(produit) {
    listeDeCourses.push(produit);
}

//         Supprimer un produit ayant un nom spécifique

function supprimerUnProduitALaListe(produit) {
    let aSupprimer = listeDeCourses.indexOf(produit);
    listeDeCourses.splice(aSupprimer, 1); 
}


//         Supprimer tous les produits

function supprimerTousLesProduitsDeLaListe() {
    listeDeCourses.length = 0 ;
}

//         Afficher la taille et le contenu de la liste

function afficherLaTailleEtLeContenuDeLaListe() {
    document.write("<p>Nombre d'items dans la liste de courses : " + listeDeCourses.length +"</p>");
    document.write("<p><ul>")
    for (let i = 0; i < listeDeCourses.length; i++) {
        document.write("<li>" + listeDeCourses[i] + "</li>");
    }
    document.write("</ul></p>")
}

//     Le code ne doit pas se répéter, il faut donc organiser le programme en fonctions.

//     Les fonctionnalités de gestion de la liste de courses sont :





//     Créer des noms de fonctions clairs, en rapport avec la fonctionnalité implémentée

//Les tableaux sont des objets de la classe Array, s'appuyer sur des méthodes de cette classe pour implémenter les fonctionnalités

//Pour vérifier le bon fonctionnement du programme il faut écrire du code de test, par exemple :
//         Ajouter 4 produits simples puis afficher les informations
//         Demander à l'utilisateur de saisir le nom d'un produit, essayer de supprimer celui-ci puis afficher les informations
//         Supprimer tous les produits puis afficher les informations

