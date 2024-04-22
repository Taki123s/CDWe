package com.animeweb.entity;

import jakarta.persistence.*;


import java.time.LocalDateTime;

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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public ServicePack getServicePackId() {
        return servicePackId;
    }

    public void setServicePackId(ServicePack servicePackId) {
        this.servicePackId = servicePackId;
    }

    public LocalDateTime getExpiredTime() {
        return expiredTime;
    }

    public void setExpiredTime(LocalDateTime expiredTime) {
        this.expiredTime = expiredTime;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public LocalDateTime getDeletedAt() {
        return deletedAt;
    }

    public void setDeletedAt(LocalDateTime deletedAt) {
        this.deletedAt = deletedAt;
    }

    @Override
    public String toString() {
        return "UserPacked{" +
                "id=" + id +
                ", userId=" + userId +
                ", servicePackId=" + servicePackId +
                ", expiredTime=" + expiredTime +
                ", createdAt=" + createdAt +
                ", status=" + status +
                ", deletedAt=" + deletedAt +
                '}';
    }
}
