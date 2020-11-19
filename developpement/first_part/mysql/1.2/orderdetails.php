<?php
    require('connect.php');
    
    $orderNbr = $_GET['orderNumber'];
   
	$req = $pdo->prepare('SELECT
						    o.orderDate,
						    od.priceEach,
						    od.quantityOrdered,
						    od.productCode,
						    ROUND((od.quantityOrdered * od.priceEach),2) as totalPayment,
						    
						    p.productName
						FROM orders AS o
						JOIN orderdetails AS od ON o.orderNumber = od.orderNumber
						JOIN customers AS c ON o.customerNumber = c.customerNumber
						JOIN products AS p ON p.productCode = od.productCode
						WHERE o.orderNumber = ' . $orderNbr . '
						ORDER BY c.customerName, o.orderDate;' );
						
    $req->execute();
    
    $orders = $req->fetchAll(PDO::FETCH_ASSOC);
    
    $globalOrderStatement = $pdo->prepare("SELECT c.customerName,
						    c.addressLine1,
						    c.city, 
						    c.country, 
						    
						    o.orderNumber
						    FROM `customers` INNER JOIN `orders` ON customers.customerNumber");
    
    $pdo = null;
    
?>

<!DOCTYPE html>
<html>
	<head>
		<title>ORDER DETAIL <?php echo $orderNbr; ?></title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<!-- CSS Vendor -->
		<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" media="all" />
		<link rel="stylesheet" type="text/css" href="css/normalize.css" media="all" />
		<!-- CSS Perso -->
		<link rel="stylesheet" type="text/css" href="css/base.css" media="screen" />
		<link rel="stylesheet" type="text/css" href="css/style.css" media="screen" />
	</head>
	<body>
		<!--HEADER-->
		<header>
		    <h1></h1>
		    <p>de la société Classic Models</p>
			<nav>
			</nav>
		</header>
		<!--MAIN CONTENT-->
		<main>
		    <p class="back"><a href="index.php">retour à la page précédente</a></p>
		    <section class = "leClient">
		        <?php 
		            echo '<h2>The Client.</h2>
		            	  <p>' . $orders[0]['customerName'] . '</p>
		            	  <p>' . $orders[0]['addressLine1'] . '</p>
		            	  <p>' . $orders[0]['city'] . '</p>';
		        ?>
		    </section>
		    <section class="laListe">
		        <table>
		            <thead>
		                
		                <tr>
		                    <td><h2>Numéro de Produit</h2></td>
		                    <td><h2>Produit</h2></td>
		                    <td><h2>Prix Unitaire</h2></td>
		                    <td><h2>Quantité</h2></td>
		                    <td><h2>Prix Total</h2></td>
		                </tr>
		            </thead>
		            <tbody>
    		                <?php 
        		                foreach($orders as $order) {
                                    echo '<tr>' . '<td>' . $order['productCode'] . '</a></td>'
                                    . '<td>' .  $order['productName'] . '</td>'
                                    . '<td>' .  $order['priceEach'] . '</td>'
                                    . '<td>' .  $order['quantityOrdered'] . '</td>'
                                    . '<td>' .  $order['totalPayment'] . '</td></tr>';
                                }    
    		                ?>
		            </tbody>
		        </table>
		        <table>
		        	<thead>
		        		<td><h2>Total</h2></td>
		        		<td><h2>Total HT</h2></td>
		        		<td><h2>TVA</h2></td>
		        	</thead>
		        	<tbody>
		        		<tr>
		        			<td><?php echo $total; ?></td>
		        			<td></td>
		        			<td></td>
		        		</tr>
		        	</tbody>
		        </table>
		    </section>
		</main>
		<!--FOOTER-->
		<footer>
		</footer>
	</body>
	
	<!--
	    On veut :   afficher dans une liste les informations du client
	                afficher dans un tableau les informations de la commande du client
	   
	   Etapes : 
	               1. récupérer les données du client dans customers via le customers number dispo dans order
	               2. les afficher dans une liste 
	               3. récupérer les données des commandes du client via order détail
	               4. afficher les-dites données dans une table
	               
	   Code : 
	               1. Récupérer les données de l'order via le $_GET
	               2. CROSS JOIN les trois tables nécessaire (orders, orderdetails, customers)
	               3. rechercher le numéro client ????
	               4. afficher les infos clients qui sont dans customers via le numéro client
	               5. récupérer le nom du produit, le prix unitaire, la quantité et le prix total via le numéro de commande $_GET et orderdetails
	               6. afficher les-dites infos dans une table
	               
	   
	
	-->
	
</html>