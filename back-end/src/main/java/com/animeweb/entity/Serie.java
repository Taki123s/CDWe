package com.animeweb.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "series")
public class Serie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "descriptions")
    private String descriptions;
    @OneToMany(mappedBy = "serie",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Movie> movieSet;

}
