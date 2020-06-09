// import $ from 'jquery';

function getDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json)
    .then((response) => displayResults(responseJson));
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    for (i = 0; i < responseJson.message.length; i ++) {

    }
}

function handleSubmit() {
    $('form').submit(function (event) => {
        console.log('`handleSubmit` ran')
        event.preventDefault();
        event.stopPropagation();
        let num = $('#dogNumber').val();
        console.log(num);
        if (num >= 50) {
            console.log('Too many dogs!');
            return 'foo';
        };
        $('.pictures').empty();
        // getDogImage(num);
    });
}

$(handleSubmit)

$(main)
