package com.animeweb.entities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Type;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


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
    private LocalDateTime createAt;

    @Column(name = "update_at")
    private LocalDateTime updateAt;

    @Column(name = "delete_at")
    private LocalDateTime deleteAt;

    @Column(name = "status",columnDefinition = "int default 1")
    private Integer status;

    @Column(name = "producer")
    private String producer;

    @Column(name = "avatar_movie")
    private String avatarMovie;

    @Column(name = "series_descriptions")
    private String seriesDescriptions;

    @Column(name = "price")
    private Double price;

    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinTable(name="movie_genre",joinColumns = {@JoinColumn(name="movie_id")},inverseJoinColumns = {@JoinColumn(name = "genre_id")},
            uniqueConstraints = {@UniqueConstraint(columnNames = {"movie_id", "genre_id"})})
    @Builder.Default
    private List<Genre> genres=new ArrayList<>();

    @OneToMany(fetch = FetchType.EAGER,mappedBy = "movie",cascade = CascadeType.ALL)
    @Builder.Default
    private List<Chapter> currentChapters=new ArrayList<>();

    @ManyToOne
    @JoinColumn(name ="serie_id",referencedColumnName = "id")
    private Serie serie;

    @OneToMany(mappedBy = "movie",cascade = CascadeType.ALL)
    @Builder.Default
    private List<View> views=new ArrayList<>();

    @OneToMany(fetch = FetchType.EAGER,mappedBy = "movie",cascade = CascadeType.ALL)
    @Builder.Default
    private List<Rate> rates=new ArrayList<>();

    @Builder.Default
    @OneToMany(fetch = FetchType.EAGER,mappedBy = "movie",cascade = CascadeType.ALL)
    private List<Follow> follows=new ArrayList<>();
}