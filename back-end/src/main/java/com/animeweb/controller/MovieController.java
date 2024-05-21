package com.animeweb.controller;


import com.animeweb.dto.MovieDTO;
import com.animeweb.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/movie")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @PostMapping
    public ResponseEntity<MovieDTO> createMovie(@RequestBody MovieDTO movieDTO) {
        MovieDTO savedMovie = movieService.createMovie(movieDTO);
        return new ResponseEntity<>(savedMovie, HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<MovieDTO>> getMovie(){
        return ResponseEntity.ok(movieService.getAllMovie());
    }
    @GetMapping("/index")
    public ResponseEntity<Map<String, Object>> getMovies(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "9") int size,
            @RequestParam(defaultValue = "createAt") String sortBy,
            @RequestParam(defaultValue = "false") boolean ascending){

        List<MovieDTO> movies = movieService.index(page, size,sortBy,ascending);
        int totalMovies = movieService.findAll().size(); // Assume you have a method to get the total number of movies

        Map<String, Object> response = new HashMap<>();
        response.put("movies", movies);
        response.put("totalMovies", totalMovies);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    @GetMapping("/{movieId}")
    public ResponseEntity<MovieDTO> findMovieById(@PathVariable Long movieId){
        MovieDTO movieDTO=movieService.findMovieById(movieId);
        if (movieDTO != null) {
            return new ResponseEntity<>(movieDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/watching/{movieId}")
    public ResponseEntity<MovieDTO> findMovieWatching(@PathVariable Long movieId){
        return ResponseEntity.ok(movieService.findMovieWatching(movieId));
    }

    @GetMapping("/search")
    public ResponseEntity<List<MovieDTO>> search(@RequestParam("term") String keyword) {
        List<MovieDTO> movieList = null;
        if (keyword != null && !keyword.isEmpty()) {
            movieList = movieService.searchMovie(keyword);
        } else {
            movieList = movieService.searchMovie(keyword);
        }

        if (movieList != null && !movieList.isEmpty()) {
            return new ResponseEntity<>(movieList, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
