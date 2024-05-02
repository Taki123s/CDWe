package com.animeweb.dto;

import com.animeweb.entity.Movie;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GenreDTO {
    private int id;
    private String description;
    private int status;
    private List<Movie> movieList;
}
