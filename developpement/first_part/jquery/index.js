$form = $('form');

console.log($form);

$form.on('submit', enregistrerContact);

function enregistrerContact() {
    e.preventDefault();

    // ces méthodes permettent de récupérer les infos du formulaire
    // $object = $(this).serialize(); // ici c'est utile pour un GET
     console.log($object);
    // $object2 = $(this).serializeArray(); // ici c'est utile pour un post
    console.log($object2);
}