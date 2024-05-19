package com.animeweb.mapper;

import com.animeweb.dto.MovieDTO;
import com.animeweb.entities.*;

public class MovieMapper {
    public static MovieDTO mapToMovieDTO(Movie movie){
        return new MovieDTO(
                movie.getId(),
                movie.getName(),
                movie.getTotalChapters(),
                movie.getVietnameseDescriptions(),
                movie.getEnglishDescriptions(),
                movie.getCreateAt(),
                movie.getUpdateAt(),
                movie.getDeleteAt(),
                movie.getStatus(),
                movie.getProducer(),
                movie.getAvatarMovie(),
                movie.getSeriesDescriptions(),
                movie.getGenres(),
                movie.getCurrentChapters(),
                movie.getSerie(),
                movie.getViews(),
                movie.getRates(),
                movie.getFollows());
    }


    public static MovieDTO mapToMovieWatching(Movie movie){
        return new MovieDTO(movie.getId(),movie.getName(),movie.getTotalChapters(),movie.getCurrentChapters());
    }
    public static MovieDTO mapToMovieTopview(Movie movie){
        return new MovieDTO(movie.getId(),movie.getName(),movie.getTotalChapters(),movie.getCurrentChapters());
    }
    public static Movie mapToMovie(MovieDTO movieDTO){
        return new Movie(
                movieDTO.getId(),
                movieDTO.getName(),
                movieDTO.getTotalChapters(),
                movieDTO.getVietnameseDescriptions(),
                movieDTO.getEnglishDescriptions(),
                movieDTO.getCreateAt(),
                movieDTO.getUpdateAt(),
                movieDTO.getDeleteAt(),
                movieDTO.getStatus(),
                movieDTO.getProducer(),
                movieDTO.getAvatarMovie(),
                movieDTO.getSeriesDescriptions(),
                movieDTO.getGenres(),
                movieDTO.getCurrentChapters(),
                movieDTO.getSerie(),
                movieDTO.getViews(),
                movieDTO.getRates(),
                movieDTO.getFollows());

    }



}
