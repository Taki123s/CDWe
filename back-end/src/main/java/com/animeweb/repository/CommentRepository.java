package com.animeweb.repository;

import com.animeweb.entities.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CommentRepository  extends JpaRepository<Comment,Long> {
    @Query("SELECT c FROM Comment c Join  c.movieId m WHERE  m.id = :movieId and c.chapter.id is null ")
    List<Comment> findCommentsByMovieId(@Param("movieId") Long movieId);
}

