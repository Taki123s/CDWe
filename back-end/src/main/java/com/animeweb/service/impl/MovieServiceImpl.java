package com.animeweb.service.impl;

import com.animeweb.dto.MovieDTO;
import com.animeweb.entity.Movie;
import com.animeweb.mapper.MovieMapper;
import com.animeweb.repository.MovieRepository;
import com.animeweb.service.MovieService;
import org.springframework.stereotype.Service;

@Service
public class MovieServiceImpl implements MovieService {
    private MovieRepository movieRepository;
    @Override
    public MovieDTO createMovie(MovieDTO movieDTO) {
       return null;
    }
}
