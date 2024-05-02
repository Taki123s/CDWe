package com.animeweb.service;

import com.animeweb.dto.MovieDTO;

import java.util.List;

public interface MovieService {
    MovieDTO createMovie(MovieDTO movieDTO);
    List<MovieDTO> getAllMovie();
}
