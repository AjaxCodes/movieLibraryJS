'use strict'

const repoContext = require("./repository/repository-wrapper.js");
const express = require('express');
const { movies } = require("./repository/json-context.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, function() {
    console.log('Server started. Listening on port 3000.');
});

app.get("/api/movies/:id", (req, res) => {
    let id = req.params.id;
    let movies = repoContext.movies.findAllMovies();
    res.send(movies);
});

app.post("/api/movies", (req, res) => {
    let newMovie = req.body;
    let addedMovies = repoContext.movies.createProduct(newMovie);
    res.send(addedMovies);
});

app.put("/api/products", (req, res) => {
    let productToUpdate = req.body;
    let updatedProduct = repoContext.products.updateProduct(productToUpdate);
    res.send(updatedProduct);
});

app.delete("/api/products/:id", (req, res) => {
    let id = req.params.id;
    let updatedDataSet = repoContext.products.deleteProduct(id);
    res.send(updatedDataSet);
});