function getMovies() {
    $.ajax({
        url: 'http://192.168.11.150:3000/peliculas',
        method: 'GET',
    }).then(success)
}

function success(response) {
    listPelis.setPelis(response);
    listPelis.listAll();
}

var listPelis = {
    pelis: [],

    setPelis: function (pelis) {
        listPelis.pelis = pelis;
    },

    listAll: function () {
        for (var i = 0; i < listPelis.pelis.length; i++) {
            $('.row').append(
                listPelis.assamble(listPelis.pelis[i])
            )
        };
        $('.btn-danger').on('click', function(){
            var id = $(this).attr('data-id');
            console.log(id);
            listPelis.moviesById(id);
        })

    },

    assamble: function (peli) {
        var content = '<div class="col-md-4">'
            + '<img src="' + peli.poster + '" alt="" style="width: 90%; height: 450px;">'
            + '<h2>' + peli.title + '</h2>'
            + '<div class="col-md-12">';
        for (var i = 0; i < peli.score; i++) {
            content += '<i class="fa fa-star ystar"></i>'
        }
        content += '</div>'
            + '<p><a class="btn btn-danger" href="#" data-id="'+ peli._id +'" role="button">Descripción ></a></p>'
            + '</div>';
        return content;
    }
}

getMovies();