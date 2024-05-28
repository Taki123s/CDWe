package com.animeweb.controller;


import com.animeweb.dto.MovieDTO;
import com.animeweb.security.JwtGenerator;
import com.animeweb.service.MovieService;
import com.animeweb.service.impl.UserServiceImpl;
import com.nimbusds.jwt.SignedJWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/movie")
public class MovieController {
    @Autowired
    private MovieService movieService;
    @Autowired
    JwtGenerator jwtGenerator;
    @Autowired
    UserServiceImpl userService;
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
        return ResponseEntity.ok(movieService.findMovieById(movieId));
    }
    @GetMapping("/watching")
    public ResponseEntity<MovieDTO> findMovieWatching(@RequestParam Long movieId,@RequestParam String token) throws ParseException {
        SignedJWT signedJWT =  jwtGenerator.verifyToken(token);
        Long idUser = (Long) signedJWT.getJWTClaimsSet().getClaim("idUser");
        return ResponseEntity.ok(movieService.findMovieWatching(movieId));
    }

    @GetMapping("/search")
    public ResponseEntity<List<MovieDTO>> search(@RequestParam("term") String keyword) {
        List<MovieDTO> movieList = movieService.searchMovie(keyword);

        return new ResponseEntity<>(movieList, HttpStatus.OK);
    }
    @GetMapping("/same/{movieId}")
    public ResponseEntity<List<MovieDTO>> getSeries(@PathVariable Long movieId){
        return  ResponseEntity.ok(movieService.findAllMovieSameSeries(movieId));
    }

}
