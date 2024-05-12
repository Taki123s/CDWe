package com.animeweb.dto;

import com.animeweb.entities.Follow;
import com.animeweb.entities.Rate;
import com.animeweb.entities.Role;
import com.animeweb.entities.View;
import lombok.*;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
public class UserDTO {
    private Long id;
    private List<Role> role;
    private String userName;
    private String avatarPicture;
    private String password;
    private String email;
    private String fullName;
    private String phone;
    private Integer userType;
    private Date createdAt;
    private Date updatedAt;
    private Date deletedAt;
    private Boolean status;
    private String externalId;
    private List<View> views;
    private List<Rate> rates;
    private List<Follow> follows;

    public UserDTO(Long id, List<Role> role, String userName, String avatarPicture, String password, String email, String fullName, String phone, Integer userType, Boolean status, String externalId) {
        this.id = id;
        this.role = role;
        this.userName = userName;
        this.avatarPicture = avatarPicture;
        this.password = password;
        this.email = email;
        this.fullName = fullName;
        this.phone = phone;
        this.userType = userType;
        this.status = status;
        this.externalId = externalId;
    }

    public UserDTO(String userName, String avatarPicture, String password, String email, String fullName, String phone, Integer userType) {//register data
        this.userName = userName;
        this.avatarPicture = avatarPicture;
        this.password = password;
        this.email = email;
        this.fullName = fullName;
        this.phone = phone;
        this.userType = userType;
    }
}
