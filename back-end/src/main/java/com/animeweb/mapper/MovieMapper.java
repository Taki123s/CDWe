package com.animeweb.mapper;

import com.animeweb.dto.MovieDTO;
import com.animeweb.entity.Movie;

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
                movie.getPrice(),
                movie.getGenres(),
                movie.getCurrentChapters(),
                movie.getSerie(),
                movie.getViews());
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
                movieDTO.getPrice(),
                movieDTO.getGenres(),
                movieDTO.getCurrentChapters(),
                movieDTO.getSerie(),
                movieDTO.getViews());

    }


}
