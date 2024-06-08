package com.animeweb.repository;

import com.animeweb.dto.genre.GenreDTO;
import com.animeweb.entities.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GenreRepository extends JpaRepository<Genre,Long> {
    List<Genre> findAllByStatus(boolean status);
    @Query(value = "SELECT g FROM Genre g WHERE g.id IN (:genList) and g.status=true")
    List<Genre> findGenresByIds(List<Long> genList);
}
