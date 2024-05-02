package com.animeweb.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "chapters")
public class Chapter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "ordinal")
    private int ordinal;

    @Column(name = "link")
    private String link;

    @Column(name = "status",columnDefinition = "int default 1")
    private int status;

    @Column(name = "type")
    private int type;

    @ManyToOne
    @JoinColumn(name ="movie_id",nullable = false,referencedColumnName = "id")
    @JsonBackReference
    private Movie movie;
    @OneToMany(mappedBy = "chapter",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Comment> comments;
}