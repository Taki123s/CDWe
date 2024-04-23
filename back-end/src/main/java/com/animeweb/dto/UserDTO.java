package com.animeweb.dto;

import com.animeweb.entity.Role;
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
public class UserDTO {
    private int id;
    private Role role;
    private String userName;
    private String avatarPicture;
    private String password;
    private String email;
    private String fullName;
    private String phone;
    private int userType;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime deletedAt;
    private boolean status;
    private String externalId;
}
