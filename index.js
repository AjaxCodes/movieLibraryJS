'use strict'
var cors = require("cors");
const repoContext = require("./repository/repository-wrapper.js");
const express = require('express');
const { movies } = require("./repository/json-context.js");
const validators = require("./validators/custom-validations.js");
const app = express();
<<<<<<< HEAD
var cors = require("cors");

=======
app.use(cors());
>>>>>>> e89f14d62cd18b93936360b70c1b2557cd3e50ee
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => validators.body(req, res, next));

app.listen(3000, function() {
    console.log('Server started. Listening on port 3000.');
});


app.get("/api/movies", (req, res) => {
    let id = req.params.id;
    let movies = repoContext.movies.findAllMovies(id);
    res.send(movies);
});

app.get("/api/movies/:id", (req, res) => {
    let id = req.params.id;
<<<<<<< HEAD
    let movies = repoContext.movies.findMovieById(id);
    res.send(movies);
});

app.get("/api/movies/genre/:genre", (req, res) => {
    let genre = req.params.body;
    let movies = repoContext.movies.findAllMoviesByGenre(genre);
    res.send(movies);
=======
    let movies = repoContext.movies.findAllMovies();
    res.send(movies, id);
>>>>>>> e89f14d62cd18b93936360b70c1b2557cd3e50ee
});

app.post("/api/movies/:id", (req, res) => {
    let newMovie = req.body;
    let addedMovies = repoContext.movies.createMovie(newMovie);
    res.send(addedMovies);
});

app.put("/api/movies", (req, res) => {
    let productToUpdate = req.body;
    let updatedMovie = repoContext.movies.updateMovie(productToUpdate);
    res.send(updatedMovie);
});

app.delete("/api/movies/:id", (req, res) => {
    let id = req.params.id;
    let updatedDataSet = repoContext.movies.deleteMovie(id);
    res.send(updatedDataSet);
});