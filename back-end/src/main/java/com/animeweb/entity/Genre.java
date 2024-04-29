package com.animeweb.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name = "genres")
public class Genre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "description")
    private String description;
    @Column(name = "status",columnDefinition = "int default 1")
    private int status;
    @ManyToMany(mappedBy = "genres")
    private Set<Movie> movieList;

    }
