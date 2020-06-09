function getDogImage(num) {
    fetch('https://dog.ceo/api/breeds/image/random' + num)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  for (i = 0; i < responseJson.message.length; i ++) {
    $('.pictures').append('<img src=\'' + responseJson.message[i] + '>');
  }
  $('.images').removeClass('hidden');
}

function handleSubmit() {
  $('form').submit(function(event){
    event.preventDefault();
    event.stopPropagation();
    let num = $('#dogNumber').val();
    if (num > 50) {
      alert('Too many dogs!');
      return;
    }
    $('.pictures').empty();
    getDogImage(num);
  });
}

$(handleSubmit);
