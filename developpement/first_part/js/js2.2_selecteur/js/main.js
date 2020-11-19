

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

const images = Array.from(document.querySelectorAll('#photo-list img'));
let nombrePhotoSelectionnees = document.querySelector("#nombre-list");


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/



/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

images.forEach(image => {
   image.addEventListener('click', function() {
       
       this.classList.toggle('selected');
       console.log(this.classList);
       const selectedPhotos = document.querySelectorAll('.selected');
       nombrePhotoSelectionnees.innerText = document.querySelectorAll('.selected').length; 
    });
});


// selectionner tous les elements
// selectionner un element
// ajouter un event a chaque element
// ajoute cet element à un tableau
// ajoute une class à cet element
// compte le nombre d'items dans le tableau 
// deselectionne un element
// supprime cet element du tableau
// supprime la class de cet element
// compte le nombre d'items dans le tableau