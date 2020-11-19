const AUJOURDHUI = new Date();
const JOUR = AUJOURDHUI.getDay();
const MOIS = AUJOURDHUI.getMonth();
const DAY = AUJOURDHUI.getDate();

const JOURS = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'] ;
const MONTHS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

document.write('Nous sommes le '+ JOURS[JOUR] + ' ' + DAY + ' ' + MONTHS[MOIS] + " " + AUJOURDHUI.getFullYear());

