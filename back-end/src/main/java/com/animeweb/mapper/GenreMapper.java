package com.animeweb.mapper;

import com.animeweb.dto.GenreDTO;
import com.animeweb.entities.Genre;

public class GenreMapper {
   public static GenreDTO mapToGenreDto(Genre genre){
       return new GenreDTO(genre.getId(),
               genre.getDescription(),
               genre.getStatus(),
               genre.getMovieList());
   }
   public static GenreDTO mapToTitleGenreDto(Genre genre){
       return new GenreDTO(genre.getId(),genre.getDescription());
   }
}
