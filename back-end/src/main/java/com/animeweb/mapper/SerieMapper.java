package com.animeweb.mapper;

import com.animeweb.dto.SerieDTO;
import com.animeweb.entities.Serie;

public class SerieMapper {
    public static SerieDTO mapToSerieDto(Serie serie){
        return new SerieDTO(serie.getId(),serie.getDescriptions(),serie.getMovieSet(),serie.getCreateAt(),serie.getUpdateAt(),serie.getDeleteAt(),serie.getStatus());
    }
}
