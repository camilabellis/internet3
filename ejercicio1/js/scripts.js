var listItems = {
    items: [],
    assamble: function(item){
        return '<div class="row"' 
        + 'data-id="'+item.id+'">'
        + '<span class="col-2"></span>'
        + '<span class="col-2">' + item.brand + '</span>'
        + '<span class="col-2">' + item.location + '</span>'
        + '<span class="col-2">' + item.lunch + '</span>'
        + '<span class="col-2">' + item.price + '</span>'
        + '<span class="col-2">'
        + '<button type="text" class="show">Show</button>'
        + '</span>'
        + '<span class="description col-12">'
        + item.description + '</span>'
        + '</div>';
    },

    listAll: function(){
        for (var i=0; i < listItems.items.length; i++){
            $('#table-body').append(
                listItems.assamble(listItems.items[i])
            );
        }
        $('.show').on('click', function(){
            $(this).parents('.row')
            .find('.description')
            .show();
            });
    },

    setItems: function (items){
        listItems.items = items;
    },

    filterByBrand: function (brand){
        for (var i=0; i < listItems.items.length; i++){
            if (listItems.items[i].brand == brand){
                $('#table-body').append(
                    listItems.assamble(listItems.items[i])
                );
            }
        }
    },

    filterByLocation: function (location){
        for (var i=0; i < listItems.items.length; i++){
            if (listItems.items[i].location == location){
                $('#table-body').append(
                    listItems.assamble(listItems.items[i])
                );
            }
        }
    },

    filterByLunch: function (lunch){
        for (var i=0; i < listItems.items.length; i++){
            if (listItems.items[i].lunch == lunch){
                $('#table-body').append(
                    listItems.assamble(listItems.items[i])
                );
            }
        }
    },

    filterByPrice: function (price){
        for (var i=0; i < listItems.items.length; i++){
            if (listItems.items[i].price == price){
                $('#table-body').append(
                    listItems.assamble(listItems.items[i])
                );
            }
        }
    }
}

listItems.setItems(elementsList);
$('#action1').on('click', function(){
    var input =  $('#brand').val();
    listItems.filterByBrand(input);
})

$('#action2').on('click', function(){
    var input = $('#price').val();
    listItems.filterByPrice(input);
})

$('#action3').on('click',function(){
    var input = $('#set').val();
    listItems.setItems(elementslist);
    })

$('#action4').on('click', function(){
    var input = $('#clear').val();
    listItems.clearTable();  
    })
    
$('#lunch').on('click', function(){
    listItems.filterByLunch();
    })

$('#location').on('click', function(){
    listItems.filterByLocation();
    })

