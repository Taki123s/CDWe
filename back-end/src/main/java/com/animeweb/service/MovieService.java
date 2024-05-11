package com.animeweb.service;

import com.animeweb.dto.MovieDTO;
import com.animeweb.entities.Movie;

import java.util.List;

public interface MovieService {
    MovieDTO createMovie(MovieDTO movieDTO);
    List<MovieDTO> getAllMovie();
    List<MovieDTO> searchMovie(String name);
    List<MovieDTO> getAll();
    Movie findMovie(Long id);
}
