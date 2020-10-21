'use strict'

function getAllMovies() { // works 

    $('#database').click(function() {
        $('#movieTableBody').toggle();
    });

    $.ajax({
        url: 'http://localhost:3000/api/movies',
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
    

    var addMovie = {
        "title": $title.val(),
        "genre": $genre.val(),
        "director": $director.val(),
        
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
        <td><button type="submit" class="btn btn-outline-warning" onclick="editSingleMovie('${data[i].id}','${data[i].title}','${data[i].genre}','${data[i].director}')">Edit</button>
        </tr>`);
    };
}
$(document).ready(function(){
    getAllMovies();
});
getAllMovies();

function editSingleMovie(id, title, genre, director) {
    console.log(title);
    $('#hiddenMovieId').val(id);
    $('#editTitle').val(title);
    $('#editGenre').val(genre);
    $('#editDirector').val(director);
}

function updateMovie() {
    var movieToUpdate = {
        "Id": parseInt(document.getElementById('#hiddenMovieId').value()),
        "Title": document.getElementById('#input').value(),
        "Genre": document.getElementById('#input').value(),
        "Director": document.getElementById('#input').value()
        
    };
    $(document).ready(function() {
        $.ajax({
            url: 'https://localhost:3000/api/movies',
            type: 'Put',
            contentType: 'json',
            data: JSON.stringify(movieToUpdate),
            success: function(){
                alert("Successfully updated movie!");
                $(document.getElementById('edit-form').append());
            }
            }).then(function() {
                getAllMovies();
            });
    });



}

    