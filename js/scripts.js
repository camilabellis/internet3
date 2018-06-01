var users = [
{
    name: 'Camila',
    lastname: 'Bellis',
    age: 24,
    children: ['Pedro' , 'Juan'],
    email: 'belliscamila@gmail.com'
},
{
    name: 'Celina',
    lastname: 'Comugnaro',
    age: 20,
    children: ['Pedro' , 'Juan'],
    email: 'comugnarocelina@gmail.com'
},
{
    name: 'Carlos',
    lastname: 'Britos',
    age: 20,
    children: [],
    email: 'carlosbritos@gmail.com'
},
{
    name: 'Lucas',
    lastname: 'Daniele',
    age: 20,
    children: [],
    email: 'lucasdaniele@gmail.com'
}                
]

/**function filterByAge(age){
    for(var i=0; i < users.length; i++){
        if (age => users[i].age){
            console.log( assamble( users[i] ) );
}
}
}**/

/**function assamble(user){
    return user.lastname 
    + ', ' 
    + user.name 
    + ' tiene ' 
    + user.children.length 
    + ' hijos ';
}**/

var listUsers = {
    users: [],
    assamble: function(user){

    return '<tr>'
    +'<td>'+ user.Name +'</td>'
    +'<td>'+ user.age + '</td>'
    +'<td>'+ user.email + '</td>'
    +'<td>'+ user.profile +'</td>'
    +'<td>'+ user.country +'</td>'
    +'<td>'+ user.salary +'</td>'
  +'</tr>';

  },
        
/**   return user.lastname 
    + ', ' 
    + user.Name 
    + ' tiene ' 
    
    + ' hijos ';
  **/

  listAll: function(){
        for (var i=0; i < listUsers.users.length; i++){
            if (listUsers.users[i].age == age){
            $('#users tbody').append(
                listUsers.assamble(listUsers.users[i])
        );
        }
    },
    setUsers: function (users){
        listUsers.users = users;
    }
    
    clearTable: function (user){
        $('#users tbody').html('')
    }
},
    filterByAge: function (age) {
        for (var i = 0; i < listUsers.users.length; i++){
            if (listUsers.users[i]){}
        }
    },
}
$('#users tbody').append();

$('#clickme').on('click',function(){
listUsers.setUsers(usersItems);
listUsers.listAll();
});

 $('#clear').on('click', function(){
  listUsers.clearTable();  
 });
