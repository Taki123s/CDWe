package com.animeweb.repository;

import com.animeweb.entities.Chapter;
import com.animeweb.entities.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChapterRepository  extends JpaRepository<Chapter,Long> {
}
