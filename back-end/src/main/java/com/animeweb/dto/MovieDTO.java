package com.animeweb.dto;

import com.animeweb.entity.*;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MovieDTO {
    private Long id;
    private String name;
    private int totalChapters;
    private String vietnameseDescriptions;
    private String englishDescriptions;
    private LocalDateTime createAt;
    private LocalDateTime updateAt;
    private LocalDateTime deleteAt;
    private int status;
    private String producer;
    private String avatarMovie;
    private String seriesDescriptions;
    private double price;
    private List<Genre> genres;
    private List<Chapter> currentChapters;
    private Serie serie;
    private List<View> views;
    private List<Rate> rates;
    private List<Follow> follows;
}
