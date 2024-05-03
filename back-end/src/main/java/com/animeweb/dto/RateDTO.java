package com.animeweb.dto;

import com.animeweb.entities.Movie;
import com.animeweb.entities.User;
import lombok.*;

import java.time.LocalDateTime;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RateDTO {
    private Long id ;
    private Integer score;
    private LocalDateTime createAt;
    private LocalDateTime updateAt;
    private LocalDateTime deleteAt;
    private User userId;
    private Movie movie;

}
