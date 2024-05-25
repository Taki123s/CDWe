package com.animeweb.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id ;
    @Column(name= "name")
    private String name;
    @Column(name="description")
    private String description;
    @ManyToMany
    List<Permission> permissions = new ArrayList<>();
    public Role(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
