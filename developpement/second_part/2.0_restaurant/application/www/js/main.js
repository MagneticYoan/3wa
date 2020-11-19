'use strict';

document.addEventListener('DOMContentLoaded', ()=> {
    
    
    /////////////////////////////////////////////////////////////////////////////////////////
    // FONCTIONS                                                                           //
    /////////////////////////////////////////////////////////////////////////////////////////
    
    
    
    
    /////////////////////////////////////////////////////////////////////////////////////////
    // CODE PRINCIPAL                                                                      //
    /////////////////////////////////////////////////////////////////////////////////////////
    
    let url = getRequestUrl();
    
    
    function getSelectedValue () {
        let index = {key : document.querySelector("#product_type:first-child").selectedIndex + 1};
        $.get(url + '/ajax', index, ajaxLoaded);
    }
    
    function ajaxLoaded(product) 
        {
            let urlwww = getWwwUrl();
            product = JSON.parse(product);
            // requete ajax
            localStorage.setItem('selectedProduct', product);
            $('#product_description').html(`<img src="${urlwww}/images/products/${product.img}" alt="${product.name}"/>
            <h3 id="product_name">${product.name}</h3>
            <p>${product.description}</p>
            <p id="product_price">${product.price} €</p>`);
                
        }
    
    $('#product_type:first-child').change(getSelectedValue);
            
});