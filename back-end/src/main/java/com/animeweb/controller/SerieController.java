package com.animeweb.controller;

import com.animeweb.dto.GenreDTO;
import com.animeweb.dto.SerieDTO;
import com.animeweb.service.SerieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/series")
public class SerieController {
    @Autowired
    SerieService serieService;
    @GetMapping
    public ResponseEntity<List<SerieDTO>> getMovie(){
        return ResponseEntity.ok(serieService.getAllSerie());
    }

}
