'use strict';

import {putAuthorizationToLocalStorage} from './functions.js';
import {myClock} from './clock.js';
import {getTodayDate, howManyDaysThisMonth} from './calendar.js';
import {fetchToDoList, ajaxLoaded} from './get_ajax.js'

document.addEventListener('DOMContentLoaded', async()=> {
    
    $('#addToLocalStorage').click(()=> {
        putAuthorizationToLocalStorage();
    });
    
    if(localStorage.getItem("blueLagoonAuthorize") === null) {}
    else {
        let myValue = localStorage.getItem('blueLagoonAuthorize');
        if(myValue === "lolYepItIs-right_34") {
            $('main').append('<section id="todayDate"></section><section id="timeNow"></section><section id="todayCitation"></section><section id="todayFood"></section><section id="todayChecklist"></section><section id="habitTracker"></section>');
            
            //pour la date du jour
            $('#todayDate').append('<p id="month"></p><p id="day"></p>');
            let calendar = new getTodayDate();
            
            //fait fonctionner l'horloge
            $('#timeNow').append('<p id="hoursNow"></p>');
            let clock = new myClock();
            clock.run();
            
            //pour la citation du jour
            $('#todayCitation').append('<div id="QuoteOFDay"></div>')
            var type="day";
            
            //pour les recettes
            
            
            //pour le formulaire
            
            
            //pour le tracker
            const toDoList = await fetchToDoList();
            console.log(toDoList);
            
            
            const thisMonthNumberOfDays = await howManyDaysThisMonth();
            
        }
    }
    
})