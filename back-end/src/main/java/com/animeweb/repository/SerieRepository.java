package com.animeweb.repository;

import com.animeweb.entities.Genre;
import com.animeweb.entities.Serie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SerieRepository extends JpaRepository<Serie,Long> {
    @Query("select s from Serie s where s.id = :id and s.status = true")
    Optional<Serie> findSerieById(Long id);
    @Query("select s from Serie s where s.status = true")
    List<Serie> getAllSerie();
    @Query("select count(s) > 0 from Serie s where s.descriptions=:descriptions and s.status = true")
    boolean findByDescriptions(String descriptions);
}
