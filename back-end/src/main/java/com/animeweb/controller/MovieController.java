package com.animeweb.controller;


import com.animeweb.dto.MovieDTO;
import com.animeweb.entity.Movie;
import com.animeweb.service.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/movie")
public class MovieController {

    private final MovieService movieService;
    @PostMapping
    public ResponseEntity<MovieDTO> createMovie(@RequestBody MovieDTO movieDTO){
        MovieDTO savedMovie = movieService.createMovie(movieDTO);
        return new ResponseEntity<>(savedMovie, HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<String> getMovie(){
        return new ResponseEntity<>("Hello",HttpStatus.ACCEPTED);
    }
    @GetMapping("/search")
    public ResponseEntity<List<Movie>> search(@RequestParam("term") String keyword) {
        List<Movie> movieList = null;
        if (keyword != null && !keyword.isEmpty()) {
            movieList = movieService.searchMovie(keyword);
        } else {
            movieList = movieService.getAll();
        }

        if (movieList != null && !movieList.isEmpty()) {
            return new ResponseEntity<>(movieList, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
