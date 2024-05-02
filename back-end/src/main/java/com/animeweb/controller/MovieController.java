package com.animeweb.controller;


import com.animeweb.dto.MovieDTO;
import com.animeweb.service.MovieService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
@RequiredArgsConstructor
@RequestMapping("/movie")
public class MovieController {
    @Autowired
    private final MovieService movieService;
    @PostMapping
    public ResponseEntity<MovieDTO> createMovie(@RequestBody MovieDTO movieDTO){
        MovieDTO savedMovie = movieService.createMovie(movieDTO);
        return new ResponseEntity<>(savedMovie, HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<MovieDTO>> getMovie(){
        return ResponseEntity.ok(movieService.getAllMovie());
    }
    @GetMapping("/{id}")
    public  ResponseEntity<Movie>findMovie(@PathVariable long id){
        Movie m = movieService.findMovie(id);
        if (m != null) {
            return new ResponseEntity<>(m, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
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
