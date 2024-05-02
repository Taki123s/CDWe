package com.animeweb.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @ManyToOne
    @JoinColumn(name = "role_id", referencedColumnName = "id",columnDefinition = "int default 1")
    @JsonBackReference
    private Role role;

    @Column(name = "user_name", length = 500)
    private String userName;

    @Column(name = "avatar_picture", length = 500)
    private String avatarPicture;

    @Column(name = "password", length = 500)
    private String password;

    @Column(name = "email", length = 500)
    private String email;

    @Column(name = "full_name", length = 500)
    private String fullName;

    @Column(name = "phone", length = 45)
    private String phone;

    @Column(name = "user_type", columnDefinition = "int default 1")
    private int userType;

    @Column(name = "create_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime createdAt;

    @Column(name = "update_at")
    private LocalDateTime updatedAt;

    @Column(name = "delete_at")
    private LocalDateTime deletedAt;

    @Column(name = "status", columnDefinition = "tinyint default 1")
    private boolean status;

    @Column(name="externalId")
    private String externalId;


}
