'use strict';

// fonction pour générer un nombre aléatoire
function getRandomInteger(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// images, leurs sources et leurs captions
let images = [
	{
		src : 'img/mangagen/mangagen_2.jpg',
		caption:'Mang\'Agen, photo par Pandagraphe'
	},

	{
		src:'img/mangagen/mangagen_3.jpg',
		caption:'Mang\'Agen, photo par David'
	},

	{
		src:'img/mangagen/mangagen_4.jpg',
		caption:'Mang\'Agen, photo par David'
	},

	{
		src:'img/mangagen/mangagen_5.jpg',
		caption:'Mang\'Agen, photo par Oak'
	},

	{
		src:'img/mangagen/mangagen_6.jpg',
		caption:'Mang\'Agen, photo par Oak'
	},

	{
		src:'img/mangagen/mangagen_7.jpg',
		caption:'Mang\'Agen, photo par Oak'
	},

	{
		src:'img/japanonymes19/japanonymes_1.jpg',
		caption:'Japanonymes 2019, photo par Pandagraphe'
	},

	{
		src:'img/japanonymes19/japanonymes_2.jpg',
		caption:'Japanonymes 2019, photo par Oak'
	},

	{
		src:'img/japanonymes19/japanonymes_3.jpg',
		caption:'Japanonymes 2019, photo par Oak'
	},

	{
		src:'img/japanonymes19/japanonymes_4.jpg',
		caption:'Japanonymes 2019, photo par Fokuza'
	},

	{
		src:'img/japanonymes17/japanonymes17_1.jpg',
		caption:'Japanonymes 2017, photo par David'
	},

	{
		src:'img/japanonymes17/japanonymes17_2.jpg',
		caption:'Japanonymes 2017, photo par David'
	}
]

//variables
let imageActive = document.getElementById("imageAffichee");
let indexActuel = 0;
let indexMax = images.length;
let interval = "";


//function qui change l'image en fonction de l'index
function changeImage(number) {
	imageActive.setAttribute("src", images[number].src);
	document.querySelector("figcaption").innerText = images[number].caption;
	console.log(images[number].caption);
}

//function qui arrête le slider
function stopSlider() {
		clearInterval(interval);
		interval = '';
}

//function qui change l'index actuel
function changeIndex() {
	indexActuel = getRandomInteger(0, (indexMax - 1));
	console.log(indexActuel);
}

// function qui lance le changement d'image aléatoire
function intervalChangeImage() {
	interval = setInterval(() => {
        changeIndex();
        changeImage(indexActuel);
    }, 2000)
}

function listeDeDots() {
    for(let i = 0; i <= images.length - 1 ; i++) {
        creeUnDot(i);
    }
}

function creeUnDot(index) {
    const dot = document.createElement('li');

    dot.classList.add('dot');

    // assigner l'index au data-index des lis

    // ajouter un data-index aux lis et lui assigner l'index comme valeur

    // => la recherche a faire:  set custom attribute JS

    dot.setAttribute('data-index', index);
    dot.style.backgroundImage = `url('${images[index].src}')`;

    //dot.setAttribute('background-image', src="images[index].src")

    document.querySelector('#dots').appendChild(dot);
}

