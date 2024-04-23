package com.animeweb.dto;

import com.animeweb.entity.Movie;
import com.animeweb.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
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
