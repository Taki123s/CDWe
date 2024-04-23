package com.animeweb.dto;

import com.animeweb.entity.Chapter;
import com.animeweb.entity.Genre;
import com.animeweb.entity.Serie;
import com.animeweb.entity.View;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Setter
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
    private Set<Genre> genres;
    private Set<Chapter> currentChapters;
    private Serie serie;
    private Set<View> views;
}
