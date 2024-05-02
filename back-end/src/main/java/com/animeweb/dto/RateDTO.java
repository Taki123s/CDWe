package com.animeweb.dto;

import com.animeweb.entity.Movie;
import com.animeweb.entity.User;
import lombok.*;

import java.time.LocalDateTime;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RateDTO {
    private int id ;
    private int score;
    private LocalDateTime createAt;
    private LocalDateTime updateAt;
    private LocalDateTime deleteAt;
    private User userId;
    private Movie movie;

}
