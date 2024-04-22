package com.animeweb.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MovieRepository extends JpaRepository<movies, Long> {
    @Query("SELECT m FROM movies m")
    List<movies> findAllMovies();
    @Query("SELECT m FROM UserView uv JOIN movies m ON uv.movieId = m.id " +
            "WHERE DATE(uv.watchAt) = CURRENT_DATE AND m.status = 1 " +
            "GROUP BY m.id ORDER BY COUNT(uv.id) DESC")
    List<movies> findTopViewMoviesDay();

    @Query("SELECT m FROM UserView uv JOIN movies m ON uv.movieId = m.id " +
            "WHERE YEAR(uv.watchAt) = YEAR(CURRENT_DATE) AND MONTH(uv.watchAt) = MONTH(CURRENT_DATE) " +
            "AND m.status = 1 GROUP BY m.id ORDER BY COUNT(uv.id) DESC")
    List<movies> findTopViewMoviesMonth();

    @Query("SELECT m FROM UserView uv JOIN movies m ON uv.movieId = m.id " +
            "WHERE YEAR(uv.watchAt) = YEAR(CURRENT_DATE) AND m.status = 1 " +
            "GROUP BY m.id ORDER BY COUNT(uv.id) DESC")
    List<movies> findTopViewMoviesYear();

}
