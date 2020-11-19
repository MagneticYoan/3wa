'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/


buttonNext.addEventListener("click", () => {
    stopSlider()
    changeIndexPlus();
    changeImage(indexActuel);
});


buttonPrev.addEventListener("click", () => {
    stopSlider()
    changeIndexMinus();
    changeImage(indexActuel);
});

buttonPlay.addEventListener("click", () => {
    interval = setInterval(() => {
        changeIndexPlus();
        changeImage(indexActuel);
    }, 1000)
});

buttonRandom.addEventListener("click", () => {
    stopSlider();
    randomImage();
    changeImage(indexActuel);

});

document.addEventListener('DOMContentLoaded', () => {
   listeDeDots();
   let dots = Array.from(document.querySelectorAll('#dots li'));
   dots.forEach(dot => {
        dot.addEventListener('click', function() {
            // index = this.dataset.index;
            indexActuel = this.getAttribute('data-index');
            changeImage(indexActuel);
        });
   }
}