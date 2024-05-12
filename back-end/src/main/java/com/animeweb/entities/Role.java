package com.animeweb.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
    List<Permission> permissions;
    @ManyToMany(mappedBy = "roles")
    @JsonBackReference
    private List<User> user_id = new ArrayList<>();
    public Role(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
