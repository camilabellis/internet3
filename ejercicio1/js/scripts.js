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
            listItems.assamble(listItems.items[i])
            $('#table-body').append(
                listItems.assamble(listItems.items[i])
            );
        }
    },

    setItems: function (items){
        listItems.items = items;
    },
}