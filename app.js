function getDogImage() {
     fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  let num = Math.floor(Math.random()*10);
  console.log(num);
  for (i = 0; i < num; i ++) {
    $('.images').append(`<img src="${responseJson.message}" class="images">`);
  }
}

function handleSubmit() {
  $('form').submit(function(event){
    event.preventDefault();
    event.stopPropagation();
    $('.images').empty();
    
    getDogImage();
  });
}

$(handleSubmit);
