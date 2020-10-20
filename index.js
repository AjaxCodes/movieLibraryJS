'use strict'
var cors = require('cors');
const repoContext = require('./repository/repository-wrapper.js');
const express = require('express');
const validators = require('./validators/custom-validations.js');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => validators.body(req, res, next));


app.listen(3000, function() {
    console.log('Server started. Listening on port 3000.');
});

app.get("/api/movies", (req, res) => { // works with pair
    var id = req.params.id;
    var movies = repoContext.movies.findAllMovies(id);
    res.send(movies);
});

app.get("/api/movies/:id", (req, res) => { // gets movie by id
    var id = req.params.id;
    var movies = repoContext.movies.findMovieById(id);
    res.send(movies);
});

app.post("/api/movies/add", (req, res) => { // adds movie to database
    var newMovie = req.body;
    var addedMovies = repoContext.movies.createMovie(newMovie);
    res.send(addedMovies);
});

app.put("/api/movies/:id", (req, res) => { // updates list
    var movieToUpdate = req.body;
    var updatedMovie = repoContext.movies.updateMovie(movieToUpdate);
    res.send(updatedMovie);
});

app.delete("/api/movies/:id", (req, res) => { // deletes movies from database
    var id = req.params.id;
    var updatedDataSet = repoContext.movies.deleteMovie(id);
    res.send(updatedDataSet);
});