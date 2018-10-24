function moviesById(id){
    $.ajax({
        url:'http://192.168.11.150:3000/peliculas/'+ id,
        method:'GET',
    }).then(success,error)
}

function success(response) {
    $('.row').html(
        description.assamble(response)
    )
    $('.back-button').on('click', function(){
        $('.row').html('');
        listPelis.listAll();
    })
}

function error(err) {
    console.log(err)
}

var description = {
    peli: [],

    assamble: function (desc) {
        var content = '<div class="row">'
        + '<div class="col-md-6">'
        + '<img src="'+ desc.poster +'">'
        + '</div>'
        + '<div class="col-md-6">'
        + '<h2>'+ desc.title +'</h2>'
        + '<p>'+ desc.description +'</p>'
        + '</div>'
        + '</div>';
        return content;
        }
}