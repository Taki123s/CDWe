package com.animeweb.repository;

import com.animeweb.dto.MovieDTO;
import com.animeweb.entities.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie,Long> {
    @Query("SELECT m FROM Movie m LEFT JOIN FETCH m.currentChapters WHERE m.id = :movieId")
    Movie findMovieWatching(@Param("movieId") Long movieId);
    @Query("select m from Movie m where m.name like %:term%" )
    List<Movie> findByNameContainingIgnoreCase(@Param("term")String term);

    @Query("SELECT m FROM Movie m JOIN m.genres g WHERE g.id = :idGenre AND m.status = true AND g.status = true")
    Page<Movie> findMoviesByGenresId(@Param("idGenre") Integer idGenre, Pageable pageable);
    @Query("SELECT count(m) FROM Movie m JOIN m.genres g WHERE g.id = :idGenre AND m.status = true AND g.status = true")
    Integer totalMoviesByGenresId(@Param("idGenre") Integer idGenre);
    @Query("select m from Movie m  join Serie s on m.serie.id=s.id")
    List<Movie> findAllSeries(Long movieId);
}

