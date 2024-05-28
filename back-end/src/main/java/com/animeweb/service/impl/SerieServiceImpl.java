package com.animeweb.service.impl;

import com.animeweb.dto.SerieDTO;
import com.animeweb.entities.Serie;
import com.animeweb.mapper.SerieMapper;
import com.animeweb.repository.SerieRepository;
import com.animeweb.service.SerieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SerieServiceImpl implements SerieService {
    @Autowired
    SerieRepository serieRepository;
    @Override
    public List<SerieDTO> getAllSerie() {
        List<Serie> serieList = serieRepository.findAll();
        List<SerieDTO> serieDTOList = new ArrayList<>();
        for(Serie serie:serieList){
            serieDTOList.add(SerieMapper.mapToSerieDto(serie));
        }
        return serieDTOList;
    }


}
