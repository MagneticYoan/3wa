//https://api.jquery.com/

$node = $('.row');

$form = $('#form');

$inputs = $('input');

$form.hide('slow');

$form.on('submit', function() {

});

$('.btn').on('click', function() {
    console.log('on click');
});


$('.btn').click(function() {
    console.log('.click');
});


$form.show('slow');

$form.on('submit', persistContact);

function persistContact(e) {
    e.preventDefault();

    // ces méthodes permettent de récupérer les infos du formulaire
    $object = $(this).serialize();
    $object2 = $(this).serializeArray();
    
    console.log($object);
    console.log($object2);
}
