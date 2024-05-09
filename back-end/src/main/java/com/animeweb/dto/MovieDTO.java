package com.animeweb.dto;

import com.animeweb.entities.*;

import lombok.*;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MovieDTO {
    private Long id;
    private String name;
    private Integer totalChapters;
    private String vietnameseDescriptions;
    private String englishDescriptions;
    private Date createAt;
    private Date updateAt;
    private Date deleteAt;
    private Boolean status;
    private String producer;
    private String avatarMovie;
    private String seriesDescriptions;
    private List<Genre> genres;
    private List<Chapter> currentChapters;
    private Serie serie;
    private List<View> views;
    private List<Rate> rates;
    private List<Follow> follows;


    public MovieDTO(Long id, String name, Integer totalChapters, List<Chapter> currentChapters) {
        this.id = id;
        this.name = name;
        this.totalChapters = totalChapters;
        this.currentChapters = currentChapters;
    }
}
