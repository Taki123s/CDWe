package com.animeweb.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Setter
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
    private LocalDateTime createAt;

    @Column(name = "update_at")
    private LocalDateTime updateAt;

    @Column(name = "delete_at")
    private LocalDateTime deleteAt;

    @Column(name = "status",columnDefinition = "int default 1")
    private int status;

    @Column(name = "producer")
    private String producer;

    @Column(name = "avatar_movie")
    private String avatarMovie;

    @Column(name = "series_descriptions")
    private String seriesDescriptions;

    @Column(name = "price")
    private Double price;
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JsonIgnore
    @JoinTable(name="movie_genre",joinColumns = {@JoinColumn(name="movie_id")},inverseJoinColumns = {@JoinColumn(name = "genre_id")})
    private Set<Genre> genres;
    @OneToMany(mappedBy = "movie",cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Chapter> currentChapters;
    @ManyToOne
    @JoinColumn(name ="serie_id",referencedColumnName = "id")
    private Serie serie;
    @OneToMany(mappedBy = "movie",cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<View> views;
    @OneToMany(mappedBy = "movie",cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Rate> rates;
    @OneToMany(mappedBy = "movie",cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Follow> follows;
}
