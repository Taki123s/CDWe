package com.animeweb.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SocialUser {

    private Long id;


    private String accountName;


    private String password;


    private String fullName;


    private String address;


    private String email;


    private String phone;


    private String isDelete;


    private String isActive;

    private String image;

    private Date create_at;
    private Integer type;

    private String idOther;


    private String currentPassword;


    private Date timestamp;


    public SocialUser(String userName, String fullName, String password, String email, String avatarPicture, String externalId, Date createdAt, Integer userType) {
    }
}
