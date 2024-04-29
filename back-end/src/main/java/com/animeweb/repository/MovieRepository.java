package com.animeweb.repository;


import com.animeweb.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
public interface MovieRepository extends JpaRepository<Movie,Long> {
    @Query("select m from Movie m where m.name like %?1%" )
    List<Movie> findByNameContainingIgnoreCase(String keyword);
}
