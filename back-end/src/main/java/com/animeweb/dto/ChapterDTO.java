package com.animeweb.dto;

import com.animeweb.entities.Comment;
import com.animeweb.entities.Movie;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChapterDTO {
    private int id;
    private int ordinal;
    private String link;
    private int status;
    private int type;
    private Movie movie;
    private List<Comment> comments;

}
