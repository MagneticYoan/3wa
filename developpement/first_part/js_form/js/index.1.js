import {
    addToLocalstorage,
    removeFromLocalStorage,
    getItemFromLocalStorage
} from './storagemodule.js';

// on ajoute un eventListener 'submit' au formulaire
// on recupere les donnees du formulaire
// quand on clique sur submit, on empeche le rechargement de la page
let form = document.querySelector('form');
let storageKey = 'contact';


form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name');
    const email = this.querySelector('input[name=user_email]');
    const msg_object = this.querySelector('input[name=message_object');
    const contact_is_by = this.querySelector('input[name=contact_by');
    
    const contact = {
        name : name.value,
        email : email.value, 
        objet : msg_object.value,
        contact : contact_is_by.value
    }
    
    const contacts = getItemFromLocalStorage(storageKey);
    contacts.push(contact);

    addToLocalstorage(storageKey, contacts);
    
    createTrContact(contact, contacts.length - 1);

});

// Recuperer tous les contacts du localstorage
const contacts = getItemFromLocalStorage(storageKey);

// Afficher les contacts sur la page

function createTrContact(contact, index) {
    const tr = document.createElement('tr');
    
    tr.innerHTML = `<td data-index="${index}">${index}</td><td>${contact.name}</td><td>${contact.email}</td><td>${contact.objet}</td><td>${contact.contact}</td>`;
    
    // const main = document.querySelector('main');
    
    document.getElementById('results').appendChild(tr);
}

// Je les affiche dans un  liste
contacts.forEach((contact, index) => {
    createTrContact(contact, index);
 
});



// toggle on off le form

const hideFormButton = document.getElementById('hideShowForm');
const hideResultButton = document.getElementById('hideShowResults');
const tableResult = document.getElementById('tableResult');
const deletAllButton = document.getElementById('deletAll');
const deletSelectedButton = document.getElementById('deletSelected')


function addCLickListener(elementToClick, elementRecoitClass) {
    elementToClick.addEventListener('click', () => {
        addSelectedClass(elementRecoitClass, 'selected');
    });
}


function addSelectedClass(element, className) {
    element.classList.toggle(className);
}


// Toggle vue du form et du table result
addCLickListener(hideFormButton, form);
addCLickListener(hideResultButton, tableResult);


// supprimer tous les results

deletAllButton.addEventListener('click', () => {
    window.localStorage.clear();
    document.getElementById('results').innerHTML = "";
    
})

// si la checkbox est sélectionnée, alors on selectionne dans le local host la ligne avec
    // check box is select, récupérer le data-index et l'ajouter dans un tableau

// quand on click sur le bouton delet select, supprimer le tr
    //utiliser l'index du data index
    // supprimer la ligne dans le localhost

deletSelectedButton.addEventListener('click', () => {
    console.log('le bouton fonctionne');
    localStorage.removeItem(contact[1]);
})


