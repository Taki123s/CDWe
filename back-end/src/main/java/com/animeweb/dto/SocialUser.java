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
@AllArgsConstructor
public class SocialUser {

    private Role role;
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

    public SocialUser(String userName, String avatarPicture, String password, String email, String fullName, String phone, Integer userType, Date createdAt, Date updatedAt, Date deletedAt, Boolean status, String externalId, List<View> views, List<Rate> rates, List<Follow> follows) {
    }
}
