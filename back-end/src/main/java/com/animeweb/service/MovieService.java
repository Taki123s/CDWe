package com.animeweb.service;

import com.animeweb.dto.MovieDTO;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;

public interface MovieService {
    MovieDTO createMovie(MovieDTO movieDTO);
    @PreAuthorize("hasAuthority('per1')")
    List<MovieDTO> getAllMovie();
    MovieDTO findMovieById(Long movieId);
    MovieDTO findMovieWatching(Long movieId);
}
