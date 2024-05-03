package com.animeweb.service;

import com.animeweb.dto.MovieDTO;
import com.animeweb.entities.Movie;

import java.util.List;

public interface MovieService {
    MovieDTO createMovie(MovieDTO movieDTO);
    List<MovieDTO> getAllMovie();
    List<Movie> searchMovie(String name);
    List<Movie> getAll();
    Movie findMovie(long id);
}
