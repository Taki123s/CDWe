package com.animeweb.repository;


import com.animeweb.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
@Repository
public interface MovieRepository extends JpaRepository<Movie,Long> {
    @Query("SELECT m FROM Movie m LEFT JOIN FETCH m.currentChapters WHERE m.id = :movieId")
    Movie findMovieWatching(@Param("movieId") Long movieId);
    @Query("select m from Movie m where m.name like %:term%" )
    List<MovieDTO> findByNameContainingIgnoreCase(@Param("term")String term);
}
