package com.animeweb.repository;

import com.animeweb.dto.MovieDTO;
import com.animeweb.entities.Movie;
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
    @Query("select m from Movie m  join Serie s on m.serie.id=s.id")
    List<Movie> findAllSeries(Long movieId);

}
