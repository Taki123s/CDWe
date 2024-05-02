package com.animeweb.dto;

import com.animeweb.entities.Movie;
import com.animeweb.entities.User;
import java.time.LocalDateTime;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class FollowDTO {
    private int id ;
    private LocalDateTime followAt;
    private int status;
    private User userId;
    private Movie movie;
}
