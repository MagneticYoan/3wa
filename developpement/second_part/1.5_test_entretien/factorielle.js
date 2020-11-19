'use strict';
document.addEventListener('DOMContentLoaded', function() {
    let result = 1;
    let nb = prompt('Choose a number', 1);
    
    function fact() {
        
        for (let i = 1; i <= nb; i++) {
            result *= i
        }
        console.log(result);
    } 
})
