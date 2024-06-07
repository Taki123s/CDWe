package com.animeweb.dto.movie;

import com.animeweb.entities.Movie;
import com.animeweb.entities.User;
import lombok.*;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RateDTO {
    private Long id ;
    private Double score;
    private Date createAt;
    private Date updateAt;
    private Date deleteAt;
    private User userId;
    private Movie movie;


}
