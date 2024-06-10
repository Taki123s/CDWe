package com.animeweb.service.impl;

import com.animeweb.dto.movie.MovieAdmin;
import com.animeweb.dto.movie.MovieDTO;
import com.animeweb.entities.Movie;
import com.animeweb.exception.ResourceNotFoundException;
import com.animeweb.mapper.MovieMapper;
import com.animeweb.repository.GenreRepository;
import com.animeweb.repository.MovieRepository;
import com.animeweb.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@Service
public class MovieServiceImpl implements MovieService {
    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private GenreRepository genreRepository;


    @Override
    public void save(Movie movie) {
        movieRepository.save(movie);
    }

    @Override
    public List<MovieAdmin> getAdminMovie() {
        List<Movie> movieList = movieRepository.findAll();
        List<MovieAdmin> movieDTOList = new ArrayList<>();
        for (Movie movie : movieList) {
            movieDTOList.add(MovieMapper.mapToMovieAdmin(movie));
        }
        return movieDTOList;
    }

    @Override
    public List<MovieDTO> getAllMovie() {
        List<Movie> movieList = movieRepository.findAll();
        List<MovieDTO> movieDTOList = new ArrayList<>();
        for (Movie movie : movieList) {
            movieDTOList.add(MovieMapper.mapToMovieDTO(movie));
        }
        return movieDTOList;
    }

    @Override
    public List<MovieDTO> index(int page, int size, String sortBy, boolean ascending) {
        if (sortBy == null || sortBy.isEmpty()) {
            sortBy = "createAt";
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
        Movie movie = movieRepository.findById(movieId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie not found"));
        return MovieMapper.mapToMovieDTO(movie);
    }

    @Override
    public MovieDTO findMovieWatching(Long movieId) {
        Movie movie = movieRepository.findMovieWatching(movieId);
        return MovieMapper.mapToMovieWatching(movie);
    }

    @Override
    public List<MovieDTO> searchMovie(String name) {
        List<Movie> movieList = movieRepository.findByNameContainingIgnoreCase(name, PageRequest.of(0, 5));
        List<MovieDTO> movieDTOList = new ArrayList<>();
        for (Movie movie : movieList) {
            movieDTOList.add(MovieMapper.mapToMovieDTO(movie));
        }
        return movieDTOList;
    }

    @Override
    public List<MovieDTO> getTopViewDay() {
        List<Movie> topMovies = movieRepository.findTopMoviesByDate();
        List<MovieDTO> movieDTOS = new ArrayList<>();
        if (topMovies.size() > 5) {
            topMovies = topMovies.subList(0, 5);
            for (Movie m : topMovies
            ) {
                movieDTOS.add(MovieMapper.mapToMovieDTO(m));
            }
        }
        return movieDTOS;
    }

    @Override
    public List<MovieDTO> getTopViewMonth() {
        List<Movie> topMovies = movieRepository.findTopMoviesMonth();
        List<MovieDTO> movieDTOS = new ArrayList<>();
        if (topMovies.size() > 5) {
            topMovies = topMovies.subList(0, 5);
            for (Movie m : topMovies
            ) {
                movieDTOS.add(MovieMapper.mapToMovieDTO(m));
            }
        }
        return movieDTOS;
    }

    @Override
    public List<MovieDTO> getTopViewYear() {
        List<Movie> topMovies = movieRepository.findTopMoviesYear();
        List<MovieDTO> movieDTOS = new ArrayList<>();
        if (topMovies.size() > 5) {
            topMovies = topMovies.subList(0, 5);
            for (Movie m : topMovies
            ) {
                movieDTOS.add(MovieMapper.mapToMovieDTO(m));
            }
        }
        return movieDTOS;
    }

    @Override
    public boolean findByName(String name) {
        return movieRepository.existsByNameAndStatus(name, true);
    }

    @Override
    public boolean existById(Long id) {
        return movieRepository.existsById(id);
    }

    @Override
    public Movie findById(Long id) {
        return movieRepository.findById(id).orElse(null);
    }

    @Override
    public List<MovieDTO> findAllMovieSameSeries(Long movieId) {
        Movie movieS = movieRepository.findById(movieId).orElseThrow(() -> new ResourceNotFoundException("Not found"));
        if (movieS.getSerie() == null) {
            return new ArrayList<>();
        }
        List<Movie> movieList = movieRepository.findAllSeries(movieId, movieS.getSerie().getId());
        List<MovieDTO> movieDTOList = new ArrayList<>();
        for (Movie movie : movieList) {
            movieDTOList.add(MovieMapper.mapToMovieSameSeries(movie));
        }
        return movieDTOList;
    }

    @Override
    public List<MovieDTO> findAllMovieFollowedByUserId(Long userId) {
        List<MovieDTO> result = new ArrayList<>();
        List<Movie> follows = movieRepository.findAllMovieFollowedByUserId(userId);
        for (Movie f : follows) {
            result.add(MovieMapper.mapToMovieDTO(f));
        }
        return result;

    }
}
