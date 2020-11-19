<!doctype html>
    <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="../../../convertisseur/form.css" type="text/css" />
            <title>Traducteur</title>
        </head>
        <body>
            
            <h1>Traducteur</h1>
            
            <section>
                <form method="POST" action="data.php" id="celToFar">
                    <input type="text" name="word" placeholder="mot a traduire"/>
                    
                    <select name="direction">
                        <option value="toFrench">Traduire en francais</option>
                        <option value="toEnglish">Traduire en anglais</option>
                    </select>
        
                    <input value="submit" type="submit">
                </form>
                <p></p>
            </section>
    </html>
    
    