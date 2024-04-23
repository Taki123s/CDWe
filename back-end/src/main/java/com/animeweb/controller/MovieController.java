package com.animeweb.controller;


import com.animeweb.dto.MovieDTO;
import com.animeweb.service.MovieService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/movie")
public class MovieController {
    private MovieService movieService;
    @PostMapping
    public ResponseEntity<MovieDTO> createMovie(@RequestBody MovieDTO movieDTO){
        MovieDTO savedMovie = movieService.createMovie(movieDTO);
        return new ResponseEntity<>(savedMovie, HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<String> getMovie(){
        return new ResponseEntity<>("Hello",HttpStatus.ACCEPTED);
    }
}
