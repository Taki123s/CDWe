package com.animeweb.service;

import com.animeweb.dto.MovieDTO;
import com.animeweb.entity.Movie;

import java.util.List;

public interface MovieService {
    MovieDTO createMovie(MovieDTO movieDTO);
    List<Movie> searchMovie(String name);

    List<Movie> getAll();
}
