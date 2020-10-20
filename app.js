'use strict'
<<<<<<< HEAD

function getAllMovies() { // works 

    $('#database').click(function() {
        $('#movieTableBody').toggle();
    });

=======
function getAllMovies(){
>>>>>>> 5230837d2655f72a3b54acb45b8a93e657ca4996
    $.ajax({
        url: 'http://localhost:3000/api/movies',
<<<<<<< HEAD
        dataType: 'json',
        success: function(data) {
            $('#movieTableBody').html('');
            addDataToTable(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        },
    });
}

function createMovie() {

    var $title = $('#newTitle');
    var $genre = $('#newGenre');
    var $director = $('#newDirector');
    var $imgPath = $('#imgPath');

    var addMovie = {
        "title": $title.val(),
        "genre": $genre.val(),
        "director": $director.val(),
        "imgPath": $imgPath.val(),
    };



    $.ajax({
        url: 'http://localhost:3000/api/movies/add',
        type: 'POST',
        dataType: 'json',
        data: addMovie,
        success: function(data) {
            console.log("Added!");
            console.log(data);
            getAllMovies();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }

    });
}

function addDataToTable(data) {

    for (let i = 0; i < data.length; i++) {
        $("#movieTableBody").append(`
        <tr><td>${data[i].title}</td>
        <td>${data[i].genre}</td>
        <td>${data[i].director}</td>
        <td><button type="submit" class="btn btn-outline-warning" onclick="editSingleMovie('${data[i].id}', '${data[i].title}', '${data[i].genre}','${data[i].director}' )">Edit</button>
        <td><button type="submit" class="btn btn-outline-warning" onclick="getMovieDetails()" id="getMovieId">Details</button></tr>
        </tr>`);
    };
=======
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
>>>>>>> 5230837d2655f72a3b54acb45b8a93e657ca4996
}
$(document).ready(function(){
    getAllMovies();
});
getAllMovies();

<<<<<<< HEAD
function editSingleMovie(id, title, genre, director) {
    console.log(title);
}

function getMovieDetails(movieId) {

    $('#getMovieId').click(function() {

    });

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/movies',
        dataType: 'json',
        success: function(i, data) {
            console.log("this button is working");
        }
    });

}

function updateMovie() {
    var movieToUpdate = {
        "MovieId": parseInt(document.getElementById('hiddenMovieId').value),
        "Title": document.getElementById('editTitle').value,
        "Genre": document.getElementById('editGenre').value,
        "Director": document.getElementById('editDirector').value,
        "ImgPath": document.getElementById('editImg').value
    };
    $(document).ready(function() {
        $.ajax({
            url: 'http://localhost:3000/api/movies',
            type: 'PUT',
            contentType: 'json',
            data: JSON.stringify(movieToUpdate),
            success: function() {
                alert("Successfully updated movie!");
                $(document.getElementById('edit-form').reset());
            }
        }).then(function() {
            getAllMovies();
        });
    });
}
=======
    

    
>>>>>>> 5230837d2655f72a3b54acb45b8a93e657ca4996
