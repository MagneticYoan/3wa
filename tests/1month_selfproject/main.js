'use strict';

// EventListener

window.addEventListener("DOMContentLoaded", intervalChangeImage())

imageActive.addEventListener("click", () => {
	if (interval != '') {
		stopSlider();
		console.log('stop random');
	}
	else {
		intervalChangeImage();
		console.log('start random');
	}
	console.log('ok');
})


document.addEventListener('DOMContentLoaded', () => {
   listeDeDots();


   let dots = Array.from(document.querySelectorAll('#dots li'));

   dots.forEach(dot => {
        dot.addEventListener('click', function() {
            // index = this.dataset.index;
            indexActuel = this.getAttribute('data-index');
            changeImage(indexActuel);

        });
   });

});
