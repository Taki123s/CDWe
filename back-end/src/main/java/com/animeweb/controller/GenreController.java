package com.animeweb.controller;

import com.animeweb.dto.GenreDTO;
import com.animeweb.service.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/genres")
public class GenreController {
    @Autowired
    GenreService genreService;
    @GetMapping
    public ResponseEntity<List<GenreDTO>> getMovie(){

        return ResponseEntity.ok(genreService.getAllGenre());
    }
}
