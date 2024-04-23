package com.animeweb.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "follows")
public class Follow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id ;
    @Column(name = "follow_at",columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime followAt;
    @Column(name="status",columnDefinition = "int default 1")
    private int status;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="user_id")
    private User userId;
    @ManyToOne
    @JoinColumn(name ="movie_id",nullable = false,referencedColumnName = "id")
    private Movie movie;
}
