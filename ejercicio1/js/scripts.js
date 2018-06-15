var listItems = {
    items: [],
    assamble: function(item){
        return '<div class="row">'
        + '<span class="col-2"></span>'
        + '<span class="col-2">' + item.brand + '</span>'
        + '<span class="col-2">' + item.location + '</span>'
        + '<span class="col-2">' + item.lunch + '</span>'
        + '<span class="col-2">' + item.price + '</span>'
        + '<span class="col-2"></span>'
        +'<span class="description col-12"></span>'
        + '</div>';
    },

    listAll: function(){
        for (var i=0; i < listItems.items.length; i++){
            $('#table-body').append(
                listItems.assamble(listItems.items[i])
            );
        }
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
listItems.setItems(elementslist);
$('#brand').on('click', function(){
    listItems.filterByBrand();
})

$('#price').on('click', function(){
    listItems.filterByPrice();
})

$('#set').on('click',function(){
    listItems.setItems(elementslist);
    })

$('#clear').on('click', function(){
    listItems.clearTable();  
    })
    
    $('#lunch').on('click', function(){
        listItems.filterByLunch();
    })

    $('#location').on('click', function(){
        listItems.filterByLocation();
    })
