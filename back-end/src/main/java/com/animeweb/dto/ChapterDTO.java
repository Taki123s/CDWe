package com.animeweb.dto;

import com.animeweb.entity.Comment;
import com.animeweb.entity.Movie;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChapterDTO {
    private int id;
    private int ordinal;
    private String link;
    private int status;
    private int type;
    private Movie movie;
    private Set<Comment> comments;

}
