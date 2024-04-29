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
public class ViewDTO {
    private int id;
    private User user;
    private Movie movie;
    private LocalDateTime watchAt;
}
