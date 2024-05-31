package com.animeweb.repository;

import com.animeweb.dto.MovieDTO;
import com.animeweb.entities.Movie;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie,Long> {
    @Query("SELECT m FROM Movie m LEFT JOIN FETCH m.currentChapters WHERE m.id = :movieId and m.status = true")
    Movie findMovieWatching(@Param("movieId") Long movieId);
    @Query("select m from Movie m where m.name like %:term%" )
    List<Movie> findByNameContainingIgnoreCase(@Param("term")String term);
    @Query("SELECT m FROM Movie m JOIN View v ON m.id = v.movie.id WHERE DATE(v.watchAt) = CURDATE() AND m.status = true ORDER BY SIZE(m.views) DESC")
    List<Movie> findTopMoviesByDate();
    @Query("SELECT m FROM Movie m JOIN View v ON m.id = v.movie.id   WHERE YEAR(v.watchAt) = YEAR(CURDATE()) AND MONTH(v.watchAt) = MONTH(CURDATE()) AND m.status = true ORDER BY SIZE(m.views) DESC")
    List<Movie> findTopMoviesMonth();
    @Query("SELECT m FROM Movie m JOIN View v ON m.id = v.movie.id  WHERE YEAR(v.watchAt) = YEAR(CURDATE()) AND m.status = true ORDER BY SIZE(m.views) DESC")
    List<Movie> findTopMoviesYear();
    @Query("select m from Movie m  join Serie s on m.serie.id=s.id")
    List<Movie> findAllSeries(Long movieId);

    @Query("select m from Movie m  where m.status = true")
    List<Movie>findAll();
    @Query("select m from Movie m where m.name like :term% and m.status = true")
    List<Movie> findByNameContainingIgnoreCase(@Param("term")String term,Pageable pageable);
    @Query("SELECT m FROM Movie m JOIN m.genres g WHERE g.id = :idGenre AND m.status = true AND g.status = true")
    Page<Movie> findMoviesByGenresId(@Param("idGenre") Integer idGenre, Pageable pageable);
    @Query("SELECT count(m) FROM Movie m JOIN m.genres g WHERE g.id = :idGenre AND m.status = true AND g.status = true")
    Integer totalMoviesByGenresId(@Param("idGenre") Integer idGenre);
    @Query("SELECT m FROM Movie m WHERE m.id != :movieId AND m.serie.id = :serieId AND m.status = true")
    List<Movie> findAllSeries(@Param("movieId") Long movieId, @Param("serieId") Long serieId);
}

