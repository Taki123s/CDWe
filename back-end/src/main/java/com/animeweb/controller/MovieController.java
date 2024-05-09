package com.animeweb.controller;


import com.animeweb.dto.MovieDTO;
import com.animeweb.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/index")
    public ResponseEntity<List<MovieDTO>> getMovie(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "9") int size) {
        return new ResponseEntity<>(movieService.index(page, size), HttpStatus.OK);
    }
}
