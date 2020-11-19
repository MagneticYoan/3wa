'use strict';

export function getTodayDate() {
    this.cur_date = new Date();
    this.month = this.cur_date.getMonth();
    this.day = this.cur_date.getDay();
    
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    
    $('#month').text(months[this.month]);
    $('#day').text(this.day);
}

export async function howManyDaysThisMonth() {
    function daysInMonth (month, year) { 
        return new Date(year, month, 0).getDate(); 
    } 
      
    function GFG_Fun() { 
        var date = new Date(); 
        var month = date.getMonth() + 1; 
        var year = date.getFullYear(); 
        return daysInMonth(month, year); 
    } 
    
    const nbDaysThisMonth = await GFG_Fun();
    return nbDaysThisMonth;
}