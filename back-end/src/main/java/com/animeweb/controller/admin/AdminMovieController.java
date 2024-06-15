package com.animeweb.controller.admin;

import com.animeweb.dto.movie.MovieAdd;
import com.animeweb.dto.movie.MovieAdmin;
import com.animeweb.entities.Genre;
import com.animeweb.entities.Movie;
import com.animeweb.entities.Serie;
import com.animeweb.mapper.MovieMapper;
import com.animeweb.service.GenreService;
import com.animeweb.service.MovieService;
import com.animeweb.service.SerieService;
import com.animeweb.service.ViewService;
import com.animeweb.service.impl.CloudinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/admin/movies")
public class AdminMovieController {
    @Autowired
    MovieService movieService;
    @Autowired
    CloudinaryService uploadService;
    @Autowired
    SerieService serieService;
    @Autowired
    GenreService genreService;
    @Autowired
    ViewService viewService;
    @GetMapping()
    public ResponseEntity<List<MovieAdmin>> getListMovie(){
        return new ResponseEntity<>(movieService.getAdminMovie(), HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<String> addMovie(@ModelAttribute MovieAdd movieAdd) throws IOException {
        boolean existName = movieService.findByName(movieAdd.getName());
        if(existName) return new ResponseEntity<>("Tên phim đã tồn tại",HttpStatus.NOT_FOUND);
        Movie movie = MovieMapper.mapToMovie(movieAdd);
        Serie serie = serieService.findById(movieAdd.getSeries());
        List<Genre> genres = genreService.findGenresByList(movieAdd.getGenres());
        movie.setSerie(serie);
        movie.setGenres(genres);
        movieService.save(movie);
        String avatar = uploadService.uploadMovieAvt(movieAdd.getFile(),movie.getId());
        movie.setAvatarMovie(avatar);
        movieService.save(movie);
        return new ResponseEntity<>("Thêm thành công",HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteMovie(@PathVariable Long id) throws Exception {
        Movie movie = movieService.findById(id);
        if(movie == null) return new ResponseEntity<>("Phim không tồn tại! Vui lòng thử lại!",HttpStatus.NOT_FOUND);
        movie.setStatus(false);
        movieService.save(movie);
        uploadService.deleteFolderMovie(uploadService.getMovieFolderById(movie.getId()));
        return new ResponseEntity<>("Xóa thành công!",HttpStatus.CREATED);
    }
    @GetMapping("/viewed/month/top5")
    public  ResponseEntity<List<Movie>>getTop5MovieViewedByMonth(){
        return  ResponseEntity.ok(viewService.GetTop5MovieViewedByMonth());
    }
    @GetMapping("/viewed/year/top5")
    public  ResponseEntity<List<Movie>>getTop5MovieViewedByYear(){
        return  ResponseEntity.ok(viewService.GetTop5MovieViewedByYear());
    }
}
