package com.animeweb.dto;

import com.animeweb.entity.Movie;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SerieDTO {
    private int id;
    private String descriptions;
    private Set<Movie> movieSet;
}
