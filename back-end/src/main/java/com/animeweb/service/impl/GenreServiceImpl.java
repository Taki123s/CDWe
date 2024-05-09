package com.animeweb.service.impl;

import com.animeweb.dto.GenreDTO;
import com.animeweb.entities.Genre;
import com.animeweb.mapper.GenreMapper;
import com.animeweb.repository.GenreRepository;
import com.animeweb.service.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class GenreServiceImpl implements GenreService {
    @Autowired
    private GenreRepository genreRepository;
    @Override
    public List<GenreDTO> getAllGenre() {
        List<Genre> genreList = genreRepository.findAll();
        List<GenreDTO> genreDTOList = new ArrayList<>();
        for(Genre genre : genreList){
            genreDTOList.add(GenreMapper.mapToTitleGenreDto(genre));
        }
        return genreDTOList;
    }
}
