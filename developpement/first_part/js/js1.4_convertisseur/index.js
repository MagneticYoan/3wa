const form = document.querySelector('form');

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const input = this.querySelector("input");
    
    const far = input.value;
    
    const celsius = convertFarToCel(far);
    
    const p = this.nextElementSibling;
    
    p.innerText = `${far} Fahrenheit est égal à ${celsius} degrés celsius.`
});


function convertFarToCel (far) {
    
    const celsius = (far - 32) /1.8 ;
    
    return celsius;
}