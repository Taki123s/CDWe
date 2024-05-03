package com.animeweb.entities;

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
    private Long id;
    @Column(name = "descriptions")
    private String descriptions;
    @OneToMany(mappedBy = "serie",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Movie> movieSet;

}
