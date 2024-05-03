package com.animeweb.dto;

import com.animeweb.entities.Comment;
import com.animeweb.entities.Movie;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChapterDTO {
    private Long id;
    private Integer ordinal;
    private String link;
    private Boolean status;
    private Integer type;
    private Movie movie;
    private List<Comment> comments;

}
