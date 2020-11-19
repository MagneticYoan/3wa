'use strict'
$(document).ready(function(){
    let apiKey = '70db6ab97eae86dd73d3e2168e729292e923d370';
    let url = new URL('https://api.jcdecaux.com/vls/v3/stations');
    url.searchParams.set('contract', 'toyama'); // il recupère bien les données
    url.searchParams.set('apiKey', apiKey);
    
    document.addEventListener('DOMContentLoaded', getAllStations());
    
    function getAllStations() {
        
        $.get(url, showListStation);
    }
    /*
    (station => console.log(station))
    
    function (station)
    {
        console ...
    }*/
    
    function showListStation(stations) {
         for (let i=0; i < stations.length; i++){
            $('#liste').append(`<li data-nbstation="${stations[i].number}">${stations[i].address}</li>`);
        }
    }
    
    //onclic sur la station, afficher
    
    $(document).on('click', 'li', showStationInfo)

    async function getStationInfo(nbstation) {
        let urlstation = `https://api.jcdecaux.com/vls/v3/stations/${nbstation}?contract=toyama&apiKey=70db6ab97eae86dd73d3e2168e729292e923d370`
        const responsestation = await fetch(urlstation);
        console.log('ok station info'); 
        return await responsestation.json();
    }
    
    function showStationInfo() {
        let nbstation = $(this).data('nbstation');
        $(this).toggleClass('actif');
        getStationInfo(nbstation)
        .then(showOnScreenStationInfo)
            .catch(err => console.log('error on getStationInfo'))
    }
    
    function showOnScreenStationInfo(station) {
        console.log(station);
        $('#thisStation').html(`<li>Address : ${station.address}</li>
        <li>Available : ${station.mainStands.availabilities.bikes}</li>
        <li>Free Places : ${station.mainStands.availabilities.stands}
        <li>Capacity : ${station.mainStands.capacity}`);
    }
})