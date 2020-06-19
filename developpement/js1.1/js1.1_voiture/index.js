const MUSTANG = { 
    marque: "mustang", 
    fabrication: 2016, 
    achat: new Date(2017-12-10), 
    passagers: [
        {
            prenom: "Kira",
            nom: "KAMAKURA",
            anniversaire: new Date(1990-03-12),
            mobile: "06 02 08 03 04",
        },
        {
            prenom: "Sacchan",
            nom: "SAITAMA",
            anniversaire: new Date(1991-04-01),
            mobile: "07 02 03 09 08"
        }
    ]
}

document.write(
    "Cette voiture est une " +
    MUSTANG.marque + " fabriquée en " + 
    MUSTANG.fabrication + ". Elle appartient à "+
    MUSTANG.passagers[0].nom + " " +
    MUSTANG.passagers[0].prenom + " née le "+
    MUSTANG.passagers[0].anniversaire + " et " +
    MUSTANG.passagers[1].nom + " " +
    MUSTANG.passagers[1].prenom + ". " +
    "Ils sont contactables au " +
    MUSTANG.passagers[0].mobile + " et " +
    MUSTANG.passagers[1].mobile + "."
    )