import express from "express";
import moviesController from './controllers/moviesController.js';
import data_movie from './share/data-movies.js';

const app = express();

app.use(express.json());

app.get('/movies/:id', (req, res) => {
    data_movie.req = { id: req.params.id };
    moviesController.getMovieById(data_movie);
    res.send(data_movie.res);
})

app.delete('/movies/:id', (req, res) => {
    data_movie.req = { id: req.params.id };
    moviesController.removeMovie(data_movie);
    res.send(data_movie.res);
})

app.post('/movies/createMovie', (req, res) => {
    data_movie.req = req.body;
    moviesController.createMovie(data_movie);
    res.send(data_movie.res);
})

app.put('/movies/updateMovie', (req, res) => {
    data_movie.req = req.body;
    moviesController.updateMovie(data_movie);
    res.send(data_movie.res);
})

app.post('/movies/allMovies', (req, res) => {
    moviesController.getAllMovies(data_movie);
    res.send(data_movie.res);
})

app.post('/movies/getMovieBy', (req, res) => {
    data_movie.req = req.body;
    moviesController.getMovieBy(data_movie);
    res.send(data_movie.res);
})

app.post('/movies/addActors', (req, res) => {
    data_movie.req = req.body;
    moviesController.addActors(data_movie);
    res.send(data_movie.res);
})

export default app;