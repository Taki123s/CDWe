package com.animeweb.dto;

import com.animeweb.entities.Movie;
import com.animeweb.entities.User;

import lombok.*;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class FollowDTO {
    private Long id ;
    private Date followAt;
    private Boolean status;
    private User userId;
    private Movie movie;
}
