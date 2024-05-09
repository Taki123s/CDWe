package com.animeweb.service;

import com.animeweb.dto.MovieDTO;

import java.util.List;

public interface MovieService {
    MovieDTO createMovie(MovieDTO movieDTO);
    List<MovieDTO> index(int page, int size);
    List<MovieDTO> findAll();
    List<MovieDTO> getAllMovie();
    MovieDTO findMovieById(Long movieId);
    MovieDTO findMovieWatching(Long movieId);
}
