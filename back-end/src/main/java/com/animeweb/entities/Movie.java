package com.animeweb.entities;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;
import java.util.Map;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "total_chapters")
    private Integer totalChapters;

    @Column(name = "vietnamese_descriptions")
    private String vietnameseDescriptions;

    @Column(name = "english_descriptions")
    private String englishDescriptions;

    @Column(name = "create_at",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date createAt;

    @Column(name = "update_at")
    private Date updateAt;

    @Column(name = "delete_at")
    private Date deleteAt;

    @Column(name = "status",columnDefinition = "tinyint default 1")
    private Boolean status;

    @Column(name = "producer")
    private String producer;

    @Column(name = "avatar_movie")
    private String avatarMovie;

    @Column(name = "series_descriptions")
    private String seriesDescriptions;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name="movie_genre",joinColumns = {@JoinColumn(name="movie_id")},inverseJoinColumns = {@JoinColumn(name = "genre_id")},
            uniqueConstraints = {@UniqueConstraint(columnNames = {"movie_id", "genre_id"})})
 //   @JsonManagedReference
    private List<Genre> genres;
    @OneToMany(mappedBy = "movie",cascade = CascadeType.ALL)
    private List<Chapter> currentChapters;
    @ManyToOne()
    @JoinColumn(name ="serie_id",referencedColumnName = "id")
 //   @JsonBackReference
    private Serie serie;
    @OneToMany(mappedBy = "movie",cascade = CascadeType.ALL)
    private List<View> views;
    @OneToMany(mappedBy = "movie",cascade = CascadeType.ALL)
    private List<Rate> rates;
    @OneToMany(mappedBy = "movie",cascade = CascadeType.ALL)
    private List<Follow> follows;



}
