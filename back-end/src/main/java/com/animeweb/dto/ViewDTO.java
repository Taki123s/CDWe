package com.animeweb.dto;

import com.animeweb.entity.Movie;
import com.animeweb.entity.User;
import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ViewDTO {
    private int id;
    private User user;
    private Movie movie;
    private LocalDateTime watchAt;
}
