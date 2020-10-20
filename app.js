'use strict'
function getAllMovies(){
    $.ajax({
        url: 'http://localhost:3000/api/movies',
        dataType:"json",
        type: "get",
        success: function(data, textStatus, jQxhr){
            //do something with response data (data parameter)
            console.log(data);
            for(let i = 0; i < data.length; i++){
                $('#table').append('<tr>' 
                                + '<td>' + data[i].title + '</td>'
                                + '<td>' + data[i].genre + '</td>'
                                + '<td>' + data[i].director + '</td>'
                                +'</tr>');
            }
 },
         error: function(jQxhr, textStatus, errorThrown){
                //if the request fails, the errorThrown parameter will contain details of the error 
                console.log(errorThrown);
        },
     });
}
$(document).ready(function(){
    getAllMovies();
});
getAllMovies();

    

    