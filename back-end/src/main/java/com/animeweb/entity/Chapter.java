package com.animeweb.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
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
    private Movie movie;
    @OneToMany(mappedBy = "chapter",cascade = CascadeType.ALL)
    private Set<Comment> comments;
}