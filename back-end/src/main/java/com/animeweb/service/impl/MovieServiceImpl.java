package com.animeweb.service.impl;

import com.animeweb.dto.MovieDTO;
import com.animeweb.mapper.MovieMapper;
import com.animeweb.repository.MovieRepository;
import com.animeweb.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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
        return movieRepository.findAll().stream().map((MovieMapper::mapToMovieDTO)).collect(Collectors.toList());
    }
}
