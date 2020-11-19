'use strict';

class Cart {
    constructor() {
        //event listener
        // button by objet to delet
        // type
        //name
        // price

        this.products = [];
        this.displayLocalstorage();
        $('#add_in_cart').click(this.addProduct.bind(this));
        $(document).on('click', '.delete', this.deleteProduct.bind(this));
        $("#save_cart").on('click', this.getSelected.bind(this));
    ;}
    
    
    addProduct() {
        //e.preventDefault();
        //recup local storage
        let price = $('#product_price').text();
        let name = $("#product_name").text();
        
        //let quantity = $("#quantity").val();
        let id = $("#product_type").val();
        let isInArray = false;
        let inArrayId = "";
        let quantity = 1
        
        for(let i = 0; i < this.products.length; i++) {
            if(this.products[i].id === id) {
                isInArray = true; 
                inArrayId = this.products[i].id;
                this.products[i].quantity ++;
                quantity = this.products[i].quantity;
            }
        }
        
        if (!isInArray) {
            this.products.push({
            id : id,
            price : price,
            name : name,
            quantity : quantity
            })
        }
        
        //this.displayProducts( price , name, id, isInArray, inArrayId, quantity)
        //stocker dans le local storage
        localStorage.setItem('cart', JSON.stringify(this.products));
        
        
        $('#cart tbody').empty();
        this.displayLocalstorage();
        
    }
    
    deleteProduct(event) {
        let id = $(event.target).data('id');
        $(`tr[data-id=${id}]`).remove();
        
        let productId = '';
        
        for (let i = 0; i < this.products.length; i++) {
            if(this.products[i].id == id) {
                this.products.splice(i, 1);
            }
        }
        
        
        //supprimer du local storage
        localStorage.setItem('cart', JSON.stringify(this.products));
    }
    
    displayProducts(price, name, id, isInArray, inArrayId, quantity) {
        let table = document.querySelector("#cart table");
        
        if (!isInArray) {
            let html = `<tr data-id="${id}"> 
                <td>${name}</td> 
                <td>${quantity}</>
                <td>${price}</td>
                <td><button class="delete" data-id=${id} type="button">X</button></td>
            </tr>`
            $('#cart tbody').append(html);
        }
        
        else if(isInArray) {
            //modification of actual line
            document.querySelector(`tr[data-id="${inArrayId}"] td:nth-of-type(2)`).textContent = quantity;
        }
    }
    
    displayLocalstorage() {
        if ('cart' in localStorage) {
            let localCart = JSON.parse(localStorage.getItem('cart'));
            this.products = localCart;
            
            
            for (let i = 0; i < this.products.length; i++) {
                let html = `<tr data-id="${localCart[i].id}"> 
                <td>${localCart[i].name}</td> 
                <td>${localCart[i].quantity}</>
                <td>${localCart[i].price}</td>
                <td><button class="delete" data-id=${localCart[i].id} type="button">X</button></td>
                </tr>`
                $('#cart tbody').append(html);
            }
        }
    }
    
    getSelected () {
        
        console.log('getSelected ok')
        let url = getRequestUrl();
        
        let index = {'products' : localStorage.getItem('cart')}
        $.post(url + '/ajaxcart', index, this.ajaxIsLoaded);
    }
        
    ajaxIsLoaded(data) 
        {
            if (data == 'true')
            {
                console.log('data ok');
                location.href = getRequestUrl() + '/confirm';
            }
            // requete ajax
            //localStorage.setItem('selectedProduct', product);
            //$('#product_description').html(`<img src="${urlwww}/images/products/${product.img}" alt="${product.name}"/><h3 id="product_name">${product.name}</h3><p>${product.description}</p><p id="product_price">${product.price}€</p>`)
                
        }
}

document.addEventListener('DOMContentLoaded', function() {
    let cart = new Cart();
    
})


