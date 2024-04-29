package com.animeweb.dto;

import com.animeweb.entity.Movie;
import com.animeweb.entity.User;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class FollowDTO {
    private int id ;
    private LocalDateTime followAt;
    private int status;
    private User userId;
    private Movie movie;
}
