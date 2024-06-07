package com.animeweb.controller.admin;

import com.animeweb.dto.movie.MovieAdmin;
import com.animeweb.entities.Serie;
import com.animeweb.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/movies")
public class AdminMovieController {
    @Autowired
    MovieService movieService;
    @GetMapping()
    public ResponseEntity<List<MovieAdmin>> getListMovie(){
        return new ResponseEntity<>(movieService.getAdminMovie(), HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteMovie(@PathVariable Long id){
        System.out.println(id);
        return null;
    }
}
