package com.animeweb.dto;

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
public class GenreDTO {
    private int id;
    private String description;
    private int status;
    private Set<Movie> movieList;
}
