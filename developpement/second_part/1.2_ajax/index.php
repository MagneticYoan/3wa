<?php 
  require('connect.php');  
?>

<html>
    <head>
        <title>Produits</title>
		<link rel="stylesheet" type="text/css" href="style.css" media="screen" />
        <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous">
        </script>
    </head>
    <body>
        <h1>Tableau des produits</h1>
        <button id="showTable">Afficher les Produits</button>
        
        <form id="maxPriceDiv">
            <input type="text" id="maxPrice" name="maxPrice">
            <button id="maxPriceSubmit">Submit max price</button>
        </form>
        
        <table id="tableProducts">
            
        </table>
        
        <script>
            
            function ajaxLoaded(data) 
                {
                    // requete ajax
                    $('table').html('<thead><tr><td>ProductCode</td><td>ProductName</td><td>ProductDescription</td><td>Price</td></tr><thead>')
                    
                    for (let i=0; i < data.length; i++)
                    {
                        $('table').append(`<tr><td>${data[i].productCode}</td>
                        <td>${data[i].productName}</td>
                        <td>${data[i].productDescription}</td>
                        <td>${data[i].buyPrice}</td></tr>`)
                    }
            
                }
            
            // BOUTON NUMERO 1
            
            $('#showTable').click(showTableProduct);
            
            
            function showTableProduct(data) 
            {
                
                
                $.get('ajax.php', ajaxLoaded);
                 
                
            }
            
            //BOUTON NUMERO 2
            
            let maxPrice = { key :  $('#maxPrice').val()};
            
            $('#maxPriceDiv').submit(onSubmit);
               
            function onSubmit(e) {
                e.preventDefault();
                let maxPrice = {key : $('#maxPrice').val()};
                
                console.log(maxPrice);
                
                $.get('ajax_maxprice.php', maxPrice, ajaxLoaded);
                
             }
        </script>
    </body>
</html>