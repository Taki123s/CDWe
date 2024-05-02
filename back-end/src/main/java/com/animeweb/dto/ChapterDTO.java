package com.animeweb.dto;

import com.animeweb.entity.Comment;
import com.animeweb.entity.Movie;
import jakarta.persistence.*;
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
