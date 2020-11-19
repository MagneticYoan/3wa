<?php
    
    if (!isset($orders)) {
        $orders = [];
    }

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
    <title>Customer Search</title>
</head>

<body>
    <div class="container">
        <h1 class="text-primary">Ajax</h1>
        <div class="row">
            <form action="index.php" method="POST">
                <div class="form-group">
                    <input type="text" id="customer" class="form-control" name="customer" placeholder="nom du client a rechercher" />
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-xs btn-primary form-control" type="submit" value="submit" />
                </div>
            </form>
        </div>
        <div class="text-success" id="response">
            <table>
                <?php
                foreach ($orders as $order) {
                    echo '<tr><td>' . $order['customerNumber'] . '</td><td>' . $order['customerName'] . '</td></tr>';
                }
                
                ?>
            </table>
        </div>
    </div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="index.js"></script>

</html>
