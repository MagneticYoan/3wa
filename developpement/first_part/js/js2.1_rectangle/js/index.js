let rectangle = document.querySelector(".rectangle");

// si on clique sur le bouton, le rectangle disparait
// css : display none
// fonction de bouton






// event listener pour le clic

document.getElementById("toggle-rectangle").addEventListener("click", hideOrShowRectangle);

function hideOrShowRectangle() {
    // changer ce bloc en deux lignes de code
    if(rectangle.style.display === "none") {
        rectangle.style.display = "block";
    }
    
    else {
        rectangle.style.display = "none";
    }
    
}


// si la souris se déplace à l'intérieur du rectangle, il devient rouge
// : hover ? 
// fonction ??

rectangle.addEventListener("mouseover", () => {
    addId("important");
});

function addId(id) {
    rectangle.setAttribute('id', id);
    console.log("classe type is ok");
}

// si on double clique, il devient vert
// event listener
// fonction change la classe

rectangle.addEventListener("dblclick", () => {
    addId("good");
});