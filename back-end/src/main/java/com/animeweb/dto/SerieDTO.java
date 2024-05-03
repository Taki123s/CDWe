package com.animeweb.dto;

import com.animeweb.entities.Movie;
import lombok.*;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SerieDTO {
    private Long id;
    private String descriptions;
    private List<Movie> movieSet;
    private Date createAt;
    private Date updateAt;
    private Date deleteAt;
    private Boolean status;
}
