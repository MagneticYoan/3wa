function addToLocalstorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}


// enlever un item de localstorage
function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}

// recuperer les donnees
// convertir en tableau
function getItemFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

export {
    addToLocalstorage,
    removeFromLocalStorage,
    getItemFromLocalStorage
}