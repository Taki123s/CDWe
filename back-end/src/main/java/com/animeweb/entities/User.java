package com.animeweb.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @ManyToMany(cascade = CascadeType.ALL)
    private List<Role> roles = new ArrayList<>();
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
    private Integer userType;

    @Column(name = "create_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date createdAt;

    @Column(name = "update_at")
    private Date updatedAt;

    @Column(name = "delete_at")
    private Date deletedAt;

    @Column(name = "status", columnDefinition = "tinyint default 1")
    private Boolean status;

    @Column(name = "externalId")
    private String externalId;
    @OneToMany(mappedBy = "userId", cascade = CascadeType.ALL)
    private List<View> views;
    @OneToMany(mappedBy = "userId", cascade = CascadeType.ALL)
    private List<Rate> rates;
    @OneToMany(mappedBy = "userId", cascade = CascadeType.ALL)
    private List<Follow> follows;

    public User(Long id, String userName, String avatarPicture, String email, String fullName, String phone, Integer userType, Boolean status, String externalId) {
        this.id = id;
        this.userName = userName;
        this.avatarPicture = avatarPicture;
        this.email = email;
        this.fullName = fullName;
        this.phone = phone;
        this.userType = userType;
        this.status = status;
        this.externalId = externalId;
    }

    public User(String userName, String avatarPicture, String email, String fullName, String phone, Integer userType, String externalId) {
        this.userName = userName;
        this.avatarPicture = avatarPicture;
        this.email = email;
        this.fullName = fullName;
        this.phone = phone;
        this.userType = userType;
        this.externalId = externalId;
    }

    public User( String userName, String avatarPicture, String password, String email, String fullName, String phone, Integer userType, Date createdAt, Date updatedAt, Date deletedAt, Boolean status, String externalId, List<View> views, List<Rate> rates, List<Follow> follows) {

        this.userName = userName;
        this.avatarPicture = avatarPicture;
        this.password = password;
        this.email = email;
        this.fullName = fullName;
        this.phone = phone;
        this.userType = userType;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        this.status = status;
        this.externalId = externalId;
        this.views = views;
        this.rates = rates;
        this.follows = follows;
    }

    public List<Role> getRoleDetails() {
        return this.roles.stream()
                .map(role -> new Role(role.getId(), role.getName()))
                .collect(Collectors.toList());
    }


    public User(String accountName, String fullName, String password, String email, String image, String idOther, Date createAt, Integer type) {

    }
}
