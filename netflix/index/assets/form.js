$('#enviar').on('click', function(event){
    event.preventDefault();
    var toSave = {
    gender: $('#gender').val(),
    title: $('#title').val(),
    description: $('#description').val(),
    cast: $('#cast').val(),
    poster: $('#poster').val(),
    score: $('#score').val(),
   }

   submitForm(toSave);
})

function submitForm(data){
    $.ajax({
        url:'http://192.168.11.150:3000/peliculas',
        method:'POST',
        data: data
    })
}