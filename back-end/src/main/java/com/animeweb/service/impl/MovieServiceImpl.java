package com.animeweb.service.impl;

import com.animeweb.dto.MovieDTO;
import com.animeweb.entity.Movie;
import com.animeweb.mapper.MovieMapper;
import com.animeweb.repository.MovieRepository;
import com.animeweb.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public List<Movie> searchMovie(String name) {
        return this.movieRepository.findByNameContainingIgnoreCase(name);
    }

    @Override
    public List<Movie> getAll() {
        return this.movieRepository.findAll();
    }
}
