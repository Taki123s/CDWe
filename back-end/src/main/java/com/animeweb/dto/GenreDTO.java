package com.animeweb.dto;

import com.animeweb.entities.Movie;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GenreDTO {
    private Long id;
    private String description;
    private Boolean status;
    private List<Movie> movieList;
}
