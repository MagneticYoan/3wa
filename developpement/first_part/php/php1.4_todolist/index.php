<?php

    require('read.php');
    
    function displayOption($min, $max) {
        for($i = $min; $i <= $max; $i++) {
            echo '<option value="' . $i . '">' . $i . '</option>';
        }
    }
    
    $months = [
        'January' => 1,
        'February' => 2,
        'March' => 3,
        'April' => 4,
        'May' => 5,
        'June' => 6,
        'July' => 7,
        'August' => 8,
        'September' => 9,
        'October' => 10,
        'November' => 11,
        'December' => 12
        ];
        
        
    // change key to value
    
    //what is the date today ?//
    
    
    
    function isItTooLate($table) {
        
        $month = date('m');
        $actualMonth = date('n');
        $actualDay = date('j');
        $actualYear = date('Y');
        $toolate = false;
    
        if($actualYear < $table[5]) {
            $toolate = true;
            
        }
        
        if($actualYear == $table[5] && $actualMonth < $table[4]) {
            $toolate = true;
        }
        
       if(($actualYear == $table[5]) && ($actualMonth == $table[4]) && ($actualDay < $table[3])) {
            $toolate = true;
        }
        
        return $toolate;
}


?>

<!DOCTYPE html>
<html>
	<head>
		<title>To Do List de Tante Ursule</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src=“https://kit.fontawesome.com/e117b4e3e1.js” crossorigin=“anonymous”></script>
		<!-- CSS Vendor -->
		<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" media="all" />
		<link rel="stylesheet" type="text/css" href="css/normalize.css" media="all" />
		<!-- CSS Perso -->
		<link rel="stylesheet" type="text/css" href="css/base.css" media="screen" />
		<link rel="stylesheet" type="text/css" href="css/style.css" media="screen" />
		<!-- title="  <?php  echo $value[1]; ?>" --> >
	</head>
	<body>
		<!--HEADER-->
		<header>
		    <h1><a href="index.html">La liste des choses à faire de Tante Ursule</a></h1>
			<nav>
			</nav>
		</header>
		<!--MAIN CONTENT-->
		<main>
		     <section>
                <form method="POST" action="data.php" id="celToFar">
                    <fieldset>
                        <legend>Titre de la tache</legend>
                        <input type="text" name="title" placeholder="titre de la tache"/>
                    </fieldset>
                    <fieldset>
                        <legend>Description de la tache</legend>
                        <textarea id="subject" name="subject" placeholder="Ecrivez votre message ici ..."></textarea>
                    </fieldset>
                    <fieldset>
						<legend>Priorité de la tache</legend>
						<label>Haute</label>
						<input type="radio" id="highPriority" value="high" name="priority"> 
						<label>Moyenne</label>
						<input type="radio" id="midPriority" value="mid" name="priority"> 
						<label>Basse</label>
						<input type="radio" id="lowPriority" value="low" name="priority"> 
					</fieldset>
					<fieldset>
					    <legend>Date dûe</legend>
					    <label>Jour</label>
					    <select name="dayOfDate">
                           <?php
                                displayOption(1, 31);
                            ?>
                        </select>
                        <label>Mois</label>
					    <select name="monthOfDate">
                           <!--  <option value="January">1</option>
                            <option value="February">2</option>
                            <option value="March">3</option>
                            <option value="April">4</option>
                            <option value="May">5</option>
                            <option value="June">6</option>
                            <option value="July">7</option>
                            <option value="August">8</option>
                            <option value="September">9</option>
                            <option value="October">10</option>
                            <option value="November">11</option>
                            <option value="December">12</option> -->
                            <?php
                                function displayTable($table) {
                                    foreach($table as $key => $value) {
                                        echo '<option value="' . $key . '">' . $value . '</option>';
                                    }
                                }
                                
                                displayTable($months);
                            ?>
                        
                        </select>
                        <label>Année</label>
					    <select name="yearOfDate">
					        <?php
                                displayOption(2010, 2030);
                            ?>
                        </select>
					</fieldset>
					<fieldset>
                        <input value="submit" type="submit">
                    </fieldset>
                </form>
                <p></p>
            </section>
            
           <?php
              if(!empty($data)) {
                foreach($data as $key => $value) { ?>
                  <form>
                    <ul class="listOfData">
                        <?php
                            
                            echo isItTooLate($value)?'<p>EN RETARD</p>':'';
                            
                            echo '<li><input type="checkbox" name="task" class="line" value="' . $key .'"></li>';
                            
                            foreach($value as $index => $line) {
                                $classLi = 'クラス';
                                
                                if($index === 0 && $value[2] === 'low') {
                                    $classLi= 'lowClass';
                                }else if ($index === 0 && $value[2] === 'high') {
                                    $classLi = 'highClass';
                                }
                                
                                echo '<li' . ($index === 0 ? ' class="' . $classLi . '">':'>') . $line . '</li>';
                            }
                        ?>
                        
                    </ul>
                  </form>
                  
              <?php }} ?>
            
		</main>
		<!--FOOTER-->
		<footer>
		</footer>
	</body>
</html>