<?php
    require('connect.php');
    
    $statement = $pdo->prepare("SELECT * FROM orders");

    $statement->execute();
    
    $orders = $statement->fetchAll(PDO::FETCH_ASSOC);
    
    $pdo = null;
?>

<!DOCTYPE html>
<html>
	<head>
		<title>BON DE COMMANDE</title>
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
		    <h1>Bon de Commande</h1>
		    <p>de la société Classic Models</p>
			<nav>
			</nav>
		</header>
		<!--MAIN CONTENT-->
		<main>
		    <h1>Liste des Commandes</h1>
		    <section class="laListe">
		        
		        <table>
		            <thead>
		                <tr>
		                    <td><h2>Numéro de Commande</h2></td>
		                    <td><h2>Date de Commande</h2></td>
		                    <td><h2>Date de Livraison</h2></td>
		                    <td><h2>Statut de la Commande</h2></td>
		                </tr>
		            </thead>
		            <tbody>
    		                <?php 
        		                foreach($orders as $order) {
                                    echo '<tr>' . '<td><a href="orderdetails.php?orderNumber=' . $order['orderNumber'] . '">' .  $order['orderNumber'] . '</a></td>'
                                    . '<td>' .  $order['orderDate'] . '</td>'
                                    . '<td>' .  $order['shippedDate'] . '</td>'
                                    . '<td>' .  $order['status'] . '</td>'. '</tr>';
                                }    
    		                ?>
		            </tbody>
		        </table>
		        
		        <form method="POST" action="index.html">
					<fieldset>
						<legend>Coordonnées</legend>
						<label>Nom</label>
						<input type="text" id="name" name="user_name">
						<label>Mail</label>
						<input type="email" id="email" name="user_email">
					</fieldset>
				</form>
		        <button class="btn">Fetch Info</button>

    			<div class="response"></div>

    			<script src="index.js"></script>
		    </section>
		</main>
		<!--FOOTER-->
		<footer>
		</footer>
	</body>
</html>
