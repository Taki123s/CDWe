package com.animeweb.dto;

import com.animeweb.entities.Movie;
import com.animeweb.entities.User;
import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ViewDTO {
    private Long id;
    private User user;
    private Movie movie;
    private LocalDateTime watchAt;
}
