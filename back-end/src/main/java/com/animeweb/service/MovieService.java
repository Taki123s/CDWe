package com.animeweb.service;

import com.animeweb.dto.MovieDTO;
import com.animeweb.entities.Movie;

import java.time.LocalDate;
import java.util.Date;
import com.animeweb.dto.SerieDTO;
import org.springframework.security.access.prepost.PreAuthorize;
import java.util.List;

public interface MovieService {
    MovieDTO createMovie(MovieDTO movieDTO);
    @PreAuthorize("hasAuthority('per1')")
    List<MovieDTO> getAllMovie();
    List<MovieDTO> index(int page, int size, String sortBy,boolean ascending);
    List<MovieDTO> findAll();
    MovieDTO findMovieById(Long movieId);
    MovieDTO findMovieWatching(Long movieId);
    List<MovieDTO> searchMovie(String name);
    List<MovieDTO> findAllMovieSameSeries(Long movieId);

    List<MovieDTO> getTopViewDay();
    List<MovieDTO> getTopViewMonth();
    List<MovieDTO> getTopViewYear();
    List<MovieDTO> findAllMovieFollowedByUserId(Long userId);

}
