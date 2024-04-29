package com.animeweb.controller;

import com.animeweb.dto.MovieDTO;
import com.animeweb.entity.Movie;
import com.animeweb.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SearchController {
    @Autowired
    private MovieService movieService;

    @GetMapping("/search")
    public String search(Model model, @RequestParam("term") String keyword) {
        List<Movie> movieList=this.movieService.getAll();
        if(keyword!=null){
            movieList=this.movieService.searchMovie(keyword);
        }
        model.addAttribute("list_movie",movieList);
        return "/";
    }

}
