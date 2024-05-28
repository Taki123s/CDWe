package com.animeweb.service;

import com.animeweb.dto.GenreDTO;
import com.animeweb.dto.MovieDTO;
import com.animeweb.entities.Serie;

import java.util.List;

public interface GenreService {
    List<GenreDTO> getAllGenre();
    List<MovieDTO> getMoviesByGenre(Integer idGenre,Integer page,Integer size, String sortBy, Boolean ascending);
}
