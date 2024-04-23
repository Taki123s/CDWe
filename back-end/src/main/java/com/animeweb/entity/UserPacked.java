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
@Table(name = "user_packed")
public class UserPacked {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User userId;

    @OneToOne
    @JoinColumn(name = "service_pack_id", referencedColumnName = "id")
    private ServicePack servicePackId;

    @Column(name = "expired_time")
    private LocalDateTime expiredTime;

    @Column(name = "create_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime createdAt;

    @Column(name = "status",columnDefinition = "int default 1")
    private boolean status;

    @Column(name = "delete_at")
    private LocalDateTime deletedAt;

}
