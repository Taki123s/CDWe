package com.animeweb.entities;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

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
    @ManyToOne
    @JoinColumn(name = "role_id", referencedColumnName = "id",columnDefinition = "bigint default 1")
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
    private Integer userType;

    @Column(name = "create_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date createdAt;

    @Column(name = "update_at")
    private Date updatedAt;

    @Column(name = "delete_at")
    private Date deletedAt;

    @Column(name = "status", columnDefinition = "tinyint default 1")
    private Boolean status;

    @Column(name="externalId")
    private String externalId;
    @OneToMany(mappedBy = "userId",cascade = CascadeType.ALL)
    private List<View> views;
    @OneToMany(mappedBy = "userId",cascade = CascadeType.ALL)
    private List<Rate> rates;
    @OneToMany(mappedBy = "userId",cascade = CascadeType.ALL)
    private List<Follow> follows;

    public User(String accountName, String fullName, String password, String email, String image, String idOther, Date createAt, Integer type) {
    }
}
