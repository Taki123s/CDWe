package com.animeweb.service.impl;

import com.animeweb.dto.MovieDTO;
import com.animeweb.entities.Movie;
import com.animeweb.exception.ResourceNotFoundException;
import com.animeweb.mapper.MovieMapper;
import com.animeweb.repository.MovieRepository;
import com.animeweb.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

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
    public List<MovieDTO> index(int page, int size, String sortBy, boolean ascending) {
        if (sortBy == null || sortBy.isEmpty()) {
            sortBy = "createAt"; // Mặc định sắp xếp theo thời gian tạo mới nhất
        }

        Pageable pageable;
        if (ascending) {
            pageable = PageRequest.of(page, size, Sort.by(sortBy).ascending());
        } else {
            pageable = PageRequest.of(page, size, Sort.by(sortBy).descending());
        }

        Page<Movie> moviePage = movieRepository.findAll(pageable);

        List<MovieDTO> movieDTOS = new ArrayList<>();
        for (Movie m : moviePage.getContent()) {
            movieDTOS.add(MovieMapper.mapToMovieDTO(m));
        }
        return movieDTOS;
    }

    @Override
    public List<MovieDTO> findAll() {
        List<Movie> list = movieRepository.findAll();
        List<MovieDTO> movieDTOS = new ArrayList<>();
        for (Movie m : list) {
            movieDTOS.add(MovieMapper.mapToMovieDTO(m));
        }
        return movieDTOS;
    }



    @Override
    public MovieDTO findMovieById(Long movieId) {
        Movie movie = movieRepository.findById(movieId).orElseThrow(()-> new ResourceNotFoundException("Movie not found"));
        return MovieMapper.mapToMovieDTO(movie);
    }

    @Override
    public MovieDTO findMovieWatching(Long movieId) {
        Movie movie = movieRepository.findMovieWatching(movieId);
        return MovieMapper.mapToMovieWatching(movie);
    }
}
