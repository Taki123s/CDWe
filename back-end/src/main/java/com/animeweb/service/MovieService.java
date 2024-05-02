package com.animeweb.service;

import com.animeweb.dto.MovieDTO;

public interface MovieService {
    MovieDTO createMovie(MovieDTO movieDTO);
    List<MovieDTO> getAllMovie();
    List<Movie> searchMovie(String name);
    List<Movie> getAll();
    Movie findMovie(long id);
}
