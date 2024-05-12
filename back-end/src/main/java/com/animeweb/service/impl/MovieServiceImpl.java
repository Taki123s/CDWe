package com.animeweb.service.impl;

import com.animeweb.dto.MovieDTO;
import com.animeweb.entities.Movie;
import com.animeweb.mapper.MovieMapper;
import com.animeweb.repository.MovieRepository;
import com.animeweb.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;


@Service
public class MovieServiceImpl implements MovieService {
    @Autowired
    private MovieRepository movieRepository;
    @Override
    public MovieDTO createMovie(MovieDTO movieDTO) {
       return null;
    }

    @Override
    public List<MovieDTO> getAllMovie() {
        List<Movie> movieList = movieRepository.findAll();
        List<MovieDTO> movieDTOList  = new ArrayList<>();
        for(Movie movie : movieList){
            movieDTOList.add(MovieMapper.mapToMovieDTO(movie));
        }
        return movieDTOList;
    }
    @Override
    public MovieDTO findMovieById(Long movieId) {
        Movie movie = movieRepository.findById(movieId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie not found"));
        return MovieMapper.mapToMovieDTO(movie);
    }

    @Override
    public MovieDTO findMovieWatching(Long movieId) {
        Movie movie = movieRepository.findMovieWatching(movieId);
        return MovieMapper.mapToMovieWatching(movie);
    }
}
